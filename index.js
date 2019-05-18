var axios = require('axios');

function send_sms(senderOption,recieverOption){
    let url = '';
    let user = senderOption.user_name;
    let apikey = senderOption.api_key;
    let senderid = senderOption.sender_id;
    let phoneNo = recieverOption.phone_no;
    let text    = recieverOption.text;

    url +=`user=${user}&apikey=${apikey}&mobile=${phoneNo}&message=${text}&senderid=${senderid}&type=txt`
    
    url = 'http://smshorizon.co.in/api/sendsms.php' + '?' + encodeURI(url);
    axios.get(url)
        .then(response => {
            console.log(response);
        });
}
module.exports = send_sms;