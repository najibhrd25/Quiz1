// Tunggu sampai DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Animasi fade out saat klik link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // hentikan sementara navigasi
            document.body.style.transition = 'opacity 0.3s ease';
            document.body.style.opacity = 0; // fade out

            setTimeout(() => {
                window.location.href = link.href;
            }, 300); // durasi sama dengan transition
        });
    });

    // Fade in halaman saat load
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 50);
});
