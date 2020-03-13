const modal = (identifier) => {
    let modalBtn = document.querySelector(`[data-modal-target='${identifier}']`)
    let modalBox = document.querySelector(`[data-modal='${identifier}']`)
    let modalClose = document.querySelector(`[data-modal-close='${identifier}']`)

    modalBtn.onclick = () => {
        modalBox.style.display = "block";
        console.log("btn")
    }

    modalClose.onclick = () => {
        modalBox.style.display = "none"
        console.log("close")
    }

    window.onclick = event => {
        if (event.target == modalBox) {
            modalBox.style.display = "none"
            console.log("out")
        }
    }
}

modal('modal')