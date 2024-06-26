// EZALANYA başlığını seçelim
const ezalanyaTitle = document.getElementById('ezalanya-title');

// Titreme fonksiyonunu tanımlayalım
function shakeTitle() {
    // Başlığa "shake" sınıfını ekleyelim
    ezalanyaTitle.classList.add('shake-animation');

    // Belirli bir süre sonra sınıfı kaldıralım
    setTimeout(() => {
        ezalanyaTitle.classList.remove('shake-animation');
    }, 1000); // 1 saniye sonra titreme efektini kaldır
}

// Belirli aralıklarla titreme fonksiyonunu çağıralım
setInterval(shakeTitle, 2000); // Her 2 saniyede bir titreme efekti

var clickCount = 0;

document.getElementById('ezalanya-title').addEventListener('click', function() {
    clickCount++;
    if (clickCount >= 4) {
        window.location.href = 'r.html'; // r.html sayfasına yönlendir
        clickCount = 0; // tıklama sayacını sıfırla
    }
});
document.getElementById('read-r').style.display = Math.random() < 0.1 ? 'block' : 'none'; // %1 ihtimalle göster
document.getElementById('read-r').addEventListener('click', function() {
    window.location.href = '/hidden/r/R.html'; // R.txt dosyasını oku
});

document.getElementById('read-c').style.display = Math.random() < 0.1 ? 'block' : 'none'; // %1 ihtimalle göster
document.getElementById('read-c').addEventListener('click', function() {
    window.location.href = '/hidden/c/C.html'; // Ç.txt dosyasını oku
});

document.getElementById('read-amac').style.display = Math.random() < 0.1 ? 'block' : 'none'; // %1 ihtimalle göster
document.getElementById('read-amac').addEventListener('click', function() {
    window.location.href = '/hidden/amac/amac.html'; // amaç dosyasını oku
});
