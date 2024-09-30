
const imagen = document.getElementById('miImagen');


let tieneBorde = false;


imagen.addEventListener('click', function () {

    if (tieneBorde) {

        imagen.style.border = 'none';
        tieneBorde = false;
    } else {

        imagen.style.border = '2px solid red';
        tieneBorde = true;
    }
});
