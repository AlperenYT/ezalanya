const consoleText = "> Amacımız belli, zamanında bize karışan, düzenimizi bozmaya çalışan ve bize hayvanlık yapma girişiminde bulunan hatta hayatımızı yıkan kızlar dahil tüm hasımlarımızı buradaki oyunda barındırdık. Siz değerli oyuncularımız ise bu barındırılan kişileri bulmak için buradasınız. Umarım aradığınızı bulursunuz, iyi oyunlar <3"; // Konsola yazılacak metin
let index = 0;

function writeConsoleText() {
    if (index < consoleText.length) {
        document.getElementById('console-text').innerHTML += consoleText.charAt(index);
        index++;
        setTimeout(writeConsoleText, 50); // Yeni karakter eklenme süresi (ms)
    }
}

// Konsol metnini ekleme işlemi başlatılıyor
setTimeout(writeConsoleText, 500); // Yazının gecikmeli olarak eklenmesi için
