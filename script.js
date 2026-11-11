// 1. Ambil elemen tombol dan elemen nama dari HTML berdasarkan ID-nya
const actionBtn = document.getElementById('actionBtn');
const profileName = document.getElementById('profileName');

// Daftar beberapa sapaan acak seru-seruan
const sapaanList = [
   "Halo! Semangat belajarnya ya! 🔥",
    "Mantap! Jarinya sudah mulai panas nih! 💻",
    "Jangan patah semangat, koding itu seru kok! ✨",
    "Yeay! Interaksi JavaScript berhasil berjalan! 🎉"
]

// 2. Tambahkan event listener (pendengar aksi) saat tombol diklik
actionBtn.addEventListener('click', function() {
    // Pilih sapaan secara acak dari array sapaanList
    const randomIndex = Math.floor(Math.random() * sapaanList.length);
    const pesanPilihan = sapaanList[randomIndex];

    // Tampilkan pesan menggunakan alert browser
    alert(pesanPilihan);

    // Ubah teks nama di kartu sementara sebagai bentuk interaksi tambahan
    profileName.textContent = "Halo, Calon Expert! 🚀";
}
)