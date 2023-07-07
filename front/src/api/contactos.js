const getContacts = async (token,setContacts) => {
    if (!token) {
        console.log("no hay token")
        return;
      }


    var myHeaders = new Headers();
    myHeaders.append("jwt",token);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode:'cors'
    };
    try {
        let response = await fetch("http://localhost:8080/api/contactos", requestOptions);

        if (response.status === 200) {
            let jsonData = await response.json();
            setContacts(jsonData);
            console.log(jsonData);
        } else {
            console.log("Error:", response.status);
        }
        } catch (error) {
        console.log("Error:", error);
        }
    
    
    
    
}

export default getContacts;