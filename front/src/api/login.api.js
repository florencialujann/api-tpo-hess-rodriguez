const login = async (email, password) => { //Entran por parametro email y pass
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    //Se envia por parametro el mail y password a la request.
    var raw = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var requestOptions = {
      mode: 'cors',//se añade cors
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    let response = await fetch ("http://localhost:8080/api/usuarios/login",requestOptions);
    let jsonData = await response.json();
    
    return jsonData; //Se devuelve el token.
    
}
export default login;
