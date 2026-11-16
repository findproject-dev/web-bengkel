// ============================================================
// FINDFIX AUTOMOTIVE SERVICE CENTER — CENTRALIZED SITE CONFIG
// ============================================================

export const SITE = {
  name: "FindFix",
  fullName: "FindFix Automotive Service Center",
  tagline: "Solusi Tepat, Kendaraan Hebat.",
  description:
    "FindFix merupakan bengkel umum mobil dan motor yang telah melayani pelanggan sejak 2017 di Semarang. Kami menyediakan berbagai layanan perawatan, pemeriksaan, dan perbaikan kendaraan dengan mengutamakan harga yang kompetitif, kualitas pengerjaan, serta pelayanan yang cepat dan terpercaya.",
  established: 2017,
  url: "https://findfix.id",
  locale: "id-ID",
  language: "id",

  // ─── Contact Details ────────────────────────────────────────
  // Centralized demo contact details for portfolio demonstration.
  whatsapp: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  phone: "081234567890",
  phoneDisplay: "0812-3456-7890",
  email: "halo@findfix.id",

  // ─── Location ────────────────────────────────────────────────
  // Known and verified location is Semarang, Jawa Tengah.
  city: "Semarang",
  province: "Jawa Tengah",
  country: "Indonesia",
  address: "Semarang, Jawa Tengah",
  addressDisplay: "Semarang, Jawa Tengah",
  streetAddress: "", // Future verified street address
  postalCode: "",    // Future verified postal code
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.8430588661!2d110.33466299999999!3d-7.0051453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da3cb9f2!2sSemarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  mapsLink: "https://maps.google.com/?q=Semarang,+Jawa+Tengah",

  // ─── Operating Hours ─────────────────────────────────────────
  hours: {
    weekday: "Senin – Jumat: 08.00 – 17.00 WIB",
    saturday: "Sabtu: 08.00 – 15.00 WIB",
    sunday: "Minggu: Tutup",
    note: "Jam operasional dapat berubah pada hari libur nasional.",
  },

  // ─── Social Media ────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/findfix.id",
    facebook: "https://facebook.com/findfix.id",
    tiktok: "https://tiktok.com/@findfix.id",
    youtube: "",
  },

  // ─── SEO ────────────────────────────────────────────────────
  keywords: [
    "bengkel mobil Semarang",
    "bengkel motor Semarang",
    "servis mobil Semarang",
    "servis motor Semarang",
    "ganti oli Semarang",
    "bengkel kendaraan terpercaya Semarang",
    "perbaikan mesin mobil Semarang",
    "FindFix bengkel",
  ],

  // ─── Content Disclaimers ────────────────────────────────────
  isDemoContent: true,
  pricingDisclaimer:
    "Harga yang ditampilkan merupakan estimasi awal dan dapat berubah berdasarkan jenis kendaraan, kondisi komponen, serta kebutuhan pengerjaan. Estimasi final akan disampaikan setelah pemeriksaan.",
  testimonialsNote:
    "Testimoni di bawah merupakan konten ilustrasi. Testimoni pelanggan nyata akan ditampilkan setelah dikumpulkan.",
  promotionsNote:
    "Promo yang ditampilkan merupakan contoh penawaran dan belum tentu aktif saat ini. Hubungi FindFix untuk informasi promo terkini.",
};

// ─── WhatsApp Helpers ────────────────────────────────────────
export function isWhatsAppConfigured(): boolean {
  return Boolean(SITE.whatsapp && SITE.whatsapp.trim().length >= 9);
}

export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function waBookingMessage(data: {
  nama: string;
  wa: string;
  kendaraan: string;
  merek: string;
  tipe: string;
  layanan: string;
  keluhan?: string;
  tanggal: string;
  waktu: string;
  tahun?: string;
  nopol?: string;
  catatan?: string;
}): string {
  const vehicleDesc = [data.merek, data.tipe, data.tahun].filter(Boolean).join(" ");
  const notes = data.catatan || data.keluhan || "-";

  return `Halo FindFix, saya ingin melakukan booking servis.

Data Pelanggan
Nama: ${data.nama}
Nomor Telepon: ${data.wa}

Informasi Kendaraan
Jenis Kendaraan: ${data.kendaraan}
Merek/Model: ${vehicleDesc || `${data.merek} ${data.tipe}`}
Nomor Polisi: ${data.nopol || "-"}

Detail Servis
Layanan: ${data.layanan}
Tanggal: ${data.tanggal}
Waktu: ${data.waktu}

Catatan:
${notes}

Mohon informasi lebih lanjut mengenai booking ini. Terima kasih.`;
}

export function waProductInquiry(productName: string): string {
  return `Halo FindFix, saya ingin menanyakan produk *${productName}*. Apakah produk tersebut tersedia dan berapa harganya?`;
}
