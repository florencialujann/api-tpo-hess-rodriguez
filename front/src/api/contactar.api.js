const postContact = async (mail_name, mail_phone, mail_email, mail_message) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name": mail_name,
      "telefono": mail_phone,
      "email": mail_email,
      "mensaje": mail_message
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'cors',//se añade cors
    };
    
    let response = await fetch("http://localhost:8080/api/contactos", requestOptions);
    let jsonData = await response.json();
    return jsonData;

}
export default postContact;