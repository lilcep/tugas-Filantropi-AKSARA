/* Data simulasi terpusat. Ganti objek ini untuk memperbarui ringkasan, program, dan laporan. */
const DATA={
  totalIn:48500000,
  totalOut:33000000,
  operating:3000000,
  beneficiaries:248,
  volunteers:36,
  programs:[
{
    name:'Sahur Berbagi',
    icon:'☾',
    type:'Infak · Sedekah',
    target:12000000,
    raised:8400000,
    people:120,
    volunteers:18,
    location:'Kota Yogyakarta',
    schedule:'Ramadan · pekan 1–4',
    pic:'Koordinator Program (placeholder)',
    aid:'Paket makanan sahur',
    status:'Berjalan',
    desc:'Menghadirkan makanan sahur bagi pekerja jalanan, masyarakat yang masih beraktivitas malam, dan keluarga yang membutuhkan.'
  },
  {
    name:'Sedekah Pangan',
    icon:'♨',
    type:'Sedekah',
    target:8000000,
    raised:5600000,
    people:100,
    volunteers:12,
    location:'Kota Yogyakarta',
    schedule:'Bulanan',
    pic:'Manajer Program (placeholder)',
    aid:'Makanan siap saji',
    status:'Berjalan',
    desc:'Pembagian makanan siap saji dengan proses pengadaan dan pencatatan yang terbuka.'
  },
  {
    name:'Paket Sembako Dhuafa',
    icon:'▧',
    type:'Zakat · Infak',
    target:15000000,
    raised:10500000,
    people:75,
    volunteers:10,
    location:'Kabupaten Yogyakarta',
    schedule:'Triwulanan',
    pic:'Manajer Program (placeholder)',
    aid:'Paket kebutuhan pokok',
    status:'Persiapan',
    desc:'Bantuan kebutuhan pokok bagi keluarga prasejahtera yang telah melalui verifikasi.'
  },
  {
    name:'Beasiswa Pendidikan',
    icon:'✳',
    type:'Zakat · Infak',
    target:20000000,
    raised:9000000,
    people:30,
    volunteers:8,
    location:'Kota Yogyakarta',
    schedule:'Tahun ajaran baru',
    pic:'Koordinator Pendidikan (placeholder)',
    aid:'Bantuan biaya dan perlengkapan sekolah',
    status:'Persiapan',
    desc:'Dukungan pendidikan dan perlengkapan sekolah bagi anak dari keluarga prasejahtera.'
  },
  {
    name:'Bantuan Kesehatan',
    icon:'✚',
    type:'Zakat · Infak',
    target:12000000,
    raised:4800000,
    people:20,
    volunteers:6,
    location:'Kota Yogyakarta',
    schedule:'Sesuai kebutuhan',
    pic:'Koordinator Kesehatan (placeholder)',
    aid:'Bantuan kebutuhan kesehatan dasar',
    status:'Persiapan',
    desc:'Bantuan kebutuhan kesehatan dasar setelah pengecekan kebutuhan dan kelayakan.'
  },
  {
    name:'Pemberdayaan UMKM',
    icon:'⌂',
    type:'Zakat · Infak',
    target:25000000,
    raised:12500000,
    people:25,
    volunteers:8,
    location:'Kota Yogyakarta',
    schedule:'Semesteran',
    pic:'Pendamping UMKM (placeholder)',
    aid:'Dukungan usaha dan pendampingan',
    status:'Persiapan',
    desc:'Dukungan usaha kecil dengan pendampingan agar manfaat dapat berkembang berkelanjutan.'
  },
  {
    name:'Wakaf Produktif',
    icon:'◈',
    type:'Wakaf',
    target:40000000,
    raised:16000000,
    people:80,
    volunteers:6,
    location:'Lokasi ditetapkan setelah kajian',
    schedule:'Tahap kajian',
    pic:'Manajer Program (placeholder)',
    aid:'Pengelolaan aset wakaf produktif',
    status:'Perencanaan',
    desc:'Pengelolaan aset wakaf agar pokok terjaga dan manfaat sosial tersalurkan.'
  },
  {
    name:'Relawan Berbagi Ilmu',
    icon:'✎',
    type:'Tenaga · Ilmu',
    target:5000000,
    raised:3200000,
    people:60,
    volunteers:24,
    location:'Kota Yogyakarta',
    schedule:'Dua kali sebulan',
    pic:'Koordinator Relawan (placeholder)',
    aid:'Kelas, pelatihan, dan pendampingan',
    status:'Berjalan',
    desc:'Filantropi tenaga dan ilmu melalui pendidikan, pelatihan, serta kegiatan sukarela.'
  }],
  transactions:[['TRX-SIM-001',
  '01/10/2026',
  'Hamba Allah',
  'Zakat maal',
  'Transfer (simulasi)',
  12000000,
  'Tercatat · simulasi'],
  ['TRX-SIM-002',
  '04/10/2026',
  'Anonim',
  'Infak',
  'E-wallet (simulasi)',
  8500000,
  'Tercatat · simulasi'],
  ['TRX-SIM-003',
  '09/10/2026',
  'Hamba Allah',
  'Sedekah',
  'Transfer (simulasi)',
  7000000,
  'Tercatat · simulasi'],
  ['TRX-SIM-004',
  '12/10/2026',
  'Anonim',
  'Wakaf',
  'Donasi langsung (simulasi)',
  8500000,
  'Tercatat · simulasi'],
  ['TRX-SIM-005',
  '15/10/2026',
  'Hamba Allah',
  'Infak',
  'QRIS (placeholder)',
  6500000,
  'Tercatat · simulasi'],
  ['TRX-SIM-006',
  '20/10/2026',
  'Anonim',
  'Sedekah',
  'Transfer (simulasi)',
  6000000,
  'Tercatat · simulasi']],
  disbursements:[['20/10/2026',
  'Sahur Berbagi',
  'Infak/Sedekah',
  'Penerima terverifikasi (simulasi)',
  'Yogyakarta',
  10500000,
  'Paket pangan; data penerima disamarkan'],
  ['21/10/2026',
  'Paket Sembako Dhuafa',
  'Zakat',
  'Keluarga penerima (simulasi)',
  'Yogyakarta',
  14000000,
  'Penyaluran asnaf (simulasi)'],
  ['22/10/2026',
  'Beasiswa Pendidikan',
  'Infak',
  'Pelajar penerima (simulasi)',
  'Yogyakarta',
  5500000,
  'Bantuan perlengkapan (simulasi)'],
  ['23/10/2026',
  'Bantuan Kesehatan',
  'Zakat',
  'Penerima manfaat (simulasi)',
  'Yogyakarta',
  3000000,
  'Bantuan kesehatan dasar (simulasi)']]
};
const rupiah=n=>'Rp'+Number(n).toLocaleString('id-ID');
const pct=(a,
b)=>{
  const target=Number(b);
  const value=Number(a);
  if(!Number.isFinite(target)||target<=0||!Number.isFinite(value)) return 0;
  return Math.min(100,Math.max(0,Math.round(value/target*100)));
};
const escapeHtml=value=>String(value)
  .replaceAll('&','&amp;')
  .replaceAll('<','&lt;')
  .replaceAll('>','&gt;')
  .replaceAll('"','&quot;')
  .replaceAll("'",'&#039;');
const sim='<span class="sim-label">DATA SIMULASI</span>';
const app=document.getElementById('app');
function pageHero(eyebrow,
title,
desc){
  return `<section class="page-hero"><div class="container"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div></section>`
}
function progCard(p){
  return `<article class="program-card"><div class="card-top"><span class="icon">${p.icon}</span><span class="tag">${p.status}</span></div><div class="eyebrow">${p.type}</div><h3>${p.name}</h3><p>${p.desc}</p><div class="fund-row"><span>Terkumpul ${sim}</span><b>${rupiah(p.raised)}</b></div><div class="progress"><span style="width:${pct(p.raised,p.target)}%"></span></div><div class="program-meta"><span>Target dana<br><b>${rupiah(p.target)}</b></span><span>Target penerima<br><b>${p.people} orang</b></span><span>Relawan<br><b>${p.volunteers} orang</b></span><span>Progres<br><b>${pct(p.raised,p.target)}%</b></span><span>Lokasi<br><b>${p.location}</b></span><span>Jadwal<br><b>${p.schedule}</b></span><span>PIC<br><b>${p.pic}</b></span><span>Bentuk bantuan<br><b>${p.aid}</b></span></div><div class="program-actions"><a class="btn btn-sm btn-outline" href="evaluasi.html">Lihat Detail ↗</a><a class="btn btn-sm" href="donasi.html?program=${encodeURIComponent(p.name)}">Donasi Sekarang ↗</a></div></article>`
}
function home(){
  return `<section class="hero"><div class="container hero-grid"><div class="hero-copy"><div class="eyebrow">Lembaga Filantropi Islam · Simulasi Akademik</div><h1>Kebaikan dimulai dari <em>kepedulian.</em></h1><p>Setiap kebaikan memiliki arti. Melalui Aksara Peduli Umat, mari hadirkan manfaat bagi mereka yang membutuhkan.</p><div class="actions"><a class="btn" href="donasi.html">Mulai Berbagi <span>↗</span></a><a class="btn btn-outline" href="program.html">Lihat Program</a></div><span class="sim-label">Seluruh angka dan cerita pada situs ini adalah simulasi.</span></div><div class="hero-art"><div class="sun"></div><div class="hill one"></div><div class="hill two"></div><div class="art-note">Satu kepedulian, banyak arti.</div></div></div></section><div class="container stats"><div class="stat"><strong>${rupiah(DATA.totalIn)}</strong><span>Dana terhimpun</span>${sim}</div><div class="stat"><strong>${rupiah(DATA.totalOut)}</strong><span>Dana tersalurkan</span>${sim}</div><div class="stat"><strong>${DATA.beneficiaries}</strong><span>Penerima manfaat</span>${sim}</div><div class="stat"><strong>${DATA.volunteers}</strong><span>Relawan terlibat</span>${sim}</div></div><section class="section"><div class="container"><div class="section-head"><div><div class="eyebrow">Kisah yang menggerakkan</div><h2>Berawal dari berbagi sahur.</h2></div><p>Sahur Berbagi tumbuh dari pengalaman fundraising sederhana: mengumpulkan dukungan untuk membagikan makanan sahur kepada masyarakat yang masih berada di jalan.</p></div><div class="featured"><div><div class="eyebrow" style="color:#b4d0b9">Program unggulan</div><h2>Sahur Berbagi</h2><p>Malam yang panjang menjadi sedikit lebih ringan ketika ada makanan sahur yang menemani. Program ini menghubungkan kepedulian dengan tindakan nyata, dengan proses dan penggunaan dana yang dicatat.</p><div class="fund-row"><span>Progres dana ${sim}</span><b>${rupiah(DATA.programs[0].raised)} / ${rupiah(DATA.programs[0].target)}</b></div><div class="progress"><span style="width:${pct(DATA.programs[0].raised,DATA.programs[0].target)}%"></span></div><div class="actions"><a class="btn" href="donasi.html?program=Sahur%20Berbagi">Dukung Sahur Berbagi ↗</a><a href="program.html" class="btn btn-outline" style="color:white;border-color:#9cb6a4">Semua program</a></div></div><div class="feature-image"><img src="assets/Image%202.jpeg" alt="Foto kegiatan Sahur Berbagi"></div></div></div></section><section class="section-sm"><div class="container"><div class="section-head"><div><div class="eyebrow">Program kebaikan</div><h2>Manfaat dalam beragam bentuk.</h2></div><a class="btn btn-outline" href="program.html">Lihat 10 program ↗</a></div><div class="cards">${DATA.programs.slice(1,4).map(p=>`<div class="card"><div class="card-top"><span class="icon">${p.icon}</span><span class="tag">${p.type}</span></div><h3>${p.name}</h3><p>${p.desc}</p><a href="program.html" class="eyebrow">Lihat program ↗</a></div>`).join('')}</div></div></section><section class="section"><div class="container two"><div><div class="eyebrow">Amanah dalam proses</div><h2>Kepercayaan dibangun lewat keterbukaan.</h2><div class="check-list"><div class="check"><b>01</b><span><b>Akad tercatat terpisah.</b><br>Zakat, infak, sedekah, wakaf, tenaga, dan ilmu dikelola dengan pencatatan berbeda.</span></div><div class="check"><b>02</b><span><b>Penerima diverifikasi.</b><br>Kriteria, survei kebutuhan, dan pemeriksaan lingkungan menjadi dasar perencanaan bantuan.</span></div><div class="check"><b>03</b><span><b>Setiap rupiah dilaporkan.</b><br>Ringkasan dana masuk, penyaluran, operasional, dan saldo dapat dibaca terbuka.</span></div></div><a class="btn btn-outline" href="transparansi.html">Lihat laporan ↗</a></div><div class="soft-panel"><div class="eyebrow">Transparansi · DATA SIMULASI</div><h3>Ringkasan keuangan</h3><div class="barline"><span>Dana masuk</span><div class="progress"><span style="width:100%"></span></div><b>${rupiah(DATA.totalIn)}</b></div><div class="barline"><span>Penyaluran</span><div class="progress"><span style="width:${pct(DATA.totalOut,DATA.totalIn)}%"></span></div><b>${rupiah(DATA.totalOut)}</b></div><div class="barline"><span>Operasional</span><div class="progress"><span style="width:${pct(DATA.operating,DATA.totalIn)}%"></span></div><b>${rupiah(DATA.operating)}</b></div><hr style="border:0;border-top:1px solid #becdc0"><b style="color:var(--forest)">Saldo akhir: ${rupiah(DATA.totalIn-DATA.totalOut-DATA.operating)}</b><p style="font-size:.78rem;margin-top:12px">Penyaluran dan operasional dicatat terpisah, tanpa penghitungan ganda.</p></div></div></section><section class="section-sm"><div class="container soft-panel"><div class="eyebrow">Cerita penerima · DATA SIMULASI</div><p class="quote">“Makanan sahur yang datang tepat waktu membantu saya tetap kuat bekerja malam itu.”</p><div class="quote-note">Testimoni simulasi. Bukan kutipan penerima manfaat nyata.</div></div></section>`
}
function about(){
  const people=['Pendiri / Ketua Yayasan',
  'Direktur Eksekutif',
  'Manajer Penghimpunan Dana',
  'Manajer Program dan Penyaluran',
  'Bendahara',
  'Divisi Administrasi dan Pelaporan',
  'Pengawas Syariah Internal'];
  return `${pageHero('Tentang AKSARA','Kepedulian yang dirawat menjadi gerakan.','Aksara Peduli Umat adalah lembaga filantropi Islam dalam simulasi akademik yang menggambarkan pengelolaan zakat, infak, sedekah, wakaf, tenaga, dan ilmu.') }<section class="section"><div class="container two"><div><div class="eyebrow">Awal cerita</div><h2>Dari satu kegiatan Sahur Berbagi.</h2><p>Gagasan Aksara berangkat dari pengalaman pendiri melakukan fundraising untuk membagikan makanan sahur kepada masyarakat yang dijumpai di jalan. Dari kegiatan sederhana itu, muncul kebutuhan untuk mengelola kepedulian secara lebih tertata: siapa yang membutuhkan, bagaimana dana dicatat, dan bagaimana manfaat dilaporkan.</p><p>Nama Aksara melambangkan nilai, pengetahuan, serta cerita kebaikan yang ingin diteruskan. Cerita pendirian ini merupakan narasi simulasi untuk tugas akademik.</p></div><div class="soft-panel"><div class="eyebrow">Arah gerak</div><h3>Visi</h3><p>Menjadi representasi lembaga filantropi yang amanah, mudah dijangkau, dan berorientasi pada manfaat nyata.</p><h3>Misi</h3><p>Menghimpun dan mencatat dana sesuai akad; menyalurkan bantuan secara terencana; menguatkan kapasitas masyarakat; serta membuka informasi dan evaluasi secara berkala.</p></div></div></section><section class="section-sm"><div class="container"><div class="section-head"><div><div class="eyebrow">Nilai lembaga</div><h2>Prinsip dalam setiap langkah.</h2></div></div><div class="cards"><div class="card"><span class="icon">◇</span><h3>Amanah</h3><p>Menjaga titipan dan menggunakan dana sesuai peruntukan.</p></div><div class="card"><span class="icon">◉</span><h3>Terbuka</h3><p>Mencatat keputusan, alokasi, dan hasil agar dapat ditinjau.</p></div><div class="card"><span class="icon">↗</span><h3>Memberdayakan</h3><p>Menguatkan kemampuan dan kemandirian penerima manfaat.</p></div></div></div></section><section class="section"><div class="container"><div class="section-head"><div><div class="eyebrow">Struktur organisasi</div>  <h2>Pengurus dan fungsi.</h2></div></div><div class="profile-grid">${people.map((p,i)=>`<article class="profile">${i===0?'<div class="avatar"><img src="assets/profil.jpeg" alt="Foto profil pendiri dan ketua yayasan"></div>':'<div class="avatar fictional-avatar"><span class="fictional-silhouette" aria-hidden="true"></span><span class="fiction-badge">FOTO FIKTIF</span></div>'}<h3>${i===0?'Ksatria Adi Pradana':'Nama Pengurus'}</h3>${i===0?'<small class="profile-id">24108010018</small>':''}<small>${p}${i===0?'<br>Foto profil':'<br>Profil simulasi'}</small></article>`).join('')}</div><p class="disclaimer" style="margin-top:22px">Peran yang ditampilkan merupakan rancangan struktur simulasi, bukan pernyataan tentang pengurus nyata. Foto pendiri merupakan foto profil yang diberikan; avatar berlabel FOTO FIKTIF adalah ilustrasi, bukan foto pengurus nyata.</p></div></section>`
}
function programs(){
  const f=DATA.programs[0];
  return `${pageHero('Program kebaikan','Satu tujuan, banyak jalan untuk peduli.','Program konsumtif dan produktif disusun berdasarkan kebutuhan, akad dana, jadwal, dan verifikasi penerima. Semua target dan capaian di bawah adalah DATA SIMULASI.')}<section class="section-sm"><div class="container"><article class="program-feature"><div class="feature-image"><img src="assets/Image%202.jpeg" alt="Foto kegiatan Sahur Berbagi"></div><div class="content"><div class="eyebrow" style="color:#b5cfb8">Program unggulan</div><h2>${f.name}</h2><p>${f.desc}</p><div class="fund-row"><span>Progres · DATA SIMULASI</span><b>${rupiah(f.raised)} / ${rupiah(f.target)}</b></div><div class="progress"><span style="width:${pct(f.raised,f.target)}%"></span></div><a class="btn" href="donasi.html?program=Sahur%20Berbagi">Donasi Sekarang ↗</a></div></article><div class="program-grid">${DATA.programs.map(progCard).join('')}</div><div class="notice" style="margin-top:24px"><b>Fundraising & verifikasi:</b> Kanal simulasi meliputi situs, kampanye komunitas, dan relawan; strategi contoh berupa cerita program, pembaruan progres, dan ajakan berkala. Calon penerima diidentifikasi dengan kriteria program, wawancara dan survei kebutuhan, serta verifikasi lingkungan/RT jika relevan. Data sensitif tidak dipublikasikan.</div></div></section>`
}
function donate(){
  return `${pageHero('Donasi & edukasi','Berbagi dengan niat yang jelas.','Pilih jenis kontribusi, pelajari estimasi zakat, lalu coba formulir donasi simulasi. Situs ini tidak memproses pembayaran nyata.')}<section class="section-sm"><div class="container two"><div class="card"><div class="eyebrow">Edukasi zakat maal</div><h2 style="font-size:1.8rem">Apa itu zakat maal?</h2><p>Zakat maal adalah zakat atas harta yang memenuhi syarat tertentu. Secara umum, seseorang wajib menunaikannya apabila hartanya mencapai nisab dan dimiliki selama haul (satu tahun hijriah), dengan memperhatikan jenis harta serta ketentuan fikih yang berlaku.</p><p>Nisab zakat maal secara umum setara nilai 85 gram emas. Nilai rupiahnya berubah mengikuti harga emas. Tarif yang lazim digunakan untuk harta yang memenuhi syarat adalah 2,5%.</p><div class="soft-panel"><b>Contoh sederhana · simulasi</b><p>Harta bersih Rp100.000.000 dan nisab Rp80.000.000, memenuhi haul: estimasi zakat = 2,5% × Rp100.000.000 = Rp2.500.000.</p></div></div><div class="form-card"><div class="eyebrow">Kalkulator zakat maal</div><h3>Hitung estimasi Anda</h3><div class="field"><label for="wealth">Total harta yang wajib dizakati (Rp)</label><input id="wealth" type="number" min="0" value="100000000"></div><div class="field"><label for="debt">Utang jatuh tempo yang diperhitungkan (Rp)</label><input id="debt" type="number" min="0" value="0"></div><div class="field"><label for="nisab">Nilai nisab (Rp) · dapat diedit</label><input id="nisab" type="number" min="0" value="80000000"></div><div class="field"><label><input id="haul" type="checkbox" checked> Harta telah memenuhi ketentuan haul (satu tahun hijriah)</label></div><button class="btn" id="calc-zakat" type="button">Hitung estimasi</button><div id="zakat-result" class="result">Harta bersih: Rp100.000.000 · Estimasi zakat: Rp2.500.000</div><p class="disclaimer" style="margin-top:14px">Kalkulator merupakan alat bantu estimasi, bukan fatwa atau penetapan kewajiban individual. Ketentuan dapat berbeda menurut jenis harta dan pendapat fikih.</p></div></div></section><section class="section-sm"><div class="container donate-layout"><div class="form-card"><div class="eyebrow">Pilihan kontribusi</div><h2 style="font-size:1.8rem">Form donasi simulasi</h2><p>Pilihan kanal hanya contoh tampilan dan tidak menerima atau memproses uang.</p><form id="donation-form"><div class="field"><label for="donor">Nama donatur</label><input id="donor" required placeholder="Nama Anda"></div><div class="field"><label>Nominal donasi (Rp)</label><div class="quick-amounts">${[10000,25000,50000,100000,250000,500000].map((n,i)=>`<button class="amount-btn ${i===2?'selected':''}" type="button" data-amount="${n}">${rupiah(n)}</button>`).join('')}</div><input id="amount" type="number" min="1000" value="50000" required></div><div class="field"><label for="donation-type">Jenis donasi</label><select id="donation-type"><option>Zakat Maal</option><option>Infak</option><option>Sedekah</option><option>Wakaf</option><option>Sedekah Sahur Berbagi</option><option>Donasi Program Sosial</option></select></div><div class="field"><label for="payment">Metode pembayaran</label><select id="payment"><option>Transfer bank (simulasi)</option><option>QRIS (placeholder simulasi)</option><option>E-wallet (simulasi)</option><option>Donasi langsung melalui relawan (simulasi)</option></select></div><div class="field"><label for="message">Pesan atau doa (opsional)</label><textarea id="message" placeholder="Tuliskan pesan atau doa"></textarea></div><button class="btn" type="submit">Buat transaksi simulasi ↗</button></form><div id="donation-result" aria-live="polite"></div></div><div><div class="soft-panel"><div class="eyebrow">Kanal pembayaran</div><h3>Pembayaran belum terintegrasi.</h3><p>Transfer bank, QRIS, e-wallet, serta donasi melalui relawan ditampilkan untuk keperluan simulasi. Tidak ada rekening atau QRIS yang dapat menerima uang. Transaksi yang dibuat hanya menghasilkan nomor simulasi dan tidak menandakan dana telah diterima.</p><span class="sim-label">TIDAK MEMPROSES PEMBAYARAN</span></div><div class="card" style="margin-top:18px"><div class="eyebrow">Pencatatan penerimaan</div><h3>Alur pencatatan yang direncanakan</h3><p>Nomor transaksi → pencatatan nama/anonim dan akad → pemeriksaan nominal terhadap bukti penerimaan ketika sistem nyata tersedia → rekap donatur dan laporan. Bukti penerimaan tidak diterbitkan oleh simulasi ini.</p></div></div></div></section>`
}
function transparency(){
  const cats=[['Zakat',
  20000000],
  ['Infak',
  15000000],
  ['Sedekah',
  7000000],
  ['Wakaf',
  6500000]];
  return `${pageHero('Transparansi & laporan','Setiap amanah perlu jejak yang jelas.','Ringkasan penerimaan dan penyaluran dirancang agar mudah ditinjau. Angka berikut merupakan DATA SIMULASI; tidak mewakili transaksi atau audit nyata.')}<section class="section-sm"><div class="container"><div class="data-grid"><div class="stat"><strong>${rupiah(DATA.totalIn)}</strong><span>Total penghimpunan</span>${sim}</div><div class="stat"><strong>${rupiah(DATA.totalOut)}</strong><span>Total penyaluran</span>${sim}</div><div class="stat"><strong>${rupiah(DATA.operating)}</strong><span>Operasional dilaporkan terpisah</span>${sim}</div><div class="stat"><strong>${rupiah(DATA.totalIn-DATA.totalOut-DATA.operating)}</strong><span>Saldo akhir</span>${sim}</div></div><div class="eyebrow" style="margin-top:46px">A. Laporan penghimpunan · DATA SIMULASI</div><h2 style="font-size:1.8rem">Dana masuk</h2><div class="table-wrap"><table><thead><tr><th>No. transaksi</th><th>Tanggal</th><th>Donatur</th><th>Jenis</th><th>Metode</th><th>Nominal</th><th>Status</th></tr></thead><tbody>${DATA.transactions.map(t=>`<tr>${t.slice(0,5).map(x=>`<td>${x}</td>`).join('')}<td>${rupiah(t[5])}</td><td>${t[6]}</td></tr>`).join('')}</tbody></table></div><p class="disclaimer">Total baris transaksi: ${rupiah(DATA.transactions.reduce((s,t)=>s+t[5],0))}. Nama disamarkan. Status bersifat simulasi dan bukan konfirmasi pembayaran.</p><div class="two" style="margin-top:42px"><div class="card"><div class="eyebrow">B. Pemisahan dana menurut akad · DATA SIMULASI</div><h3>Dana uang dipisahkan dari kontribusi non-uang.</h3>${cats.map(([name,n])=>`<div class="barline"><span>${name}</span><div class="progress"><span style="width:${pct(n,DATA.totalIn)}%"></span></div><b>${rupiah(n)}</b></div>`).join('')}<hr><div class="barline"><span>Tenaga</span><div class="progress"><span style="width:30%"></span></div><b>18 relawan</b></div><div class="barline"><span>Ilmu</span><div class="progress"><span style="width:20%"></span></div><b>42 jam</b></div><small>Donasi tenaga dan ilmu adalah kontribusi non-uang; tidak dijumlahkan sebagai rupiah.</small></div><div class="card"><div class="eyebrow">C. Contoh alokasi zakat · DATA SIMULASI</div><h3>Pemisahan alokasi</h3><p>Contoh pada basis dana zakat Rp20.000.000:</p><div class="barline"><span>Penyaluran asnaf</span><div class="progress"><span style="width:87.5%"></span></div><b>87,5%</b></div><b>${rupiah(17500000)}</b><div class="barline"><span>Hak amil</span><div class="progress"><span style="width:12.5%"></span></div><b>12,5%</b></div><b>${rupiah(2500000)}</b><p style="margin-top:14px">Hak amil maksimal 1/8 atau 12,5% dari dana zakat sesuai ketentuan yang berlaku. Biaya operasional di buku ringkasan tercatat terpisah dan tidak dihitung ganda sebagai penyaluran.</p></div></div><div class="card" style="margin-top:18px"><div class="eyebrow">Alokasi infak, sedekah, dan wakaf · DATA SIMULASI</div><p>Infak dan sedekah berjumlah Rp22.000.000 pada contoh rekap. Rencana penggunaan simulasi: Rp10.500.000 untuk pangan, Rp5.500.000 untuk pendidikan, dan Rp6.000.000 untuk program sesuai amanat; saldo tetap dicatat sampai disalurkan. Wakaf Rp6.500.000 dicatat sebagai pokok wakaf simulasi; manfaatnya baru dicatat ketika aset menghasilkan manfaat. Rencana alokasi bukan bukti pengeluaran riil.</p></div><div class="eyebrow" style="margin-top:42px">D. Laporan penyaluran · DATA SIMULASI</div><h2 style="font-size:1.8rem">Dana keluar</h2><div class="table-wrap"><table><thead><tr><th>Tanggal</th><th>Program</th><th>Jenis dana</th><th>Penerima</th><th>Lokasi</th><th>Jumlah keluar</th><th>Keterangan</th></tr></thead><tbody>${DATA.disbursements.map(r=>`<tr>${r.slice(0,5).map(x=>`<td>${x}</td>`).join('')}<td>${rupiah(r[5])}</td><td>${r[6]}</td></tr>`).join('')}</tbody></table></div><p class="disclaimer">Penyaluran pada contoh tabel berjumlah ${rupiah(DATA.disbursements.reduce((s,r)=>s+r[5],0))}. Sisanya dari ringkasan total penyaluran adalah pos simulasi yang belum dirinci pada tabel contoh. Total dana masuk ${rupiah(DATA.totalIn)} − total penyaluran ${rupiah(DATA.totalOut)} − operasional ${rupiah(DATA.operating)} = saldo akhir ${rupiah(DATA.totalIn-DATA.totalOut-DATA.operating)}.</p><div class="two" style="margin-top:38px"><div class="card"><div class="eyebrow">E. Pengawasan dan pemeriksaan</div><h3>Pemeriksaan internal simulasi</h3><div class="check-list">${['Kesesuaian dana masuk dengan catatan','Pemisahan dana berdasarkan akad','Kesesuaian alokasi','Ketersediaan bukti penyaluran','Kesesuaian saldo akhir'].map(x=>`<div class="check"><b>□</b><span>${x}</span></div>`).join('')}</div><p style="margin-top:16px">Bendahara memeriksa pencatatan dan saldo; pengawas syariah internal memeriksa akad dan penyaluran; pengawas program memeriksa pelaksanaan bantuan. Hasil checklist di atas belum dilakukan dan hanya rancangan simulasi.</p></div><div class="soft-panel"><div class="eyebrow">Kebijakan transparansi</div><h3>Tidak ada klaim audit independen.</h3><p>Mitra pemeriksa hanya dicantumkan apabila benar-benar ada. Simulasi ini tidak menyatakan memiliki izin operasional, sertifikasi, mitra, rekening, maupun audit independen.</p></div></div></div></section>`
}
function gallery(){
  const illustrations=[
    ['Kegiatan fundraising','https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=80'],
    ['Pembelian kebutuhan bantuan','https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80'],
    ['Persiapan relawan','https://content.foodbankscanada.ca/wordpress/2023/07/Wes.webp'],
    ['Program pendidikan','https://static.tuoitre.vn/tto/i/s626/2014/09/25/XqKSKpzb.jpg']
  ];
  const sahurPhotos=[
    ['Image 1.jpeg','Persiapan Sahur Berbagi'],
    ['Image 2.jpeg','Kegiatan Sahur Berbagi'],
    ['Image 3.jpeg','Dokumentasi Sahur Berbagi']
  ];
  const illustrationCards=illustrations.map(([title,src])=>`<article class="gallery-item"><div class="gallery-art"><img src="${src}" alt="Ilustrasi fiktif: ${title}"><span class="fiction-label">ILUSTRASI FIKTIF</span></div><div class="gallery-copy"><h3>${title}</h3><p>Foto ilustrasi. Bukan dokumentasi kegiatan AKSARA.</p></div></article>`).join('');
  const sahurCards=sahurPhotos.map(([file,title])=>`<article class="gallery-item"><div class="gallery-art"><img src="assets/${encodeURIComponent(file)}" alt="${title}"></div><div class="gallery-copy"><h3>${title}</h3><p>Foto asli dokumentasi kegiatan Sahur Berbagi.</p></div></article>`).join('');
  return `${pageHero('Dokumentasi penyaluran','Catatan kegiatan, dengan menjaga privasi.','Foto Sahur Berbagi merupakan dokumentasi asli. Foto kegiatan lain diberi label ilustrasi fiktif.')}<section class="section-sm"><div class="container"><div class="gallery-grid">${illustrationCards}${sahurCards}</div><section class="video-profile"><video class="gallery-video" controls playsinline preload="metadata" src="assets/video-sahur.mp4">Browser Anda tidak mendukung pemutaran video.</video><div class="video-profile-copy"><div class="eyebrow">Cerita di balik kegiatan</div><h2>Berbagi sahur di jalanan Yogyakarta.</h2><p>Kegiatan Berbagi Sahur kami lakukan bersama beberapa mahasiswa Ekonomi Syariah angkatan 2024. Kami menggalang dana, menyiapkan makanan sahur, lalu membagikannya kepada orang-orang yang membutuhkan di jalanan Kota Yogyakarta.</p></div></section></div></section>`
}
function impact(){
  const metrics=[['Paket sahur',
  '150',
  '120'],
  ['Penerima manfaat',
  '150',
  '120'],
  ['Relawan terlibat',
  '20',
  '18'],
  ['Distribusi tepat waktu',
  '95%',
  '90%']];
  return `${pageHero('Evaluasi & dampak','Belajar dari proses, memperbaiki langkah.','Evaluasi membantu melihat kesesuaian antara rencana, realisasi, dan kebutuhan. Seluruh angka dan hasil pada halaman ini adalah DATA SIMULASI.')}<section class="section-sm"><div class="container"><div class="two"><div class="card"><div class="eyebrow">Sahur Berbagi · DATA SIMULASI</div><h2 style="font-size:1.8rem">Target dan realisasi.</h2><p>Contoh evaluasi program; belum merupakan hasil kegiatan nyata.</p>${metrics.map(([n,t,r])=>`<div class="chart-row"><span>${n}</span><div><div style="font-size:.66rem;display:flex;justify-content:space-between"><span>Realisasi ${r}</span><span>Target ${t}</span></div><div class="chart-track"><div class="chart-fill" style="width:${parseFloat(r)/parseFloat(t)*100}%"></div></div></div><b>${Math.round(parseFloat(r)/parseFloat(t)*100)}%</b></div>`).join('')}<small>Perbandingan target dan realisasi berbasis data simulasi.</small></div><div class="soft-panel"><div class="eyebrow">Ringkasan program</div><div class="data-grid" style="grid-template-columns:1fr 1fr"><div><b>Target dana</b><br>${rupiah(12000000)}</div><div><b>Dana digunakan</b><br>${rupiah(10500000)}</div><div><b>Penerima</b><br>120 orang</div><div><b>Relawan</b><br>18 orang</div></div><span class="sim-label">DATA SIMULASI</span><h3 style="margin-top:24px">Rencana evaluasi</h3><p>Bandingkan jumlah paket, penerima, relawan, ketepatan waktu distribusi, dan kesesuaian penggunaan dana dengan anggaran.</p></div></div><div class="two" style="margin-top:22px"><div class="card"><div class="eyebrow">Kendala & solusi · DATA SIMULASI</div><h3>Catatan pembelajaran</h3><p><b>Kendala contoh:</b> jumlah relawan berubah mendekati waktu kegiatan dan rute distribusi belum optimal.</p><p><b>Solusi contoh:</b> siapkan daftar relawan cadangan, tetapkan titik kumpul, dan konfirmasi rute sehari sebelumnya.</p><p><b>Tindak lanjut:</b> lakukan survei kebutuhan lebih awal, lengkapi pencatatan per titik, dan evaluasi setelah kegiatan.</p></div><div class="card"><div class="eyebrow">Cerita dampak · simulasi</div><h3>Manfaat tetap menjaga privasi.</h3><p>Dalam rancangan ini, bantuan sahur direncanakan untuk membantu orang yang bekerja malam dan masyarakat yang masih beraktivitas di jalan. Cerita publik sebaiknya hanya disampaikan setelah ada persetujuan, tanpa membuka identitas atau kondisi pribadi penerima.</p><span class="sim-label">CERITA ILUSTRATIF · BUKAN KUTIPAN NYATA</span></div></div></div></section>`
}
const render={
  home,
  about,
  programs,
  donate,
  transparency,
  gallery,
  impact
};
app.innerHTML=(render[document.body.dataset.page]||home)();
document.querySelectorAll('.footer:empty').forEach(f=>f.innerHTML=`<div class="footer-top"><div><a class="brand brand-light" href="index.html"><span class="brand-mark">A</span><span><b>AKSARA</b><small>PEDULI UMAT</small></span></a><p>Kebaikan dimulai dari kepedulian.<br>Simulasi akademik.</p></div><div><b>Jelajahi</b><a href="program.html">Program</a><a href="transparansi.html">Laporan simulasi</a></div><div><b>Kontak contoh</b><span>+62 812-0000-0000</span><span>hello@aksarapeduli.example</span></div></div><div class="footer-bottom"><span>© 2026 AKSARA Peduli Umat · Simulasi akademik</span><span>Data simulasi, bukan transaksi nyata.</span></div>`);
const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',
()=>{
  const nav=document.querySelector('.nav');
  nav.classList.toggle('open');
  menu.setAttribute('aria-expanded',
  nav.classList.contains('open'))
});
document.querySelectorAll('.amount-btn').forEach(b=>b.addEventListener('click',
()=>{
  document.querySelectorAll('.amount-btn').forEach(x=>x.classList.remove('selected'));
  b.classList.add('selected');
  document.getElementById('amount').value=b.dataset.amount
}));
document.getElementById('calc-zakat')?.addEventListener('click',
()=>{
  const wealth=Number(document.getElementById('wealth').value)||0,
  debt=Number(document.getElementById('debt').value)||0,
  nisab=Number(document.getElementById('nisab').value)||0,
  net=Math.max(0,
  wealth-debt),
  haul=document.getElementById('haul').checked,
  obligatory=net>=nisab&&haul,
  zakat=obligatory?net*.025:0;
  document.getElementById('zakat-result').innerHTML=`Total harta: ${rupiah(wealth)}<br>Harta bersih: ${rupiah(net)}<br>Nilai nisab: ${rupiah(nisab)}<br>Status: <b>${obligatory?'Mencapai nisab dan haul (estimasi wajib)':'Belum memenuhi nisab atau haul'}</b><br>Estimasi zakat: <b>${rupiah(zakat)}</b>`
});
const programQuery=new URLSearchParams(location.search).get('program');
if(programQuery&&document.getElementById('donation-type')){
  document.getElementById('donation-type').value=programQuery==='Sahur Berbagi'?'Sedekah Sahur Berbagi':'Donasi Program Sosial'
}
document.getElementById('donation-form')?.addEventListener('submit',
e=>{
  e.preventDefault();
  const donorInput=document.getElementById('donor');
  const amountInput=document.getElementById('amount');
  const name=donorInput.value.trim();
  const amount=Number(amountInput.value);
  if(!name){
    donorInput.setCustomValidity('Nama donatur tidak boleh kosong.');
    donorInput.reportValidity();
    return;
  }
  donorInput.setCustomValidity('');
  if(!Number.isFinite(amount)||amount<1000){
    amountInput.setCustomValidity('Nominal donasi minimal Rp1.000.');
    amountInput.reportValidity();
    return;
  }
  amountInput.setCustomValidity('');
  const id='TRX-SIM-'+Date.now().toString().slice(-7),
  type=document.getElementById('donation-type').value,
  payment=document.getElementById('payment').value;
  document.getElementById('donation-result').innerHTML=`<div class="result"><b>Transaksi simulasi dibuat</b><br>Nomor: ${escapeHtml(id)}<br>Nama: ${escapeHtml(name)}<br>Jenis: ${escapeHtml(type)}<br>Nominal: ${rupiah(amount)}<br>Metode: ${escapeHtml(payment)}<br><br>Ini bukan bukti pembayaran. Dana belum diterima dan tidak ada transaksi nyata yang diproses.</div>`
});
