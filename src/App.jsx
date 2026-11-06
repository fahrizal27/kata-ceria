import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  GraduationCap,
  Lightbulb,
  RotateCcw,
  Sparkles,
  Star,
  Trophy,
  X,
  Zap,
} from "lucide-react";

const lessons = [
  {
    id: "kapital",
    number: "01",
    emoji: "🔠",
    title: "Huruf Kapital",
    shortTitle: "Huruf kapital",
    subtitle: "Kenali kapan huruf besar digunakan.",
    color: "orange",
    duration: "10 menit",
    objective:
      "Setelah belajar, kamu dapat mengenali dan menggunakan huruf kapital pada awal kalimat, nama orang, nama hari, nama bulan, dan nama tempat.",
    intro:
      "Huruf kapital adalah huruf besar, seperti A, B, dan C. Huruf kapital membantu tulisan menjadi jelas dan sesuai aturan Bahasa Indonesia.",
    points: [
      {
        title: "Awal kalimat",
        detail: "Gunakan huruf kapital pada huruf pertama setiap kalimat.",
        example: "Hari ini cuaca cerah.",
        icon: "☀️",
      },
      {
        title: "Nama orang",
        detail: "Nama orang diawali huruf kapital.",
        example: "Namaku Siti Aminah.",
        icon: "🧒",
      },
      {
        title: "Hari dan bulan",
        detail: "Nama hari dan bulan ditulis dengan huruf kapital.",
        example: "Kami libur pada hari Minggu di bulan Mei.",
        icon: "🗓️",
      },
      {
        title: "Nama tempat",
        detail: "Nama tempat atau daerah diawali huruf kapital.",
        example: "Paman tinggal di Jepara.",
        icon: "📍",
      },
    ],
    tip: "Ingat: awal kalimat, nama orang, nama hari, nama bulan, dan nama tempat memakai huruf kapital.",
    examples: [
      {
        wrong: "aku pergi ke bandung.",
        right: "Aku pergi ke Bandung.",
        note: "Awal kalimat dan nama tempat.",
      },
      {
        wrong: "hari ini hari selasa.",
        right: "Hari ini hari Selasa.",
        note: "Awal kalimat dan nama hari.",
      },
      {
        wrong: "nama adikku bima.",
        right: "Nama adikku Bima.",
        note: "Awal kalimat dan nama orang.",
      },
    ],
    practice: {
      easy: [
        {
          stimulus: "pada hari senin, lani pergi ke surabaya.",
          question: "Pilih penulisan kalimat yang benar.",
          options: [
            "Pada hari Senin, Lani pergi ke Surabaya.",
            "pada hari Senin, lani pergi ke surabaya.",
            "Pada Hari senin, Lani pergi ke surabaya.",
            "Pada hari senin, lani pergi ke Surabaya.",
          ],
          answer: 0,
          explanation:
            "Huruf pertama kalimat, nama hari, nama orang, dan nama tempat harus diawali huruf kapital.",
        },
        {
          stimulus: "ayah pergi ke jakarta pada bulan juni.",
          question: "Kalimat yang sudah diperbaiki dengan tepat adalah ...",
          options: [
            "Ayah pergi ke Jakarta pada bulan Juni.",
            "Ayah pergi ke jakarta pada bulan juni.",
            "ayah pergi ke Jakarta pada Bulan Juni.",
            "Ayah pergi ke jakarta pada Bulan juni.",
          ],
          answer: 0,
          explanation:
            "Awal kalimat menggunakan kapital. Jakarta adalah nama tempat dan Juni adalah nama bulan.",
        },
        {
          stimulus: "setiap hari jumat, nisa berlatih menari.",
          question: "Manakah penulisan yang tepat?",
          options: [
            "Setiap hari Jumat, Nisa berlatih menari.",
            "Setiap hari jumat, nisa berlatih menari.",
            "setiap hari Jumat, Nisa berlatih menari.",
            "Setiap Hari Jumat, Nisa berlatih menari.",
          ],
          answer: 0,
          explanation:
            "Jumat adalah nama hari, Nisa adalah nama orang, dan awal kalimat harus memakai huruf kapital.",
        },
      ],
      hard: [
        {
          stimulus:
            "pada hari minggu, bayu dan rina pergi ke semarang. mereka mengunjungi lawang sewu. setelah itu, mereka makan bersama di jalan pandanaran.",
          question: "Perbaikan kalimat pertama yang tepat adalah ...",
          options: [
            "Pada hari Minggu, Bayu dan Rina pergi ke Semarang.",
            "Pada Hari Minggu, bayu dan rina pergi ke semarang.",
            "pada hari Minggu, Bayu dan Rina pergi ke Semarang.",
            "Pada hari minggu, Bayu dan Rina pergi ke semarang.",
          ],
          answer: 0,
          explanation:
            "Kata pertama kalimat, nama hari, nama orang, dan nama kota harus diawali huruf kapital.",
        },
        {
          stimulus:
            "pada hari minggu, bayu dan rina pergi ke semarang. mereka mengunjungi lawang sewu. setelah itu, mereka makan bersama di jalan pandanaran.",
          question:
            "Kelompok kata yang harus diawali huruf kapital pada teks adalah ...",
          options: [
            "Minggu, Bayu, Rina, Semarang",
            "hari, pergi, bersama, makan",
            "dan, ke, di, setelah",
            "mengunjungi, mereka, itu, bersama",
          ],
          answer: 0,
          explanation:
            "Minggu adalah nama hari; Bayu dan Rina nama orang; Semarang nama tempat.",
        },
        {
          stimulus:
            "pada hari minggu, bayu dan rina pergi ke semarang. mereka mengunjungi lawang sewu. setelah itu, mereka makan bersama di jalan pandanaran.",
          question: "Kalimat kedua yang penulisannya tepat adalah ...",
          options: [
            "Mereka mengunjungi Lawang Sewu.",
            "mereka mengunjungi lawang sewu.",
            "Mereka mengunjungi lawang sewu.",
            "Mereka Mengunjungi Lawang sewu.",
          ],
          answer: 0,
          explanation:
            "Awal kalimat menggunakan huruf kapital. Nama bangunan atau tempat khusus, Lawang Sewu, juga menggunakan huruf kapital.",
        },
      ],
    },
  },
  {
    id: "rumpang",
    number: "02",
    emoji: "🧩",
    title: "Kata Rumpang",
    shortTitle: "Kata rumpang",
    subtitle: "Pilih kata yang paling cocok dengan konteks.",
    color: "violet",
    duration: "10 menit",
    objective:
      "Setelah belajar, kamu dapat melengkapi kalimat atau teks dengan kata yang sesuai berdasarkan petunjuk makna dan bank kata.",
    intro:
      "Kata rumpang adalah kata yang sengaja dihilangkan dari kalimat atau teks. Kita perlu membaca seluruh kalimat agar dapat memilih kata yang paling tepat.",
    points: [
      {
        title: "Baca kalimatnya",
        detail: "Pahami isi kalimat sebelum memilih kata.",
        example: "Ibu memasak nasi di ....",
        icon: "👀",
      },
      {
        title: "Cari petunjuk makna",
        detail: "Perhatikan kata lain yang memberi petunjuk.",
        example: "Ibu memasak nasi di dapur.",
        icon: "💡",
      },
      {
        title: "Pilih kata yang cocok",
        detail: "Pilih kata yang membuat kalimat masuk akal.",
        example: "Dapur adalah tempat untuk memasak.",
        icon: "✅",
      },
      {
        title: "Baca ulang",
        detail: "Pastikan kalimat lengkap dan mudah dipahami.",
        example: "Ibu memasak nasi di dapur.",
        icon: "📖",
      },
    ],
    tip: "Jangan terburu-buru! Baca kalimat sebelum dan sesudah bagian yang kosong untuk menemukan petunjuk.",
    examples: [
      {
        wrong: "Kakak membaca ... di perpustakaan.",
        right: "Kakak membaca buku di perpustakaan.",
        note: "Buku cocok dengan kegiatan membaca.",
      },
      {
        wrong: "Saat hujan, kita memakai ... .",
        right: "Saat hujan, kita memakai payung.",
        note: "Payung melindungi tubuh dari air hujan.",
      },
      {
        wrong: "Petani menanam padi di ... .",
        right: "Petani menanam padi di sawah.",
        note: "Sawah adalah tempat menanam padi.",
      },
    ],
    practice: {
      easy: [
        {
          stimulus: "Kakak membaca ... di perpustakaan.",
          bank: "buku · berenang · tinggi · berlari",
          question: "Kata yang tepat untuk melengkapi kalimat adalah ...",
          options: ["buku", "berenang", "tinggi", "berlari"],
          answer: 0,
          explanation:
            "Di perpustakaan, kakak dapat membaca buku. Kata itu paling sesuai dengan makna kalimat.",
        },
        {
          stimulus: "Setiap pagi, Ibu menyiram ... di halaman.",
          bank: "tanaman · sepatu · awan · pensil",
          question: "Kata yang tepat untuk bagian rumpang adalah ...",
          options: ["sepatu", "awan", "tanaman", "pensil"],
          answer: 2,
          explanation: "Tanaman perlu disiram agar tetap segar dan tumbuh.",
        },
        {
          stimulus: "Kami memakai payung saat turun ... .",
          bank: "hujan · panas · malam · angin",
          question: "Kata yang paling sesuai adalah ...",
          options: ["malam", "hujan", "panas", "angin"],
          answer: 1,
          explanation:
            "Payung digunakan untuk melindungi diri ketika hujan turun.",
        },
      ],
      hard: [
        {
          stimulus:
            "Pagi itu, Sasa bangun pukul enam. Ia segera merapikan ... tidurnya. Setelah mandi, Sasa sarapan dengan ... . Ia lalu berangkat ke sekolah dengan ... .",
          bank: "tempat · roti · sepeda · awan · buku",
          question:
            "Kata yang tepat untuk melengkapi bagian pertama adalah ...",
          options: ["roti", "sepeda", "tempat", "buku"],
          answer: 2,
          explanation:
            "Ungkapan yang tepat adalah 'merapikan tempat tidur'. Petunjuknya adalah kata 'tidur' setelah bagian kosong.",
        },
        {
          stimulus:
            "Pagi itu, Sasa bangun pukul enam. Ia segera merapikan ... tidurnya. Setelah mandi, Sasa sarapan dengan ... . Ia lalu berangkat ke sekolah dengan ... .",
          bank: "tempat · roti · sepeda · awan · buku",
          question: "Kata yang sesuai untuk melengkapi bagian kedua adalah ...",
          options: ["awan", "roti", "sepeda", "tempat"],
          answer: 1,
          explanation:
            "Setelah mandi, Sasa sarapan. Roti merupakan makanan yang dapat disantap saat sarapan.",
        },
        {
          stimulus:
            "Pagi itu, Sasa bangun pukul enam. Ia segera merapikan ... tidurnya. Setelah mandi, Sasa sarapan dengan ... . Ia lalu berangkat ke sekolah dengan ... .",
          bank: "tempat · roti · sepeda · awan · buku",
          question:
            "Kata yang tepat untuk melengkapi bagian terakhir adalah ...",
          options: ["buku", "roti", "tempat", "sepeda"],
          answer: 3,
          explanation:
            "Sepeda adalah kendaraan yang dapat digunakan Sasa untuk berangkat ke sekolah.",
        },
      ],
    },
  },
  {
    id: "teks",
    number: "03",
    emoji: "🔎",
    title: "Memahami Teks",
    shortTitle: "Pemahaman teks",
    subtitle: "Temukan informasi yang tertulis langsung.",
    color: "cyan",
    duration: "10 menit",
    objective:
      "Setelah belajar, kamu dapat membaca teks pendek dan menemukan informasi yang dinyatakan secara langsung di dalam teks.",
    intro:
      "Memahami teks berarti mengetahui isi bacaan. Kita dapat menemukan informasi dengan membaca teliti dan mencari jawaban yang tertulis di dalam teks.",
    points: [
      {
        title: "Baca dengan teliti",
        detail: "Baca teks dari awal sampai akhir.",
        example: "Beni memelihara seekor kucing.",
        icon: "📚",
      },
      {
        title: "Cari kata kunci",
        detail: "Perhatikan nama orang, tempat, waktu, dan kegiatan.",
        example: "Kucing Beni bernama Miko.",
        icon: "🔍",
      },
      {
        title: "Temukan jawaban",
        detail: "Cocokkan pertanyaan dengan informasi dalam teks.",
        example: "Nama kucing Beni adalah Miko.",
        icon: "🎯",
      },
      {
        title: "Periksa kembali",
        detail: "Pastikan jawaban sesuai dengan isi bacaan.",
        example: "Miko adalah seekor kucing.",
        icon: "✅",
      },
    ],
    tip: "Cari jawabannya di dalam teks. Jangan menambahkan informasi yang tidak disebutkan oleh penulis.",
    examples: [
      {
        wrong: "Beni memelihara seekor kucing bernama Miko.",
        right: "Hewan peliharaan Beni adalah kucing.",
        note: "Informasi tentang hewan peliharaan.",
      },
      {
        wrong: "Miko berwarna putih dan suka tidur di kursi.",
        right: "Warna Miko adalah putih.",
        note: "Informasi tentang ciri-ciri Miko.",
      },
      {
        wrong: "Setiap sore, Beni memberi Miko makan.",
        right: "Beni memberi makan Miko setiap sore.",
        note: "Informasi tentang waktu kegiatan.",
      },
    ],
    practice: {
      easy: [
        {
          stimulus:
            "Beni memelihara seekor kucing bernama Miko. Kucing itu berwarna putih.",
          question: "Hewan apa yang dipelihara Beni?",
          options: ["Kelinci", "Kucing", "Burung", "Ikan"],
          answer: 1,
          explanation:
            "Pada kalimat pertama tertulis bahwa Beni memelihara seekor kucing.",
        },
        {
          stimulus:
            "Beni memelihara seekor kucing bernama Miko. Kucing itu berwarna putih.",
          question: "Siapa nama kucing Beni?",
          options: ["Milo", "Beni", "Miko", "Putih"],
          answer: 2,
          explanation:
            "Teks menyebutkan secara langsung bahwa nama kucing Beni adalah Miko.",
        },
        {
          stimulus:
            "Beni memelihara seekor kucing bernama Miko. Kucing itu berwarna putih.",
          question: "Apa warna kucing Beni?",
          options: ["Hitam", "Cokelat", "Abu-abu", "Putih"],
          answer: 3,
          explanation:
            "Kalimat kedua menyatakan bahwa kucing itu berwarna putih.",
        },
      ],
      hard: [
        {
          stimulus:
            "Pada hari Minggu, keluarga Rara pergi ke pantai. Mereka berangkat pukul tujuh pagi menggunakan mobil. Di pantai, Rara bermain pasir bersama adiknya. Ibu menyiapkan bekal berupa nasi goreng dan buah semangka. Sebelum pulang, mereka mengumpulkan sampah di sekitar tempat duduk.",
          question: "Kapan keluarga Rara pergi ke pantai?",
          options: ["Hari Sabtu", "Hari Minggu", "Hari Senin", "Hari Jumat"],
          answer: 1,
          explanation:
            "Kalimat pertama menyebutkan bahwa keluarga Rara pergi ke pantai pada hari Minggu.",
        },
        {
          stimulus:
            "Pada hari Minggu, keluarga Rara pergi ke pantai. Mereka berangkat pukul tujuh pagi menggunakan mobil. Di pantai, Rara bermain pasir bersama adiknya. Ibu menyiapkan bekal berupa nasi goreng dan buah semangka. Sebelum pulang, mereka mengumpulkan sampah di sekitar tempat duduk.",
          question: "Dengan kendaraan apa keluarga Rara pergi?",
          options: ["Bus", "Sepeda", "Mobil", "Kereta"],
          answer: 2,
          explanation:
            "Pada kalimat kedua tertulis bahwa mereka menggunakan mobil.",
        },
        {
          stimulus:
            "Pada hari Minggu, keluarga Rara pergi ke pantai. Mereka berangkat pukul tujuh pagi menggunakan mobil. Di pantai, Rara bermain pasir bersama adiknya. Ibu menyiapkan bekal berupa nasi goreng dan buah semangka. Sebelum pulang, mereka mengumpulkan sampah di sekitar tempat duduk.",
          question: "Apa yang dilakukan keluarga Rara sebelum pulang?",
          options: [
            "Membeli mainan",
            "Berenang di laut",
            "Mengumpulkan sampah",
            "Membuat istana pasir",
          ],
          answer: 2,
          explanation:
            "Kalimat terakhir menyatakan bahwa mereka mengumpulkan sampah sebelum pulang.",
        },
      ],
    },
  },
];

const palette = {
  orange: {
    soft: "bg-orange-50",
    lighter: "bg-orange-100",
    text: "text-orange-700",
    strong: "bg-orange-500",
    border: "border-orange-200",
    ring: "ring-orange-200",
    gradient: "from-orange-400 to-rose-400",
    dot: "bg-orange-400",
  },
  violet: {
    soft: "bg-violet-50",
    lighter: "bg-violet-100",
    text: "text-violet-700",
    strong: "bg-violet-500",
    border: "border-violet-200",
    ring: "ring-violet-200",
    gradient: "from-violet-500 to-fuchsia-400",
    dot: "bg-violet-400",
  },
  cyan: {
    soft: "bg-cyan-50",
    lighter: "bg-cyan-100",
    text: "text-cyan-700",
    strong: "bg-cyan-500",
    border: "border-cyan-200",
    ring: "ring-cyan-200",
    gradient: "from-cyan-400 to-sky-500",
    dot: "bg-cyan-400",
  },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProgressBar({ value, color = "bg-violet-500" }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
      <motion.div
        className={cx("h-full rounded-full", color)}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-500">
        {Icon ? <Icon size={15} /> : <Sparkles size={15} />}
        {eyebrow}
      </div>
      <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}

function MaterialView({ lesson, onStartPractice }) {
  const theme = palette[lesson.color];
  return (
    <motion.div
      key={lesson.id}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      <div
        className={cx(
          "relative overflow-hidden rounded-[2rem] border p-6 sm:p-8",
          theme.soft,
          theme.border,
        )}
      >
        <div className="absolute -right-8 -top-10 h-44 w-44 rounded-full bg-white/50 blur-2xl" />
        <div className="relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <div
              className={cx(
                "mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold",
                theme.text,
              )}
            >
              <span>{lesson.emoji}</span> Materi {lesson.number}{" "}
              <span className="text-slate-300">•</span> {lesson.duration}
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              {lesson.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              {lesson.intro}
            </p>
          </div>
          <motion.div
            animate={{ y: [0, -7, 0], rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-[2rem] bg-white text-6xl shadow-lg shadow-slate-200/70 sm:mx-0 sm:h-36 sm:w-36 sm:text-7xl"
          >
            {lesson.emoji}
          </motion.div>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-2xl bg-violet-100 p-2.5 text-violet-600">
              <GraduationCap size={21} />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900">
                Yang akan kamu pelajari
              </h3>
              <p className="text-xs text-slate-400">Tujuan pembelajaran</p>
            </div>
          </div>
          <p className="mb-6 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
            {lesson.objective}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl border border-slate-100 p-4 transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-xl">
                    {point.icon}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-800">
                    {point.title}
                  </h4>
                </div>
                <p className="text-xs leading-5 text-slate-500">
                  {point.detail}
                </p>
                <p
                  className={cx(
                    "mt-3 rounded-xl px-3 py-2 text-xs font-semibold",
                    theme.soft,
                    theme.text,
                  )}
                >
                  {point.example}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="space-y-5">
          <section className="rounded-[1.75rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-xl bg-amber-100 p-2 text-amber-600">
                <Lightbulb size={19} />
              </div>
              <h3 className="font-extrabold text-slate-900">Contoh yuk!</h3>
            </div>
            <div className="space-y-3">
              {lesson.examples.map((example, index) => (
                <div key={index} className="rounded-2xl bg-slate-50 p-3.5">
                  <p className="text-xs text-slate-400 line-through">
                    {example.wrong}
                  </p>
                  <p className="mt-1 text-sm font-bold text-emerald-700">
                    {example.right}
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    {example.note}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-amber-300 via-orange-300 to-rose-300 p-5 text-orange-950 shadow-sm sm:p-6">
            <Sparkles className="absolute -right-2 -top-2 h-20 w-20 rotate-12 text-white/40" />
            <div className="relative">
              <div className="mb-2 flex items-center gap-2 text-sm font-black">
                <Star size={17} fill="currentColor" /> Ingat ini!
              </div>
              <p className="text-sm font-semibold leading-6">{lesson.tip}</p>
              <button
                onClick={onStartPractice}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-extrabold text-orange-700 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/60"
              >
                Mulai latihan <ArrowRight size={15} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

function PracticeHome({ onStart, completedByLesson }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <SectionHeading
        eyebrow="Saatnya mencoba"
        title="Pilih tantanganmu!"
        description="Setiap materi punya dua level latihan. Mulai dari kalimat sederhana, lalu tantang dirimu dengan bacaan yang lebih panjang."
        icon={Zap}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {lessons.map((lesson, index) => {
          const theme = palette[lesson.color];
          const easyDone = completedByLesson[`${lesson.id}-easy`];
          const hardDone = completedByLesson[`${lesson.id}-hard`];
          return (
            <motion.article
              key={lesson.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100/70"
            >
              <div className={cx("p-5", theme.soft)}>
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    {lesson.emoji}
                  </span>
                  <span
                    className={cx(
                      "rounded-full bg-white/80 px-3 py-1 text-[10px] font-extrabold",
                      theme.text,
                    )}
                  >
                    MATERI {lesson.number}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-black text-slate-900">
                  {lesson.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {lesson.subtitle}
                </p>
              </div>
              <div className="space-y-3 p-5">
                <button
                  onClick={() => onStart(lesson.id, "easy")}
                  className="group flex w-full items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50/70 p-3.5 text-left transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600">
                      <Star size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-extrabold text-slate-800">
                        Level Mudah
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        Stimulasi kalimat
                      </span>
                    </span>
                  </div>
                  {easyDone ? (
                    <CheckCircle2 className="text-emerald-500" size={19} />
                  ) : (
                    <ChevronRight
                      className="text-slate-400 transition group-hover:translate-x-1"
                      size={19}
                    />
                  )}
                </button>
                <button
                  onClick={() => onStart(lesson.id, "hard")}
                  className="group flex w-full items-center justify-between rounded-2xl border border-violet-100 bg-violet-50/70 p-3.5 text-left transition hover:border-violet-300 hover:bg-violet-50"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-violet-600">
                      <Zap size={18} />
                    </span>
                    <span>
                      <span className="block text-sm font-extrabold text-slate-800">
                        Level Sulit
                      </span>
                      <span className="block text-[11px] text-slate-500">
                        Stimulasi teks
                      </span>
                    </span>
                  </div>
                  {hardDone ? (
                    <CheckCircle2 className="text-violet-500" size={19} />
                  ) : (
                    <ChevronRight
                      className="text-slate-400 transition group-hover:translate-x-1"
                      size={19}
                    />
                  )}
                </button>
                {(easyDone || hardDone) && (
                  <p className="flex items-center gap-1.5 pt-1 text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 size={13} />{" "}
                    {Number(easyDone) + Number(hardDone)} dari 2 level selesai
                  </p>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-between gap-3 rounded-[1.5rem] bg-gradient-to-r from-violet-600 to-indigo-500 p-5 text-white sm:flex-row sm:px-7">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/15 p-3">
            <Trophy size={25} />
          </div>
          <div>
            <p className="font-extrabold">Berani mencoba, hebat hasilnya!</p>
            <p className="text-xs text-white/75">
              Selesaikan semua level untuk mengumpulkan bintang.
            </p>
          </div>
        </div>
        <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold">
          6 tantangan tersedia
        </span>
      </div>
    </motion.div>
  );
}

function QuizView({
  lesson,
  level,
  questionIndex,
  selectedOption,
  submitted,
  sessionScore,
  finished,
  lastScore,
  onSelect,
  onSubmit,
  onNext,
  onRetry,
  onBack,
}) {
  const questions = lesson.practice[level];
  const question = questions[questionIndex];
  const theme = palette[lesson.color];
  const isCorrect = selectedOption === question.answer;
  const progress = finished
    ? 100
    : ((questionIndex + (submitted ? 1 : 0)) / questions.length) * 100;

  if (finished) {
    const percentage = Math.round((lastScore / questions.length) * 100);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto max-w-2xl rounded-[2rem] border border-slate-100 bg-white p-7 text-center shadow-xl shadow-violet-100/60 sm:p-10"
      >
        <motion.div
          animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-amber-100 text-5xl"
        >
          {percentage >= 70 ? "🏆" : "🌱"}
        </motion.div>
        <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-violet-500">
          Latihan selesai
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">
          {percentage >= 70 ? "Hebat sekali!" : "Terus berlatih!"}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
          {percentage >= 70
            ? "Kamu sudah memahami materi ini dengan baik. Pertahankan semangat belajarmu!"
            : "Tidak apa-apa, setiap latihan membuatmu semakin pintar. Coba lagi agar makin lancar."}
        </p>
        <div className="mx-auto my-7 grid max-w-sm grid-cols-2 gap-3">
          <div className="rounded-2xl bg-violet-50 p-4">
            <p className="text-3xl font-black text-violet-700">
              {lastScore}/{questions.length}
            </p>
            <p className="mt-1 text-[11px] font-bold text-violet-400">
              Jawaban benar
            </p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4">
            <p className="text-3xl font-black text-amber-600">{percentage}%</p>
            <p className="mt-1 text-[11px] font-bold text-amber-500">
              Nilai kamu
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
          >
            <RotateCcw size={16} /> Ulangi latihan
          </button>
          <button
            onClick={onBack}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-extrabold text-slate-600 transition hover:bg-slate-50"
          >
            Pilih level lain <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={`${lesson.id}-${level}-${questionIndex}`}
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -18 }}
      className="mx-auto max-w-3xl"
    >
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 transition hover:text-violet-600"
        >
          <ArrowLeft size={15} /> Kembali ke pilihan level
        </button>
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm">
          <span
            className={cx(
              "h-2 w-2 rounded-full",
              level === "easy" ? "bg-emerald-400" : "bg-violet-500",
            )}
          />
          Level {level === "easy" ? "Mudah" : "Sulit"}{" "}
          <span className="text-slate-300">•</span> Soal {questionIndex + 1}/
          {questions.length}
        </div>
      </div>
      <div className="mb-5 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold text-slate-400">
          <span>PROGRES LATIHAN</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <ProgressBar
          value={progress}
          color={level === "easy" ? "bg-emerald-400" : "bg-violet-500"}
        />
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-violet-100/50">
        <div
          className={cx(
            "flex items-center justify-between px-6 py-5",
            theme.soft,
          )}
        >
          <div>
            <p
              className={cx(
                "text-[10px] font-extrabold uppercase tracking-[0.16em]",
                theme.text,
              )}
            >
              {lesson.shortTitle}
            </p>
            <h2 className="mt-1 text-lg font-black text-slate-900">
              Ayo jawab dengan teliti!
            </h2>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl shadow-sm">
            {lesson.emoji}
          </div>
        </div>
        <div className="p-5 sm:p-7">
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold text-slate-400">
              <BookOpen size={15} />{" "}
              {level === "easy" ? "Stimulus kalimat" : "Stimulus teks"}
            </div>
            <div
              className={cx(
                "rounded-2xl border p-4 sm:p-5",
                theme.soft,
                theme.border,
              )}
            >
              {question.stimulus && (
                <p className="text-sm font-semibold leading-7 text-slate-700">
                  {question.stimulus}
                </p>
              )}
              {question.bank && (
                <div className="mt-4 border-t border-violet-200/70 pt-3">
                  <p className="mb-2 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    Bank kata
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {question.bank.split(" · ").map((word) => (
                      <span
                        key={word}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-violet-700 shadow-sm"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <h3 className="mb-4 text-base font-extrabold leading-7 text-slate-900">
            {question.question}
          </h3>
          <div className="grid gap-2.5">
            {question.options.map((option, index) => {
              const chosen = selectedOption === index;
              const correct = submitted && index === question.answer;
              const wrong = submitted && chosen && !isCorrect;
              return (
                <button
                  key={`${questionIndex}-${index}`}
                  disabled={submitted}
                  onClick={() => onSelect(index)}
                  className={cx(
                    "group flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left transition sm:p-4",
                    correct
                      ? "border-emerald-300 bg-emerald-50"
                      : wrong
                        ? "border-rose-300 bg-rose-50"
                        : chosen
                          ? "border-violet-400 bg-violet-50 ring-4 ring-violet-100"
                          : "border-slate-100 bg-white hover:border-violet-200 hover:bg-violet-50/50",
                    submitted && !correct && !wrong && "opacity-60",
                  )}
                >
                  <span
                    className={cx(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black",
                      correct
                        ? "bg-emerald-500 text-white"
                        : wrong
                          ? "bg-rose-500 text-white"
                          : chosen
                            ? "bg-violet-600 text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-violet-100 group-hover:text-violet-700",
                    )}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-sm font-semibold leading-6 text-slate-700">
                    {option}
                  </span>
                  {correct && (
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-emerald-500"
                    />
                  )}
                  {wrong && <X size={19} className="shrink-0 text-rose-500" />}
                </button>
              );
            })}
          </div>
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className={cx(
                  "mt-5 overflow-hidden rounded-2xl border p-4",
                  isCorrect
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-amber-200 bg-amber-50",
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cx(
                      "mt-0.5 rounded-xl p-2",
                      isCorrect
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-amber-100 text-amber-600",
                    )}
                  >
                    {isCorrect ? <Check size={18} /> : <Lightbulb size={18} />}
                  </span>
                  <div>
                    <p
                      className={cx(
                        "text-sm font-extrabold",
                        isCorrect ? "text-emerald-800" : "text-amber-800",
                      )}
                    >
                      {isCorrect
                        ? "Jawabanmu benar!"
                        : "Belum tepat, yuk pelajari lagi."}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-600">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mt-6 flex flex-col-reverse justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[11px] font-semibold text-slate-400">
              {submitted
                ? `${sessionScore} jawaban benar sejauh ini`
                : "Pilih satu jawaban yang paling tepat."}
            </p>
            {!submitted ? (
              <button
                disabled={selectedOption === null}
                onClick={onSubmit}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-3 text-sm font-extrabold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
              >
                Periksa jawaban <Check size={16} />
              </button>
            ) : (
              <button
                onClick={onNext}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-7 py-3 text-sm font-extrabold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
              >
                {questionIndex === questions.length - 1
                  ? "Lihat hasil"
                  : "Soal berikutnya"}{" "}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [activeLessonId, setActiveLessonId] = useState("kapital");
  const [activeSection, setActiveSection] = useState("materi");
  const [activeLevel, setActiveLevel] = useState("easy");
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [completedByLesson, setCompletedByLesson] = useState({});

  const activeLesson = useMemo(
    () => lessons.find((lesson) => lesson.id === activeLessonId) || lessons[0],
    [activeLessonId],
  );
  const completedCount =
    Object.values(completedByLesson).filter(Boolean).length;
  const totalProgress = Math.round((completedCount / 6) * 100);

  const resetQuiz = () => {
    setQuestionIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setSessionScore(0);
    setLastScore(0);
    setFinished(false);
  };

  const chooseLesson = (id) => {
    setActiveLessonId(id);
    setActiveSection("materi");
    setQuizStarted(false);
    resetQuiz();
  };

  const startPractice = (id = activeLessonId, level = "easy") => {
    setActiveLessonId(id);
    setActiveLevel(level);
    setActiveSection("latihan");
    setQuizStarted(true);
    resetQuiz();
  };

  const submitAnswer = () => {
    if (selectedOption === null || submitted) return;
    setSubmitted(true);
    if (
      selectedOption ===
      activeLesson.practice[activeLevel][questionIndex].answer
    ) {
      setSessionScore((score) => score + 1);
    }
  };

  const nextQuestion = () => {
    const totalQuestions = activeLesson.practice[activeLevel].length;
    if (questionIndex === totalQuestions - 1) {
      setLastScore(sessionScore);
      setFinished(true);
      setCompletedByLesson((previous) => ({
        ...previous,
        [`${activeLessonId}-${activeLevel}`]: true,
      }));
    } else {
      setQuestionIndex((index) => index + 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };

  const navItems = [
    { id: "materi", label: "Materi", icon: BookOpen },
    { id: "latihan", label: "Latihan", icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F8F8FF] text-slate-800 selection:bg-violet-200 selection:text-violet-900">
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-200/25 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-7 lg:px-10">
          <button
            onClick={() => {
              setActiveSection("materi");
              setQuizStarted(false);
            }}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-200">
              <BookOpenCheck size={22} />
            </div>
            <div>
              <p className="text-base font-black tracking-tight text-slate-900">
                Kata<span className="text-violet-600">Ceria</span>
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Ruang belajar bahasa
              </p>
            </div>
          </button>

          <div className="flex items-center gap-2 rounded-full bg-violet-50 px-3 py-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-200 text-sm">
              🧑‍🎓
            </span>
            <span className="hidden text-xs font-extrabold text-violet-700 sm:block">
              Pelajar Hebat
            </span>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto grid max-w-[1440px] gap-6 px-4 py-6 sm:px-7 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8 lg:px-10 lg:py-9">
        <aside className="space-y-5">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-violet-600 via-violet-600 to-indigo-500 p-5 text-white shadow-xl shadow-violet-200/70">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                Kelas 3
              </span>
              <Sparkles size={18} className="text-amber-200" />
            </div>
            <h1 className="mt-5 text-2xl font-black leading-tight">
              Petualangan
              <br />
              Bahasa Indonesia
            </h1>
            <p className="mt-2 text-xs leading-5 text-white/75">
              Baca, pahami, dan berlatih bersama. Kamu pasti bisa!
            </p>
            <div className="mt-6 rounded-2xl bg-white/10 p-3.5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-bold text-white/80">
                  Progres belajar
                </span>
                <span className="text-xs font-black">{totalProgress}%</span>
              </div>
              <ProgressBar value={totalProgress} color="bg-amber-300" />
              <p className="mt-2 text-[10px] text-white/70">
                {completedCount} dari 6 level latihan selesai
              </p>
            </div>
          </div>

          <nav className="rounded-[1.75rem] border border-slate-100 bg-white p-3 shadow-sm">
            <p className="px-3 pb-2 pt-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
              Menu utama
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setQuizStarted(false);
                  }}
                  className={cx(
                    "mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold transition",
                    active
                      ? "bg-violet-50 text-violet-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800",
                  )}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                  {active && <ChevronRight size={16} className="ml-auto" />}
                </button>
              );
            })}
            <div className="my-3 border-t border-slate-100" />
            <p className="px-3 pb-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
              Daftar materi
            </p>
            <div className="space-y-1">
              {lessons.map((lesson) => {
                const active = activeLessonId === lesson.id;
                const theme = palette[lesson.color];
                return (
                  <button
                    key={lesson.id}
                    onClick={() => chooseLesson(lesson.id)}
                    className={cx(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition",
                      active
                        ? "bg-slate-50 ring-1 ring-slate-100"
                        : "hover:bg-slate-50",
                    )}
                  >
                    <span
                      className={cx(
                        "flex h-9 w-9 items-center justify-center rounded-xl text-lg",
                        theme.soft,
                      )}
                    >
                      {lesson.emoji}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cx(
                          "block truncate text-xs font-extrabold",
                          active ? "text-slate-900" : "text-slate-500",
                        )}
                      >
                        {lesson.shortTitle}
                      </span>
                      <span className="mt-0.5 block text-[10px] text-slate-400">
                        Materi {lesson.number}
                      </span>
                    </span>
                    {completedByLesson[`${lesson.id}-easy`] &&
                    completedByLesson[`${lesson.id}-hard`] ? (
                      <CheckCircle2 size={16} className="text-emerald-500" />
                    ) : (
                      <span
                        className={cx(
                          "h-2 w-2 rounded-full",
                          active ? theme.dot : "bg-slate-200",
                        )}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>
          <div className="hidden rounded-[1.5rem] border border-amber-100 bg-amber-50 p-4 lg:block">
            <div className="flex items-center gap-2 text-amber-600">
              <Lightbulb size={17} />
              <span className="text-xs font-extrabold">Tips belajar</span>
            </div>
            <p className="mt-2 text-xs leading-5 text-amber-800/80">
              Baca materi pelan-pelan. Jangan takut salah saat latihan, karena
              salah adalah bagian dari belajar!
            </p>
          </div>
        </aside>

        <section className="min-w-0">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold text-slate-400">
                Halo, teman belajar! 👋
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {activeSection === "materi"
                  ? "Yuk, pahami materinya!"
                  : "Waktunya unjuk kemampuan!"}
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                {activeSection === "materi"
                  ? "Pelajari konsep, lihat contoh, lalu lanjutkan dengan latihan."
                  : "Pilih level dan jawab soal dengan percaya diri."}
              </p>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-slate-100 bg-white px-3 py-2 shadow-sm">
              <span className="text-lg">⭐</span>
              <span className="text-xs font-extrabold text-slate-600">
                {completedCount} level tuntas
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeSection === "materi" ? (
              <MaterialView
                key="material"
                lesson={activeLesson}
                onStartPractice={() => startPractice(activeLessonId, "easy")}
              />
            ) : quizStarted ? (
              <QuizView
                key={`quiz-${activeLessonId}-${activeLevel}`}
                lesson={activeLesson}
                level={activeLevel}
                questionIndex={questionIndex}
                selectedOption={selectedOption}
                submitted={submitted}
                sessionScore={sessionScore}
                finished={finished}
                lastScore={lastScore}
                onSelect={setSelectedOption}
                onSubmit={submitAnswer}
                onNext={nextQuestion}
                onRetry={() => {
                  resetQuiz();
                  setQuizStarted(true);
                }}
                onBack={() => {
                  setQuizStarted(false);
                  resetQuiz();
                }}
              />
            ) : (
              <PracticeHome
                key="practice-home"
                onStart={startPractice}
                completedByLesson={completedByLesson}
              />
            )}
          </AnimatePresence>
          <footer className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200/70 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-[10px] font-semibold text-slate-400">
              © 2026 KataCeria · Belajar Bahasa Indonesia dengan gembira
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}

function HeartIcon() {
  return (
    <span aria-hidden="true" className="text-rose-400">
      ♥
    </span>
  );
}
