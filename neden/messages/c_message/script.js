const consoleText = "> Kod adıyla: Ç. isimli kişi ile ilişkimiz büyük şanssızlık ile bitti. Maalesef kendisinin karakteri farklıymış. Kendisine sağlık sorunları ve ailevi nedenlerin üst üste gelmesi ile normalden biraz daha az ilgi verdim diye daha ilişkimiz bitmeden başkasıyla konuşamya başlamış ve daha sonrasında ayrılmıştık. 1 Temmuz 2021 tarihinde biten ilişkimiz maalesef beni 2-3 yıl ağır yaraladı sonrasında yaptığım ilişkilerde onu arar oldum ama kod adıyla: M. isimli kişi hayatımı değiştirmişti ama bitti. Konumuza dönecek olursak Ç. bana büyük bir hayat dersi ve deneyim verdi. Kendisine hala sinirliyim ama onunla arkadaş olmakta istiyorum bilemiyorum neyse. O da kendine bu sitede yer edinmeye hak kazandı. Hadi oyuna girin canlarım <3 -- PART 2: Doğum gününde ona tekrar yazdım ve beni engelledi ancak bir zaman sonra bana istek attı. 13 Nisan 2024'de aktif olarak tekrar konuşmaya başladık ve her gün sesli ve yazılı şekilde sohbet etmeye başladık bana çok umut verici söylemlerde bulundu ve umutlandırdı. Daha sonrasında ona açıldım ve açıldığım gün sarhoştu ve 'seni üzerim falan demeye başladı' her neyse reddetti. Sabahına konuyu tekrar açtım bir şey demedi ama akşam tekrar konuştuğumuzda reddetti ve bana 'bir süre konuşmayalım' dedi. Kendisinin adını tam siteden kaldırmıştım ki o gün TEKRAR EKLENDİ."; // Konsola yazılacak metin
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
