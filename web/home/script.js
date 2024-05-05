document.addEventListener('DOMContentLoaded', function() {
    var announcements = [
        { title: '📌 Önemli', date: '23.03.2024', description: 'EZALANYA henüz aktif değildir.' },
        { title: '📌 Önemli', date: '02.05.2024', description: 'EZALANYA hazır.' },
        // Daha fazla duyuru eklemek için aynı formatta nesneler eklenebilir
    ];

    var tableBody = document.querySelector('#announcementTable tbody');

    // Duyuruları tabloya ekle
    announcements.forEach(function(announcement) {
        var row = document.createElement('tr');

        var titleCell = document.createElement('td');
        titleCell.textContent = announcement.title;

        var dateCell = document.createElement('td');
        dateCell.textContent = announcement.date;

        var descriptionCell = document.createElement('td');
        descriptionCell.textContent = announcement.description;

        row.appendChild(titleCell);
        row.appendChild(dateCell);
        row.appendChild(descriptionCell);

        tableBody.appendChild(row);
    });
});

function goToAnnouncements() {
    window.location.href = "../home/home.html"; // Duyurular sayfasına yönlendirme yapılır
}

function goToSorgu() {
    window.location.href = "../playerSorgu/index.html"; // Duyurular sayfasına yönlendirme yapılır
}

function goToGelismis() {
    window.location.href = "../playerSorgu/gelismis/index.html"; // Duyurular sayfasına yönlendirme yapılır
}