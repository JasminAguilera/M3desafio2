// Selecciona el botón y el párrafo para mostrar el resultado
const botonIngresar = document.getElementById('ingresar');
const resultado = document.getElementById('resultado');

// Agrega un evento de clic al botón
botonIngresar.addEventListener('click', function() {
    // Obtiene los valores de los select
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;

    // Combina los dígitos seleccionados
    const password = digit1 + digit2 + digit3;

    // Verifica el password
    if (password === '911') {
        resultado.textContent = "Password 1 correcto.";
    } else if (password === '714') {
        resultado.textContent = "Password 2 es correcto.";
    } else {
        resultado.textContent = "Password incorrecto.";
    }
});
