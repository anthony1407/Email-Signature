const buttonBarra = document.getElementById('buttonBarra')
const banner = document.getElementById('banner');
console.log(banner)
const detailsInformation = document.getElementById('detailsInformation')
buttonBarra.addEventListener('click', e => {
    detailsInformation.classList.toggle('active')
    banner.classList.toggle('active-banner')
})