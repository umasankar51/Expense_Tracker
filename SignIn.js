document.getElementById("sign-in-form").addEventListener("submit", async function(event) {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validation
    if (username === "") {
        alert("Username is required");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert("Validation Successful");
    alert("Username: " + username + "\nPassword: " + password  );

    // Send data to backend
    const userData = {
        username: username, 
        password: password
    };

    try {
        const response = await fetch("http://localhost:8080/SignIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const result = await response.text();
        alert(result);
    } catch (error) {
        console.error(error);
        alert("Error connecting to server");
    }
});
