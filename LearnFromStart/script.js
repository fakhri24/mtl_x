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

const maxPercobaan = 2;

/* ================================================================
   STATE
   ================================================================ */

const state = {
  indexSoal: 0,
  jawabanDipilih: undefined,
  faseSoal: "menjawab", // "menjawab" atau "selesai"
  jumlahPercobaan: 0,
  kunciJawaban: undefined,

  totalSoal: bankSoal.length,
  benar: 0,
  salah: 0,
  riwayatJawaban: [], // {index, benar: true/false}

  mode: "latihan", // "latihan" atau "review"
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

    for (let i = 0; i < pilihan.length; i++) {
      pilihan[i].value = bankSoal[index].pilihanGanda[i].label; // Set value sesuai dengan huruf pilihan (A, B, C, D)

      // Update label teks untuk setiap pilihan
      const labelElement = document.querySelector(
        `label[for="${pilihan[i].id}"]`,
      );

      labelElement.innerHTML = bankSoal[index].pilihanGanda[i].text;
    }

    state.kunciJawaban = bankSoal[index].jawaban; // Update kunci jawaban sesuai dengan soal yang dimuat

    ui.renderMath(soalElement);

    for (let i = 0; i < pilihan.length; i++) {
      const labelElement = document.querySelector(
        `label[for="${pilihan[i].id}"]`,
      );
      ui.renderMath(labelElement);
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

  renderMath(el) {
    KaTeXLoader.render(el);
  },

  renderRingkasan() {
    document.getElementById("totalSoal").textContent = state.totalSoal;
    document.getElementById("jumlahBenar").textContent = state.benar;
    document.getElementById("jumlahSalah").textContent = state.salah;
    document.getElementById("skorAkhir").textContent = hitungSkor();
    document.getElementById("hasilAkhir").hidden = false; // Tampilkan div hasil akhir
  },

  tandaiReview() {
    const jawabanBenar = bankSoal[state.indexSoal].jawaban;

    let jawabanUser = undefined;
    for (let i = 0; i < state.riwayatJawaban.length; i++) {
      if (state.riwayatJawaban[i].index === state.indexSoal) {
        jawabanUser = state.riwayatJawaban[i].jawaban;
        break;
      }
    }

    for (let i = 0; i < pilihan.length; i++) {
      const labelElement = document.querySelector(
        `label[for="${pilihan[i].id}"]`,
      );

      labelElement.classList.remove("benar", "salah", "dipilih"); // Hapus kelas sebelumnya

      if (pilihan[i].value === jawabanBenar) {
        labelElement.classList.add("benar"); // Tambahkan kelas untuk jawaban benar
        labelElement.innerHTML += "<strong>✅</strong>"; // Tambahkan teks penanda jawaban benar
      }

      if (pilihan[i].value === jawabanUser) {
        labelElement.classList.add("dipilih"); // Tambahkan kelas untuk jawaban yang dipilih user
        if (jawabanUser !== jawabanBenar) {
          labelElement.classList.add("salah"); // Tambahkan kelas untuk jawaban salah
          labelElement.innerHTML += "<strong>❌</strong>"; // Tambahkan teks penanda jawaban salah
        }
      }
    }
  },

  renderReviewList() {
    const listElement = document.getElementById("reviewList");
    listElement.innerHTML = ""; // Clear list sebelum diisi ulang

    state.riwayatJawaban
      .filter((item) => !item.benar)
      .forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Soal ke-${item.index + 1}`;
        listItem.style.cursor = "pointer";
        listItem.addEventListener("click", function () {
          controller.renderReview(item.index);
        });
        listElement.appendChild(listItem);
      });

    document.getElementById("reviewSection").hidden = false; // Tampilkan container list review
  },

  updateReviewNavigation() {
    document.getElementById("reviewNavigation").hidden = false; // Tampilkan container navigasi review

    const prevButton = document.getElementById("prevReviewButton");
    const nextButton = document.getElementById("nextReviewButton");

    if (!prevButton || !nextButton) return;

    prevButton.disabled = state.indexSoal === 0;
    nextButton.disabled = state.indexSoal === bankSoal.length - 1;
  },
};

/* ================================================================
   CONTROLLER
   ================================================================ */

const controller = {
  onRadioSelect(value) {
    if (state.mode === "review") return; // Tidak menyimpan jawaban jika sedang dalam mode review
    if (state.faseSoal !== "menjawab") return; // Hanya simpan jawaban jika fase soal adalah "menjawab"

    state.jawabanDipilih = value;
  },

  onSubmit() {
    if (state.mode === "review") return; // Tidak melakukan submit jika sedang dalam mode review

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
        state.benar++;
        state.riwayatJawaban.push({
          index: state.indexSoal,
          jawaban: state.jawabanDipilih,
          benar: true,
        });

        controller.lanjutSoal();
        break;

      case "SALAH_ULANG":
        state.jumlahPercobaan++;
        break;

      case "SALAH_LANJUT":
        state.jumlahPercobaan = 0; // Reset jumlah percobaan setelah mencapai batas
        state.faseSoal = "selesai";
        state.salah++;
        state.riwayatJawaban.push({
          index: state.indexSoal,
          jawaban: state.jawabanDipilih,
          benar: false,
        });

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
      ui.renderFeedback("Latihan selesai 🎉");
      ui.disableInput();
      ui.renderRingkasan(); // Tampilkan ringkasan hasil akhir
      ui.renderReviewList(); // Tampilkan daftar soal yang bisa direview
    }
  },

  resetUntukSoalBaru() {
    state.jawabanDipilih = undefined; // Reset jawaban yang dipilih untuk soal baru
    state.jumlahPercobaan = 0; // Reset jumlah percobaan untuk soal baru
    state.faseSoal = "menjawab"; // Set fase soal kembali ke "menjawab"
    ui.resetInput(); // Reset input pilihan ganda
    ui.clearFeedback(); // Clear feedback saat memulai soal baru
  },

  renderReview(index) {
    state.mode = "review";
    state.indexSoal = index;
    state.faseSoal = "selesai"; // Set fase soal ke "selesai" agar tidak bisa submit jawaban
    state.jawabanDipilih = undefined; // Reset jawaban yang dipilih

    ui.loadSoal(index); // Muat soal yang ingin direview
    ui.clearFeedback(); // Clear feedback saat memulai review
    ui.resetInput(); // Reset input pilihan ganda
    ui.disableInput(); // Nonaktifkan input agar tidak bisa submit jawaban saat review
    ui.tandaiReview(); // Tampilkan tanda jawaban benar/salah saat review
    ui.updateReviewNavigation(); // Update tombol navigasi review (jika ada)
  },

  prevReview() {
    if (state.mode !== "review") return;
    if (state.indexSoal <= 0) return;

    state.indexSoal--;
    controller.renderReview(state.indexSoal);
  },

  nextReview() {
    if (state.mode !== "review") return;
    if (state.indexSoal >= bankSoal.length - 1) return;

    state.indexSoal++;
    controller.renderReview(state.indexSoal);
  },
};

/* ================================================================
   HELPER FUNCTIONS
   ================================================================ */

function hitungSkor() {
  return Math.round((state.benar / state.totalSoal) * 100);
}

const KaTeXLoader = (function () {
  let siap = false;
  let antrian = [];

  function cekSiap() {
    if (typeof renderMathInElement === "function") {
      siap = true;

      // jalankan semua render yang tertunda
      for (let i = 0; i < antrian.length; i++) {
        jalankanRender(antrian[i]);
      }
      antrian = [];
    }
  }

  function jalankanRender(el) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
    });
  }

  // polling ringan, aman untuk static site
  const interval = setInterval(() => {
    cekSiap();
    if (siap) clearInterval(interval);
  }, 50);

  return {
    render(el) {
      if (siap) {
        jalankanRender(el);
      } else {
        antrian.push(el);
      }
    },
  };
})();

/* ================================================================
   EVENT BINDING
   ================================================================ */

const indexSoalElement = document.getElementById("indexSoal");
const soalElement = document.getElementById("soal");
const tombolSubmitElement = document.getElementById("tombolSubmit");
const feedbackElement = document.getElementById("feedback");
const tombolPrevReview = document.getElementById("prevReviewButton");
const tombolNextReview = document.getElementById("nextReviewButton");
let pilihan = document.getElementsByName("pilihan");

for (let i = 0; i < pilihan.length; i++) {
  pilihan[i].addEventListener("change", function () {
    // Simpan jawaban yang dipilih saat pengguna mengklik pilihan
    controller.onRadioSelect(pilihan[i].value);
  });
}

tombolSubmitElement.addEventListener("click", function () {
  controller.onSubmit();
});

tombolPrevReview.addEventListener("click", function () {
  controller.prevReview();
});

tombolNextReview.addEventListener("click", function () {
  controller.nextReview();
});

/* ================================================================
   INISIALISASI APLIKASI
   ================================================================ */

ui.loadSoal(state.indexSoal); // Muat soal pertama saat halaman dimuat
