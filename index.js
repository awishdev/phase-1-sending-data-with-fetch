// Add your code here
function submitData(userName, userEmail){
    const userData = {
        name: `${userName}`,
        email: `${userEmail}`,
      };
      
      const jsonPOST = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(userData),
      };
      
      return fetch("http://localhost:3000/users", jsonPOST)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const p = document.createElement("p");
            const t = document.createTextNode(`${object.id}`)
            p.appendChild(t);
            
            document.body.appendChild(p);
        })
        .catch(function (error) {

          const p = document.createElement("p");
          const t = document.createTextNode(`${error.message}`)
          p.appendChild(t);
          document.body.appendChild(p);

          console.log(error.message);
        });

}