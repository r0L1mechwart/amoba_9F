let jatekos = "x"

function kattintas(gomb){
    gomb.innerText = jatekos
    gomb.disabled = true
    if(jatekos == "x"){
        jatekos = "o"
    }else{
        jatekos = "x"
    }
}
