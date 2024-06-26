// Kullanıcı adı ve şifreleri saklayacağımız basit bir nesne
const users = {
    "alperen": "adminpro",
    "admin": "adminer",
    "demo": "qwerty",
    "ali": "ali3162",
    "yasuosikici": "yasuo3162",
    "kero": "kero3162"
};

// Form gönderildiğinde yapılacak işlemler
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kullanıcı adını kontrol et
    if (users.hasOwnProperty(username) && users[username] === password) {
        // Başarılı giriş durumu, istenilen sayfaya yönlendirme
        window.location.href = "../index.html";
    } else {
        // Hatalı giriş durumu, hata mesajı gösterme
        var errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "Hatalı kullanıcı adı veya şifre.";
        errorMessage.style.display = "block";
    }

    // Formun normal işleyişini durdurma
    return false;
}
