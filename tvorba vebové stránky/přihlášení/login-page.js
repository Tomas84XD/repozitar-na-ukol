const database = [
    "ruda.csgoprofik2",
    "tomas.ten nejlepsi1",
    "martin.top gap1",
    "franta.tf2master",
]
 
function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
 
    console.log("jjjj");
 
    const logindata = username + "." + password
 
    console.log(logindata);
   
    for (let i = 0; i < database.length; i++) {
    if(logindata == database[i]) {
       
        document.getElementById("logOutput").innerHTML = "Úspěšně přihlášeno"
 
        setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/druha%20slozka/index.html"
 
        }, "1000");
    }
    

}
 
        
}


 