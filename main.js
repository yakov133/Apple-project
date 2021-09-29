let arr = JSON.parse(localStorage.getItem( "arr"));
if(arr){
    document.getElementById("cartItems").innerText=4+arr.length;  
}

const input = document.getElementById("stayUpdated");
input.addEventListener("input",()=>{
    input.value = input.value.toUpperCase();    
})
function send(){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.match(regexEmail)){
        alert("your email was updated");
        input.value = "";
    }else{
        let p = document.getElementById("wrongEmail");
        p.style="color:blue;font-size:46px;background-color:red;"
        p.innerText = "Email Was Error";
        setTimeout(()=>{
            p.innerText =""
        },3000)
    }
    
}


