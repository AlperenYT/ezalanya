const consoleText = "> Kod adıyla: R. isimli kişi olmasaydı bu site kurulmazdı... Kendisi benim ilham kaynağım oldu bana o kadar yakın davranıp sadece tek gecede oyun oynadığı çocuğu sırf boyu uzun diye sevdi. Daha sonrasında onun konuşmalarından ve araştırmalarımdan edindğiğim bilgiye göre o çocuğun bilgilerini buldum daha sonrasında ise anne ve babası aslında kardeşmiş bunu öğrendim ve bundan R.'nin haberi olmamakla birlikte çocuğun tek vasfı 1.82 boyunda olması, keko olması ve dızo model olması... Ben o kız için aylarımı harcadım ancak arkadaş gözüyle bakmaya devam etti. Şimdi bana ve arkadaşlarıma yanlış yapan herkes kendine burada yer edindi. Siz değerli kullanıcılara iyi oyunlar diler, bunu okuyan eğer düşmanımsa geçmiş olsun dileklerimi iletir ve eğer bunu okuyan kişi R. ise teşekkürlerimi iletirim. Hadi oyuna girin dostlarım <3"; // Konsola yazılacak metin
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
