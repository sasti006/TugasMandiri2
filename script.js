// Menunggu sampai seluruh dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. BUKTI 10% BAHASA PEMROGRAMAN LAIN (JSON)
    // Menggunakan format JSON untuk menyimpan data
    // ==========================================
    const dataProfilJSON = `{
        "nama": "Prasasti Artha Yani",
        "nim": "22220323028",
        "prodi": "Informatika",
        "universitas": "Universitas Muhammadiyah Malang"
    }`;

    // Parsing JSON string menjadi Object JavaScript
    const profil = JSON.parse(dataProfilJSON);
    
    // Menampilkan data dari JSON ke console (bisa ditunjukkan ke asisten)
    console.log("=== DATA DARI JSON ===");
    console.log("Nama:", profil.nama);
    console.log("NIM:", profil.nim);
    console.log("Universitas:", profil.universitas);


    // ==========================================
    // 2. FITUR INTERAKTIF: DARK MODE (20% JS)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        // Toggle class 'dark-mode' di body
        body.classList.toggle('dark-mode');

        // Mengubah ikon bulan/matahari
        if (body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun'); 
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon'); 
        }
    });


    // ==========================================
    // 3. FITUR ANIMASI SCROLL (10% Development)
    // ==========================================
    const sections = document.querySelectorAll('.section');
    
    // Atur awalan: transparan dan agak turun
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Fungsi untuk mengecek apakah elemen masuk ke layar
    const checkScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Jalankan saat pertama kali dibuka dan saat di-scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
});