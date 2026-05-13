document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const appContent = document.getElementById('app-content');
    const loginSection = document.getElementById('login-section');
    const roleSection = document.getElementById('role-section');
    const loginForm = document.getElementById('login-form');

    // 1. Logic Splash Screen
    setTimeout(() => {
        splash.classList.add('opacity-0', 'transition', 'duration-500');
        setTimeout(() => {
            splash.style.display = 'none';
            if (appContent) appContent.classList.remove('hidden');
        }, 500);
    }, 2000);

    // 2. Logic Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                const btn = loginForm.querySelector('button');
                btn.innerHTML = '<i class="fas fa-circle-notch animate-spin"></i>';
                
                setTimeout(() => {
                    loginSection.classList.add('hidden');
                    roleSection.classList.remove('hidden');
                }, 1000);
            } else {
                alert('Silakan isi email dan password');
            }
        });
    }
});

// 3. Logic Pilih Role
function selectRole(role) {
    if (role === 'customer') {
        document.getElementById('role-section').classList.add('hidden');
        document.getElementById('customer-main').classList.remove('hidden');
        showPage('home');
    } else {
        alert('Modul untuk ' + role.toUpperCase() + ' sedang dikembangkan!');
    }
}

// 4. Fungsi Navigasi Internal Customer
function showPage(pageId) {
    const pages = ['home', 'search', 'order'];
    pages.forEach(p => {
        const pageEl = document.getElementById('page-' + p);
        const navBtn = document.getElementById('nav-' + p);
        
        if (pageEl) pageEl.classList.add('hidden');
        if (navBtn) {
            navBtn.classList.remove('text-indigo-600');
            navBtn.classList.add('text-gray-300');
        }
    });

    const activePage = document.getElementById('page-' + pageId);
    const activeNav = document.getElementById('nav-' + pageId);
    
    if (activePage) activePage.classList.remove('hidden');
    if (activeNav) {
        activeNav.classList.remove('text-gray-300');
        activeNav.classList.add('text-indigo-600');
    }
}
