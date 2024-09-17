const button = document.querySelector("button");
const alert = document.getElementById("error-message");

button.addEventListener("click", function(event) {
    event.preventDefault();
    onClick();
});

function onClick(){
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const message = document.getElementById("message");

    if (isEmpty(firstName.value) || isEmpty(lastName.value) || isEmpty(message.value)){
        alertMessage();
    } else {
        hideAlertMessage();

        firstName.value = "";
        lastName.value = "";
        message.value = "";
    }
}

function alertMessage(){
    alert.style.display = "inline";
}

function hideAlertMessage(){
    alert.style.display = "none";
}

function isEmpty(object){
    if (object === ""){
        return true;
    } else {
        return false;
    }
}