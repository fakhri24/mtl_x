"use strict";

/* ================================================================
   ARSITEKTUR MVC SEDERHANA
     - Model: Menyimpan data dan logika bisnis (state, engine)
     - View: Bertanggung jawab untuk menampilkan data dan menerima input pengguna (ui)
     - Controller: Menghubungkan Model dan View, menangani logika aplikasi (controller)
   ================================================================ */

/* ================================================================
  DATA
  ================================================================ */

const bankSoal = [
  {
    // No.1
    soal: "Tentukan $x$ dari $81^x=9$",
    pilihanGanda: [
      { label: "A", text: "$\\frac{1}{2}$" },
      { label: "B", text: "$\\frac{1}{3}$" },
      { label: "C", text: "$\\frac{2}{3}$" },
      { label: "D", text: "$\\frac{3}{2}$" },
    ],
    jawaban: "A",
  },
  {
    // No.2
    soal: "Tentukan $x$ dari $5^{x+2}=125$",
    pilihanGanda: [
      { label: "A", text: "$-1$" },
      { label: "B", text: "$0$" },
      { label: "C", text: "$1$" },
      { label: "D", text: "$2$" },
    ],
    jawaban: "C",
  },
  {
    // No.3
    soal: "Tentukan $x$ dari $4^{3x-1}=128$",
    pilihanGanda: [
      { label: "A", text: "$\\frac{1}{2}$" },
      { label: "B", text: "$\\frac{3}{2}$" },
      { label: "C", text: "$\\frac{3}{4}$" },
      { label: "D", text: "$\\frac{5}{2}$" },
    ],
    jawaban: "B",
  },
  {
    // No.4
    soal: "Tentukan $x$ dari $49^{2x-1}=1$",
    pilihanGanda: [
      { label: "A", text: "$\\frac{1}{6}$" },
      { label: "B", text: "$\\frac{1}{2}$" },
      { label: "C", text: "$\\frac{1}{3}$" },
      { label: "D", text: "$0$" },
    ],
    jawaban: "B",
  },
  {
    // No.5
    soal: "Tentukan $x$ dari $9^{x+2}=\\sqrt{27^{x+1}}$",
    pilihanGanda: [
      { label: "A", text: "$-5$" },
      { label: "B", text: "$-3$" },
      { label: "C", text: "$1$" },
      { label: "D", text: "$4$" },
    ],
    jawaban: "A",
  },
  {
    // No.6
    soal: "Tentukan $x$ dari $2^{x^2+x}=\\sqrt{16^{x+3}}$",
    pilihanGanda: [
      { label: "A", text: "$\{-3,-2\}$" },
      { label: "B", text: "$\{-3,2\}$" },
      { label: "C", text: "$\{-2,3\}$" },
      { label: "D", text: "$\{2,3\}$" },
    ],
    jawaban: "C",
  },
  {
    // No.7
    soal: "Tentukan $x$ dari $2^{x+2}-2^x=12$",
    pilihanGanda: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
    ],
    jawaban: "B",
  },
  {
    // No.8
    soal: "Tentukan $x$ dari $5^{x}-5^{x-1}=100$",
    pilihanGanda: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
    ],
    jawaban: "C",
  },
  {
    // No.9
    soal: "Tentukan $x$ dari $\\sqrt[3]{16^x}=64$",
    pilihanGanda: [
      { label: "A", text: "$\\frac{9}{2}$" },
      { label: "B", text: "$\\frac{3}{2}$" },
      { label: "C", text: "$\\frac{3}{4}$" },
      { label: "D", text: "$\\frac{9}{4}$" },
    ],
    jawaban: "A",
  },
  {
    // No.10
    soal: "Tentukan $x$ dari $\\sqrt{32^x}=\\sqrt[4]{2^{20}}$",
    pilihanGanda: [
      { label: "A", text: "$1$" },
      { label: "B", text: "$2$" },
      { label: "C", text: "$3$" },
      { label: "D", text: "$4$" },
    ],
    jawaban: "B",
  },
  {
    // No.11
    soal: "Tentukan $x$ dari $3^{x+2}+3^{1-x}=12$",
    pilihanGanda: [
      { label: "A", text: "$\{-1,0\}$" },
      { label: "B", text: "$\{-2,-1\}$" },
      { label: "C", text: "$\{1,2\}$" },
      { label: "D", text: "$\{0,1\}$" },
    ],
    jawaban: "A",
  },
  {
    // No.12
    soal: "Tentukan $x$ dari $\\sqrt[4]{16^{x+1}}=\\sqrt{2^{3x}}$",
    pilihanGanda: [
      { label: "A", text: "$-2$" },
      { label: "B", text: "$-1$" },
      { label: "C", text: "$1$" },
      { label: "D", text: "$2$" },
    ],
    jawaban: "D",
  },
  {
    // No.13
    soal: "Tentukan $x$ dari $4^{x} \\ge 16$",
    pilihanGanda: [
      { label: "A", text: "$x \\ge 2$" },
      { label: "B", text: "$x \\le 2$" },
      { label: "C", text: "$x > 2$" },
      { label: "D", text: "$x < 2$" },
    ],
    jawaban: "A",
  },
  {
    // No.14
    soal: "Tentukan $x$ dari $\\left(\\frac{1}{10}\\right)^{x} \\le \\frac{1}{1000}$",
    pilihanGanda: [
      { label: "A", text: "$x \\le 3$" },
      { label: "B", text: "$x \\ge 3$" },
      { label: "C", text: "$x > 3$" },
      { label: "D", text: "$x < 3$" },
    ],
    jawaban: "B",
  },
  {
    // No.15
    soal: "Tentukan $x$ dari $3^{x+1} > 81$",
    pilihanGanda: [
      { label: "A", text: "$x \\le 3$" },
      { label: "B", text: "$x \\ge 3$" },
      { label: "C", text: "$x > 3$" },
      { label: "D", text: "$x < 3$" },
    ],
    jawaban: "C",
  },
  {
    // No.16
    soal: "Tentukan $x$ dari $\\left(\\frac{1}{4}\\right)^{2x} \\le \\frac{1}{16}$",
    pilihanGanda: [
      { label: "A", text: "$x \\le 1$" },
      { label: "B", text: "$x \\ge 1$" },
      { label: "C", text: "$x > 1$" },
      { label: "D", text: "$x < 1$" },
    ],
    jawaban: "B",
  },
  {
    // No.17
    soal: "Tentukan $x$ dari $2^{x+1} > 4^x$",
    pilihanGanda: [
      { label: "A", text: "$x \\le 1$" },
      { label: "B", text: "$x \\ge 1$" },
      { label: "C", text: "$x > 1$" },
      { label: "D", text: "$x < 1$" },
    ],
    jawaban: "D",
  },
  {
    // No.18
    soal: "Tentukan nilai $x$ dari $\\left(\\frac{1}{5}\\right)^{x}\\ge\\left(\\frac{1}{25}\\right)^{2x-1}$",
    pilihanGanda: [
      { label: "A", text: "$x \\le \\frac{2}{3}$" },
      { label: "B", text: "$x \\ge \\frac{1}{3}$" },
      { label: "C", text: "$x \\ge \\frac{2}{3}$" },
      { label: "D", text: "$x \\le \\frac{1}{3}$" },
    ],
    jawaban: "C",
  },
  {
    // No.19
    soal: "Sebuah koloni semut awalnya berjumlah 100 ekor. Setiap hari jumlah semut dalam koloni tersebut bertambah 3 kali lipat dari jumlah semut pada hari sebelumnya. Setelah berapa hari jumlah semut dalam koloni tersebut akan mencapai 24.300 ekor?",
    pilihanGanda: [
      { label: "A", text: "4 hari" },
      { label: "B", text: "5 hari" },
      { label: "C", text: "6 hari" },
      { label: "D", text: "7 hari" },
    ],
    jawaban: "B",
  },
  {
    // No.20
    soal: "Intensitas cahaya berkurang menjadi sepertiga dari intensitas awalnya setelah melewati satu lapisan kabut. Jika intensitas cahaya awal adalah 81 satuan, berapa jumlah lapisan kabut minimum agar intensitas cahaya tersebut kurang dari 3 satuan?",
    pilihanGanda: [
      { label: "A", text: "3 lapisan" },
      { label: "B", text: "4 lapisan" },
      { label: "C", text: "5 lapisan" },
      { label: "D", text: "6 lapisan" },
    ],
    jawaban: "B",
  },
];

/* ================================================================
   CONFIGURASI APLIKASI
   ================================================================ */

const maxPercobaan = 3;
// let indexTersimpan = 0;

/* ================================================================
   STATE
   ================================================================ */

const state = {
  indexSoal: 0,
  jawabanDipilih: undefined,
  faseSoal: "menjawab", // "menjawab" atau "selesai"
  jumlahPercobaan: 0,
  kunciJawaban: undefined,
};

/* ================================================================
   ENGINE
   ================================================================ */

const engine = {
  submitJawaban(jumlahPercobaan, jawabanUser, kunciJawaban, maxPercobaan) {
    if (jawabanUser === kunciJawaban) {
      return {
        tipe: "BENAR",
        pesan: "Jawaban benar! Lanjut ke soal berikutnya.",
      };
    }

    if (jumlahPercobaan + 1 < maxPercobaan) {
      return {
        tipe: "SALAH_ULANG",
        pesan: "Jawaban salah. Coba lagi.",
      };
    } else {
      return {
        tipe: "SALAH_LANJUT",
        pesan: "Jawaban salah. Lanjut ke soal berikutnya.",
      };
    }
  },
};

/* ================================================================
   VIEW (UI)
   ================================================================ */

const ui = {
  loadSoal(index) {
    indexSoalElement.textContent = `Soal ${index + 1} dari ${bankSoal.length}`;
    soalElement.innerHTML = bankSoal[index].soal;

    // console.log(bankSoal[index].soal);

    for (let i = 0; i < pilihan.length; i++) {
      pilihan[i].value = bankSoal[index].pilihanGanda[i].label; // Set value sesuai dengan huruf pilihan (A, B, C, D)

      // Update label teks untuk setiap pilihan
      const labelElement = document.querySelector(
        `label[for="${pilihan[i].id}"]`,
      );
      labelElement.innerHTML = bankSoal[index].pilihanGanda[i].text;
    }

    state.kunciJawaban = bankSoal[index].jawaban; // Update kunci jawaban sesuai dengan soal yang dimuat

    renderMathInElement(soalElement, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
    });

    for (let i = 0; i < pilihan.length; i++) {
      const labelElement = document.querySelector(
        `label[for="${pilihan[i].id}"]`,
      );
      renderMathInElement(labelElement, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
      });
    }
  },

  renderFeedback(pesan) {
    feedbackElement.textContent = pesan;
  },

  clearFeedback() {
    feedbackElement.textContent = "";
  },

  resetInput() {
    for (let i = 0; i < pilihan.length; i++) {
      pilihan[i].checked = false;
    }
  },

  disableInput() {
    tombolSubmitElement.disabled = true;
    for (let i = 0; i < pilihan.length; i++) {
      pilihan[i].disabled = true;
    }
  },
};

/* ================================================================
   CONTROLLER
   ================================================================ */

const controller = {
  onRadioSelect(value) {
    if (state.faseSoal !== "menjawab") return; // Hanya simpan jawaban jika fase soal adalah "menjawab"

    state.jawabanDipilih = value;
    // console.log(state.jawabanDipilih);
  },

  onSubmit() {
    if (state.faseSoal !== "menjawab") return;
    if (!state.jawabanDipilih) return; // Jika belum memilih jawaban, jangan lakukan apa-apa

    const hasil = engine.submitJawaban(
      state.jumlahPercobaan,
      state.jawabanDipilih,
      state.kunciJawaban,
      maxPercobaan,
    );
    ui.renderFeedback(hasil.pesan);

    switch (hasil.tipe) {
      case "BENAR":
        state.jumlahPercobaan = 0; // Reset jumlah percobaan jika jawaban benar
        state.faseSoal = "selesai";
        controller.lanjutSoal();
        break;

      case "SALAH_ULANG":
        state.jumlahPercobaan++;
        break;

      case "SALAH_LANJUT":
        state.jumlahPercobaan = 0; // Reset jumlah percobaan setelah mencapai batas
        state.faseSoal = "selesai";
        controller.lanjutSoal();
        break;
    }
  },

  lanjutSoal() {
    state.indexSoal++;

    if (state.indexSoal < bankSoal.length) {
      ui.loadSoal(state.indexSoal); // Muat soal berikutnya jika masih ada
      controller.resetUntukSoalBaru();
    } else {
      ui.renderFeedback("Selamat! Kamu sudah menyelesaikan semua soal.");
      ui.disableInput();
    }
  },

  resetUntukSoalBaru() {
    state.jawabanDipilih = undefined; // Reset jawaban yang dipilih untuk soal baru
    state.jumlahPercobaan = 0; // Reset jumlah percobaan untuk soal baru
    state.faseSoal = "menjawab"; // Set fase soal kembali ke "menjawab"
    ui.resetInput(); // Reset input pilihan ganda
    ui.clearFeedback(); // Clear feedback saat memulai soal baru
  },
};

/* ================================================================
   EVENT BINDING
   ================================================================ */

const indexSoalElement = document.getElementById("indexSoal");
const soalElement = document.getElementById("soal");
const tombolSubmitElement = document.getElementById("tombolSubmit");
const feedbackElement = document.querySelector(".feedback");
let pilihan = document.getElementsByName("pilihan");

for (let i = 0; i < pilihan.length; i++) {
  pilihan[i].addEventListener("click", function () {
    // Simpan jawaban yang dipilih saat pengguna mengklik pilihan
    controller.onRadioSelect(pilihan[i].value);
  });
}

tombolSubmitElement.addEventListener("click", function () {
  controller.onSubmit();
});

/* ================================================================
   INISIALISASI APLIKASI
   ================================================================ */

document.addEventListener("DOMContentLoaded", function () {
  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
  });
});

ui.loadSoal(state.indexSoal); // Muat soal pertama saat halaman dimuat

// renderMathInElement(soalElement, {
//   delimiters: [
//     { left: "$$", right: "$$", display: true },
//     { left: "$", right: "$", display: false },
//   ],
// });

// for (let i = 0; i < pilihan.length; i++) {
//   const labelElement = document.querySelector(`label[for="${pilihan[i].id}"]`);
//   renderMathInElement(labelElement, {
//     delimiters: [
//       { left: "$$", right: "$$", display: true },
//       { left: "$", right: "$", display: false },
//     ],
//   });
// }

/* ================================================================
   FUNGSI HELPER
     - simpanJawaban: Menyimpan jawaban yang dipilih oleh pengguna
     - tampilkanFeedback: Menampilkan pesan feedback kepada pengguna
     - handleJawabanBenar: Logika untuk menangani jawaban benar
     - handleJawabanSalah: Logika untuk menangani jawaban salah
     - cekJawaban: Memeriksa apakah jawaban yang dipilih benar atau salah
   ================================================================ */

/*
const init = function () {
  // Inisialisasi variabel global jika diperlukan
  state.jawabanDipilih = undefined;
  state.jumlahPercobaan = 0;
  state.faseSoal = "menjawab";
  tampilkanFeedback(""); // Reset feedback saat memulai soal baru
};

const uncheckPilihan = function () {
  for (let i = 0; i < pilihan.length; i++) {
    pilihan[i].checked = false;
  }
};

const loadSoal = function () {
  const soalElement = document.getElementById("soal");
  soalElement.textContent = bankSoal[state.indexSoal].soal;

  console.log(bankSoal[state.indexSoal].soal);

  for (let i = 0; i < pilihan.length; i++) {
    pilihan[i].value = bankSoal[state.indexSoal].pilihanGanda[i].label; // Set value sesuai dengan huruf pilihan (A, B, C, D)

    // Update label teks untuk setiap pilihan
    const labelElement = document.querySelector(
      `label[for="${pilihan[i].id}"]`,
    );
    labelElement.textContent = bankSoal[state.indexSoal].pilihanGanda[i].text;
  }

  state.kunciJawaban = bankSoal[state.indexSoal].jawaban; // Update kunci jawaban sesuai dengan soal yang dimuat
  init(); // Reset variabel global untuk soal baru

  // Uncheck semua pilihan saat memuat soal baru
  state.resetInput();
};

const simpanJawaban = function (pilihan) {
  if (state.faseSoal !== "menjawab") return; // Hanya simpan jawaban jika fase soal adalah "menjawab"

  state.jawabanDipilih = pilihan.value;
  console.log(state.jawabanDipilih);
};

const tampilkanFeedback = function (pesan) {
  feedbackElement.textContent = pesan;
};

const handleJawabanBenar = function () {
  state.jumlahPercobaan = 0; // Reset jumlah percobaan jika jawaban benar
  state.faseSoal = "selesai";
  state.jawabanDipilih = undefined; // Reset jawaban yang dipilih

  tampilkanFeedback("Jawaban benar! Lanjut ke soal berikutnya.");
};

const handleJawabanSalah = function () {
  state.jumlahPercobaan++;

  if (state.jumlahPercobaan < maxPercobaan) {
    tampilkanFeedback("Jawaban salah! Coba lagi.");
    // console.log("Jawaban salah! Coba lagi.");
  } else if (state.jumlahPercobaan === maxPercobaan) {
    state.jumlahPercobaan = 0; // Reset jumlah percobaan setelah mencapai batas
    state.faseSoal = "selesai";
    state.jawabanDipilih = undefined; // Reset jawaban yang dipilih
    tampilkanFeedback("Jawaban salah! Lanjut ke soal berikutnya.");
    // console.log("Jawaban salah! Lanjut ke soal berikutnya.");
  }
};

const cekJawaban = function () {
  if (state.faseSoal !== "menjawab") return;

  if (state.jawabanDipilih) {
    if (state.jawabanDipilih === state.kunciJawaban) {
      handleJawabanBenar();
    } else {
      handleJawabanSalah();
    }
  }
};

loadSoal(); // Muat soal pertama saat halaman dimuat

for (let i = 0; i < pilihan.length; i++) {
  pilihan[i].addEventListener("click", function () {
    // Simpan jawaban yang dipilih saat pengguna mengklik pilihan
    simpanJawaban(pilihan[i]);
  });
}

tombolSubmitElement.addEventListener("click", function () {
  // Cek jawaban saat tombol submit diklik
  cekJawaban();

  if (state.faseSoal === "selesai") {
    state.indexSoal++;

    if (state.indexSoal < bankSoal.length) {
      loadSoal(); // Muat soal berikutnya jika masih ada
    } else {
      tampilkanFeedback("Selamat! Anda telah menyelesaikan semua soal.");
      // disable tombol submit jika semua soal sudah selesai
      state.disableInput();
    }
  }
});
*/
