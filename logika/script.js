// Blokir klik kanan
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Blokir tombol shortcut
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});


function cekSampahKelas(event) {
  // Mengilangkan funsi bawaan event yang akan mereload halaman ketika form si submit
  event.preventDefault();

  let nama = document.getElementById("nama").value.trim();
  // tolowercase() berfungsi untuk mengubah value menjadi lowercase
  let jurusan = document.getElementById("jurusan").value.toLowerCase().trim();
  let kelas = document.getElementById("inputKelas").value.trim();
  let target = jurusan + " " + kelas;
  // value berfungsi untuk megambil apapun yang ada di kotak inpur, dan .trim bertugas untuk menghapus spasi di dalam value
  if (target === "dkv 1" || target === "dkv 3") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 90 kg",
    );
  } else if (target === "pplg 1" || target === "pplg 3") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 86,5 kg",
    );
  } else if (target === "tjkt 1" || target === "tjkt 3") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 114,4 kg",
    );
  } else if (target === "kln 1" || target === "htl 1") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 72,2 kg",
    );
  } else if (jurusan === "mplb") {
    alert("Halo " + nama + ", berat sampah untuk MPLB adalah: 31,2 kg");
  } else if (target === "dkv 2" || target === "pmn 2") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 10,7 kg",
    );
  } else if (target === "pplg 2" || target === "pplg 4") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 92 kg",
    );
  } else if (target === "tjkt 2" || target === "tjkt 4") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 60,7 kg",
    );
  } else if (target === "htl 2" || target === "kln 2") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 60,7 kg",
    );
  } else if (target === "pmn 1") {
    alert(
      "Halo " +
        nama +
        ", berat sampah untuk " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " adalah: 54,7 kg",
    );
  } else {
    alert(
      "Maaf " +
        nama +
        ", data kelas " +
        jurusan.toUpperCase() +
        " " +
        kelas +
        " tidak ditemukan!",
    );
  }
}
