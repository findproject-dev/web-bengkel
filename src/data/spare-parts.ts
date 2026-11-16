// ============================================================
// FINDFIX — SPARE PARTS DATA
// ============================================================

export interface SparePart {
  id: string;
  name: string;
  category: SparePartCategory;
  vehicleType: ("mobil" | "motor" | "keduanya")[];
  image: string;
  description: string;
  price: string | null; // null = "Hubungi untuk harga"
  brands?: string[];
  inStock?: boolean; // undefined = unknown
}

export type SparePartCategory =
  | "oli-pelumas"
  | "filter"
  | "sistem-rem"
  | "kelistrikan"
  | "komponen-mesin"
  | "kaki-kaki"
  | "ban"
  | "aksesori";

export const SPARE_PART_CATEGORIES: { id: SparePartCategory; label: string; icon: string }[] = [
  { id: "oli-pelumas", label: "Oli & Pelumas", icon: "Droplets" },
  { id: "filter", label: "Filter", icon: "Filter" },
  { id: "sistem-rem", label: "Sistem Rem", icon: "StopCircle" },
  { id: "kelistrikan", label: "Kelistrikan", icon: "Zap" },
  { id: "komponen-mesin", label: "Komponen Mesin", icon: "Cpu" },
  { id: "kaki-kaki", label: "Kaki-Kaki", icon: "Circle" },
  { id: "ban", label: "Ban", icon: "CircleDot" },
  { id: "aksesori", label: "Aksesori", icon: "Package" },
];

export const SPARE_PARTS: SparePart[] = [
  // ─── OLI & PELUMAS ───────────────────────────────────────
  {
    id: "oli-mesin-mobil-10w40",
    name: "Oli Mesin Mobil 10W-40",
    category: "oli-pelumas",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80",
    description: "Oli mesin semi-sintetis untuk kendaraan bensin, memberikan perlindungan optimal pada mesin.",
    price: "Rp 85.000 – Rp 150.000",
    brands: ["Castrol", "Shell", "Federal", "TOP 1"],
  },
  {
    id: "oli-mesin-mobil-5w30",
    name: "Oli Mesin Mobil 5W-30 Full Synthetic",
    category: "oli-pelumas",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80",
    description: "Oli mesin full sintetis premium untuk kendaraan modern, memberikan perlindungan superior.",
    price: "Rp 150.000 – Rp 300.000",
    brands: ["Mobil 1", "Castrol EDGE", "Shell Helix Ultra"],
  },
  {
    id: "oli-mesin-motor-10w30",
    name: "Oli Mesin Motor 10W-30",
    category: "oli-pelumas",
    vehicleType: ["motor"],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80",
    description: "Oli mesin motor semi-sintetis untuk motor 4-tak, menjaga performa dan melindungi mesin.",
    price: "Rp 45.000 – Rp 85.000",
    brands: ["Yamalube", "Honda AHM", "Federal", "Evalube"],
  },
  {
    id: "oli-transmisi",
    name: "Oli Transmisi Matic",
    category: "oli-pelumas",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80",
    description: "Oli transmisi untuk kendaraan bertransmisi otomatis, menjaga performa perpindahan gigi.",
    price: "Rp 120.000 – Rp 250.000",
  },
  {
    id: "oli-rem",
    name: "Minyak Rem DOT 3/DOT 4",
    category: "oli-pelumas",
    vehicleType: ["keduanya"],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80",
    description: "Minyak rem berkualitas untuk sistem pengereman cakram dan tromol.",
    price: "Rp 25.000 – Rp 50.000",
  },

  // ─── FILTER ─────────────────────────────────────────────
  {
    id: "filter-udara-mobil",
    name: "Filter Udara Mobil",
    category: "filter",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
    description: "Filter udara untuk memastikan udara bersih masuk ke mesin kendaraan.",
    price: "Rp 50.000 – Rp 150.000",
    brands: ["Denso", "Mahle", "Bosch"],
  },
  {
    id: "filter-oli-mobil",
    name: "Filter Oli Mobil",
    category: "filter",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&q=80",
    description: "Filter oli untuk menjaga kebersihan oli dan melindungi mesin dari partikel kotor.",
    price: "Rp 35.000 – Rp 100.000",
  },
  {
    id: "filter-ac-cabin",
    name: "Filter Kabin AC",
    category: "filter",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
    description: "Filter kabin untuk menyaring udara yang masuk ke interior melalui sistem AC.",
    price: "Rp 75.000 – Rp 200.000",
  },

  // ─── SISTEM REM ─────────────────────────────────────────
  {
    id: "kampas-rem-mobil-depan",
    name: "Kampas Rem Cakram Mobil (Depan)",
    category: "sistem-rem",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&q=80",
    description: "Kampas rem cakram depan berkualitas untuk sistem pengereman yang optimal.",
    price: "Rp 150.000 – Rp 450.000",
    brands: ["Bendix", "Brembo", "TRW"],
  },
  {
    id: "kampas-rem-motor",
    name: "Kampas Rem Motor",
    category: "sistem-rem",
    vehicleType: ["motor"],
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&q=80",
    description: "Kampas rem untuk motor, tersedia untuk sistem cakram maupun tromol.",
    price: "Rp 25.000 – Rp 100.000",
  },
  {
    id: "disc-rotor-mobil",
    name: "Disc Rotor Rem Mobil",
    category: "sistem-rem",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=400&q=80",
    description: "Disc rotor rem mobil berkualitas untuk performa pengereman optimal.",
    price: "Rp 350.000 – Rp 800.000",
  },

  // ─── KELISTRIKAN ─────────────────────────────────────────
  {
    id: "aki-mobil",
    name: "Aki Mobil",
    category: "kelistrikan",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80",
    description: "Aki mobil berkualitas dengan kapasitas sesuai spesifikasi kendaraan.",
    price: "Rp 500.000 – Rp 1.200.000",
    brands: ["GS Astra", "Yuasa", "Panasonic", "Bosch"],
  },
  {
    id: "aki-motor",
    name: "Aki Motor",
    category: "kelistrikan",
    vehicleType: ["motor"],
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80",
    description: "Aki motor untuk memastikan sistem starter dan kelistrikan berfungsi optimal.",
    price: "Rp 150.000 – Rp 450.000",
    brands: ["GS Astra", "Yuasa", "Motobatt"],
  },
  {
    id: "busi-mobil",
    name: "Busi Mobil",
    category: "kelistrikan",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80",
    description: "Busi mobil berkualitas untuk pengapian yang optimal dan efisiensi bahan bakar.",
    price: "Rp 25.000 – Rp 150.000",
    brands: ["NGK", "Denso", "Bosch"],
  },
  {
    id: "busi-motor",
    name: "Busi Motor",
    category: "kelistrikan",
    vehicleType: ["motor"],
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80",
    description: "Busi motor untuk pembakaran yang sempurna dan performa optimal.",
    price: "Rp 15.000 – Rp 75.000",
    brands: ["NGK", "Denso", "Iridium"],
  },

  // ─── KOMPONEN MESIN ──────────────────────────────────────
  {
    id: "timing-belt",
    name: "Timing Belt Mobil",
    category: "komponen-mesin",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=400&q=80",
    description: "Timing belt untuk mengatur sinkronisasi mesin yang kritis.",
    price: "Rp 300.000 – Rp 800.000",
    brands: ["Gates", "Contitech", "Dayco"],
  },
  {
    id: "belt-cvt-motor",
    name: "V-Belt / Belt CVT Motor",
    category: "komponen-mesin",
    vehicleType: ["motor"],
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80",
    description: "Belt CVT untuk motor matic, komponen kunci transmisi CVT.",
    price: "Rp 75.000 – Rp 250.000",
    brands: ["Gates", "Bando", "Dayco"],
  },
  {
    id: "roller-cvt",
    name: "Roller CVT Motor",
    category: "komponen-mesin",
    vehicleType: ["motor"],
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&q=80",
    description: "Roller CVT untuk motor matic, mempengaruhi akselerasi dan performa.",
    price: "Rp 35.000 – Rp 100.000",
  },

  // ─── KAKI-KAKI ───────────────────────────────────────────
  {
    id: "shock-absorber",
    name: "Shock Absorber Mobil",
    category: "kaki-kaki",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
    description: "Shock absorber berkualitas untuk kenyamanan berkendara dan stabilitas kendaraan.",
    price: "Rp 350.000 – Rp 1.500.000",
    brands: ["KYB", "Monroe", "Bilstein"],
  },
  {
    id: "ball-joint",
    name: "Ball Joint Mobil",
    category: "kaki-kaki",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
    description: "Ball joint untuk sistem kemudi yang presisi dan aman.",
    price: "Rp 150.000 – Rp 450.000",
  },
  {
    id: "tie-rod",
    name: "Tie Rod End",
    category: "kaki-kaki",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&q=80",
    description: "Tie rod end untuk sistem kemudi yang akurat dan responsif.",
    price: "Rp 150.000 – Rp 400.000",
  },

  // ─── BAN ────────────────────────────────────────────────
  {
    id: "ban-mobil",
    name: "Ban Mobil",
    category: "ban",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=400&q=80",
    description: "Ban mobil berbagai ukuran dan merek untuk berbagai jenis kendaraan.",
    price: null,
    brands: ["Bridgestone", "Michelin", "Dunlop", "GT Radial", "Accelera"],
  },
  {
    id: "ban-motor",
    name: "Ban Motor",
    category: "ban",
    vehicleType: ["motor"],
    image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=400&q=80",
    description: "Ban motor berbagai ukuran, tersedia pilihan tubeless maupun tube type.",
    price: null,
    brands: ["IRC", "FDR", "Aspira", "Corsa", "Mizzle"],
  },

  // ─── AKSESORI ───────────────────────────────────────────
  {
    id: "wiper-blade",
    name: "Wiper Blade Mobil",
    category: "aksesori",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&q=80",
    description: "Wiper blade berkualitas untuk visibilitas optimal saat hujan.",
    price: "Rp 50.000 – Rp 150.000",
    brands: ["Bosch", "Denso", "Piaa"],
  },
  {
    id: "lampu-led-mobil",
    name: "Lampu LED Mobil",
    category: "aksesori",
    vehicleType: ["mobil"],
    image: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=400&q=80",
    description: "Lampu LED untuk visibilitas lebih baik dan tampilan kendaraan yang modern.",
    price: "Rp 75.000 – Rp 500.000",
  },
];
