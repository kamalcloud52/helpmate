document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const appContent = document.getElementById('app-content');
    const loginSection = document.getElementById('login-section');
    const roleSection = document.getElementById('role-section');
    const loginForm = document.getElementById('login-form');

    // 1. Splash Screen Timer (2 Detik)
    setTimeout(() => {
        splash.classList.add('opacity-0');
        setTimeout(() => {
            splash.style.display = 'none';
            appContent.classList.remove('hidden');
        }, 500);
    }, 2000);

    // 2. Simulasi Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginSection.classList.add('hidden');
        roleSection.classList.remove('hidden');
    });
});

// 3. Fungsi Pilih Role
function selectRole(role) {
    document.getElementById('role-section').classList.add('hidden');
    document.getElementById('main-interface').classList.remove('hidden');
    showPage('home'); // Buka halaman home secara otomatis
}

// 4. Fungsi Navigasi Menu Bawah (Home, Search, Orders, Profile)
function showPage(pageId) {
    const pages = ['home', 'search', 'order', 'profile'];
    
    pages.forEach(p => {
        // Sembunyikan semua halaman
        const pageEl = document.getElementById('page-' + p);
        if(pageEl) pageEl.classList.add('hidden');
        
        // Matikan warna semua icon di navigasi
        const navBtn = document.getElementById('nav-' + p);
        if(navBtn) {
            navBtn.classList.remove('text-indigo-600');
            navBtn.classList.add('text-gray-300');
        }
    });

    // Tampilkan halaman yang dipilih
    const activePage = document.getElementById('page-' + pageId);
    if(activePage) activePage.classList.remove('hidden');
    
    // Nyalakan warna icon yang aktif
    const activeNav = document.getElementById('nav-' + pageId);
    if(activeNav) {
        activeNav.classList.remove('text-gray-300');
        activeNav.classList.add('text-indigo-600');
    }
}
