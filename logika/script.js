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

console.log("wel");

function cekSampahKelas(event) {
  console.log("submit di pencet");
  event.preventDefault();
  let name = document.getElementById("nama").value;
  let inputKelas1 = document.getElementById("inputKelas").value;
  let inputKelas2 = document.getElementById("jurusan").value;
  let inputKelas3 = inputKelas2 + " " + inputKelas1;
  let namaKelas = inputKelas3;
  if (namaKelas === "PMN 1") {
    alert("Total sampah untuk kelas PMN 1 adalah: 54.70 kg");
  } else if (
    namaKelas === "TJKT 1" ||
    namaKelas === "TJKT 2" ||
    namaKelas === "TJKT 3"
  ) {
    alert(
      "Total rata-rata sampah untuk kelas " + namaKelas + " adalah: 38.13 kg",
    );
  } else if (namaKelas === "KLN 1" || namaKelas === "HTL 1") {
    alert(
      "Total rata-rata sampah untuk kelas " + namaKelas + " adalah: 36.10 kg",
    );
  } else if (namaKelas === "MPLB") {
    alert("Total sampah untuk kelas MPLB adalah: 31.20 kg");
  } else if (
    namaKelas === "HTL 2" ||
    namaKelas === "KLN 2" ||
    namaKelas === "TJKT 4"
  ) {
    alert(
      "Total rata-rata sampah untuk kelas " + namaKelas + " adalah: 30.35 kg",
    );
  } else if (namaKelas === "DKV 1" || namaKelas === "DKV 3") {
    alert(
      "Total rata-rata sampah untuk kelas " + namaKelas + " adalah: 30.00 kg",
    );
  } else if (namaKelas === "PPLG 1" || namaKelas === "PPLG 3") {
    alert(
      "Total rata-rata sampah untuk kelas " + namaKelas + " adalah: 28.83 kg",
    );
  } else if (namaKelas === "DKV 2") {
    alert(
      "Total rata-rata sampah untuk kelas DKV 2 berkisar antara: 28.20 kg - 30.00 kg",
    );
  } else if (namaKelas === "PMN 2") {
    alert("Total rata-rata sampah untuk kelas PMN 2 adalah: 28.20 kg");
  } else if (namaKelas === "PPLG 2") {
    alert(
      "Total rata-rata sampah untuk kelas PPLG 2 berkisar antara: 23.15 kg - 28.83 kg",
    );
  } else if (namaKelas === "PPLG 4") {
    alert("Total rata-rata sampah untuk kelas PPLG 4 adalah: 23.15 kg");
  } else {
    alert(
      "Maaf, kelas tidak ditemukan. Pastikan format penulisan benar (Contoh: DKV 1).",
    );
  }
  alert("Terima kasih sudah mampir " + name);
}
