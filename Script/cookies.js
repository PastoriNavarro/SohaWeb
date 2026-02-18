function compruebaAceptaCookies(){
    if(localStorage.aceptaCookies == 'true'){
        cookieBanner.style.display = 'none';
    }
}

function aceptarCookies(){
    localStorage.aceptaCookies = 'true';
    cookieBanner.style.display = 'none';

}

$(document).ready(function () {
    compruebaAceptaCookies();
});
