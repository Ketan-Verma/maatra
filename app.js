const toggleBtn =document.getElementsByClassName('toggle-button')[0]
const navLink =document.getElementsByClassName('list')[0]
toggleBtn.addEventListener('click',() => {
    navLink.classList.toggle('active')
});