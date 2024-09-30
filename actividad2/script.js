
const botonCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');


botonCalcular.addEventListener('click', function () {

    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;


    const totalStickers = sticker1 + sticker2 + sticker3;


    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        resultado.textContent = "Llevas demasiados stickers.";
    }
});
