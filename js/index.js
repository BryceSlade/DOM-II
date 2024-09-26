const links = document.querySelector('nav');
const headerPic = document.querySelector('.intro img');
const contentDivs = document.querySelector('.content-section .text-content')
const headerTitle = document.querySelector('.logo-heading')
const images = document.querySelector('.content-section img')
const copyEvent = document.querySelector('body')

links.addEventListener('mouseover', function(event) {
    event.target.style.color = 'pink';
    setTimeout(function() {
        event.target.style.color = '';
    }, 300);
}, false);

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.1, scale), 4);
    headerPic.style.transform = `scale(${scale})`; 
}
  
  let scale = 1;
  headerPic.onwheel = zoom;

contentDivs.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'pink';
    setTimeout(function() {
        event.target.style.backgroundColor = '';
    }, 2000);
}, false);

headerTitle.addEventListener('dblclick', function(event) {
    event.target.style.fontSize = '10em';
    event.target.style.color = 'orange';
    setTimeout(function() {
        event.target.style.fontSize = '';
        event.target.style.color = '';
    }, 10000);
});

function escKey(event) {
    if (event.key === 'Escape') {
        images.classList.add('off');
    }
    setTimeout(function() {
        images.classList.remove('off');
    }, 5000);
}
document.addEventListener('keydown', escKey);

copyEvent.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});