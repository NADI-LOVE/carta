const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }

    } 
})

/**/

function crearPetalo() {
    const petalo = document.createElement('div');
    petalo.classList.add('petal');
    
    // Posición aleatoria horizontal
    petalo.style.left = Math.random() * window.innerWidth + 'px';
    
    // Duración aleatoria
    petalo.style.animationDuration = (3 + Math.random() * 5) + 's';
    
    document.body.appendChild(petalo);
    
    // Remover después de caer
    setTimeout(() => {
        petalo.remove();
    }, 8000);
}

// Crear pétalos cada 300ms
setInterval(crearPetalo, 300);