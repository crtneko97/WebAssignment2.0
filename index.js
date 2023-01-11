const form = document.querySelector("#form");


const p = document.getElementById("sentTxt");
const submitBtn = document.getElementById("submitButton");


const removeForm = () => {
    form.remove();
    p.innerHTML = "Sent! <br> We will message u shortly";
    
    setTimeout(() =>{
        location.reload();
    },3000);
}



