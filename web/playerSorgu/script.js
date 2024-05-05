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
        { username: 'Rahime', userid: 'Sümen', name: 'Rahime Sümen', level: 11981762948, score: "17.08.2007" },
        { username: 'Çisem', userid: 'Ermeç', name: 'Çisem Ermeç', level: 11137636772, score: "24.03.2007" },
        { username: 'Nehir Su', userid: 'Akçocuk', name: 'Nehir Su Akçocuk', level: 11143634250, score: "18.03.2007" },
        { username: 'Berrin', userid: 'Arslan', name: 'Berrin Arslan', level: 11308628582, score: "05.08.2007" },
        { username: 'Zeynep', userid: 'Doğru', name: 'Zeynep Doğru', level: 11140634864, score: "21.03.2007" },
        { username: 'Yağmur Hanım', userid: 'Koyuncu', name: 'Yağmur Hanım Koyuncu', level: 11179633494, score: "29.04.2007" },
        { username: 'Elif', userid: 'Ordu', name: 'Elif Ordu', level: 11191632666, score: "13.05.2007" },
        { username: 'Göktuğ', userid: 'Alparslan', name: 'Göktuğ Alparslan', level: 15464258904, score: "08.05.2007" },
        { username: 'İlhan Alper', userid: 'Derici', name: 'İlhan Alper Derici', level: 11401628014, score: "21.10.2007" },
        { username: 'Selin Sude', userid: 'Yalçın', name: 'Selin Sude Yalçın', level: 11641661512, score: "27.03.2007" },
        { username: 'Hasan', userid: 'Şahin', name: 'Hasan Şahin', level: 11140634246, score: "01.03.2007" },
        { username: 'Ebubekir', userid: 'Ötükçü', name: 'Ebubekir Ötükçü', level: 11188634024, score: "08.05.2007" },
        { username: 'Seymur', userid: 'Guliyev', name: 'Seymur Guliyev', level: 99023676866, score: "16.01.2007" },
        { username: 'Göktuğ', userid: 'Tuna', name: 'Göktuğ Tuna', level: 11059638250, score: "07.11.2006" },
        { username: 'Ayşe', userid: 'Mecaloğlu', name: 'Ayşe Mecaloğlu', level: 10966406518, score: "04.06.2007" },
        { username: 'Ece Minna', userid: 'Kavut', name: 'Ece Minna Kavut', level: 13399560994, score: "31.03.2008" },
        { username: 'Taylan', userid: 'Yıldırım', name: 'Taylan Yıldırım', level: 11323628130, score: "10.08.2007" },
        { username: 'Elvin', userid: 'Kaya', name: 'Elvin Kaya', level: 11323628130, score: "19.05.2008" },
        { username: 'Ali Haydar', userid: 'Aydın', name: 'Ali Hyadar Aydın', level: 11870324714, score: "02.03.2008" },
        { username: 'Arda', userid: 'Yetgin', name: 'Arda Yetgin', level: 11536622758, score: "23.01.2008" },
        { username: 'Mehmet', userid: 'Yalçınkaya', name: 'Mehmet Yalçınkaya', level: 10742336084, score: "16.11.2005" },
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

        row.appendChild(nameCell);
        row.appendChild(idCell);
        row.appendChild(dateCell);

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
    window.location.href = "../home/home.html"; // Duyurular sayfasına yönlendirme yapılır
}

function goToSorgu() {
    window.location.href = "index.html"; // Duyurular sayfasına yönlendirme yapılır
}

function goToGelismis() {
    window.location.href = "gelismis/index.html"; // Gelişmiş Sorgu
}

function goToUpdates() {
    window.location.href = "guncellemeler.html"; // Duyurular sayfasına yönlendirme yapılır
}