let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strenght");

eyeIcon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeIcon.src = "eye-open.png";
    }else{
        password.type = "password";
        eyeIcon.src = "eye-close.png"
    }
}

password.addEventListener('input', ()=> {
    if(password.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    
    if(password.value.length < 4){
        str.innerHTML = "weak";
        password.style.borderColor = "#ff5025";
        msg.style.color = "#ff5025";
    }else if(password.value.length >= 4 && password.value.length < 8){
        str.innerHTML = "medium";
        password.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }else if(password.value.length >= 8){
        str.innerHTML = "strong";
        password.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});