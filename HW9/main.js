
const tabs = document.getElementsByClassName('tabs');
const cont = document.getElementsByClassName('cont')
const button = document.getElementsByClassName('tabs-title')
const tabContent = document.getElementsByClassName('cont')
button[0].classList.add('active');
tabContent[0].style.display = 'block';

function tab(event,name) {
        for (let i = 0; i < button.length; i++) {
            tabContent[i].style.display = 'none';
            button[i].classList.remove('active');
        }
        document.getElementById(name).style.display = 'block';
        event.currentTarget.classList.add('active');
}
