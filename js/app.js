const sbutton = document.querySelector("button")
const cores = document.querySelectorAll(".genius a")

let ordem = []
let ordemClick = []
let start = false
let inicio = 1
let fim = 2

sbutton.onclick = () => {
    start = true
    play()
}

function play() {

    start = false
    const i = Math.floor(Math.random() * 4)

    ordem.push(i)

    setTimeout(() => {
        cores[i].classList.add("selected")
    }, 750)

    setTimeout(() => {
        cores[i].classList.remove("selected")
    }, 1000)

    setTimeout(() => {
        if (inicio < fim) {
            inicio++
            play()
        }
        else {start = true}
    }, 1250)

}

function checkClick() {
    for (let i = 0; i < ordemClick.length; i++) {
        if (ordem[i] != ordemClick[i]) {
            setValues ()
            alert("GAME OVER")
            break
        }
        else if (ordem.length == ordemClick.length) {
            inicio = 1
            fim++
            play()
        }
    }
}

cores[0].onclick = () => {
    clickEvent(0)
}
cores[1].onclick = () => {
    clickEvent(1)
}
cores[2].onclick = () => {
    clickEvent(2)
}
cores[3].onclick = () => {
    clickEvent(3)
}

function clickEvent(n) {
    if (start) {
        ordemClick.push(n)
        checkClick()
    }
}

function setValues() {
    ordem = []
    ordemClick = []
    inicio = 1
    fim = 2
    start = false
}