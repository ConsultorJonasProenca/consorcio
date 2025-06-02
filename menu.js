// Configuração do Menu
function setupMenu() {
    const menuContainer = document.getElementById("menu");
    if (!menuContainer) return;

    const menuItems = [
        { href: "index.html", icon: "fa-home", text: "Home" },
        { href: "sobre.html", icon: "fa-user", text: "Sobre" },
        { href: "servicos.html", icon: "fa-cogs", text: "Serviços" },
        { href: "portfolio.html", icon: "fa-briefcase", text: "Portfólio" },
        { href: "contato.html", icon: "fa-envelope", text: "Contato" }
    ];

    // Highlight baseado no caminho atual
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    const menuHTML = menuItems.map(item => {
        const isActive = currentPath === item.href;
        return `
            <a href="${item.href}" ${isActive ? 'class="active"' : ''}
               aria-current="${isActive ? 'page' : 'false'}">
                <i class="fas ${item.icon}" aria-hidden="true"></i>
                <span>${item.text}</span>
            </a>
        `;
    }).join('');

    menuContainer.innerHTML = menuHTML;

    // Micro-interações
    menuContainer.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.transform = '';
            }
        });
    });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    setupMenu();
});