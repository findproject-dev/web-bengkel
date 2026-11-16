// ============================================================
// FINDFIX — PRICING DATA
// ============================================================

export interface PriceItem {
  name: string;
  vehicleType: "mobil" | "motor";
  startingPrice: string;
  includes?: string;
  duration?: string;
  note?: string;
}

export interface PricePackage {
  id: string;
  name: string;
  subtitle: string;
  targetDesc: string;
  vehicleType: "mobil" | "motor" | "keduanya";
  items: string[];
  price: string;
  priceNote: string;
  highlighted?: boolean;
}

export const PRICE_LIST: { category: string; vehicleType: "mobil" | "motor"; items: PriceItem[] }[] = [
  {
    category: "Servis Rutin",
    vehicleType: "motor",
    items: [
      { name: "Ganti Oli Motor", vehicleType: "motor", startingPrice: "Rp 45.000", duration: "15–30 mnt", note: "Belum termasuk oli" },
      { name: "Servis Ringan Motor", vehicleType: "motor", startingPrice: "Rp 75.000", duration: "30–90 mnt", note: "Belum termasuk suku cadang" },
      { name: "Servis Besar Motor", vehicleType: "motor", startingPrice: "Rp 150.000", duration: "2–4 jam", note: "Belum termasuk suku cadang" },
      { name: "Servis CVT Motor", vehicleType: "motor", startingPrice: "Rp 100.000", duration: "1–2 jam", note: "Belum termasuk suku cadang" },
    ],
  },
  {
    category: "Perbaikan Motor",
    vehicleType: "motor",
    items: [
      { name: "Perbaikan Rem Motor", vehicleType: "motor", startingPrice: "Rp 50.000", duration: "30–90 mnt" },
      { name: "Perbaikan Kelistrikan Motor", vehicleType: "motor", startingPrice: "Rp 75.000", duration: "1–3 jam" },
      { name: "Penggantian Ban Motor", vehicleType: "motor", startingPrice: "Rp 50.000", duration: "30–60 mnt", note: "Belum termasuk ban" },
      { name: "Perbaikan Mesin Motor", vehicleType: "motor", startingPrice: "Hubungi kami", duration: "Bervariasi" },
    ],
  },
  {
    category: "Servis Rutin Mobil",
    vehicleType: "mobil",
    items: [
      { name: "Ganti Oli Mobil", vehicleType: "mobil", startingPrice: "Rp 100.000", duration: "30–60 mnt", note: "Belum termasuk oli" },
      { name: "Servis Berkala Mobil", vehicleType: "mobil", startingPrice: "Rp 250.000", duration: "1–2 jam", note: "Belum termasuk suku cadang" },
      { name: "Tune Up Mobil", vehicleType: "mobil", startingPrice: "Rp 200.000", duration: "2–4 jam", note: "Belum termasuk suku cadang" },
      { name: "Pemeriksaan Kendaraan", vehicleType: "mobil", startingPrice: "Rp 50.000", duration: "1–2 jam" },
    ],
  },
  {
    category: "Perbaikan Mobil",
    vehicleType: "mobil",
    items: [
      { name: "Servis AC Mobil", vehicleType: "mobil", startingPrice: "Rp 150.000", duration: "1–3 jam", note: "Freon terpisah" },
      { name: "Perbaikan Rem Mobil", vehicleType: "mobil", startingPrice: "Rp 150.000", duration: "1–3 jam", note: "Belum termasuk suku cadang" },
      { name: "Spooring & Balancing", vehicleType: "mobil", startingPrice: "Rp 150.000", duration: "1–2 jam" },
      { name: "Servis Transmisi", vehicleType: "mobil", startingPrice: "Rp 300.000", duration: "2–6 jam", note: "Belum termasuk oli transmisi" },
      { name: "Perbaikan Kaki-Kaki", vehicleType: "mobil", startingPrice: "Rp 200.000", duration: "2–5 jam", note: "Belum termasuk suku cadang" },
      { name: "Kelistrikan Mobil", vehicleType: "mobil", startingPrice: "Rp 100.000", duration: "1–4 jam" },
      { name: "Perbaikan Mesin Mobil", vehicleType: "mobil", startingPrice: "Hubungi kami", duration: "Bervariasi" },
      { name: "Body Repair & Pengecatan", vehicleType: "mobil", startingPrice: "Hubungi kami", duration: "1–7 hari" },
    ],
  },
];

export const PRICE_PACKAGES: PricePackage[] = [
  {
    id: "basic-care",
    name: "Basic Care",
    subtitle: "Perawatan Rutin Dasar",
    targetDesc: "Untuk kendaraan yang memerlukan perawatan rutin",
    vehicleType: "keduanya",
    items: [
      "Penggantian oli mesin",
      "Pemeriksaan filter udara",
      "Pengecekan kondisi busi",
      "Pemeriksaan tekanan ban",
      "Pengecekan kondisi rem",
      "Pengecekan cairan kendaraan",
    ],
    price: "Mulai Rp 150.000",
    priceNote: "Harga oli dan suku cadang terpisah",
  },
  {
    id: "standard-care",
    name: "Standard Care",
    subtitle: "Perawatan Lebih Komprehensif",
    targetDesc: "Untuk kendaraan yang ingin perawatan lebih menyeluruh",
    vehicleType: "keduanya",
    highlighted: true,
    items: [
      "Semua item Basic Care",
      "Pembersihan throttle body / karburator",
      "Pengecekan sistem pengapian",
      "Pemeriksaan kondisi aki",
      "Pengecekan kondisi suspensi dasar",
      "Pemeriksaan sistem pendingin",
      "Laporan kondisi kendaraan",
    ],
    price: "Mulai Rp 300.000",
    priceNote: "Harga oli dan suku cadang terpisah",
  },
  {
    id: "complete-care",
    name: "Complete Care",
    subtitle: "Pemeriksaan & Perawatan Menyeluruh",
    targetDesc: "Untuk kendaraan yang ingin inspeksi dan perawatan komprehensif",
    vehicleType: "keduanya",
    items: [
      "Semua item Standard Care",
      "Pemeriksaan menyeluruh kaki-kaki",
      "Pemeriksaan sistem AC (dasar)",
      "Pengecekan sistem kelistrikan",
      "Pembersihan rem (depan & belakang)",
      "Pengecekan kondisi CVT / transmisi (dasar)",
      "Laporan kondisi kendaraan lengkap",
    ],
    price: "Mulai Rp 500.000",
    priceNote: "Harga oli dan suku cadang terpisah",
  },
];
