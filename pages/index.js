import Head from 'next/head';
import { useState } from 'react';

const D = {
  brand: '18TOTO',
  domain: '18totowaplogin.com',
  logo: 'https://i.postimg.cc/mr6Ch8gB/18-png.png',
  linkLogin: 'https://loginwap.gelapsekali.com/18',
  linkDaftar: 'https://daftarwap.gelapsekali.com/18',
  amphtml: '18totowaplogin.com',
};

export default function Home() {
  const [faq, setFaq] = useState(null);
  return (
    <>
      <Head>
        <title>18TOTO Login Resmi - Akses Cepat & Aman 2026</title>
        <meta name="description" content="Login 18TOTO resmi di 18totowaplogin.com. Akses cepat tanpa blokir, server stabil 24 jam, dan keamanan data berlapis. Daftar gratis sekarang!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={D.logo} />
        <link rel="canonical" href={"https://" + D.domain + "/"} />
        <link rel="amphtml" href={"https://" + D.domain + "/amp/"} />
        <meta property="og:title" content="18TOTO Login Resmi - Akses Cepat & Aman 2026" />
        <meta property="og:description" content="Login 18TOTO resmi di 18totowaplogin.com. Akses cepat tanpa blokir, server stabil 24 jam, dan keamanan data berlapis. Daftar gratis sekarang!" />
        <meta property="og:image" content={D.logo} />
        <meta property="og:url" content={"https://" + D.domain} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="18TOTO Login Resmi - Akses Cepat & Aman 2026" />
        <meta name="twitter:description" content="Login 18TOTO resmi di 18totowaplogin.com. Akses cepat tanpa blokir, server stabil 24 jam, dan keamanan data berlapis. Daftar gratis sekarang!" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        *{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
        body{font-family:'Outfit',sans-serif;background:#080818;color:#e0e0ff;line-height:1.7;overflow-x:hidden}
        a{color:inherit;text-decoration:none}img{max-width:100%;display:block}
        .w{max-width:1060px;margin:0 auto;padding:0 20px}

        header{position:sticky;top:0;z-index:50;background:#080818ee;backdrop-filter:blur(16px);border-bottom:1px solid rgba(108,99,255,.12)}
        .nv{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
        .lo{display:flex;align-items:center;gap:8px;font-weight:800;font-size:19px;color:#6c63ff}
        .lo img{width:32px;height:32px;border-radius:8px}
        .nb{display:flex;gap:8px}
        .b{display:inline-flex;align-items:center;gap:6px;padding:10px 20px;border-radius:12px;font-weight:700;font-size:13px;transition:.25s;border:none;cursor:pointer;font-family:inherit}
        .bp{background:linear-gradient(135deg,#6c63ff,#b8b4ff);color:#080818;box-shadow:0 4px 16px #6c63ff35}
        .bp:hover{transform:translateY(-2px);box-shadow:0 6px 24px #6c63ff50}
        .bo{border:1.5px solid rgba(108,99,255,.12);color:#e0e0ff;background:transparent}
        .bo:hover{border-color:#6c63ff;color:#6c63ff}
        .bl{padding:14px 28px;font-size:15px}

        .hero{padding:70px 0 50px;text-align:center;background:#080818}
        .hero .badge{display:inline-block;padding:5px 14px;border:1px solid #6c63ff20;border-radius:99px;font-size:11px;color:#6c63ff;background:#6c63ff10;margin-bottom:16px;font-weight:700}
        .hero h1{font-size:clamp(26px,4.5vw,46px);font-weight:800;line-height:1.12;margin-bottom:14px;color:#b8b4ff}
        .hero .ld{color:#9e9adb;font-size:15px;max-width:580px;margin:0 auto 24px}
        .hero .hb{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-bottom:20px}
        .hero .tr{display:flex;justify-content:center;gap:20px;font-size:12px;color:#9e9adb}
        .hero .tr .ck{color:#6c63ff;font-weight:700}

        .sec{padding:50px 0}
        .sec-a{background:#10102a}
        .sh{margin-bottom:32px}
        .sh.c{text-align:center}
        .sh .tg{display:inline-block;padding:4px 12px;border:1px solid rgba(108,99,255,.12);border-radius:10px;font-size:10px;color:#6c63ff;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:8px}
        .sh h2{font-size:clamp(20px,3vw,32px);font-weight:800;margin-bottom:6px}
        .sh p{color:#9e9adb;font-size:13px;max-width:540px}
        .sh.c p{margin:0 auto}

        .fg{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
        .fc{background:#14142e;border:1px solid rgba(108,99,255,.12);border-radius:14px;padding:22px;display:flex;gap:14px;transition:.3s}
        .fc:hover{border-color:#6c63ff;transform:translateY(-3px);box-shadow:0 10px 30px #6c63ff10}
        .fc .ic{width:44px;height:44px;border-radius:10px;background:#6c63ff12;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
        .fc h3{font-size:14px;font-weight:700;margin-bottom:3px}
        .fc p{color:#9e9adb;font-size:12px;margin:0}

        .body-text{max-width:760px}
        .body-text.c{margin:0 auto}
        .body-text p{color:#9e9adb;font-size:14px;line-height:1.85;margin-bottom:16px;text-align:justify}

        .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
        .step{background:#14142e;border:1px solid rgba(108,99,255,.12);border-radius:14px;padding:20px;text-align:center;transition:.3s}
        .step:hover{border-color:#6c63ff}
        .step .nm{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6c63ff,#b8b4ff);color:#080818;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;margin:0 auto 10px}
        .step h3{font-size:13px;font-weight:700;margin-bottom:3px}
        .step p{color:#9e9adb;font-size:11px;margin:0}

        .cta{background:linear-gradient(135deg,#6c63ff,#b8b4ff);border-radius:16px;padding:44px 24px;text-align:center;color:#080818}
        .cta h2{font-size:clamp(18px,3vw,28px);font-weight:800;margin-bottom:8px}
        .cta p{opacity:.9;margin-bottom:18px;font-size:14px}
        .cta .b{background:#14142e;color:#6c63ff;font-weight:700}

        .faq-list{max-width:700px;margin:0 auto}
        .fi{background:#14142e;border:1px solid rgba(108,99,255,.12);border-radius:12px;padding:16px 20px;margin-bottom:8px;cursor:pointer;transition:.2s}
        .fi:hover{border-color:#6c63ff}
        .fq{font-weight:600;display:flex;justify-content:space-between;align-items:center;font-size:14px}
        .fq span{color:#6c63ff;font-size:18px}
        .fa{margin-top:10px;color:#9e9adb;font-size:13px;line-height:1.7}

        footer{border-top:1px solid rgba(108,99,255,.12);padding:24px 0;text-align:center;color:#9e9adb;font-size:11px}
        footer .fl{display:flex;justify-content:center;gap:14px;margin-bottom:6px;flex-wrap:wrap}
        footer a:hover{color:#6c63ff}

        
        .bnr{padding:20px 0}
        .bnr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .bnr-card{border-radius:12px;overflow:hidden;border:1px solid var(--border,rgba(255,255,255,.1));transition:.3s}
        .bnr-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.15)}
        .bnr-card img{width:100%;height:auto;display:block}
        @media(max-width:768px){.bnr-grid{grid-template-columns:1fr}}
        @media(max-width:768px){.fg,.steps{grid-template-columns:1fr}}
      `}</style>

      <header><div className="w nv">
        <a href="#" className="lo"><img src={D.logo} alt={D.brand} />{D.brand}</a>
        <div className="nb"><a href={D.linkLogin} className="b bo">Login</a><a href={D.linkDaftar} className="b bp">Daftar</a></div>
      </div></header>

      <main>
        <section className="hero"><div className="w">
          <div className="badge">18TOTO &mdash; Platform Resmi 2026</div>
          <h1>18TOTO Login Resmi - Akses Cepat & Aman 2026</h1>
          <p className="ld">Login 18TOTO resmi di 18totowaplogin.com. Akses cepat tanpa blokir, server stabil 24 jam, dan keamanan data berlapis. Daftar gratis sekarang!</p>
          <div className="hb">
            <a href={D.linkDaftar} className="b bp bl">Mulai Sekarang — Gratis! &rarr;</a>
            <a href={D.linkLogin} className="b bo bl">Login Akun</a>
          </div>
          <div className="tr">
            <span><span className="ck">&#10003;</span> SSL 256-bit</span>
            <span><span className="ck">&#10003;</span> Uptime 99.9%</span>
            <span><span className="ck">&#10003;</span> Support 24/7</span>
          </div>
        </div></section>

        
        <section className="bnr"><div className="w">
          <div className="bnr-grid">
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/11/720/280" alt="Promo 18TOTO 1" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/12/720/280" alt="Promo 18TOTO 2" loading="lazy" /></a>
            <a href={D.linkDaftar} className="bnr-card"><img src="https://picsum.photos/id/13/720/280" alt="Promo 18TOTO 3" loading="lazy" /></a>
          </div>
        </div></section>

        <section className="sec" id="fitur"><div className="w">
          <div className="sh c"><span className="tg">Akses Instan Tanpa Hambatan</span><h2>Akses Instan Tanpa Hambatan</h2><p>Server Stabil Nonstop &mdash; fitur unggulan untuk pengalaman terbaik Anda.</p></div>
          <div className="fg">
            <div className="fc"><div className="ic">&#9889;</div><div><h3>Respons Kilat</h3><p>Halaman dimuat dalam milidetik berkat server premium.</p></div></div>
            <div className="fc"><div className="ic">&#128274;</div><div><h3>Enkripsi Militer</h3><p>SSL 256-bit menjaga setiap data yang Anda kirimkan.</p></div></div>
            <div className="fc"><div className="ic">&#128241;</div><div><h3>Adaptif di Semua Layar</h3><p>Tampilan menyesuaikan dari desktop hingga smartphone.</p></div></div>
            <div className="fc"><div className="ic">&#128172;</div><div><h3>Bantuan Siaga 24/7</h3><p>Tim CS profesional siap membantu kapan saja.</p></div></div>
          </div>
        </div></section>

        <section className="sec sec-a" id="tentang"><div className="w">
          <div className="sh"><span className="tg">Keamanan Data Terjamin</span><h2>Keamanan Data Terjamin</h2></div>
          <div className="body-text">
            <p>18TOTO melalui 18totowaplogin.com menyediakan gerbang login resmi yang dirancang untuk memberikan pengalaman akses tercepat dan teraman bagi seluruh pengguna. Infrastruktur server yang tersebar di beberapa data center menjamin uptime 99,9% sehingga Anda tidak perlu khawatir tentang gangguan layanan di jam-jam sibuk sekalipun. Setiap koneksi diamankan dengan sertifikat SSL 256-bit yang memastikan transmisi data tetap terenkripsi dari ujung ke ujung.</p>
            <p>Platform ini dirancang dengan filosofi user-first, di mana setiap elemen antarmuka dioptimalkan untuk kemudahan navigasi. Tim pengembang secara berkala melakukan pembaruan sistem untuk menghadirkan fitur-fitur terbaru yang relevan dengan kebutuhan pengguna modern. Dukungan customer service yang responsif dan tersedia sepanjang waktu menjadi pelengkap sempurna dari ekosistem digital yang dibangun untuk kenyamanan Anda.</p>
          </div>
        </div></section>

        <section className="sec" id="panduan"><div className="w">
          <div className="sh c"><span className="tg">Panduan Masuk Akun</span><h2>Panduan Masuk Akun</h2><p>Ikuti langkah berikut untuk memulai.</p></div>
          <div className="steps">
            <div className="step"><div className="nm">1</div><h3>Server Stabil Nonstop</h3><p>Buka halaman resmi 18TOTO melalui link di atas.</p></div>
            <div className="step"><div className="nm">2</div><h3>Proteksi Enkripsi SSL</h3><p>Sistem kami menjaga data Anda tetap aman.</p></div>
            <div className="step"><div className="nm">3</div><h3>Langkah Registrasi Mudah</h3><p>Selesai! Nikmati semua fitur yang tersedia.</p></div>
          </div>
        </div></section>

        <section className="sec sec-a"><div className="w">
          <div className="cta">
            <h2>Bergabung dengan 18TOTO Sekarang!</h2>
            <p>Daftar gratis dan rasakan layanan premium tanpa batas.</p>
            <a href={D.linkDaftar} className="b bl">Mulai Sekarang — Gratis! &rarr;</a>
          </div>
        </div></section>

        <section className="sec" id="faq"><div className="w">
          <div className="sh c"><span className="tg">FAQ</span><h2>Pertanyaan Umum</h2><p>Temukan jawaban untuk pertanyaan populer.</p></div>
          <div className="faq-list">
            <div className="fi" key={0} onClick={() => setFaq(faq === 0 ? null : 0)}>
              <div className="fq">Bagaimana cara masuk ke 18TOTO?<span>{faq === 0 ? '\u2212' : '+'}</span></div>
              {faq === 0 && <div className="fa">Kunjungi 18totowaplogin.com, masukkan username dan password, lalu tekan tombol Login.</div>}
            </div>
            <div className="fi" key={1} onClick={() => setFaq(faq === 1 ? null : 1)}>
              <div className="fq">Apakah data login saya terlindungi?<span>{faq === 1 ? '\u2212' : '+'}</span></div>
              {faq === 1 && <div className="fa">Ya, seluruh data dienkripsi menggunakan SSL 256-bit standar industri perbankan.</div>}
            </div>
            <div className="fi" key={2} onClick={() => setFaq(faq === 2 ? null : 2)}>
              <div className="fq">Bisa diakses lewat ponsel?<span>{faq === 2 ? '\u2212' : '+'}</span></div>
              {faq === 2 && <div className="fa">Tentu, tampilan otomatis menyesuaikan untuk pengalaman mobile terbaik.</div>}
            </div>
            <div className="fi" key={3} onClick={() => setFaq(faq === 3 ? null : 3)}>
              <div className="fq">Apa yang harus dilakukan jika gagal login?<span>{faq === 3 ? '\u2212' : '+'}</span></div>
              {faq === 3 && <div className="fa">Coba reset password melalui menu Lupa Password atau hubungi CS kami 24/7.</div>}
            </div>
          </div>
        </div></section>
      </main>

      <footer><div className="w">
        <div className="fl">
          <a href="#fitur">Fitur</a><a href="#tentang">Tentang</a><a href="#panduan">Panduan</a><a href="#faq">FAQ</a>
          <a href={D.linkLogin}>Login</a><a href={D.linkDaftar}>Daftar</a>
        </div>
        <p>&copy; 2026 {D.brand}. Situs resmi &mdash; {D.domain}</p>
      </div></footer>
    </>
  );
}
