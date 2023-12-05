function submitData(name, email) {   
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }
    return fetch('http://localhost:3000/users', configurationObject)    
    
    .then(function (response) {
    return response.json()
    })
    
    .then(data => {
        const newID = data.id
        const idElement = document.createElement("p")
        idElement.textContent = `${newID}`
        document.body.appendChild(idElement)
    })
    
    .catch(error => {
    const errorMessage = error.message;
    const errorElement = document.createElement("p");
    errorElement.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(errorElement);
    })
}
    
    


