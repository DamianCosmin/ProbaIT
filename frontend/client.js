// HTML ELEMENTS
// Buttons
var loginButton = null;
var registerButton = null;
var profileButton = null;
var recipeButton = null;
var addRecipeButton = null;

// Group of buttons
var loginButtons = null;
var actionButtons = null;
var recipeButtons = null;

// Content Boxes
var loginBox = null;
var registerBox = null;
var profileBox = null;
var recipeBox = null;


var profileDetails = null;

// VARIABLES
var isLoginActive = false;
var isRegisterActive = false;
var isProfileActive = false;
var isAddRecipeActive = false;

var registered = false;
var logged = false;

var isOnRecipePage = false;
var recipeCounter = 0;

const backendUrl = "http://localhost:3000"

async function getUser(){
    var response = await fetch(backendUrl + "/user", {
        method: "GET"
    })
    var userData = await response.json();
    console.log(userData.registerFormData);
}

async function postUser(registerFormData){
    await fetch(backendUrl + "/user", {
        method: "POST",
        body: JSON.stringify({
          registerFormData
        }),
        headers: {
          "Content-type": "application/json"
        }
      })
}

function checkIfRegistered(){
    var rgd = sessionStorage.getItem("registered");
    if(rgd != null && rgd == "true"){
        registered = true;
    }
    else{
        registered = false;
    }
    console.log(registered);
}

function checkIfLoggedIn(){
    var lgd = sessionStorage.getItem("logged");
    if(lgd != null && lgd == "true"){
        logged = true;
    }
    else{
        logged = false;
    }
    console.log(logged);
}

function checkIfOnRecipesPage(){
    var currentURL = document.URL;
    if(currentURL.includes("recipes")){
        isOnRecipePage = true;
    }
    else{
        isOnRecipePage = false;
    }
    console.log(isOnRecipePage);
}

function updateButtons(){
    if(isOnRecipePage){
        recipeButtons[0].style.display = 'none';
        recipeButtons[1].style.display = 'block';
    }
    else{
        recipeButtons[0].style.display = 'block';
        recipeButtons[1].style.display = 'none';
    }
    // 0 = profile
    // 1 = recipes
}

window.onload=function(){
    loginButton = document.getElementById("button-login");
    registerButton = document.getElementById("button-register");
    profileButton = document.getElementById("button-profile");
    recipeButton = document.getElementById("button-recipes");
    addRecipeButton = document.getElementById("button-add-recipe");

    loginButtons = document.getElementsByClassName("hide-login");
    actionButtons = document.getElementsByClassName("show-login");
    recipeButtons = document.getElementsByClassName("on-recipes-page")

    loginBox = document.getElementById("login-box");
    registerBox = document.getElementById("register-box");
    profileBox = document.getElementById("profile-box")
    recipeBox = document.getElementById("recipe-box");

    profileDetails = document.getElementsByClassName("profile-details");
    
    
    checkIfRegistered();
    checkIfLoggedIn();
    checkIfOnRecipesPage();
    updateButtons();

    if(!logged){
        for(var i = 0; i < actionButtons.length; i++){
            actionButtons[i].style.display = 'none';
        }
    }
    else{
        for(var i = 0; i < loginButtons.length; i++){
            loginButtons[i].style.display = 'none';
        }

        fetch(backendUrl + "/user", {
            method: "GET"
        }).then(res => res.json()).then(userInfo => {
                profileDetails[0].innerHTML = "Name: " + userInfo.registerFormData.name;
                profileDetails[1].innerHTML = "Phone number: " + userInfo.registerFormData.phone;
                profileDetails[2].innerHTML = "E-mail: " + userInfo.registerFormData.email;
                profileDetails[3].innerHTML = "Recipes: " + recipeCounter;
        });
    }


    // LOGIN BOX DISPLAY
    loginButton.addEventListener('click', function() {
        console.log('Login button was clicked');
        isLoginActive = !isLoginActive;

        if(isLoginActive){
            if(isRegisterActive){
                registerBox.style.display = 'none';
                isRegisterActive = false;
            }
            loginBox.style.display = 'block';
        }
        else{
            loginBox.style.display = 'none';
        }
    });


    // REGISTER BOX DISPLAY
    registerButton.addEventListener('click', function() {
        console.log('Register button was pressed');
        isRegisterActive = !isRegisterActive;

        if(isRegisterActive){
            if(isLoginActive){
                loginBox.style.display = 'none';
                isLoginActive = false;
            }
            registerBox.style.display = 'block';
        }
        else{
            registerBox.style.display = 'none';
        }
    });


    // REGISTER FORM FUNCTIONALITY
    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener('submit', event => {
        event.preventDefault();
        
        if(!registered){
            var formData = new FormData(registerForm);
            var registerData = Object.fromEntries(formData);
            
            registered = true;
            sessionStorage.setItem("registered", "true");
            postUser(registerData);

            registerForm.reset();

            registerBox.style.display = 'none';
            isRegisterActive = false;
        }
        else{
            registerForm.reset();
            alert("You already registered");
        }
    });


    // LOGIN FORM FUNCTIONALITY
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        
        if(!logged && registered){
            var formData = new FormData(loginForm);
            var loginData = Object.fromEntries(formData);

            fetch(backendUrl + "/user", {
                method: "GET"
            }).then(res => res.json()).then(userInfo => {
                var userEmail = userInfo.registerFormData.email;
                var userPassword = userInfo.registerFormData.password;
                
                if(loginData.email == userEmail && loginData.password == userPassword){
                    console.log("Logged in successfully!");
                    
                    logged = true;
                    sessionStorage.setItem("logged", "true");
    
                    loginBox.style.display = 'none';
                    isLoginActive = false;
    
                    for(var i = 0; i < loginButtons.length; i++){
                        loginButtons[i].style.display = 'none';
                    }
                    for(var i = 0; i < actionButtons.length; i++){
                        actionButtons[i].style.display = 'block';
                    }
    
                    profileDetails[0].innerHTML = "Name: " + userInfo.registerFormData.name;
                    profileDetails[1].innerHTML = "Phone number: " + userInfo.registerFormData.phone;
                    profileDetails[2].innerHTML = "E-mail: " + userInfo.registerFormData.email;
                    profileDetails[3].innerHTML = "Recipes: " + recipeCounter;

                    updateButtons();
                }
                else{
                    alert("Wrong e-mail or password!");
                }
                loginForm.reset();
            });
        }
        else{
            loginForm.reset();
            if(!registered){
                alert("You are not registered!")
            }
        }
    });
    

    // PROFILE BOX DISPLAY
    profileButton.addEventListener('click', function() {
        console.log('Profile button was pressed');
        isProfileActive = !isProfileActive;

        if(isProfileActive){
            if(isAddRecipeActive){
                recipeBox.style.display = 'none';
                isAddRecipeActive = false;
            }
            profileBox.style.display = 'block';
        }
        else{
            profileBox.style.display = 'none';
        }
    });


    // RECIPE PAGE REDIRECT
    recipeButton.addEventListener('click', function() {
        console.log('Recipe button was clicked');
        window.location.href = 'recipes.html'
        updateButtons();
    });

    addRecipeButton.addEventListener('click', function() {
        console.log('Add Recipe button was pressed');
        isAddRecipeActive = !isAddRecipeActive;

        if(isAddRecipeActive){
            if(isProfileActive){
                profileBox.style.display = 'none';
                isProfileActive = false;
            }
            recipeBox.style.display = 'block';
        }
        else{
            recipeBox.style.display = 'none';
        }
    });
}


