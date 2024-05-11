---
layout: post
title: Introducing OConsent — Open Consent Protocol
date: 2020-12-10 00:20:21
description: OConsent is a blockchain-based platform that enables transparent processing of personal data, empowering users and data controllers to manage consent and privacy.
tags: system-design privacy consent-management blockchain cryptography
categories: system-design platform cryptography blockchain
giscus_comments: true
featured: false
related_posts: true
toc:
  sidebar: left
---

In the current connected world — Websites, Mobile Apps, IoT Devices collect a large volume of users’ personally identifiable activity data. These collected data is used for varied purposes of analytics, marketing, personalisation of services, etc. Data is assimilated through site cookies, tracking device IDs, embedded JavaScripts, Pixels, etc. to name a few. Many of these tracking and usage of collected data happens behind the scene and is not apparent to an average user. Consequently, many Countries and Regions have formulated legislations (e.g. GDPR, EU) — that allow users to be able to control their personal data, be informed and consent to its processing in an comprehensible and user-friendly manner.

Over the last few months I have been working on designing — OConsent — that proposes a protocol and a platform based on Blockchain Technology that enables the transparent processing of personal data throughout its lifecycle from capture, lineage to redaction. The solution intends to help service multiple stakeholders from individual end-users to Data Controllers and Privacy Officers. It intends to offer a holistic and unambiguous view of how and when the data points are captured, accessed and processed. The framework also envisages how different access control policies might be created and enforced through a public blockchain including real time alerts for privacy data breach.

In the rest of the blog post, I will take you through the core concepts of OConsent, its working and sample snippets.

<br />

# OConsent Preview
<br />

{% include figure.liquid loading="eager" path="assets/img/blog/oconsent-hashing.png" class="img-fluid rounded z-depth-1" zoomable=true %}


Following are the key steps of the Open Consent creation -

1. **Agreement Seed Creation**:
   - A unique identifier (UUID v4) is generated, referred to as the "Agreement Seed."
   - The Data Controller signs this seed with their private key to initiate the creation of a consent agreement.

2. **JSON-LD Consent Agreement**:
   - This step involves the creation of a JSON-LD (JavaScript Object Notation for Linked Data) formatted consent agreement. 
   - Both the Data Subject (the user) and the Data Controller (the service provider) sign this agreement with their respective private keys. 
   - The agreement includes a hash (a cryptographic representation) of its content, ensuring integrity and non-repudiation.

3. **Consent Agreement Hash**:
   - This is essentially a confirmation step where the hash of the signed agreement is combined with a timestamp hash provided by a Time Stamping Authority, which also signs it with its private key.
   - This ensures the agreement is not only signed but also timestamped to establish exactly when the consent was recorded.

4. **JSON-LD Consent Proof**:
   - The signed and timestamped hash of the consent agreement is then placed into a JSON-LD structured proof.
   - This proof contains the agreement hash and the timestamp hash, ready for the next step.

5. **Embedding in Blockchain**:
   - The JSON-LD Consent Proof is ready to be embedded into a local blockchain system. 
   - Additionally, it's "fingerprinted" on a global blockchain, ensuring it can be verified independently anywhere in the world.

6. **Public Key Verification**:
   - The final step involves storing the public keys of both the Data Subject and the Data Controller on the platform. 
   - These keys can be used to verify the signatures on the consent agreement, ensuring that the stakeholders who signed the documents are indeed who they claim to be.

This process enhances the security and transparency of data consent agreements, leveraging blockchain's decentralized and immutable characteristics to protect user data and ensure compliance with data privacy laws.

<br />
---

## Illustrative Programs

### Python Program to Generate JSON-LD Consent Proof

The below program will generate a consent agreement, sign it with private keys from both the Data Controller and the Data Subject, and then timestamp it using a simulated Time Stamping Authority (NIST in this scenario).


```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding, rsa
from cryptography.hazmat.primitives.serialization import Encoding, PublicFormat
import json
import uuid
from datetime import datetime

class ConsentProofGenerator:
    def __init__(self):
        # Initialize keys for Data Controller, Data Subject, and Time Stamping Authority (Step 1)
        self.dc_private_key, self.dc_public_key = self.generate_keys()
        self.ds_private_key, self.ds_public_key = self.generate_keys()
        self.tsa_private_key, self.tsa_public_key = self.generate_keys()

    def generate_keys(self):
        """ Generate RSA public and private keys (Step 1) """
        private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048
        )
        public_key = private_key.public_key()
        return private_key, public_key

    def sign_data(self, private_key, data):
        """ Sign the data using the private key (Step 3) """
        signature = private_key.sign(
            data.encode(),
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        return signature.hex()

    def generate_hash(self, data):
        """ Generate SHA-256 hash of the data (Step 4) """
        digest = hashes.Hash(hashes.SHA256())
        digest.update(data.encode())
        return digest.finalize().hex()

    def generate_monetization_scope(self):
        """ Generate sample monetization scope based on assumed AWS S3 data storage (Monetization Scope) """
        s3_uri = self.generate_s3_uri("data-analytics", "datasets/ml-training-data.csv")
        return {
            "storage": "AWS S3",
            "data_usage": ["Data analysis", "Machine learning model training"],
            "s3_uri": s3_uri
        }

    def generate_s3_uri(self, bucket_name, file_path):
        """ Generate an S3 URI for the specified bucket and file path (Monetization Scope) """
        return f"s3://{bucket_name}/{file_path}"

    def create_consent_proof(self):
        """ Generate the JSON-LD Consent Proof including all cryptographic signatures and hashes (Step 5 and 6) """
        consent_agreement = json.dumps({
            "agreement_seed": str(uuid.uuid4()),  # Agreement Seed creation (Step 2)
            "data": "Example data content stored in AWS S3"
        }, indent=4)
        
        # Signatures by Data Controller and Data Subject (Step 3)
        dc_signature = self.sign_data(self.dc_private_key, consent_agreement)
        ds_signature = self.sign_data(self.ds_private_key, consent_agreement)
        
        # Hash and timestamp (Step 4 and 5)
        consent_agreement_hash = self.generate_hash(consent_agreement + dc_signature + ds_signature)
        timestamp = datetime.now().isoformat()
        timestamped_data = consent_agreement_hash + timestamp
        timestamp_hash = self.generate_hash(timestamped_data)
        signed_timestamp = self.sign_data(self.tsa_private_key, timestamped_data)

        return json.dumps({
            "@context": "https://w3id.org/oconsent/v1",
            "type": "OConsent - Open Consent Agreement",
            "agreement_hash_id": consent_agreement_hash,
            "agreement_version": "1.01",
            "linked_agreement_hash_id": uuid.uuid4().hex,
            "metadata": {
                "data_subject": {
                    "name": "Mr. XYZ",
                    "id": "7a2a83b1694940f38d6a2a8f50e4d979"
                },
                "data_controller": {
                    "name": "ABC LLC.",
                    "id": "478ecb5f2b674ad18976007d64c069de"
                },
                "agreement_date": timestamp,
                "is_transferable": False
            },
            "consent_scope": [
                {
                    "marketing": {
                        "data_attributes": ["datasetA:attr1", "datasetB:attr2"],
                        "expiry": "01/12/2020"
                    },
                    "analytics": {
                        "data_attributes": ["datasetB:attr2", "datasetZ:attr4"],
                        "expiry": "01/11/2020"
                    }
                }
            ],
            "monetization_enabled": True,
            "monetization_scope": self.generate_monetization_scope(),
            "signatures": {
                "data_controller": dc_signature,
                "data_subject": ds_signature,
                "time_stamping_authority": signed_timestamp
            },
            "timestamp_hash": timestamp_hash
        }, indent=4)

# Example of using the class
generator = ConsentProofGenerator()
json_ld_consent_proof = generator.create_consent_proof()
print(json_ld_consent_proof)

```
<br />

#### Key Components of the Program:
1. **Key Generation**: Simulates RSA key pairs for the Data Controller, Data Subject, and Time Stamping Authority.
2. **Signing Data**: Each party signs the agreement, simulating the cryptographic assurance of the data's integrity and origin.
3. **Hash Generation**: For both the consent data and the timestamped data, ensuring the immutability of records.
4. **JSON-LD Consent Proof**: This is the final output containing the hashes, signatures, and timestamp, ready to be embedded in a public blockchain.

<br />

### Sample JSON-LD OConsent Agreement

```json
{
    "@context": "https://w3id.org/oconsent/v1",
    "type": "OConsent - Open Consent Agreement",
    "agreement_hash_id": "b2c6209b6a8ed85b4ba4f838dde8a59d724d316c380dfbf62ed71a57ac78f6bc",
    "agreement_version": "1.01",
    "linked_agreement_hash_id": "7b3784a33886431787e075416d46c965",
    "metadata": {
        "data_subject": {
            "name": "Mr. XYZ",
            "id": "7a2a83b1694940f38d6a2a8f50e4d979"
        },
        "data_controller": {
            "name": "ABC LLC.",
            "id": "478ecb5f2b674ad18976007d64c069de"
        },
        "agreement_date": "2024-05-11T15:04:58.136144",
        "is_transferable": false
    },
    "consent_scope": [
        {
            "marketing": {
                "data_attributes": [
                    "datasetA:attr1",
                    "datasetB:attr2"
                ],
                "expiry": "01/12/2020"
            },
            "analytics": {
                "data_attributes": [
                    "datasetB:attr2",
                    "datasetZ:attr4"
                ],
                "expiry": "01/11/2020"
            }
        }
    ],
    "monetization_enabled": true,
    "monetization_scope": {
        "storage": "AWS S3",
        "data_usage": [
            "Data analysis",
            "Machine learning model training"
        ],
        "s3_uri": "s3://data-analytics/datasets/ml-training-data.csv"
    },
    "signatures": {
        "data_controller": "753527ed1f50f0bc5af3b3fa50e9659d096dc101c336dda830f6a3c01e95ab15047a7427ece03c4dcb1edaa662eda03ca6303a4fe2d5f6bdcaf351f6bcc44943ad435773dd9e910a62c79ca2cd3ff888850a534423c5094f80c0f749cd30c3f4c04d8750d5873ab2430d2ca20557bf2ef07f8e5b5021728355bc79c20cfc462645ad14c8a149b2fd820e95979711d3798eddc083d302d5e4cb3ff88f242b12ee34864004ac23bb53b3c5792c74f3236f47c6c7c9d547aff68afa8257bafcc4d07dc2d4a081fba10cd9a9c6a4330ae56e298bcd452d148fb2f19b1fe0c678601bcccbdd174aec4a1133c777742cfdd19ee2ad6094b3036d9ccaf39974bca34a2b",
        "data_subject": "5a40b16b2aa3348d23152b5145c0965ac121c8678c81afc32c6bbb2c0fa9a7f0a831ba8ca2cc2dad8cf9d83ebdfda483535eeb2ec6319d8be447e22dc486fdb124a337f9a86a6c787bbddc799cb84db4f685413e4c9046bce510c9caf57239d7ed1fc179e960f389dfdb43ce2df7261e61949244c9c4bf1c1d52a867cb56f8e06adb267922a020ce5e1e2b7ae112ed618cdbfe655e3f7f54ea673a695e8061fa9b4435eda0e60db75f6124f1b4ba3a309cc5690c5f377c7c98153b3deb1a3719390084eeebb26fbf3f321304e63f841c61bda938a3f4386ee59369f08135895660ae2079040fe909c53c3ba31e6b6e80ade7a1f2697db66f03a098272fc29d24",
        "time_stamping_authority": "41a2cf34861def4ea8444afaf6ff6adf1333ae4b2552a21d9d03f0a6e952a256a5ed14e86934e332683387dd19ef8cf225ce333c2a713cc6dae5ba26015b3fd9a4357e3ea9b7cb2238c5ef583ca0b787c01a094a4e9312521e5abf0f51d3008a5c5dedc306fbe5b134d8046dae8bfa95737a4f117a04064d557649820b9cbf0bc44217d3f0a889855ab8327e26e5a2ba02d5b6957298ee4779ae5b544e8adcf09669405e77092ec9e1124ec9f8e5d0e0b04f21df1f20802622da562e89d1c5c805045d637d528cbb2de020bd4c0f4c1d9cce32819c4fdfd2ae11fec04cbdd5876eb8c008f054c1706a3dd5bcaf5733e7713d80d52c8a1150f443266addaff0c6"
    },
    "timestamp_hash": "679db11c126e730175257e61fb40fddd91bbfdae0166fc6d41bd1011d709bf60"
}
```
<br />
---
<br />

## Public Blockchain embedding example

Embedding data into Bitcoin and Ethereum blockchains typically involves different approaches due to the differing nature of these platforms. For Bitcoin, data can be embedded using `OP_RETURN` in a transaction, which allows a small amount of data to be stored. For Ethereum, we can use a smart contract to store more extensive data.

#### Bitcoin Embedding Example

For Bitcoin, we would use an `OP_RETURN` transaction. 
Following is a simplified Python example using the `bit` library to embed the hash of the `json_ld_consent_proof`:

```python
from bit import Key

def embed_data_in_bitcoin(data, wif):
    key = Key(wif)  # Load your wallet from WIF
    tx_hash = key.send_op_return(data.encode('utf-8'))
    return tx_hash

# Example usage
wif = 'your_wallet_import_format_key_here'  # You need to replace this with your actual WIF
data = 'hash_of_json_ld_consent_proof'  # Replace with the actual hash of your JSON data
transaction_hash = embed_data_in_bitcoin(data, wif)
print(f"Transaction Hash: {transaction_hash}")
```

**Note**: The `'your_wallet_import_format_key_here'` is your actual wallet import format key. Also, the `bit` library must be installed (`pip install bit`). This program sends a real transaction and would require actual Bitcoin to execute.

<br />
<br />

### Ethereum Embedding Example

For Ethereum, a smart contract can be used to store strings. 
Following is an example using `web3.py` to interact with a smart contract:

```solidity
// Solidity Contract Example
pragma solidity ^0.8.0;

contract DataStorage {
    string public data;

    function storeData(string memory _data) public {
        data = _data;
    }

    function getData() public view returns (string memory) {
        return data;
    }
}
```

And the corresponding Python script to interact with this contract:

```python
from web3 import Web3

def store_data_in_ethereum(data, contract_address, account_address, private_key):
    web3 = Web3(Web3.HTTPProvider('https://your_ethereum_node_url'))  # Connect to an Ethereum node
    web3.eth.defaultAccount = account_address  # Set the default account

    # Load the contract
    abi = [{"inputs":[{"internalType":"string","name":"_data","type":"string"}],"name":"storeData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getData","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]
    contract = web3.eth.contract(address=contract_address, abi=abi)

    # Store data
    txn = contract.functions.storeData(data).buildTransaction({
        'chainId': 1,
        'gas': 2000000,
        'gasPrice': web3.toWei('10', 'gwei'),
        'nonce': web3.eth.getTransactionCount(web3.eth.defaultAccount),
    })

    # Sign and send the transaction
    signed_txn = web3.eth.account.sign_transaction(txn, private_key)
    tx_token = web3.eth.sendRawTransaction(signed_txn.rawTransaction)
    return web3.toHex(tx_token)

# Example usage
contract_address = 'your_contract_address_here'
account_address = 'your_account_address_here'
private_key = 'your_private_key_here'
data = 'hash_or_string_of_json_ld_consent_proof'
transaction_token = store_data_in_ethereum(data, contract_address, account_address, private_key)
print(f"Transaction Token: {transaction_token}")
```

**Note**: Placeholders like `'your_ethereum_node_url'`, `'your_contract_address_here'`, `'your_account_address_here'`, and `'your_private_key_here'` should be replaced with your actual values. Also, the `web3.py` library must be installed (`pip install web3`).

---

## Generating User's Data

Below describes at a high level how a user who is keen to share (and / or monetize) their data may install a Google Chrome browser extension, and allow anonymized tracking. The file data is anaonymized, and uploaded to AWS S3. The hash of the data is returned - uniquely identifying the dataset, alongwith the S3 URI.


**1. Manifest.json (Extension Configuration):**

```json
{
  "manifest_version": 3,
  "name": "Privacy-Aware Website Tracking",
  "description": "Tracks anonymized website behavior with user consent.",
  "version": "1.0.0",
  "permissions": [
    "activeTab",
    "webNavigation",
    "storage",
    "identity"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ]
}
```

**2. background.js (Service Worker):**

```javascript
// Handle user login (e.g., using Chrome Identity API)
chrome.identity.getAuthToken({ interactive: true }, function(token) {
  // ... store token securely ...
});

// Listen for web navigation events
chrome.webNavigation.onCompleted.addListener(details => {
  // Send a message to the content script to start tracking
  chrome.tabs.sendMessage(details.tabId, { action: "startTracking" });
});

// Receive anonymized data from content script
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "data") {
    // Sign data with user's private key (retrieved securely)
    const signedData = await signData(message.data);

    // Upload signed data to S3 
    const { hash, s3Uri } = await uploadToS3(signedData);

    // Send response back to content script
    sendResponse({ hash, s3Uri }); 
  }
});
```
**3. content.js (Content Script):**

```javascript
let trackingData = [];
let isTracking = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "startTracking") {
    isTracking = true;
    startTracking();
  }
});

function startTracking() {
  // ... Capture anonymized website interaction data ...

  // Periodically send data to background script
  setInterval(() => {
    if (isTracking && trackingData.length > 0) {
      chrome.runtime.sendMessage({ action: "data", data: trackingData }, response => {
        // Handle response from background script (e.g., display hash and S3 URI)
      });
      trackingData = []; // Clear data after sending
    }
  }, 5000); // Adjust interval as needed
}
```

<br />

--


## Time-leased sharing of the User's Data

Time-leased data sharing empowers users with greater control over their personal information while enabling organizations to derive valuable insights. This innovative model introduces a concept where users explicitly grant access to their anonymized data for a predetermined duration.

Time-leased data sharing leverages blockchain technology and smart contracts to create a transparent, secure, and tamper-proof framework for data exchange.  It allows users to define the terms of data usage, including the specific data points shared, the intended purpose, and the duration of access. By doing so, users retain ownership and control over their data, ensuring that it's not exploited beyond their consent.


Below is a sample approach that leverages smart contracts to enforce the temporal control.

<br />

**Smart Contract Structure and Logic**

The core components of a smart contract for this purpose would typically include:

* **Data Hash Storage:** A variable (e.g., `bytes32 dataHash`) to securely store the hash of the anonymized data file. This hash serves as a unique identifier for the data without revealing its content.
* **Expiration Timestamp:** A variable (e.g., `uint256 expirationTime`) to store the Unix timestamp representing the date and time when the data sharing agreement expires.
* **Data Validity Function:** A function (e.g., `isDataValid()`) that compares the current block timestamp (accessible within the smart contract) with the stored `expirationTime`. It returns `true` if the data is still valid (current time is before expiration) and `false` if it has expired.
* **Optional Revocation Mechanism:** Additional functions or events can be included to explicitly revoke access to the data before the expiration time, either by the data owner or through some other agreed-upon condition.

<br />

**Interaction with S3 and the Chrome Extension**

1. **Data Upload and Hashing:** The Chrome extension anonymizes the user's data, calculates its hash (e.g., SHA-256), and uploads the data to the S3 bucket.

2. **Smart Contract Deployment:**
   - The extension sends a transaction to the blockchain to deploy the smart contract.
   - The transaction includes the data hash and the chosen expiration timestamp as arguments to the contract's constructor.

3. **Data Access:**
   - When someone (e.g., a data analyst or a third-party application) wants to access the data from S3, they first interact with the smart contract.
   - They provide the data hash and call the `isDataValid()` function.
   - The smart contract returns `true` if the data is still valid, allowing the user to proceed and download it from S3.
   - If the smart contract returns `false`, the data is considered expired, and access is denied.

<br />

**Code Example (Solidity):**

```solidity
pragma solidity ^0.8.0;

contract DataLease {
    // ... (same as previous example) ...

    event DataExpired(bytes32 dataHash);

    function revokeAccess() public {
        require(msg.sender == owner, "Only the owner can revoke access");
        expirationTime = block.timestamp; 
        emit DataExpired(dataHash);
    }
}
```

## Looking forward ..

In conclusion, OConsent represents a significant step towards a more transparent and user-centric approach to data sharing. By leveraging blockchain technology and focusing on user empowerment, it addresses key challenges in consent management and privacy protection.  While still evolving, OConsent demonstrates the potential of decentralized solutions to reshape the data landscape. The protocol's future development and adoption will be crucial in determining its broader impact on promoting a more equitable and transparent data economy.


OConsent now has a dedicated home at https://oconsent.io.
The Original Paper is available at https://arxiv.org/abs/2201.01326

> If the idea of OConsent excites you — please join us to spread the word on twitter/theoconsent or contribute towards its development on github/oconsent by initiating a pull request or write to us at hi@oconsent.io
