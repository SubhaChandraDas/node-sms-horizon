const fetch = require('node-fetch');

module.exports = function(config){

    const { user_name, api_key, sender_id } = config

   // closure to access the config
    return function(phone_no, text){
    
        let url =`user=${user_name}&apikey=${api_key}&mobile=${phone_no}&message=${text}&senderid=${sender_id}&type=txt`
        
        url = 'http://smshorizon.co.in/api/sendsms.php' + '?' + encodeURI(url);

        return fetch(url)
        .then(res => res.json())
        .then(body => body)
        .catch(err => err)

    }
};