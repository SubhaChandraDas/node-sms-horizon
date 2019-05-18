# sms-horizon-node

Send SMS using sms-horizon in node Environment.

## Getting Started

First you have to register in https://www.smshorizon.in/, then you will have a User Name, Api key and sender Id.

### Prerequisites

To install node-sms-horizon , you need node.js and npm.

### Installing

Once you have that set-up, just run

```
npm install --save node-sms-horizon
```
 in your project directory.


## Usage

node-sms-horizon send_sms(senderOption, recieverOption)
needs two parameters 'senderOption' and 'recieverOption'.
```
structure of those parameters:


senderOption= {
user_name : // Use your User name from sms-horizon. 
api_key : // You will get this api key after registration. 
sender_id : //you have to create a sender Id in you sms-horizon portal. 
};

recieverOption= {
phone_no: // reciever phone number;
text: // sms content
}

then just pass those parameters in as send_sms(senderOption, recieverOption);
```

## Authors

* **Subha Chandra Das** - *Initial work* - [SubhaChandraDas](https://github.com/SubhaChandraDas)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

