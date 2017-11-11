import requests, json

# Example data from api
# {
#   "_id": "5a06671ca73e4942cdafe8ae",
#   "type": "Credit Card",
#   "nickname": "Loraine's Account",
#   "rewards": 33023,
#   "balance": 16987,
#   "customer_id": "5a06671ba73e4942cdafe8ad"
# }

api_key = "5bdc6c60efff9b831bb0bf967e8c9454"


# Get all accounts 
# /accounts
all_accounts = requests.get("http://api.reimaginebanking.com/accounts?type=Checking&key=" + api_key)
print(type(all_accounts.json()[0]))
print(all_accounts.json()[0])
print(all_accounts.json()[0]["nickname"])


# Get account by ID 
# /accounts/{_id}
id_acc = "5a06671ca73e4942cdafe8ae"
id_accounts = requests.get("http://api.reimaginebanking.com/accounts/" + id_acc + "?key=" + api_key)
print(id_accounts.text)


# Get accounts by customer id
# /customers/{_id}/accounts
cid_acc = "5a06671ba73e4942cdafe8ad"
cid_accounts = requests.get("http://api.reimaginebanking.com/customers/" + cid_acc + "/accounts?key=" + api_key)
print(cid_accounts.text)



############################ Loans ############################

# Get all loans that you have
# /accounts/{_id}/loans
id_acc_loans = "5a06671ca73e4942cdafe8ae"
acc_loans = requests.get("http://api.reimaginebanking.com/accounts/" + id_acc_loans + "/loans?key=" + api_key)
print(acc_loans.text)