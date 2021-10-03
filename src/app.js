// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
// const loginButton = document.querySelector("#login-form button")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginButton(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// loginForm.addEventListener("submit", handleLoginButton);

/////////////////////////////////////////////// Don't know yet, but hidden css feature does not work.///////////
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginButton);
} else {
    paintGreetings(savedUsername);
}

//     const value = loginInput.value;
//     if (username === "") {
//         alert("Please write your name");
//     } else if(username.length > 15) {
//         alert("We are sorry. The service is currently available in Korean language only. Please input your name in Korean")
//     }
// }

// loginButton.addEventListener("click", handleLoginButton);