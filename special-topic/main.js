let bg1 = document.getElementById('bg1');
let lightrays = document.getElementById('lightrays');
let midground2 = document.getElementById('midground2');
let midground1 = document.getElementById('midground1');
let foreground2 = document.getElementById('foreground2');
let foreground1 = document.getElementById('foreground1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bg1.style.marginTop = value * 0.5 + 'px';
    lightrays.style.left = value * -1 + 'px';
    midground2.style.marginTop = value * 0.4 + 'px';
    midground1.style.marginTop = value * 0.2 + 'px';
    foreground2.style.marginTop = value * 0.05 + 'px';
    foreground1.style.marginTop = value * 0.005 + 'px';
})