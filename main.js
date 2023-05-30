// Variables globales
const accountOne = [user = "Mali", password = "1234"]
const accountTwo = [user = "Gera", password = "5678"]
const accountThree = [user = "Maui", password = "9910"]
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginForm = document.getElementById("login-form");
const accountArea = document.getElementById("account-area");
const usernameDisplay = document.getElementById("username-display");
const balanceDisplay = document.getElementById("balance-display");
const withdrawBtn = document.getElementById("withdraw-btn");
const depositBtn = document.getElementById("deposit-btn");
const balanceBtn = document.getElementById("balance-btn");
const logoutBtn = document.getElementById("logout-btn");
let balance = 0;

// Función para hacer login
function login() {
    let user = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (user == accountOne[0,0] && password == accountOne[0,1]) {
        balance = 200;
        showAccountArea();
    } else if (user == accountTwo[0,0] && password == accountTwo[0,1]){
        balance = 290;
        showAccountArea();
    } else if (user == accountThree[0,0] && password == accountThree[0,1]){
        balance = 67;
        showAccountArea();
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// Función para mostrar el mensaje de bienvenida y el saldo actual
function showAccountArea() {
    usernameDisplay.textContent = usernameInput.value;
    balanceDisplay.textContent = balance;
    loginForm.reset();
    loginForm.style.display = "none";
    accountArea.style.display = "block";
}

// Función para actualizar el saldo en pantalla
function updateBalanceDisplay() {
    balanceDisplay.textContent = balance;
}

// Función para retirar efectivo
/* Valida la cantidad ingresada para asegurarse de que sea un número válido, mayor que cero, que no supere el saldo disponible y que después del retiro el saldo no sea inferior a 10 pesos. */
function withdrawCash() {
    let amount = prompt("Ingresa la cantidad a retirar:");
    if (amount !== null && amount !== " ") {
        amount = parseFloat(amount);
        if (!isNaN(amount) && amount > 0 && amount <= balance && (balance - amount) >= 10) {
            balance -= amount;
            alert("Retiraste " + amount + " pesos.\nSaldo actual: " + balance + " pesos.");
        } else if ((balance - amount) < 10) {
            alert("No puedes retirar esa cantidad. El saldo mínimo permitido es de 10 pesos.");
    } else {
        alert("Cantidad inválida o saldo insuficiente.");
    }
    updateBalanceDisplay();
}
}

// Función para depositar efectivo
function depositCash() {
    let amount = prompt("Ingresa la cantidad a depositar:");
    if (amount !== null && amount !== '') {
        amount = parseFloat(amount);
        /* !isNaN(amount) se usa para verificar si el valor de amount es un número valido. */
        if (!isNaN(amount) && amount > 0 && (balance + amount) <= 990) {
            balance += amount;
            alert("Depositaste " + amount + " pesos.\nSaldo actual: " + balance + " pesos.");
        } else if ((balance + amount) > 990) {
            alert("No puedes depositar esa cantidad. El saldo máximo permitido es de 990 pesos.");
        } else {
            alert("Cantidad inválida.");
        }
        updateBalanceDisplay();
    }
}

// Función para consultar el saldo actual
function checkBalance() {
    alert("Tu saldo actual es de: " + balance + " pesos.");
}

// Función para salir de la cuenta
function logout() {
    accountArea.style.display = "none";
    loginForm.style.display = "block";
    balance = 0;
}

/* Las funciones de los botones las pusé sin parentesis 
    porque al iniciar el programa se ejecutan todas de golpe */ 
withdrawBtn.addEventListener("click", withdrawCash);
depositBtn.addEventListener("click", depositCash);
balanceBtn.addEventListener("click", checkBalance);
logoutBtn.addEventListener("click", logout);