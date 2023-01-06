document.getElementById("submit").addEventListener("click", validateForm);
function validateForm() {
    //gets the name
    let name = document.getElementById("Your name").value;
    //gets the email
    let email = document.getElementById("Your email").value;
    //gets the message
    let message = document.getElementById("Message").value;

    //checks if all fields have been filled before sending message.
    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
        alert("all fields must be filled");
    } else {
        sendMessage(name, email, message);
    }
}