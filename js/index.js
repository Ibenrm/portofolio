window.addEventListener("DOMContentLoaded", () => {
    // Ambil semua elemen dengan class .progress-bar
    const progressBars = document.querySelectorAll('.progress-bar');

    // Setiap progress bar akan diberi animasi
    progressBars.forEach(bar => {
        // Ambil nilai persentase dari style width
        const targetWidth = parseInt(bar.style.width); // ambil persentase dari style
        let currentWidth = 0; // Mulai dari 0%

        // Fungsi untuk memperbarui lebar progress bar
        const animateProgressBar = () => {
            if (currentWidth < targetWidth) {
                currentWidth++;
                bar.style.width = currentWidth + '%';  // Mengatur lebar progress bar
                bar.innerText = currentWidth + '%';    // Menampilkan persentase di dalam progress bar
            }
        };

        // Menggunakan setInterval untuk membuat animasi progres
        const interval = setInterval(animateProgressBar, 20); // Kecepatan animasi: 20ms per persen
    });
});