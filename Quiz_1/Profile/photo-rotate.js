document.addEventListener('DOMContentLoaded', () => {
  const photos = document.querySelectorAll('.photo-stack .photo');
  let photoSrcs = Array.from(photos).map(p => p.src);

  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      // rotate array
      photoSrcs.unshift(photoSrcs.pop());

      photos.forEach((p, i) => {
        // tambahkan class animasi
        p.classList.add('anim-click');

        // ganti gambar setelah setengah durasi animasi
        setTimeout(() => {
          p.src = photoSrcs[i];
          // hapus class animasi agar bisa dipakai lagi
          p.classList.remove('anim-click');
        }, 250); // setengah durasi animasi
      });
    });
  });
});
