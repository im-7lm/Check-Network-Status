let title = document.querySelector('.title')
let ul = document.querySelector('ul')
let reload = document.querySelector('.reload')

window.onload = () => {
    if (window.navigator.onLine) {
        OnLine();
    } else {
        OffLine();
    }
}

window.addEventListener('online', () => {
    OnLine()
})
window.addEventListener('offline', () => {
    OffLine()
})

reload.onclick = () => {
    window.location.reload()
}

function OnLine() {
    title.innerHTML = 'Online'
    title.style.color = 'green'
    ul.classList.add('hide')
    reload.classList.add('hide')
}

function OffLine() {
    title.innerHTML = 'OffLine'
    title.style.color = '#666'
    ul.classList.remove('hide')
    reload.classList.remove('hide')
}