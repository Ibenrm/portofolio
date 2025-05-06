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
                bar.style.width = currentWidth + '%'; 
                bar.innerText = currentWidth + '%';    
            }
        };
        const interval = setInterval(animateProgressBar, 10); 
    });
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;
    
        const url = `https://wa.me/6289653540468?text=Halo,%20Nama%20saya%20${encodeURIComponent(name)}%0A%0AEmail%20:%20${encodeURIComponent(email)}%0APesan%20:%20${encodeURIComponent(message)}`;
        
        window.location.href = url;
    });    
});