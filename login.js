// Fonction pour afficher le formulaire de connexion
function login() {
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    
    loginForm.style.left = "4px";
    registerForm.style.right = "-520px";
    loginBtn.classList.add("white-btn");
    registerBtn.classList.remove("white-btn");
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;
}

// Fonction pour afficher le formulaire d'inscription
function register() {
    var loginForm = document.getElementById("login");
    var registerForm = document.getElementById("register");
    var loginBtn = document.getElementById("loginBtn");
    var registerBtn = document.getElementById("registerBtn");
    
    loginForm.style.left = "-510px";
    registerForm.style.right = "5px";
    loginBtn.classList.remove("white-btn");
    registerBtn.classList.add("white-btn");
    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;
}

// Fonction pour gérer la connexion
document.getElementById('signInButton').addEventListener('click', function() {
    // Récupérer les valeurs des champs de connexion
    const username = document.querySelector('#login .input-field[placeholder="Username or Email"]').value;
    const password = document.querySelector('#login .input-field[placeholder="Password"]').value;

    // Récupérer les utilisateurs stockés dans le localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifier les informations d'identification
    const user = users.find(user => (user.email === username || user.username === username) && user.password === password);

    if (user) {
        // Redirection vers la page d'accueil
        window.location.href = 'index.html';
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
});

// Fonction pour gérer l'inscription
document.getElementById('RegisterButton').addEventListener('click', function() {
    // Récupérer les valeurs des champs d'inscription
    const firstname = document.querySelector('#register .input-field[placeholder="Firstname"]').value;
    const lastname = document.querySelector('#register .input-field[placeholder="Lastname"]').value;
    const email = document.querySelector('#register .input-field[placeholder="Email"]').value;
    const password = document.querySelector('#register .input-field[placeholder="Password"]').value;

    // Vérifier que les champs ne sont pas vides
    if (firstname === "" || lastname === "" || email === "" || password === "") {
        alert("Tous les champs doivent être remplis.");
        return;
    }

    // Récupérer les utilisateurs existants
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Vérifier si l'email existe déjà
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert("Un compte avec cet email existe déjà. Veuillez vous connecter.");
    } else {
        // Créer un nouvel utilisateur
        const newUser = {
            username: `${firstname} ${lastname}`,
            email: email,
            password: password
        };

        // Ajouter le nouvel utilisateur à la liste et stocker dans localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        login(); // Revenir au formulaire de connexion
    }
});
