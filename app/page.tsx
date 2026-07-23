import type { Metadata } from "next";

const BASE_URL = "https://sellertools.id";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
};

const features = [
  {
    icon: "🧠",
    title: "AI Berbasis Knowledge Base",
    desc: "Upload FAQ dan info produk toko kamu. AI hanya akan menjawab berdasarkan data yang kamu berikan — tidak ngarang, tidak salah info.",
  },
  {
    icon: "🏪",
    title: "Multi-Toko dalam Satu Panel",
    desc: "Kelola banyak toko Shopee sekaligus dari satu sidebar. Pindah toko cukup satu klik, AI langsung paham konteks toko yang aktif.",
  },
  {
    icon: "🎛️",
    title: "Autonomy Slider 1-5",
    desc: "Atur seberapa mandiri AI bekerja per toko. Level 1 hanya draft, level 5 kirim otomatis. Kontrol penuh ada di tanganmu.",
  },
  {
    icon: "🌙",
    title: "Jadwal Shift Malam",
    desc: "Set jam operasional per toko. Di luar jam kerja, AI tetap aktif membantu sehingga tidak ada chat yang terbengkalai.",
  },
  {
    icon: "📋",
    title: "Audit Log Lengkap",
    desc: "Setiap keputusan AI dicatat: intent, confidence, draft, dan apakah dikirim atau di-eskalasi ke admin. Transparansi penuh.",
  },
  {
    icon: "🔒",
    title: "Aman & Privat",
    desc: "API key tidak pernah disimpan di browser. Data pembeli disamarkan sebelum dikirim ke LLM. Keamanan diutamakan.",
  },
];

const steps = [
  {
    num: "01",
    title: "Pasang Ekstensi Chrome",
    desc: "Download dan pasang SellerTools di Chrome. Tidak perlu coding, tidak perlu konfigurasi server.",
  },
  {
    num: "02",
    title: "Upload Knowledge Base Toko",
    desc: "Tambahkan FAQ, info produk, kebijakan toko, dan skrip CS. AI akan belajar dari data ini.",
  },
  {
    num: "03",
    title: "Mulai Balas Chat Otomatis",
    desc: "Buka Shopee Seller Center. Panel SellerTools muncul otomatis. AI langsung siap membantu membalas chat.",
  },
];

const faqs = [
  {
    q: "Apakah SellerTools menggantikan Shopee AI?",
    a: "Tidak. SellerTools adalah lapisan kedua — bekerja setelah Shopee AI menangani pertanyaan mudah. Shopee AI untuk pertanyaan umum, SellerTools untuk pertanyaan teknis yang butuh info spesifik toko kamu.",
  },
  {
    q: "Apakah aman digunakan? Apakah akun Shopee saya berisiko?",
    a: "Aman. SellerTools tidak mengakses kredensial Shopee kamu. Ekstensi hanya membaca tampilan Seller Center dan mengirim pesan melalui UI resmi Shopee, persis seperti yang dilakukan admin manual.",
  },
  {
    q: "Berapa toko Shopee yang bisa dikelola?",
    a: "Tidak ada batasan jumlah toko. Multi-toko adalah fitur inti SellerTools — dirancang sejak awal untuk seller dengan banyak toko.",
  },
  {
    q: "Apakah AI bisa salah menjawab?",
    a: "AI hanya menjawab berdasarkan knowledge base yang kamu upload. Jika AI tidak yakin (confidence rendah), ia akan eskalasi ke admin — tidak akan mengirim jawaban yang salah.",
  },
  {
    q: "Pertanyaan apa saja yang AI tidak akan jawab otomatis?",
    a: "Komplain, refund, nego harga, dan custom order selalu membutuhkan persetujuan admin. Keputusan sensitif tidak pernah dikirim otomatis.",
  },
];

export default function Home() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: BASE_URL,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cara Menggunakan SellerTools untuk Shopee",
    description:
      "Langkah-langkah menggunakan ekstensi Chrome SellerTools untuk membalas chat Shopee secara otomatis dengan AI.",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">ST</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">SellerTools</span>
            <span className="text-gray-400 text-sm">.id</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#fitur" className="hover:text-blue-600 transition-colors">Fitur</a>
            <a href="#cara-kerja" className="hover:text-blue-600 transition-colors">Cara Kerja</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQ</a>
          </div>
          <a
            href="#cta"
            className="btn-primary text-sm px-4 py-2"
          >
            Coba Gratis
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Tersedia untuk Shopee Seller Center
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Balas Chat Shopee
            <br />
            <span className="text-blue-400">Otomatis dengan AI</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Ekstensi Chrome yang mempelajari produk dan kebijakan toko kamu, lalu membantu membalas pertanyaan pembeli secara cerdas — bukan sekadar template.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#cta" className="btn-primary text-base px-8 py-4">
              Pasang Sekarang — Gratis
            </a>
            <a href="#cara-kerja" className="btn-secondary text-base px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              Lihat Cara Kerja
            </a>
          </div>
          <p className="mt-6 text-slate-400 text-sm">
            Tidak perlu kartu kredit · Pasang dalam 2 menit · Cocok untuk semua kategori toko
          </p>
        </div>

        {/* Extension mockup */}
        <div className="max-w-3xl mx-auto mt-16 relative">
          <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-slate-400 text-xs">Shopee Seller Center — Chat</span>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 space-y-3">
                <div className="bg-slate-700/50 rounded-lg p-3 text-sm text-slate-300">
                  <p className="text-slate-400 text-xs mb-1">Pembeli</p>
                  <p>Kak, spek baterai produk ini berapa mAh ya?</p>
                </div>
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-3 text-sm">
                  <p className="text-blue-400 text-xs mb-1">✨ AI Draft (confidence 94%)</p>
                  <p className="text-slate-200">Halo Kak! Produk ini menggunakan baterai 5000 mAh dengan teknologi fast charging 33W. Bisa tahan 1-2 hari pemakaian normal. Ada yang ingin ditanyakan lagi? 😊</p>
                </div>
              </div>
              <div className="w-48 bg-slate-900/80 rounded-xl p-3 text-xs text-slate-400 border border-slate-700/50 space-y-2">
                <p className="text-white font-semibold text-sm">SellerTools</p>
                <div className="flex items-center justify-between">
                  <span>Toko Aktif</span>
                  <span className="text-green-400">Reja Store 1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Autonomy</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(n => (
                      <div key={n} className={`w-3 h-3 rounded-sm ${n <= 3 ? 'bg-blue-500' : 'bg-slate-600'}`} />
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-2 space-y-1">
                  <button className="w-full bg-blue-600 text-white rounded-lg py-1.5 text-xs font-medium">Kirim</button>
                  <button className="w-full bg-slate-700 text-slate-300 rounded-lg py-1.5 text-xs">Eskalasi Admin</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { val: "< 2 mnt", label: "Waktu pasang" },
            { val: "94%+", label: "Rata-rata confidence AI" },
            { val: "24/7", label: "Aktif balas chat" },
            { val: "∞ Toko", label: "Multi-toko tanpa batas" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold">{s.val}</p>
              <p className="text-blue-200 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FITUR */}
      <section id="fitur" className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Semua yang Dibutuhkan Seller Aktif
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Bukan sekadar auto-reply template. SellerTools memahami konteks percakapan dan menjawab seperti CS terbaik toko kamu.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section id="cara-kerja" className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mulai dalam 3 Langkah
            </h2>
            <p className="text-gray-500 text-lg">Tidak perlu akun baru. Langsung pasang dan siap digunakan.</p>
          </div>
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                  {s.num}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute ml-7 mt-14 w-0.5 h-8 bg-blue-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLEMENT SECTION */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bekerja Bersama Shopee AI, Bukan Melawannya
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm mt-10">
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center">
              <p className="text-orange-300 font-semibold mb-1">Shopee AI (Bawaan)</p>
              <p className="text-slate-300">Pertanyaan mudah & umum</p>
              <p className="text-slate-400 text-xs mt-1">Harga, stok, promo, estimasi kirim</p>
            </div>
            <div className="text-slate-400 text-2xl font-light">→</div>
            <div className="bg-blue-600/30 border border-blue-500/40 rounded-xl px-6 py-4 text-center">
              <p className="text-blue-300 font-semibold mb-1">SellerTools (Layer 2)</p>
              <p className="text-slate-300">Pertanyaan teknis & khusus</p>
              <p className="text-slate-400 text-xs mt-1">Spec produk, kebijakan toko, custom order</p>
            </div>
          </div>
          <p className="mt-8 text-slate-400 text-sm max-w-xl mx-auto">
            Shopee AI menangani yang mudah. SellerTools menangani yang susah — dengan konteks penuh dari knowledge base toko kamu.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl border border-gray-100 shadow-sm group">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 list-none">
                  {f.q}
                  <span className="text-blue-600 ml-4 flex-shrink-0 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-4 sm:px-6 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Siap Membalas Chat Lebih Cepat?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Bergabung dengan seller-seller aktif yang sudah menggunakan SellerTools untuk meningkatkan responsivitas toko mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/62811111111?text=Halo, saya ingin coba SellerTools untuk toko Shopee saya"
              className="btn-secondary text-base px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hubungi via WhatsApp
            </a>
            <a
              href="mailto:hello@sellertools.id"
              className="btn-secondary text-base px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Email Kami
            </a>
          </div>
          <p className="mt-6 text-blue-200 text-sm">
            Respon dalam 1 hari kerja · Gratis konsultasi awal
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">ST</span>
              </div>
              <span className="text-white font-semibold">SellerTools.id</span>
            </div>
            <p className="text-sm">AI Reply Assistant untuk Shopee Seller Center</p>
            <p className="text-xs mt-1">© {new Date().getFullYear()} PT Sellora Digital. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#fitur" className="hover:text-white transition-colors">Fitur</a>
            <a href="#cara-kerja" className="hover:text-white transition-colors">Cara Kerja</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="mailto:hello@sellertools.id" className="hover:text-white transition-colors">Kontak</a>
          </div>
        </div>
      </footer>
    </>
  );
}
