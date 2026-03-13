/* ═══════════════════════════════════════════
   AGUEDITA ATELIER — CITAS SYSTEM JS
═══════════════════════════════════════════ */

// Simple View Switcher
function switchView(viewId) {
    const views = ['login', 'register', 'dashboard', 'admin-login'];
    views.forEach(v => {
        document.getElementById(`view-${v}`).classList.add('hidden');
    });
    document.getElementById(`view-${viewId}`).classList.remove('hidden');
}

// Logic for Google Login
function handleGoogleLogin() {
    alert('Iniciando sesión con Google... (Requiere configuración de Firebase)');
    // Aquí irá: signInWithPopup(auth, googleProvider)
}

// Logic for Guest Login (Pruebas)
function handleGuestLogin() {
    console.log('Ingresando como invitado...');
    document.getElementById('user-info').classList.remove('hidden');
    document.getElementById('user-email').innerText = 'invitado@prueba.com';
    switchView('dashboard');
}

// Logic for Client Register
function handleRegister() {
    const email = document.getElementById('reg-email').value;
    const name = document.getElementById('reg-name').value;
    if (!email) {
        alert('Por favor ingrese su correo');
        return;
    }
    alert(`Redirigiendo a Google para validar tu cuenta ${email}... (Simulado)`);
}

// Logic for Admin Login (Ofuscado)
function handleAdminLogin() {
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;

    // Credenciales solicitadas por el usuario
    if (user === 'userX-45955' && pass === '$45y3') {
        alert('Bienvenida Aguedita. Redirigiendo al panel...');
        // Aquí iría la carga del dashboard administrativo
    } else {
        alert('Credenciales incorrectas');
    }
}

// Hidden trigger for Admin Login (discreto)
// Si el usuario escribe "aguedita" en el teclado mientras está en la página de login
// se activa la vista administrativa
let keys = '';
window.addEventListener('keydown', (e) => {
    keys += e.key;
    if (keys.includes('aguedita')) {
        switchView('admin-login');
        keys = '';
    }
    if (keys.length > 20) keys = '';
});

// Mock Logout
function logout() {
    location.reload();
}
