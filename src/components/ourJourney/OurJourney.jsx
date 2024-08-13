import { forwardRef } from "react";
import FlowerJourney from "../../assets/flower-journey.jpg";
import PagePagination from "../pagePagination/PagePagination";

const OurJourney = forwardRef((props, ref) => {
  const content = [
    <>
      <p className="mb-4">
        Suatu siang, di balik tumpukan tugas kelompok matematika. Dipaksa
        bertukar suara. Soal demi soal merangkai pertemanan. Hingga terbiasa
        menjadi teman belajar. Namun tanpa suara. Hanya ada buku, kertas dan
        sedikit usaha untuk menyerahkan buku ke arah meja salah satu siswa yang
        sejajar dengannya. Hanya berjarak dua meja di kelas itu.
      </p>
      <p className="mb-4">
        Gadis itu melipat pojok kanan halaman menyerupai segitiga. Menandai
        bahwa halaman ini yang perlu diperhatikan. Menyelipkan secarik kertas.
        Berisikan “Aku tidak mengerti soal no. 15 dan 27. Bantu jelasin ya”.
        Menutup buku itu. Dan kemudian menyerahkan ke teman di sebelahnya dengan
        ucapaan “Kasih ke Thariq.”
      </p>
      <p className="mb-4">
        Lelaki itu mencoret selebar kertas, mencurahkan isi kepala untuk
        menuntaskan pertanyaan yang dikirimkan kepadanya. kemudian ia melakukan
        hal yang sama. menyerahkan buku ke teman sebelahnya dan berbisik “Titip
        ke Sherly”
      </p>
      <p className="mb-4">Begitulah pertemanan mereka hingga tamat SMA.</p>
    </>,
    <>
      <h2 className="text-lg font-semibold mb-2">Tahun 2016</h2>
      <p className="mb-4">
        Thariq meneruskan perkuliahan di ITB sedangkan sherly dihampiri
        kegalauan. UNPAD dengan biaya pribadi, atau STMIK Indonesia Padang
        dengan beasiswa.
      </p>
      <p className="mb-4">
        Gundah tersebut disampaikan pada pembina asramanya, Pak Yamin, yang
        akrab dipanggil “Ayah”. “Kalau di UNPAD, kalian akan sama-sama di
        Bandung, kemungkinan untuk bertemu lebih besar. Kalau UNPAD lebih baik
        menikah dengan biaya dari orang tua masing-masing.” Suara ayah lembut.
      </p>
      <p className="mb-4">
        Gemuruh hadir di dada sherly. Sama sekali tidak ada ia menyinggung nama
        Thariq dalam pertemuan itu. Apalagi ketika ia mendengar kalimat
        ‘menikah’. Rasanya ingin menyampaikan “Yah, kami hanya teman”.
      </p>
      <p className="mb-4">
        Sepertinya ayah membaca kerutan di wajah gadis itu. Kemudian ayah
        melanjutkan ucapannya. “Ketika hendak Sidang Asrama kelas 12. <i>Kan</i>{" "}
        teman-teman menuliskan nama yang dianggap melanggar aturan asrama. Ayah
        menemukan satu pengaduan untuk nama Sherly dan Thariq”
      </p>
    </>,
    <>
      <p className="mb-4">
        Akhirnya Sherly memutuskan berkuliah di STMIK Indonesia Padang. Di
        tahun-tahun berikutnya cerita mereka samar. Nyaris hilang.
      </p>
      <h2 className="text-lg font-semibold mb-2">Tahun 2020</h2>
      <p className="mb-4">
        Hanya ada cerita di beberapa bulan tahun 2020. Ketika Sherly meminta
        Thariq menjadi teman diskusi untuk Menyelesaikan Skripsinya.
      </p>
      <h2 className="text-lg font-semibold mb-2">Pertengahan Tahun 2022</h2>
      <p className="mb-4">
        “Ly, mau jadi english speaking partner aku ngga?”. Pesan singkat itu
        dikirim Thariq tanpa basa basi.
      </p>
      <p className="mb-4">Mereka kembali menjadi teman belajar.</p>
      <h2 className="text-lg font-semibold mb-2">Tahun 2023</h2>
      <p className="mb-4">
        Thariq mengutarakan keinginannya untuk memiliki seorang teman belajar
        seumur hidup.
      </p>
      <p className="mb-4">
        Gadis itu menolaknya. Ia masih memiliki mimpi untuk berkarir.
      </p>
      <p className="mb-4">
        Tahun itu juga, Thariq mulai merancang kurikulum belajar untuk Sherly.
        Memaksa belajar hingga larut malam.
      </p>
    </>,
    <>
      <p className="mb-4">
        Sebelum tahun berakhir, mimpi itu menghampiri Sherly.
      </p>
      <p className="mb-4">
        Dan kemudian Thariq menyampaikan. “Aku ingin saling merawat agar terus
        bertumbuh seperti mawar merah yang tumbuh di dalam buku”
      </p>
      <img
        src={FlowerJourney}
        alt="Flower Journey Image"
        className="max-w-[150px] h-auto mx-auto"
      />
    </>,
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
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-8 text-xs text-justify h-[552px] w-full"
          >
            {section}
          </div>
          <PagePagination />
        </div>
      ))}
    </>
  );
});

OurJourney.displayName = "OurJourney";
export default OurJourney;
