const body = document.querySelector('.body')

const open = document.querySelector('#menu-open')
const close = document.querySelector('#menu-close')

const navlist = document.querySelector('.nav-tag')

open.addEventListener('click', function(){
    navlist.classList.add('nav-mobile')
    open.style.display = "none"

    body.classList.add('no-overflow')
    window.scrollTo(0, 0);

    close.style.display = "block"
})

close.addEventListener('click', function(){
    navlist.classList.remove('nav-mobile')
    body.classList.remove('no-overflow')
    close.style.display = "none"

    navlist.style.animation = "fadeOut .15s linear;"

    body.style.overflow = "unset"
    window.scrollTo(0, 0);

    open.style.display = "block"
})