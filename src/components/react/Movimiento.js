function Movimiento() {
    const container = document.getElementById("pagina-Container");
    const sections = Array.from(container.getElementsByClassName("section"));
    let currentSection = 3;
    let isScrolling = false;

    // Función para actualizar el menú activo
    function updateActiveMenu(index) {
        const menuItems = document.querySelectorAll("ul li");
        if (menuItems.length > 0) {
            menuItems.forEach(item => item.classList.remove("text-blue-500", "font-bold"));
            if (menuItems[index]) {
                menuItems[index].classList.add("text-blue-500", "font-bold");
            }
        }
    }

    function scrollASection(index) {
        if (index < 0 || index >= sections.length) return;
        
        isScrolling = true;
        sections[index].scrollIntoView({behavior: "smooth"});
        currentSection = index;
        updateActiveMenu(index);
        
        setTimeout(() => {
            isScrolling = false;
        }, 700); // Duración del scroll
    }

    // Manejar clic en los elementos del menú
    function handleMenuClick(e) {
        if (e.target.tagName === 'LI') {
            const index = parseInt(e.target.id);
            if (!isNaN(index)) {
                scrollASection(index);
            }
        }
    }

    // Scroll rueda raton//
    function onMouseWheel(e) {
        if(isScrolling) return;

        if(e.deltaY > 0){
            scrollASection(currentSection + 1);
        }else if (e.deltaY < 0){
            scrollASection(currentSection - 1);
        }
        
    }
//Teclado
    function onKerDown(e) {
        if(isScrolling) return;
        if(e.key === "ArrowUp"){
            scrollASection(currentSection - 1);
        }else if(e.key === "ArrowDown"){
            scrollASection(currentSection + 1);
        }  
    }
// touch pad
    let touchStartY= 0;
    let touchEndY= 0;

    function handleGesture(params) {
        if(isScrolling) return;
        const diff = touchEndY - touchStartY;
        if(Math.abs(diff) > 50){
            if(diff > 0){
                scrollASection(currentSection - 1);
            }else if(diff < 0){
                scrollASection(currentSection + 1);
            }
        }
    }
    function onTochStart(e) {
        touchStartY = e.changedTouches[0].clientY;
    }
    function onTochEnd(e) {
        touchEndY = e.changedTouches[0].clientY;
        handleGesture();
    }
    // Agregar event listeners
    const nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', handleMenuClick);
    }
    
    window.addEventListener('wheel', onMouseWheel, { passive: false });
    window.addEventListener('keydown', onKerDown);
    window.addEventListener('touchstart', onTochStart, { passive: true });
    window.addEventListener('touchend', onTochEnd, { passive: false });

    // Inicializar el menú activo
    updateActiveMenu(0);
    
    // Limpiar event listeners al desmontar
    const cleanup = () => {
        if (nav) {
            nav.removeEventListener('click', handleMenuClick);
        }
        window.removeEventListener('wheel', onMouseWheel);
        window.removeEventListener('keydown', onKerDown);
        window.removeEventListener('touchstart', onTochStart);
        window.removeEventListener('touchend', onTochEnd);
    };

    // Devolver la función de limpieza
    return cleanup;
}

export default Movimiento;
