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

// 3. Logic Pilih Role
function selectRole(role) {
    console.log("Role terpilih:", role);
    // Simpan role ke localStorage atau state Firebase
    localStorage.setItem('userRole', role);
    
    // Redirect ke halaman utama sesuai role
    alert('Kamu masuk sebagai ' + role.toUpperCase());
    // window.location.href = 'home-' + role + '.html';
}
