// ============================================================
// FINDFIX — PROMOTIONS DATA
// ============================================================

export interface Promo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  image: string;
  category: "servis" | "paket" | "spare-part";
  items: string[];
  originalPrice?: string;
  promoPrice: string;
  terms: string[];
  featured?: boolean;
}

export const PROMOS: Promo[] = [
  {
    id: "paket-servis-hemat-motor",
    title: "Paket Servis Hemat Motor",
    subtitle: "Servis + Ganti Oli dalam Satu Kunjungan",
    description:
      "Dapatkan penghematan lebih dengan menggabungkan servis ringan dan ganti oli motor dalam satu kunjungan ke FindFix.",
    badge: "POPULER",
    image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=800&q=80",
    category: "paket",
    items: ["Servis ringan motor", "Ganti oli mesin", "Pengecekan tekanan ban", "Pengecekan kondisi rem"],
    originalPrice: "Rp 120.000",
    promoPrice: "Mulai Rp 95.000",
    terms: [
      "Harga belum termasuk oli dan suku cadang",
      "Berlaku untuk motor roda dua",
      "Hubungi FindFix untuk informasi dan ketersediaan",
    ],
    featured: true,
  },
  {
    id: "promo-ganti-oli-mobil",
    title: "Paket Ganti Oli Mobil",
    subtitle: "Oli + Filter dalam Satu Harga",
    description:
      "Paket penggantian oli mesin lengkap dengan filter oli dan pemeriksaan dasar untuk kendaraan roda empat Anda.",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80",
    category: "paket",
    items: ["Ganti oli mesin", "Ganti filter oli", "Pengecekan level cairan", "Pengecekan kondisi rem dasar"],
    promoPrice: "Mulai Rp 150.000",
    terms: [
      "Harga belum termasuk oli dan filter (tergantung merek)",
      "Berlaku untuk mobil penumpang",
      "Hubungi FindFix untuk informasi lebih lanjut",
    ],
    featured: true,
  },
  {
    id: "pemeriksaan-pra-perjalanan",
    title: "Paket Pemeriksaan Pra-Perjalanan",
    subtitle: "Siapkan Kendaraan Sebelum Perjalanan Jauh",
    description:
      "Paket pemeriksaan menyeluruh sebelum perjalanan jauh. Pastikan kendaraan Anda siap menemani setiap perjalanan.",
    badge: "RECOMMENDED",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    category: "servis",
    items: [
      "Pemeriksaan oli dan cairan",
      "Pengecekan kondisi rem",
      "Pemeriksaan tekanan ban",
      "Pengecekan kondisi aki",
      "Pemeriksaan lampu kendaraan",
      "Pengecekan kondisi CVT / transmisi (dasar)",
    ],
    promoPrice: "Mulai Rp 75.000",
    terms: [
      "Harga bervariasi tergantung jenis kendaraan",
      "Belum termasuk penggantian suku cadang",
      "Hubungi FindFix untuk informasi dan jadwal",
    ],
  },
  {
    id: "diskon-servis-berkala",
    title: "Paket Servis Berkala Hemat",
    subtitle: "Perawatan Lengkap, Harga Bersahabat",
    description:
      "Paket servis berkala komprehensif dengan harga yang lebih terjangkau. Cocok untuk kendaraan yang sudah waktunya servis rutin.",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
    category: "paket",
    items: [
      "Ganti oli mesin",
      "Ganti filter oli",
      "Pengecekan filter udara",
      "Pemeriksaan kondisi busi",
      "Pengecekan sistem pendingin",
      "Pemeriksaan kondisi rem",
      "Laporan kondisi kendaraan",
    ],
    promoPrice: "Mulai Rp 275.000",
    terms: [
      "Harga belum termasuk oli, filter, dan suku cadang",
      "Berlaku untuk mobil dan motor",
      "Hubungi FindFix untuk informasi dan ketersediaan",
    ],
    featured: true,
  },
];
