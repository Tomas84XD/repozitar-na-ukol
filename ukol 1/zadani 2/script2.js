function looping(){

    let text = " "

    for (let i = 15; i <= 150; i++) {

        text += i+ ","

    }

    document.getElementById("ne").innerHTML = text
}