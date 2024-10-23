
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    getCurrentLocation();
}
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(link);
    } else {
        alert("Geolocalização não é suportada pelo seu navegador.");
    }
}

function link(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const mapLink = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`;
    const iframe = document.getElementById('map');
    iframe.src = mapLink;
}
