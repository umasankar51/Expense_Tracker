document.getElementById("sign-up-form").addEventListener("submit", function(event) {

    let name = document.getElementById("name").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    if(name === "") {
        alert("Name is required");
        event.preventDefault();
        return;
    }
    if(username === "") {
        alert("Username is required");
        event.preventDefault();
        return;
    }

    if(!email.includes("@")) {
        alert("Enter a valid email");
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        event.preventDefault();
        return;
    }
    alert(name,)
    //alert(username+" is validate");


//  // Send data to backend
//     const userData = {
//         name: name,
//         email: email,
//         password: password
//     };

//     try {
//         const response = await fetch("http://localhost:8080/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(userData)
//         });

//         const result = await response.text();
//         alert(result);

//     } catch (error) {
//         console.error(error);
//         alert("Error connecting to server");
//     }
});