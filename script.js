function clicar(){
    document.querySelector('p').innerText = "Olá"

    setTimeout(function(){
        document.querySelector('p').innerText = ""

    }, 2000)

}

;