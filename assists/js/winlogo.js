winlogo = document.querySelector('#winlogo')
appdiv = document.querySelector('.appdiv')

var iappdiv = false;
function openappdiv() {
    appdiv.style.height = 'var(--app-div-height)'
    appdiv.style.bottom = 'var(--taskbar-height)'
    iappdiv = true;
}
function closeappdiv() {
    appdiv.style.height = '0'
    appdiv.style.bottom = '0'
    appdiv.style.transition = '.1s ease-in-out'
    iappdiv = false;

}



winlogo.addEventListener('click', function() {
    iappdiv ? closeappdiv() : openappdiv();
})

