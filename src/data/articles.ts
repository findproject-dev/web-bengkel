// ============================================================
// FINDFIX — ARTICLES DATA
// ============================================================

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  publishDate: string;
  readingTime: number; // minutes
  image: string;
  excerpt: string;
  content: string; // HTML content
  tags: string[];
  relatedSlugs?: string[];
  relatedServiceSlugs?: string[];
}

export type ArticleCategory =
  | "perawatan-mobil"
  | "perawatan-motor"
  | "tips-berkendara"
  | "panduan-servis";

export const ARTICLE_CATEGORIES: { id: ArticleCategory; label: string }[] = [
  { id: "perawatan-mobil", label: "Perawatan Mobil" },
  { id: "perawatan-motor", label: "Perawatan Motor" },
  { id: "tips-berkendara", label: "Tips Berkendara" },
  { id: "panduan-servis", label: "Panduan Servis" },
];

export const ARTICLES: Article[] = [
  {
    slug: "kapan-ganti-oli-mobil",
    title: "Kapan Waktu yang Tepat untuk Mengganti Oli Mobil?",
    category: "perawatan-mobil",
    publishDate: "2024-10-15",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80",
    excerpt:
      "Mengganti oli secara rutin adalah salah satu perawatan terpenting untuk menjaga kesehatan mesin. Tapi kapan sebenarnya waktu yang tepat?",
    tags: ["ganti oli", "perawatan rutin", "mesin mobil"],
    relatedSlugs: ["tanda-tune-up", "penyebab-mesin-sulit-dihidupkan"],
    relatedServiceSlugs: ["ganti-oli-mobil", "servis-berkala-mobil"],
    content: `
<p>Mengganti oli secara rutin adalah salah satu bentuk perawatan paling mendasar namun paling penting untuk menjaga kesehatan mesin kendaraan. Oli yang sudah terlalu lama digunakan akan kehilangan sifat lubrikasinya dan dapat mempercepat keausan komponen mesin.</p>

<h2>Patokan Jarak Tempuh dan Waktu</h2>
<p>Sebagai panduan umum, penggantian oli disarankan berdasarkan:</p>
<ul>
  <li><strong>Setiap 5.000 km</strong> untuk oli konvensional (mineral)</li>
  <li><strong>Setiap 7.500–10.000 km</strong> untuk oli semi-sintetis</li>
  <li><strong>Setiap 10.000–15.000 km</strong> untuk oli full sintetis</li>
  <li><strong>Atau setiap 6 bulan</strong>, mana yang lebih dulu tercapai</li>
</ul>
<p>Namun, selalu utamakan rekomendasi dari buku manual kendaraan Anda, karena tiap kendaraan memiliki spesifikasi yang berbeda.</p>

<h2>Tanda-Tanda Oli Perlu Diganti</h2>
<p>Selain mengacu pada jarak tempuh, perhatikan juga tanda-tanda berikut yang menunjukkan oli sudah perlu diganti:</p>

<h3>1. Warna Oli Berubah Hitam Pekat</h3>
<p>Oli baru berwarna kuning keemasan atau cokelat bening. Ketika oli sudah berwarna hitam pekat dan terasa kental, itu tanda sudah penuh dengan kontaminan dan perlu diganti segera.</p>

<h3>2. Mesin Terdengar Lebih Berisik</h3>
<p>Oli yang sudah terdegradasi kehilangan kemampuan lubrikasinya, sehingga komponen mesin yang bergesekan akan mengeluarkan suara yang lebih berisik dari biasanya.</p>

<h3>3. Indikator Oli di Dashboard Menyala</h3>
<p>Jika lampu indikator oli menyala, segera hentikan kendaraan di tempat aman dan periksa kondisi oli. Jangan abaikan peringatan ini.</p>

<h3>4. Konsumsi BBM Meningkat</h3>
<p>Mesin yang tidak terlumasi dengan baik bekerja lebih keras, yang berdampak pada meningkatnya konsumsi bahan bakar.</p>

<h2>Memilih Jenis Oli yang Tepat</h2>
<p>Pemilihan oli yang tepat sangat penting. Perhatikan:</p>
<ul>
  <li><strong>Viskositas (kekentalan)</strong>: Sesuaikan dengan rekomendasi pabrikan (misalnya 10W-40, 5W-30)</li>
  <li><strong>Jenis oli</strong>: Mineral, semi-sintetis, atau full sintetis</li>
  <li><strong>Spesifikasi API</strong>: Pastikan memenuhi standar yang direkomendasikan untuk kendaraan Anda</li>
</ul>

<h2>Kesimpulan</h2>
<p>Mengganti oli secara tepat waktu adalah investasi kecil yang memberikan manfaat besar untuk umur panjang mesin kendaraan Anda. Jika ragu, konsultasikan dengan teknisi FindFix untuk mendapatkan rekomendasi yang tepat sesuai kondisi kendaraan Anda.</p>
    `,
  },
  {
    slug: "tanda-tune-up",
    title: "7 Tanda Kendaraan Membutuhkan Tune Up",
    category: "perawatan-mobil",
    publishDate: "2024-10-08",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    excerpt:
      "Tune up bukan hanya dilakukan ketika kendaraan sudah bermasalah. Kenali 7 tanda ini untuk menentukan kapan kendaraan Anda butuh tune up.",
    tags: ["tune up", "perawatan mesin", "tips kendaraan"],
    relatedSlugs: ["kapan-ganti-oli-mobil", "penyebab-mesin-sulit-dihidupkan"],
    relatedServiceSlugs: ["tune-up-mobil", "servis-berkala-mobil"],
    content: `
<p>Tune up adalah proses penyetelan ulang berbagai komponen mesin yang dilakukan secara berkala untuk mengembalikan performa kendaraan ke kondisi optimal. Banyak pemilik kendaraan baru melakukan tune up ketika masalah sudah cukup parah. Padahal, ada tanda-tanda yang dapat dideteksi lebih awal.</p>

<h2>1. Tarikan Kendaraan Terasa Berat</h2>
<p>Ketika kendaraan terasa kurang bertenaga dan akselerasi tidak seresponsif biasanya, ini bisa menjadi tanda bahwa sistem pengapian atau bahan bakar memerlukan perhatian. Tarikan yang berat sering disebabkan oleh busi yang sudah aus atau filter udara yang tersumbat.</p>

<h2>2. Konsumsi Bahan Bakar Meningkat Drastis</h2>
<p>Jika Anda merasa pengisian bensin lebih sering dari biasanya namun jarak tempuh tidak berubah, mesin mungkin bekerja tidak efisien. Pembakaran yang tidak sempurna akibat busi atau injektor yang kotor dapat menyebabkan boros BBM.</p>

<h2>3. Mesin Sulit Dihidupkan</h2>
<p>Jika kendaraan memerlukan beberapa kali percobaan untuk dihidupkan, terutama di pagi hari, ini bisa menjadi indikasi busi yang lemah atau masalah pada sistem pengapian.</p>

<h2>4. Mesin Terasa Kasar atau Bergetar</h2>
<p>Getaran yang tidak normal saat mesin menyala atau idle yang tidak stabil (mesin naik-turun) biasanya menandakan masalah pada sistem pengapian atau karburator/throttle body.</p>

<h2>5. Muncul Suara Ketukan dari Mesin</h2>
<p>Suara ketukan ringan dari mesin, terutama saat akselerasi, bisa mengindikasikan pembakaran yang tidak sempurna (knocking) yang perlu segera ditangani.</p>

<h2>6. Emisi Gas Buang Berlebih</h2>
<p>Asap knalpot yang berwarna lebih gelap atau berbau tidak normal bisa menjadi tanda pembakaran yang tidak efisien dan memerlukan penyetelan ulang.</p>

<h2>7. Sudah Mencapai Interval Tune Up</h2>
<p>Bahkan jika tidak ada gejala yang terasa, lakukan tune up sesuai jadwal yang direkomendasikan pabrikan. Perawatan preventif jauh lebih ekonomis dibandingkan perbaikan akibat kerusakan yang dibiarkan.</p>

<h2>Kesimpulan</h2>
<p>Jangan tunggu sampai kendaraan benar-benar bermasalah baru melakukan tune up. Deteksi dini dan perawatan rutin adalah kunci untuk menjaga kendaraan tetap dalam kondisi prima dan menghindari biaya perbaikan yang lebih besar.</p>
    `,
  },
  {
    slug: "penyebab-mesin-sulit-dihidupkan",
    title: "Penyebab Mesin Mobil Sulit Dihidupkan dan Cara Mengatasinya",
    category: "perawatan-mobil",
    publishDate: "2024-09-22",
    readingTime: 7,
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
    excerpt:
      "Mesin mobil yang sulit dihidupkan bisa disebabkan berbagai faktor. Pelajari penyebab umum dan langkah penanganannya.",
    tags: ["mesin", "troubleshooting", "perawatan mobil"],
    relatedSlugs: ["tanda-tune-up", "kapan-ganti-oli-mobil"],
    relatedServiceSlugs: ["perbaikan-mesin-mobil", "tune-up-mobil"],
    content: `
<p>Mesin yang sulit dihidupkan adalah masalah yang membuat frustasi, terutama di pagi hari atau saat terburu-buru. Memahami penyebabnya dapat membantu Anda mengambil langkah yang tepat.</p>

<h2>Penyebab Umum Mesin Sulit Dihidupkan</h2>

<h3>1. Aki Lemah atau Tekor</h3>
<p>Aki adalah sumber energi awal untuk menghidupkan mesin. Aki yang lemah tidak mampu memutar starter dengan cukup kuat. Tanda-tanda aki bermasalah: suara starter lemah atau lambat, lampu redup, dan klakson tidak berbunyi normal.</p>

<h3>2. Busi Aus atau Kotor</h3>
<p>Busi yang sudah aus tidak mampu menghasilkan percikan api yang cukup untuk membakar campuran bahan bakar-udara. Busi perlu diganti sesuai interval yang direkomendasikan (umumnya setiap 20.000–40.000 km untuk busi konvensional).</p>

<h3>3. Filter Bahan Bakar Tersumbat</h3>
<p>Filter bahan bakar yang kotor membatasi aliran bahan bakar ke mesin, sehingga campuran bahan bakar-udara menjadi terlalu miskin untuk pembakaran yang baik.</p>

<h3>4. Sensor Oksigen atau Sensor Suhu Bermasalah</h3>
<p>Pada kendaraan modern dengan sistem injeksi elektronik, sensor yang bermasalah dapat mengirim data yang salah ke ECU, menyebabkan campuran bahan bakar-udara tidak tepat.</p>

<h3>5. Masalah pada Sistem Bahan Bakar</h3>
<p>Pompa bahan bakar yang lemah atau injektor yang kotor dapat menghambat suplai bahan bakar yang cukup ke mesin, terutama saat dingin.</p>

<h2>Langkah Penanganan Awal</h2>
<ol>
  <li>Periksa kondisi aki — apakah masih baik?</li>
  <li>Coba hidupkan tanpa akselerasi terlebih dahulu</li>
  <li>Jika gagal beberapa kali, jangan paksa starter terus-menerus</li>
  <li>Hubungi bengkel terpercaya untuk diagnosis lebih lanjut</li>
</ol>

<h2>Kapan Harus ke Bengkel?</h2>
<p>Segera bawa ke bengkel jika mesin tidak bisa dihidupkan sama sekali, ada suara tidak normal saat starter, atau masalah terjadi berulang kali. Diagnosis oleh teknisi berpengalaman akan mengidentifikasi akar masalah dengan akurat.</p>
    `,
  },
  {
    slug: "cara-merawat-cvt-motor",
    title: "Cara Merawat CVT Motor agar Tetap Optimal",
    category: "perawatan-motor",
    publishDate: "2024-09-10",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80",
    excerpt:
      "CVT adalah jantung transmisi motor matic Anda. Perawatan yang tepat memastikan motor selalu responsif dan bertenaga.",
    tags: ["CVT", "motor matic", "perawatan motor"],
    relatedSlugs: ["tanda-kampas-rem", "tips-aki-kendaraan"],
    relatedServiceSlugs: ["servis-cvt-motor", "servis-besar-motor"],
    content: `
<p>CVT (Continuously Variable Transmission) adalah sistem transmisi yang digunakan pada motor matic modern. Berbeda dengan transmisi manual, CVT tidak memiliki gigi yang terpisah — melainkan menggunakan sabuk (belt) dan puli yang dapat berubah diameter untuk menyesuaikan rasio transmisi secara terus-menerus.</p>

<h2>Komponen Utama CVT</h2>
<ul>
  <li><strong>V-Belt / Belt CVT</strong>: Sabuk penghubung antara puli primer dan sekunder</li>
  <li><strong>Roller</strong>: Komponen kecil yang menentukan rasio puli dan akselerasi</li>
  <li><strong>Kampas Ganda (Clutch)</strong>: Mengatur kapan tenaga mulai disalurkan ke roda</li>
  <li><strong>Puli Primer dan Sekunder</strong>: Puli yang digerakkan mesin dan puli yang menggerakkan roda</li>
</ul>

<h2>Interval Perawatan CVT yang Dianjurkan</h2>
<ul>
  <li><strong>Setiap 8.000–10.000 km</strong>: Pembersihan ruang CVT</li>
  <li><strong>Setiap 20.000–25.000 km</strong>: Pengecekan dan kemungkinan penggantian roller</li>
  <li><strong>Setiap 25.000–30.000 km</strong>: Pengecekan V-belt, penggantian jika diperlukan</li>
</ul>

<h2>Tanda CVT Bermasalah</h2>
<p>Kenali tanda-tanda ini yang mengindikasikan CVT perlu diperiksa:</p>
<ul>
  <li>Akselerasi terasa tertunda atau tidak mulus</li>
  <li>Motor slip saat bejek gas, terutama saat tanjakan</li>
  <li>Suara dengungan atau berdecit dari area CVT</li>
  <li>Getaran berlebih dari bagian bawah motor</li>
  <li>Motor terasa berat di kecepatan rendah</li>
</ul>

<h2>Tips Berkendara untuk Menjaga CVT</h2>
<ol>
  <li>Hindari akselerasi mendadak dari kondisi diam (gas langsung dalam)</li>
  <li>Panaskan mesin dulu selama 1–2 menit sebelum berkendara</li>
  <li>Hindari membawa beban berlebih secara terus-menerus</li>
  <li>Lakukan perawatan rutin sesuai jadwal</li>
</ol>

<h2>Kesimpulan</h2>
<p>CVT yang terawat akan membuat motor matic Anda berakselerasi mulus, efisien, dan tahan lama. Jangan abaikan perawatan rutin CVT — investasi kecil ini dapat menghindarkan Anda dari biaya penggantian komponen yang jauh lebih mahal.</p>
    `,
  },
  {
    slug: "tanda-kampas-rem",
    title: "Kapan Kampas Rem Perlu Diganti? Kenali Tanda-Tandanya",
    category: "tips-berkendara",
    publishDate: "2024-08-25",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=800&q=80",
    excerpt:
      "Kampas rem yang aus adalah ancaman keselamatan serius. Ketahui kapan waktunya mengganti kampas rem kendaraan Anda.",
    tags: ["kampas rem", "sistem rem", "keselamatan berkendara"],
    relatedSlugs: ["pemeriksaan-pra-perjalanan", "tips-aki-kendaraan"],
    relatedServiceSlugs: ["perbaikan-rem-mobil", "perbaikan-rem-motor"],
    content: `
<p>Sistem rem adalah komponen keselamatan paling penting pada kendaraan. Kampas rem yang aus tidak hanya mengurangi efektivitas pengereman, tetapi juga dapat merusak disc atau drum rem yang lebih mahal. Ketahui kapan waktunya mengganti kampas rem.</p>

<h2>Berapa Lama Kampas Rem Bertahan?</h2>
<p>Masa pakai kampas rem sangat bervariasi tergantung:</p>
<ul>
  <li>Gaya berkendara (sering rem mendadak mempercepat keausan)</li>
  <li>Jenis medan (perkotaan dengan banyak kemacetan lebih cepat aus)</li>
  <li>Kualitas kampas rem yang digunakan</li>
  <li>Jenis kendaraan dan bobotnya</li>
</ul>
<p>Secara umum, kampas rem depan mobil bertahan 30.000–60.000 km, sedangkan kampas belakang bisa lebih lama.</p>

<h2>Tanda-Tanda Kampas Rem Perlu Diganti</h2>

<h3>1. Suara Decitan atau Gesekan saat Mengerem</h3>
<p>Ini adalah tanda paling umum. Suara decit (squealing) biasanya berarti kampas hampir habis. Suara gesekan logam ke logam adalah tanda kampas sudah benar-benar habis dan disc mulai terkikis.</p>

<h3>2. Jarak Pengereman Lebih Panjang</h3>
<p>Jika kendaraan terasa memerlukan jarak lebih panjang untuk berhenti, atau pedal rem harus ditekan lebih dalam, kampas rem kemungkinan sudah menipis.</p>

<h3>3. Pedal Rem Terasa "Dalam" atau Kosong</h3>
<p>Pedal yang semakin dalam untuk mendapatkan respons rem yang sama menandakan kampas sudah aus atau ada masalah pada sistem rem.</p>

<h3>4. Kendaraan Menarik ke Satu Sisi saat Mengerem</h3>
<p>Jika kendaraan bergerak menyamping saat mengerem, bisa jadi salah satu kampas aus lebih cepat dari yang lain.</p>

<h3>5. Getaran saat Mengerem</h3>
<p>Getaran pada pedal rem saat mengerem bisa mengindikasikan kampas tidak rata atau disc yang sudah tidak rata permukaannya.</p>

<h2>Pemeriksaan Visual Ketebalan Kampas</h2>
<p>Untuk kendaraan dengan kaliper rem cakram yang dapat dilihat dari luar, periksa ketebalan kampas. Jika ketebalan kampas sudah kurang dari 3mm, segera ganti.</p>

<h2>Kesimpulan</h2>
<p>Jangan abaikan tanda-tanda kampas rem aus. Keselamatan Anda dan penumpang lebih penting dari penghematan biaya jangka pendek. Segera periksakan ke bengkel terpercaya jika menemukan salah satu tanda di atas.</p>
    `,
  },
  {
    slug: "pemeriksaan-pra-perjalanan",
    title: "Pentingnya Pemeriksaan Kendaraan Sebelum Perjalanan Jauh",
    category: "tips-berkendara",
    publishDate: "2024-08-12",
    readingTime: 6,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    excerpt:
      "Perjalanan jauh memerlukan kendaraan yang benar-benar siap. Jangan lewatkan pemeriksaan penting ini sebelum berkendara.",
    tags: ["pemeriksaan kendaraan", "perjalanan jauh", "keselamatan"],
    relatedSlugs: ["tanda-kampas-rem", "tips-aki-kendaraan"],
    relatedServiceSlugs: ["pemeriksaan-kendaraan", "servis-berkala-mobil"],
    content: `
<p>Perjalanan jauh dengan kendaraan yang tidak disiapkan dengan baik adalah risiko yang tidak perlu diambil. Pemeriksaan menyeluruh sebelum berangkat dapat mencegah masalah di jalan yang tidak hanya merepotkan tetapi juga berpotensi berbahaya.</p>

<h2>Checklist Pemeriksaan Sebelum Perjalanan</h2>

<h3>Mesin dan Cairan</h3>
<ul>
  <li><strong>Oli mesin</strong>: Periksa level dan kondisi — ganti jika sudah mendekati interval</li>
  <li><strong>Air radiator</strong>: Pastikan level coolant cukup dan tidak ada kebocoran</li>
  <li><strong>Minyak rem</strong>: Periksa level di reservoir</li>
  <li><strong>Air wiper</strong>: Isi sebelum berangkat</li>
  <li><strong>Power steering fluid</strong>: Periksa jika kendaraan menggunakan power steering hidrolik</li>
</ul>

<h3>Sistem Rem</h3>
<ul>
  <li>Pastikan pedal rem tidak terasa dalam atau keras berlebihan</li>
  <li>Test rem di kecepatan rendah sebelum berangkat</li>
  <li>Periksa rem parkir berfungsi dengan baik</li>
</ul>

<h3>Ban</h3>
<ul>
  <li><strong>Tekanan angin</strong>: Sesuaikan dengan rekomendasi di stiker pintu atau buku manual</li>
  <li><strong>Kondisi tapak ban</strong>: Pastikan tidak ada keausan berlebih atau benda asing</li>
  <li><strong>Ban cadangan</strong>: Pastikan tersedia dan bertekanan cukup</li>
</ul>

<h3>Kelistrikan</h3>
<ul>
  <li>Lampu utama, sein, rem, dan hazard berfungsi</li>
  <li>Kondisi aki — terutama untuk kendaraan yang jarang dipakai</li>
  <li>Klakson berfungsi</li>
</ul>

<h3>Dokumen Kendaraan</h3>
<ul>
  <li>STNK masih berlaku</li>
  <li>SIM masih berlaku</li>
  <li>Dokumen asuransi (jika ada)</li>
  <li>Kartu BPJS/asuransi kesehatan</li>
</ul>

<h2>Kapan Harus ke Bengkel Sebelum Berangkat?</h2>
<p>Idealnya, lakukan servis kendaraan 1–2 minggu sebelum perjalanan jauh. Ini memberi waktu jika ada komponen yang perlu diganti atau masalah yang perlu diperbaiki. Jangan servis di hari-H karena komponen baru memerlukan waktu untuk "settle".</p>

<h2>Kesimpulan</h2>
<p>Pemeriksaan pra-perjalanan hanya memerlukan 30–60 menit namun dapat menghindarkan Anda dari masalah besar di jalan. Jadikan ini kebiasaan sebelum setiap perjalanan jauh.</p>
    `,
  },
  {
    slug: "tips-aki-kendaraan",
    title: "Cara Mengenali Masalah pada Aki Kendaraan",
    category: "perawatan-mobil",
    publishDate: "2024-07-30",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=800&q=80",
    excerpt:
      "Aki yang lemah adalah salah satu penyebab kendaraan tidak bisa dihidupkan. Kenali tanda-tanda aki bermasalah sebelum terlambat.",
    tags: ["aki kendaraan", "kelistrikan", "perawatan"],
    relatedSlugs: ["penyebab-mesin-sulit-dihidupkan", "pemeriksaan-pra-perjalanan"],
    relatedServiceSlugs: ["kelistrikan-mobil"],
    content: `
<p>Aki (baterai kendaraan) adalah komponen kelistrikan yang sering dianggap sepele hingga kendaraan tiba-tiba tidak bisa dihidupkan. Mengenali tanda-tanda aki bermasalah lebih awal dapat menghindarkan Anda dari situasi yang merepotkan.</p>

<h2>Fungsi Aki dalam Kendaraan</h2>
<p>Aki tidak hanya bertugas menghidupkan mesin. Komponen ini juga menyuplai listrik ke sistem elektronik kendaraan ketika mesin mati, dan menstabilkan tegangan listrik saat mesin menyala.</p>

<h2>Berapa Lama Aki Bertahan?</h2>
<p>Rata-rata aki kendaraan bertahan 2–5 tahun, tergantung:</p>
<ul>
  <li>Kualitas aki</li>
  <li>Kondisi penggunaan (sering dipakai atau didiamkan)</li>
  <li>Kondisi alternator kendaraan</li>
  <li>Iklim dan suhu (panas ekstrem memperpendek umur aki)</li>
</ul>

<h2>Tanda-Tanda Aki Bermasalah</h2>

<h3>1. Starter Lemah atau Lambat</h3>
<p>Jika mesin berputar lambat saat di-starter atau butuh beberapa detik lebih lama dari biasanya, ini tanda klasik aki mulai lemah.</p>

<h3>2. Lampu Redup</h3>
<p>Lampu interior atau headlight yang terasa lebih redup dari biasanya, terutama saat mesin belum menyala, mengindikasikan tegangan aki menurun.</p>

<h3>3. Harus Jump Start Berulang Kali</h3>
<p>Jika kendaraan sudah lebih dari satu kali perlu dijump start, kemungkinan besar aki sudah tidak dapat menyimpan muatan dengan baik dan perlu diganti.</p>

<h3>4. Aki Sudah Lebih dari 3–4 Tahun</h3>
<p>Jika aki sudah berumur di atas 3 tahun, mulai lakukan pengecekan rutin meskipun belum ada gejala. Pencegahan lebih baik dari kehabisan aki di jalan.</p>

<h3>5. Tercium Bau Tidak Sedap dari Area Aki</h3>
<p>Bau mirip telur busuk dari aki mengindikasikan aki mengalami kebocoran gas hidrogen sulfida, yang perlu segera ditangani.</p>

<h2>Perawatan Aki</h2>
<ul>
  <li>Pastikan terminal aki bersih dan tidak berkarat</li>
  <li>Jangan biarkan kendaraan tidak digunakan terlalu lama tanpa perawatan</li>
  <li>Matikan semua aksesori elektronik sebelum mematikan mesin</li>
  <li>Lakukan pengecekan aki saat servis berkala</li>
</ul>
    `,
  },
  {
    slug: "tips-ac-mobil",
    title: "Tips Merawat AC Mobil agar Tetap Dingin dan Efisien",
    category: "perawatan-mobil",
    publishDate: "2024-07-15",
    readingTime: 5,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    excerpt:
      "Di iklim tropis Indonesia, AC mobil bukan kemewahan — ini kebutuhan. Pelajari cara merawatnya agar tetap optimal.",
    tags: ["AC mobil", "perawatan AC", "kenyamanan berkendara"],
    relatedSlugs: ["tanda-tune-up", "kapan-ganti-oli-mobil"],
    relatedServiceSlugs: ["servis-ac-mobil"],
    content: `
<p>Di Indonesia yang beriklim tropis, sistem AC mobil bekerja lebih keras dibandingkan negara beriklim sedang. Perawatan rutin AC sangat penting untuk memastikan kabin tetap nyaman dan sistem AC tidak cepat rusak.</p>

<h2>Cara Kerja AC Mobil Secara Sederhana</h2>
<p>AC mobil bekerja dengan mensirkulasikan refrigeran (freon) melalui kompresor, kondenser, evaporator, dan komponen lainnya. Refrigeran menyerap panas dari kabin dan membuangnya keluar melalui kondenser di depan kendaraan.</p>

<h2>Tips Perawatan AC Mobil</h2>

<h3>1. Rutin Gunakan AC</h3>
<p>Paradoksnya, AC yang jarang digunakan justru lebih cepat rusak. Gunakan AC secara rutin — setidaknya 10–15 menit per minggu — untuk menjaga sirkulasi refrigeran dan melumasi komponen.</p>

<h3>2. Ganti Filter Kabin Secara Berkala</h3>
<p>Filter kabin yang kotor menghambat aliran udara dan membuat AC bekerja lebih keras. Ganti setiap 10.000–15.000 km atau setahun sekali, tergantung kondisi lingkungan.</p>

<h3>3. Jangan Langsung Nyalakan AC Penuh Saat Masuk Mobil yang Panas</h3>
<p>Buka jendela beberapa menit terlebih dahulu untuk mengeluarkan udara panas yang terperangkap, baru kemudian nyalakan AC dan tutup jendela. Ini mengurangi beban kerja kompresor AC.</p>

<h3>4. Parkir di Tempat Teduh</h3>
<p>Parkir di tempat teduh mengurangi pemanasan interior mobil secara drastis, sehingga AC tidak perlu bekerja terlalu keras untuk mendinginkan kabin.</p>

<h3>5. Servis AC Secara Rutin</h3>
<p>Lakukan servis AC setidaknya setahun sekali, termasuk pembersihan evaporator dan kondenser, pengecekan tekanan freon, dan pemeriksaan komponen.</p>

<h2>Tanda AC Memerlukan Servis</h2>
<ul>
  <li>AC tidak sedingin biasanya</li>
  <li>Keluar bau tidak sedap saat AC dinyalakan</li>
  <li>Terdengar suara tidak normal saat AC menyala</li>
  <li>Embun berlebih di dalam kabin</li>
  <li>Kompressor AC sering mati-nyala (cycling tidak normal)</li>
</ul>

<h2>Kesimpulan</h2>
<p>AC yang terawat dengan baik akan memberikan kenyamanan berkendara yang optimal dan bertahan lebih lama. Jangan tunggu AC rusak total baru melakukan servis.</p>
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article?.relatedSlugs) return [];
  return article.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter(Boolean)
    .slice(0, limit) as Article[];
}
