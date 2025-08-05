window.onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c); // Sebenarnya tidak perlu, karena setTimeout otomatis membersihkan dirinya setelah selesai
    }, 1000);
  
    setTimeout(() => {
      document.body.classList.remove("not-loaded");
    }, 1000);
  
    const texts = document.querySelectorAll('.moving-text');
  
    texts.forEach((text, index) => {
      const textLength = 1000000; // Panjang total yang diinginkan dalam piksel
      const duration = textLength / 100; // Kecepatan animasi (1 piksel per 10ms)
  
      // Mengatur durasi animasi
      text.style.animationDuration = `${duration}s`; 
  
      // Mengatur penundaan muncul untuk setiap teks
      const delay = index === 0 ? 0 : index * 5000; // 0 detik untuk teks pertama, 5 detik untuk yang lainnya
      setTimeout(() => {
        text.classList.add('visible'); // Menampilkan teks setelah penundaan
      }, delay);
    });
  };
  