const register = async (newregister_name,newregister_lastname,newregister_email,newregister_password) => {
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": newregister_name,
  "lastname": newregister_lastname,
  "email": newregister_email,
  "password": newregister_password
});

var requestOptions = {
  method: 'POST',
  mode: 'cors',//se añade cors
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

let response = await fetch("http://localhost:8080/api/usuarios", requestOptions);
let jsonData = await response.json();
return jsonData;


}

export default register;