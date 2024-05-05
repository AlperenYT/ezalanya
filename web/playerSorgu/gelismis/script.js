function fetchPlayerInfo() {
    var username = document.getElementById('username').value;
    var userid = document.getElementById('userid').value;

    if (username === '' || userid === '') {
        displayErrorMessage('Lütfen kullanıcı adı ve kullanıcı ID girin.');
        return;
    }

    var playerInfo = getPlayerInfo(username, userid);

    if (playerInfo.length === 0) {
        displayErrorMessage('Kullanıcı bulunamadı. Lütfen geçerli bir kullanıcı adı ve ID girin.');
    } else {
        displayPlayerInfo(playerInfo);
    }
}

function getPlayerInfo(username, userid) {
    var players = [
        { username: 'Rahime', userid: 'Sümen', name: 'Rahime Sümen', level: 11981762948, score: "17.08.2007", anne: "17402582010 Sevda", baba: "38656873556 Mehmet", phone: 5528575958, insta: "@rahimesmnn_  , @welcometohollywo0d", location: "MAHMUTLAR MAH. 220 NOLU SK. YENİSEY 6 YENISEY VI 5 A K ALANYA 7", aile: "Hayır" },
        { username: 'Çisem', userid: 'Ermeç', name: 'Çisem Ermeç', level: 11137636772, score: "24.03.2007", anne: "11656615494 Ferhan", baba: "32254721028 Serdar", insta: "@cisemm_07", phone: 5373374077, location: "KARGICAK MAH. AYDOĞAN_2 SK. GOLD CITY VILLALARI 6.BLOK 11 DISKAPINO:F ICKAPINO:7", aile: "Hayır" },
        { username: 'Nehir Su', userid: 'Akçocuk', name: 'Nehir Su Akçocuk', level: 11143634250, score: "18.03.2007", anne: "20908383340 Özelm", baba: "16882451656 Soner", phone: 1, insta: "@neehirss_", location: "MAHMUTLAR MAH. 256 NOLU SK. 16/8" },
        { username: 'Berrin', userid: 'Arslan', name: 'Berrin Arslan', level: 11308628582, score: "05.08.2007", anne: "14509533662 Seher", baba: "14587531048 Recep", phone: 1, insta: "@berrinars", location: "CİKCİLLİ MAH. HACIBABA CAD. TÜRKYILMAZ 43 DISKAPINO:/1 ICKAPINO:7", aile: "Hayır" },
        { username: 'Zeynep', userid: 'Doğru', name: 'Zeynep Doğru', level: 11140634864, score: "21.03.2007", anne: "63757315940 Melike", baba: "63862312438 Bülent", phone: 1, insta: "@zeynwpdogru", location: "SARAY MAH. YUNUS EMRE CAD. BALKI APT DISKAPINO:39 ICKAPINO:7", aile: "Hayır" },
        { username: 'Yağmur Hanım', userid: 'Koyuncu', name: 'Yağmur Hanım Koyuncu', level: 11179633494, score: "29.04.2007", anne: "26017136624 Semra", baba: "17507508632 İbrahim", phone: 1, insta: "@yagmurr.kync", location: "CİKCİLLİ MAH. TUĞAYOĞLU CAD. CRYSTAL GARDEN A BLOK 35 DISKAPINO:A ICKAPINO:7", aile: "Hayır" },
        { username: 'Elif', userid: 'Ordu', name: 'Elif Ordu', level: 11191632666, score: "13.05.2007", anne: "13715171804 Zeynep", baba: "14903622658 Celal", phone: 1, insta: "@eliiforduu", location: "SARAY MAH. DERELİ HÜSEYİN HATİP SK. BAŞARAN APT DISKAPINO:4 ICKAPINO:7", aile: "Hayır" },
        { username: 'Göktuğ', userid: 'Alparslan', name: 'Göktuğ Alparslan', level: 15464258904, score: "08.05.2007", anne: "48106284610 Esra [FIRTINA]", baba: "48109284556 Burak", phone: 1, insta: "@goktugfrtna  , @tinercigoktug", location: "	KIZLAR PINARI MAH. FATİHLER SK. EGEMEN APARTMANI DISKAPINO:7D ICKAPINO:7", aile: "Evet" },
        { username: 'İlhan Alper', userid: 'Derici', name: 'İlhan Alper Derici', level: 11401628014, score: "21.10.2007", anne: "12213146628 Nadezda", baba: "31285581496 Mehmet", phone: 5309328177, insta: "@ilhandericii", location: "GÜLLER PINARI MAH. ERGÜN SK. DISKAPINO:5 ICKAPINO:7", aile: "Hayır" },
        { username: 'Selin Sude', userid: 'Yalçın', name: 'Selin Sude Yalçın', level: 11641661512, score: "27.03.2007", anne: "31291581268 Filiz", baba: "34637123986 Hüseyin", phone: 1, insta: "@selinsudeyalcin", location: "GÜLLER PINARI MAH. OBA CAD. TAN APT DISKAPINO:35 ICKAPINO:7", aile: "Hayır" },
        { username: 'Hasan', userid: 'Şahin', name: 'Hasan Şahin', level: 11140634246, score: "01.03.2007", anne: "16411456008 Figen", baba: "16414455954 Mustafa", phone: 1, insta: "@iamhasansahin", location: "	OBA MAH. HATİPOĞLU CAD. HASAN DEMİRBAŞ 58 DISKAPINO:- ICKAPINO:7", aile: "Hayır" },
        { username: 'Ebubekir', userid: 'Ötükçü', name: 'Ebubekir Ötükçü', level: 11188634024, score: "08.05.2007", anne: "46879325318 Tuba", baba: "46948323054 Osman", phone: 1, insta: "@otukcuebubekir", location: "OBA MAH. ESKİ GAZİPAŞA CAD. TARAFO COURT SITESI A BLOK DISKAPINO:38 ICKAPINO:7", aile: "Hayır" },
        { username: 'Seymur', userid: 'Guliyev', name: 'Seymur Guliyev', level: 99023676866, score: "16.01.2007", anne: "Sakina", baba: "Anar", phone: 1, insta: "@seymouri.999", location: "undefined" },
        { username: 'Göktuğ', userid: 'Tuna', name: 'Göktuğ Tuna', level: 11059638250, score: "07.11.2006", anne: "45223103718 Aysel", baba: "45265102342 Bahri", phone: 1, insta: "@goktugtunaa", location: "GÜLLER PINARI MAH. HASAN AKÇALIOĞLU CAD. RECEPOGLU APT DISKAPINO:66 ICKAPINO:7", aile: "Hayır" },
        { username: 'Ayşe', userid: 'Mecaloğlu', name: 'Ayşe Mecaloğlu', level: 10966406518, score: "04.06.2007", anne: "16141474334 Demet", baba: "16144474270 Muzaffer", phone: 1, insta: "@aysemecall", location: "CİKCİLLİ MAH. 107 SK. KONAK TOWERS B BLOK DISKAPINO:40 ICKAPINO:7", aile: "Hayır" },
        { username: 'Ece Minna', userid: 'Kavut', name: 'Ece Minna Kavut', level: 13399560994, score: "31.03.2008", anne: "35350308568 Yadigar", baba: "21289761376 Adem", phone: 1, insta: "@ece_kavutt", location: "MAHMUTLAR MAH. 230 NOLU SK. 6A/1", aile: "Hayır" },
        { username: 'Taylan', userid: 'Yıldırım', name: 'Taylan Yıldırım', level: 11323628130, score: "10.08.2007", anne: "34540249674 Eylem", baba: "11971458196 Kemal", phone: 1, insta: "@undefined", location: "ÇARŞI MAH. İBRAHİM HOCA SK. GÖNCÜ APARTMANI DISKAPINO:1 ICKAPINO:7", aile: "Hayır" },
        { username: 'Elvin', userid: 'Kaya', name: 'Elvin Kaya', level: 23491223758, score: "19.05.2008", anne: "30610811796 Dilek", baba: "42139801424 Seyit", phone: 1, insta: "@elviin_kayaa", location: "TOSMUR MAH. 22103 SK. 1 7 ALANYA 7", aile: "Hayır" },
        { username: 'Ali Haydar', userid: 'Aydın', name: 'Ali Haydar Aydın', level: 11870324714, score: "02.03.2008", anne: "24163913144 Perihan", baba: "24163913144 Muti", phone: 1, insta: "@aydnalihaydr", location: "KONAKLI MAH. KONAKLI VATAN CAD. ZÜMRÜT SITESI C BLOK DISKAPINO:5B ICKAPINO:7", aile: "Hayır" },
        { username: 'Arda', userid: 'Yetgin', name: 'Arda Yetgin', level: 11536622758, score: "23.01.2008", anne: "29788010858 Ayşe", baba: "22210263648 Osman", phone: 1, insta: "@arda_yetgin", location: "HACET MAH. IŞIK SK. ZERRIN BAŞAK APT 7 DISKAPINO:B ICKAPINO:7", aile: "Hayır" },
        { username: 'Mehmet', userid: 'Yalçınkaya', name: 'Mehmet Yalçınkaya', level: 10742336084, score: "16.11.2005", anne: "45154187870 Suat", baba: "45274183868 Halef", phone: "1", insta: "mehmetyalcinkayaas", location: "Bulunamadı!", aile: "Hayır"},
    ];

    var foundPlayers = [];

    players.forEach(function(player) {
        if (player.username === username && player.userid === userid) {
            foundPlayers.push(player);
        }
    });

    return foundPlayers;
}

function displayPlayerInfo(playerInfo) {
    var tableBody = document.getElementById('playerTableBody');
    tableBody.innerHTML = ''; // Önceki içeriği temizle
    displayErrorMessage("");

    playerInfo.forEach(function(player) {
        var row = document.createElement('tr');

        var nameCell = document.createElement('td');
        nameCell.textContent = player.name;

        var idCell = document.createElement('td');
        idCell.textContent = player.level;

        var dateCell = document.createElement('td');
        dateCell.textContent = player.score;

        var anneCell = document.createElement('td');
        anneCell.textContent = player.anne;

        var babaCell = document.createElement('td');
        babaCell.textContent = player.baba;

        var phoneCell = document.createElement('td');
        phoneCell.textContent = player.phone;

        var instaCell = document.createElement('td');
        instaCell.textContent = player.insta;

        var locationCell = document.createElement('td');
        locationCell.textContent = player.location;

        var aileCell = document.createElement('td');
        aileCell.textContent = player.aile;

        row.appendChild(nameCell);
        row.appendChild(idCell);
        row.appendChild(dateCell);
        row.appendChild(anneCell);
        row.appendChild(babaCell);
        row.appendChild(phoneCell);
        row.appendChild(instaCell);
        row.appendChild(locationCell);
        row.appendChild(aileCell);

        tableBody.appendChild(row);
    });
}

function displayErrorMessage(message) {
    var infoDiv = document.getElementById('playerInfo');
    infoDiv.innerHTML = `<p style="color: red;">Kullanıcı Adı veya ID yanlış olabilir.</p>`;
}

function displayQueryTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    var timeDiv = document.createElement('div');
    timeDiv.innerHTML = "<p>Sorgu zamanı: " + formattedTime + "</p>";

    var infoDiv = document.getElementById('playerInfo');
    infoDiv.appendChild(timeDiv);
}

function fetchPlayerInfo() {
    var username = document.getElementById('username').value;
    var userid = document.getElementById('userid').value;

    // Kullanıcı adı ve ID boş mu kontrol et
    if (username === '' || userid === '') {
        alert('Lütfen kullanıcı adı ve kullanıcı ID girin.');
        return;
    }

    var playerInfo = getPlayerInfo(username, userid);

    if (playerInfo.length === 0) {
        displayErrorMessage();
    } else {
        displayPlayerInfo(playerInfo);
    }
}

function queryPlayer() {
    var username = document.getElementById('username').value;
    var userid = document.getElementById('userID').value;

    if (username === '' || userid === '') {
        displayErrorMessage('Lütfen kullanıcı adı ve kullanıcı ID girin.');
        return;
    }

    var playerInfo = getPlayerInfo(username, userid);

    if (playerInfo.length === 0) {
        displayErrorMessage('Kullanıcı bulunamadı. Lütfen geçerli bir kullanıcı adı ve ID girin.');
    } else {
        displayPlayerInfo(playerInfo);
        tableBody.innerHTML = '';
    }
}
function displayErrorMessage(message) {
    var errorMessageDiv = document.getElementById('errorMessage');
    errorMessageDiv.textContent = message;
}

function goToAnnouncements() {
    window.location.href = "../../home/home.html"; // Duyurular sayfasına yönlendirme yapılır
}

function goToSorgu() {
    window.location.href = "../index.html"; // Duyurular sayfasına yönlendirme yapılır
}

function goToUpdates() {
    window.location.href = "guncellemeler.html"; // Duyurular sayfasına yönlendirme yapılır
}

function goToWhy() {
    window.location.href = "../../../neden/index.html"; // Duyurular sayfasına yönlendirme yapılır
}