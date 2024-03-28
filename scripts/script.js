document.addEventListener('DOMContentLoaded', (event) => {
    alert(" A página foi totalmente carregada e js foi implantado")
    event.preventDefault();

    loadUserDate()
})

function loadUserDate(event){
    event.preventDefaul();

    const userDate = {
        name: document.getElementById('name').value,
        email:document.getElementById('email').value,
        age: document.getElementById('age').value

    }
}
