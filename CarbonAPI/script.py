from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
mongo_client = MongoClient("mongodb://your_mongodb_uri")

# Define endpoints and their functionality here

if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
mongo_client = MongoClient("mongodb://your_mongodb_uri")

# Define endpoints and their functionality here

if __name__ == '__main__':
    app.run(debug=True)


# Assuming you have a 'transactions' collection in your MongoDB database
transactions_collection = mongo_client.your_db.transactions

@app.route('/transaction', methods=['POST'])
def create_transaction():
    data = request.get_json()
    # Validate and process the transaction request (buy or sell)
    # Example: data = {"user_id": "123", "action": "buy", "amount_kg": 10}
    
    # Insert the transaction into MongoDB
    transaction_id = transactions_collection.insert_one(data).inserted_id
    
    # Put the transaction in the blockchain (Integration code needed)
    
    return jsonify({"message": f"Transaction {transaction_id} created successfully"})

    from web3 import Web3

# Connect to an Ethereum node
w3 = Web3(Web3.HTTPProvider('https://your_ethereum_node_url'))

# Define a function to send a transaction to Ethereum
def send_transaction_to_ethereum(transaction_data):
    # Build the transaction
    transaction = {
        'from': 'your_wallet_address',
        'to': 'smart_contract_address',
        'value': w3.toWei(transaction_data['amount_kg'], 'ether'),
        'gas': 2000000,  # Adjust gas accordingly
        'gasPrice': w3.toWei('50', 'gwei'),  # Adjust gas price accordingly
    }
    
    # Sign and send the transaction
    signed_transaction = w3.eth.account.signTransaction(transaction, 'your_private_key')
    tx_hash = w3.eth.sendRawTransaction(signed_transaction.rawTransaction)
    
    return tx_hash

# Inside the create_transaction function, after inserting into MongoDB
# tx_hash = send_transaction_to_ethereum(data)
# Store tx_hash in your MongoDB for reference


# Import necessary libraries

# ...

# Create a new transaction
@app.route('/transaction', methods=['POST'])
def create_transaction():
    data = request.get_json()
    # Validate and process the transaction request (buy or sell)
    # Example: data = {"user_id": "123", "action": "buy", "amount_kg": 10}
    
    # Insert the transaction into MongoDB
    transaction_id = transactions_collection.insert_one(data).inserted_id
    
    # Put the transaction in the blockchain (Integration code needed)
    
    return jsonify({"message": f"Transaction {transaction_id} created successfully"})

# Read all transactions
@app.route('/transactions', methods=['GET'])
def get_all_transactions():
    transactions = list(transactions_collection.find({}, {"_id": 0}))
    return jsonify(transactions)

# Read a specific transaction by ID
@app.route('/transaction/<transaction_id>', methods=['GET'])
def get_transaction(transaction_id):
    transaction = transactions_collection.find_one({"_id": ObjectId(transaction_id)}, {"_id": 0})
    if transaction:
        return jsonify(transaction)
    else:
        return jsonify({"message": "Transaction not found"}), 404

# Update a specific transaction by ID
@app.route('/transaction/<transaction_id>', methods=['PUT'])
def update_transaction(transaction_id):
    data = request.get_json()
    # Validate and process the updated transaction data
    
    result = transactions_collection.update_one(
        {"_id": ObjectId(transaction_id)},
        {"$set": data}
    )
    
    if result.modified_count > 0:
        return jsonify({"message": "Transaction updated successfully"})
    else:
        return jsonify({"message": "Transaction not found"}), 404

# Delete a specific transaction by ID
@app.route('/transaction/<transaction_id>', methods=['DELETE'])
def delete_transaction(transaction_id):
    result = transactions_collection.delete_one({"_id": ObjectId(transaction_id)})
    
    if result.deleted_count > 0:
        return jsonify({"message": "Transaction deleted successfully"})
    else:
        return jsonify({"message": "Transaction not found"}), 404

