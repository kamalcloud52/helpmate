document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const appContent = document.getElementById('app-content');
    const loginSection = document.getElementById('login-section');
    const roleSection = document.getElementById('role-section');
    const loginForm = document.getElementById('login-form');

    // 1. Logic Splash Screen (Hilang setelah 2 detik)
    setTimeout(() => {
        splash.classList.add('opacity-0', 'transition', 'duration-500');
        setTimeout(() => {
            splash.style.display = 'none';
            appContent.classList.remove('hidden');
        }, 500);
    }, 2000);

    // 2. Logic Login Form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Di sini nantinya kamu akan integrasikan dengan Firebase Auth
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if(email && password) {
            // Simulasi loading
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
});

// Tambahkan di fungsi selectRole
function selectRole(role) {
    if(role === 'customer') {
        document.getElementById('role-section').classList.add('hidden');
        document.getElementById('customer-main').classList.remove('hidden');
        showPage('home');
    } else {
        alert('Modul untuk ' + role.toUpperCase() + ' sedang dikembangkan!');
    }
}

// Fungsi Navigasi Internal Customer
function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = ['home', 'search', 'order'];
    pages.forEach(p => {
        document.getElementById('page-' + p).classList.add('hidden');
        // Reset warna icon di nav
        const navBtn = document.getElementById('nav-' + p);
        if(navBtn) {
            navBtn.classList.remove('text-indigo-600');
            navBtn.classList.add('text-gray-300');
        }
    });

    // Tampilkan halaman terpilih
    document.getElementById('page-' + pageId).classList.remove('hidden');
    
    // Aktifkan icon di nav
    const activeNav = document.getElementById('nav-' + pageId);
    if(activeNav) {
        activeNav.classList.remove('text-gray-300');
        activeNav.classList.add('text-indigo-600');
    }
}
// Paste di baris paling bawah sendiri
function showPage(pageId) {
    const pages = ['home', 'search', 'order'];
    ... (dan seterusnya sampai selesai)
}
