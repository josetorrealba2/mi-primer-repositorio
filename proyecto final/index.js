function mostrarInformacion(equipo) {
    // Redirigir a la página de información del equipo
    window.location.href = equipo + ".html";
}
        
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el botón dentro del elemento con la clase 'noticias'
    var noticias = document.getElementById('noticias');

    noticias.addEventListener('click', function () {
        // Muestra una alerta al hacer clic en el botón
        alert('AGUANTE MESSI');

        // Redirige a la página principal
        window.location.href = 'file:///C:/Users/torre/proyecto%20final/index.html#';
    });
});
