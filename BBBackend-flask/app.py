from flask import Flask, render_template
import requests, json
import time
import os

app = Flask(__name__)

try:
	yelp = json.loads(open('yelp.apikey', 'r').read())
	yelp_id = yelp['client_id']
	yelp_secret = yelp['client_secret']
except:
	yelp_id = os.environ.get('yelp_client_id','')
	yelp_secret = os.environ.get('yelp_secret','')
	
access_token = ''
access_expire = 0

def getYelpToken():
	global access_token
	global access_expire
	data = {
		'grant_type': 'client_credentials',
		'client_id': yelp_id,
		'client_secret': yelp_secret
	}
	r = requests.post('https://api.yelp.com/oauth2/token', data=data).json()
	print(r['access_token'], time.time() + r['expires_in'])
	access_token = r['access_token']
	access_expire = time.time() + r['expires_in']

@app.route('/', methods=['GET'])
def index():
	return 'hi'

@app.route('/yelp/<zipcode>', methods=['GET'])
def callYelp(zipcode):
	global access_token
	global access_expire
	getYelpToken()
	headers = {
		'Authorization': 'Bearer ' + access_token
	}
	params = {
		'location': zipcode
	}
	r = requests.get('https://api.yelp.com/v3/businesses/search', params=params, headers=headers)
	print(r.json()['businesses'])
	return str(r.json()['businesses'])

if __name__ == "__main__":
	port = int(os.environ.get("PORT", 5000))
	app.run(debug=True, host='0.0.0.0', port=port)
