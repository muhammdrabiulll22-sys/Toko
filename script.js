document.addEventListener('DOMContentLoaded', function() {
    // Mencegah klik kanan untuk pengunduhan gambar
    document.body.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Pengunduhan gambar tidak diizinkan!');
    });

    // Efek hover pada elemen produk
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });

        item.addEventListener('mouseout', function() {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Efek transisi halus untuk gambar saat dimuat
    const productImages = document.querySelectorAll('.product-item img');
    productImages.forEach(img => {
        img.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        img.style.opacity = '1';
    });
});

