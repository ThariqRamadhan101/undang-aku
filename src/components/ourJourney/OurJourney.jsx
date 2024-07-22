import { forwardRef } from "react";

const OurJourney = forwardRef((props, ref) => {
  const content = [
    {
      head: "Tahun 2015",
      content: [
        "Suatu siang, di balik tumpukan tugas kelompok matematika. Dipaksa bertukar suara. Soal demi soal merangkai pertemanan. Hingga terbiasa menjadi teman belajar. Namun tanpa Suara. Hanya ada buku, kertas dan sedikit usaha untuk menyerahkan buku ke arah meja salah satu siswa yang sejajar dengannya. Hanya berjarak dua meja di kelas itu.",
        "Gadis itu melipat pojok kanan halaman menyerupai segitiga. Menandai bahwa halaman ini yang perlu diperhatikan. Menyelipkan secarik kertas. Berisikan “Aku tidak mengerti soal no. 15 dan 27. Bantu jelasin ya” Menutup buku itu. Dan kemudian menyerahkan ke teman di sebelahnya dengan ucapaan “Kasih ke Thariq.”",
        "Begitulah pertemanan mereka hingga tamat SMA.",
      ],
    },
    {
      head: "Tahun 2016",
      content: [
        "Thariq meneruskan perkuliahan di ITB sedangkan Sherly dihampiri dengan kegalauan. Kemudian Lusi, Sahabat Sherly, meminta Thariq untuk menemui Sherly di Rumah Lusi.",
        "Sahabat Sherly, membanjiri laki-laki itu dengan pertanyaan yang belum pernah ia dapatkan. Dan juga Lusi memberikan support agar Sherly kembali meraih mimpinya di UNPAD.",
        "Sherly dilanda dilema berikutnya setelah dinyatakan lolos di FIKOM UNPAD. Ada pilihan UNPAD, atau STMIK Indonesia Padang dengan beasiswa.",

        "Gundah tersebut disampaikan pada pembina asramanya, Pak Yamin, yang biasa dipanggil “Ayah”. “Kalau di UNPAD, kalian akan sama-sama di Bandung, kemungkinan untuk bertemu lebih besar. Kalau UNPAD lebih baik menikah dengan biaya dari orang tua masing-masing.” Suara ayah lembut.",
        "Gemuruh hadir di dada Sherly ketika ia mendengar kalimat 'menikah'. Rasanya ingin menyampaikan “Yah, kami hanya teman.”",
        "...",
      ],
    },
    {
      content: [
        "...",
        "Sepertinya ayah membaca kerutan di wajah gadis itu. Kemudian ayah melanjutkan ucapannya. “Ketika hendak Sidang Asrama kelas 12. Kan teman-teman menuliskan nama yang dianggap melanggar aturan asrama. Ayah menemukan satu pengaduan untuk nama Sherly dan Thariq.”",
        "Akhirnya Sherly memutuskan berkuliah di STMIK Indonesia Padang. Di tahun-tahun berikutnya cerita mereka samar. Nyaris hilang.",
      ],
    },
    {
      head: "Tahun 2020",
      content: [
        "Hanya ada cerita di beberapa bulan tahun 2020. Ketika Sherly meminta Thariq menjadi teman diskusi untuk menyelesaikan skripsinya.",
      ],
    },
    {
      head: "Pertengahan Tahun 2022",
      content: [
        "“Ly, mau jadi english speaking partner aku ngga?”. Pesan singkat itu dikirim Thariq tanpa basa basi.",
        "Mereka kembali menjadi teman belajar. Tahun 2023, Thariq meminta upgrade pertemanan. Dari sekedar teman belajar menjadi teman belajar seumur hidup.",
        "“Maaf, aku belum tuntas dengan mimpiku untuk berkarir di bidang IT”, balas Sherly singkat.",
        "Tahun itu juga, Thariq mulai merancang kurikulum belajar untuk Sherly. Memaksa belajar hingga larut malam.",
        "Sebelum tahun berakhir, mimpi itu menghampiri Sherly.",
        "Dan kemudian Thariq menyampaikan. “Aku ingin saling merawat agar terus bertumbuh seperti mawar merah yang tumbuh di dalam buku.”",
      ],
    },
    {
      head: "Tahun 2023",
      content: [
        "Thariq meminta upgrade pertemanan. Dari sekedar teman belajar menjadi teman belajar seumur hidup.",
        "“Maaf, aku belum tuntas dengan mimpiku untuk berkarir di bidang IT”, balas Sherly singkat.",
        "Tahun itu juga, Thariq mulai merancang kurikulum belajar untuk Sherly. Memaksa belajar hingga larut malam.",
        "Sebelum tahun berakhir, mimpi itu menghampiri Sherly.",
        "Dan kemudian Thariq menyampaikan. “Aku ingin saling merawat agar terus bertumbuh seperti mawar merah yang tumbuh di dalam buku.”",
      ],
    },
  ];
  return (
    <>
      {content.map((section, index) => (
        <div
          key={index}
          ref={ref}
          className="flex flex-col items-center justify-center p-8 border bg-[#F4ECE8] border-gray-300 shadow-lg h-full w-full"
        >
          <h1 className="text-3xl font-bold mb-2 font-playfair">Our Journey</h1>

          {/* Small Line Divider */}
          <div className="w-20 h-[1px] bg-gray-400 mb-2"></div>

          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-8 text-xs text-justify max-h-[600px] w-full"
          >
            {section.head && (
              <h2 className="text-lg font-semibold mb-2">{section.head}</h2>
            )}
            {section.content.slice().map((text, idx) => (
              <p key={idx} className="text-xs mb-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
});

OurJourney.displayName = "OurJourney";
export default OurJourney;
