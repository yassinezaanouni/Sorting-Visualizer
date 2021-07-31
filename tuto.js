const closeModalButton = document.getElementById("close-button")
const overlay = document.getElementById("overlay")

closeModalButton.addEventListener('click', () => {
    const modal = document.getElementById('tuto')
    closeModal(modal)
})

overlay.addEventListener('click', () => {
    const modal = document.getElementById('tuto')
    closeModal(modal)
})
function closeModal(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}
