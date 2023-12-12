function ano(){

    vlak  = ""
    
    const inputNumber =parseInt(document.getElementById("ne").value)
    
    for (let i=1; i <= inputNumber; i++){
    
     
    
        vlak += i + ","
    
    }
    document.getElementById("orangutan").innerHTML = vlak;
    
}