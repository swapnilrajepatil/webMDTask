import axios from "axios";
//const axios = require('axios');

export default {
    async loginapi(data){
        let response = await axios({
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: data
          });
          return response;
           
           
    },
  
}
