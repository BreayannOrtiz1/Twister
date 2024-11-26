const options = [
    "Mano izquierda en rojo",
    "Mano derecha en azul",
    "Pie izquierdo en amarillo",
    "Pie derecho en verde",
    "Haz un salto sin caerte",
    "Canta una canción mientras juegas",
    "Mantén tu posición por 10 segundos",
    "Toca el color más cercano con la cabeza",
    "Haz una pose graciosa",
    "Intercambia posiciones con otro jugador"
];

function spinWheel() {
    const wheel = document.getElementById("wheel");
    const result = document.getElementById("result");
    
    // Generar rotación aleatoria
    const randomDegree = Math.floor(Math.random() * 360 + 360 * 3); // Mínimo 3 giros
    const optionIndex = Math.floor((randomDegree % 360) / (360 / options.length));
    
    // Animar la ruleta
    wheel.style.transition = "transform 3s ease-out";
    wheel.style.transform = `rotate(${randomDegree}deg)`;
    
    // Mostrar resultado después de la animación
    setTimeout(() => {
        result.textContent = `Reto: ${options[optionIndex]}`;
    }, 3000);
}
