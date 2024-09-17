const button = document.querySelector("button");
const alert = document.getElementById("error-message");

//Comment space
const list = document.getElementById("comment-list");

//Associate class name to given tag
function createElementWithClass(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

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

        createComment(firstName, lastName, message);

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

//Function for a tag to append multiple children
function appendChildren(parent, children){
    children.forEach(child => parent.appendChild(child));
}

function createComment(firstName, lastName, message){

    let firstDiv = createElementWithClass("div", "flex space-x-4 text-sm text-gray-500");
    let secondDiv = createElementWithClass("div", "flex-1 py-10 border-t border-gray-200");
    let thirdDiv = createElementWithClass("div", "prose prose-sm mt-4 max-w-none text-gray-500");
    
    const title = createElementWithClass("h3", "font-medium text-gray-900");
    title.textContent = firstName.value + " " + lastName.value;

    const paragraph = document.createElement("p");
    paragraph.textContent = message.value;

    appendChildren(thirdDiv, [paragraph]);
    appendChildren(secondDiv, [title, thirdDiv]);
    appendChildren(firstDiv, [secondDiv]);
    appendChildren(list, [firstDiv]);
}