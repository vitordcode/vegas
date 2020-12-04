// ANCROA SUAVE 
const menuItems = document.querySelectorAll('.section-header a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 0;

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}


//CONTATO
const button = document.querySelector('.button');
const submitNew = document.querySelector('.submit');

function toggleClass() {
    this.classList.toggle('active');
}

function addClass() {
    this.classList.add('finished');
}

button.addEventListener('', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);

const myForm = document.getElementById('myForm')

myForm.addEventListener('submit', async function(e) {
    e.preventDefault()
    button.classList.toggle('active')
    const data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        city: document.getElementById('city').value,
        number: document.getElementById('number').value,
    }

    

    await fetch('/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    
    setTimeout(() => {
        myForm.reset() 
    }, 3000);

    setTimeout(() => {
        button.classList.remove('finished')
 
    }, 10000);
})


//NEWS_LETTER
const btn = document.querySelector('.btn');
const submit = document.querySelector('.submit');

function toggleClass() {
    this.classList.toggle('active');
}

function addClass() {
    this.classList.add('finished');
}

btn.addEventListener('transitionend', toggleClass);
btn.addEventListener('transitionend', addClass);


const newsLetter = document.getElementById('input-right')

newsLetter.addEventListener('submit', async function(e) {
    e.preventDefault()
    btn.classList.toggle('active')
    const data = {
        number: document.getElementById('whatsapp').value,
    }

    

    await fetch('/newsLetter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    
    setTimeout(() => {
        newsLetter.reset() 
    }, 3000);

    setTimeout(() => {
        btn.classList.remove('finished') 
    }, 10000);
})

//PROMOCAO
const btnModal = document.querySelector('.btnModal');
const submitModal = document.querySelector('.submit');

function toggleClass() {
    this.classList.toggle('active');
}

function addClass() {
    this.classList.add('finished');
}

btnModal.addEventListener('transitionend', toggleClass);
btnModal.addEventListener('transitionend', addClass);


const modalForm = document.getElementById('modalForm')
console.log(modalForm)
modalForm.addEventListener('submit', async function(e) {
    e.preventDefault()
    btnModal.classList.toggle('active')
    const data = {
        name: document.getElementById('nameModal').value,
        email: document.getElementById('emailModal').value,
        city: document.getElementById('cityModal').value,
        number: document.getElementById('numberModal').value,
    }

    await fetch('/promocao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    setTimeout(() => {
        modalForm.reset() 
    }, 3000);

    setTimeout(() => {
        btnModal.classList.remove('finished')
 
    }, 10000);
})

//MASK INPUT NUMBER
const phoneMask = event => {
    const e = event || window.event;
    const code = e.KeyCode;
    if (code === 8) return;

    var input = e.target;
    var value = (input && input.value) || null
    if (!value) return
    
    value = value.replace(/\D/g, "");

    const ddd = value.substring(0, 2);
    const nine = value.substring(2, 3);
    const prefix = value.substring(3, 7);
    const suffix = value.substring(7, 11);

    const parts = [];
    if (ddd) parts.push("(" + ddd + ")");
    if (nine) parts.push(" " + nine);
    if (prefix) parts.push("" + prefix)
    if (suffix) parts.push("-" + suffix);
    e.target.value = parts.join("");
};


const btnPromo = document.getElementById('btnPromocao')
const bg_modal = document.getElementById('bg-modal')
const modal = document.querySelector('#bg-modal .modal')
const close = document.getElementById('closeModal')

btnPromo.addEventListener('click', (e) => {
    e.preventDefault()
    bg_modal.classList.add('openModal')
})

close.addEventListener('click', function() {
    bg_modal.classList.remove('openModal')
})
