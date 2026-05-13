// Fungsi untuk berpindah antar tampilan (SPA style)
function showView(viewId) {
    // Daftar semua view
    const views = ['view-splash', 'view-login', 'view-role'];
    
    views.forEach(id => {
        const el = document.getElementById(id);
        if (id === viewId) {
            el.classList.remove('hidden');
            // Tambahkan animasi fade in
            el.classList.add('animate-fade-in');
        } else {
            el.classList.add('hidden');
        }
    });
}

// Fungsi ketika role dipilih
function selectRole(role) {
    console.log("Role dipilih:", role);
    alert("Kamu memilih sebagai: " + role.toUpperCase());
    
    // Di sini nanti kamu arahkan ke dashboard masing-masing
    // window.location.href = `dashboard-${role}.html`;
}

// Inisialisasi Firebase (Contoh Struktur)
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.x/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.x/firebase-auth.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "xxx",
    appId: "xxx"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
*/
