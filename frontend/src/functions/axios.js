const axios = require('axios');


function Axios(){
    axios.get('http://localhost:3001')
    .then(response => console.log(response))
    .catch(response => console.log(response))
}

export default Axios;