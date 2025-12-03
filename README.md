# [TDK Sözlük](https://www.egemenkeydal.com/scripts/tdk-sozluk) - [Modern Türkçe Sözlük Uygulaması](https://www.egemenkeydal.com/scripts/tdk-sozluk)

Next.js 16 ve React 19 ile geliştirilmiş modern ve minimalist Türkçe sözlük web uygulaması. Türk Dil Kurumu'nun (TDK) resmi API'sini kullanarak Türkçe kelimelerin anlamlarını, örneklerini ve birleşik kelimelerini arayın ve keşfedin.

## ✨ Özellikler

- **Anlık Arama**: TDK'nın resmi sözlük API'si ile hızlı ve dinamik arama
- **Kapsamlı Kelime Bilgisi**: Birden fazla anlam, kullanım örnekleri, köken bilgisi ve birleşik kelimeler
- **Modern Arayüz**: shadcn/ui bileşenleri ve Tailwind CSS ile oluşturulmuş temiz, duyarlı tasarım
- **Karanlık Mod Desteği**: Açık ve koyu temalar arasında otomatik geçiş
- **TypeScript**: Daha iyi geliştirici deneyimi ve kod güvenilirliği için tam tip desteği
- **Performans Odaklı**: Next.js 16 App Router ve React 19 Sunucu Bileşenleri ile geliştirildi

## 🚀 Hızlı Başlangıç

### Kurulum

\`\`\`bash
# Depoyu klonlayın
git clone <repo-url>
cd tdk-sozluk

# Bağımlılıkları yükleyin
npm install
# veya
pnpm install
# veya
yarn install

# Geliştirme sunucusunu başlatın
npm run dev
\`\`\`

Uygulamayı görüntülemek için [http://localhost:3000](http://localhost:3000) adresini açın.

### Production İçin Derleme

\`\`\`bash
npm run build
npm start
\`\`\`

## 🛠️ Teknoloji Yığını

### Çekirdek Framework
- **Next.js 16.0.3** - App Router ile React framework
- **React 19.2.0** - React Sunucu Bileşenleri ile UI kütüphanesi
- **TypeScript 5** - Tip güvenli JavaScript

### Arayüz ve Stil
- **Tailwind CSS 4** - OKLch renk uzayı ile utility-first CSS framework
- **shadcn/ui** - Radix UI tabanlı yüksek kaliteli, erişilebilir React bileşenleri
- **Lucide Icons** - Güzel ve tutarlı ikon kütüphanesi
- **next-themes** - Karanlık mod desteği

### Form ve Doğrulama
- **React Hook Form** - Performanslı form yönetimi
- **Zod** - TypeScript-first şema doğrulama

### Analitik
- **Vercel Analytics** - Performans ve kullanıcı analitiği

## 📁 Proje Yapısı

\`\`\`
├── app/                      # Next.js App Router
│   ├── api/
│   │   └── search/          # Sözlük API uç noktası
│   ├── globals.css          # Global stiller ve tema token'ları
│   ├── layout.tsx           # Metadata ile kök layout
│   └── page.tsx             # Ana arama sayfası
├── components/
│   ├── search-form.tsx      # Arama input bileşeni
│   ├── word-entry.tsx       # Kelime tanımı gösterim bileşeni
│   └── ui/                  # shadcn/ui bileşenleri (50+)
├── hooks/                   # Özel React hook'ları
├── lib/
│   └── utils.ts             # Yardımcı fonksiyonlar (cn, vb.)
└── public/                  # Statik varlıklar
\`\`\`

## 🎨 Tasarım Sistemi

### Renk Paleti
Algısal olarak düzgün renkler için OKLch renk uzayı kullanır:
- **Açık Mod**: Kırık beyaz arka plan, koyu ön plan
- **Koyu Mod**: Çok koyu arka plan, açık ön plan
- **Primary**: Uygun kontrast oranlarına sahip bağlamsal gri
- **Accent**: Yıkıcı eylemler için turuncu/kırmızı

### Tipografi
- **Başlıklar**: Geist font ailesi
- **Gövde**: Okunabilirlik için rahat satır yüksekliğine sahip Geist
- **Kod**: Teknik içerik için Geist Mono

## 🔌 API Entegrasyonu

Uygulama Türk Dil Kurumu'nun (TDK) resmi sözlük API'sine bağlanır:

\`\`\`
GET https://sozluk.gov.tr/gts?ara={sorgu}
\`\`\`

### Özellikler:
- 30 saniye zaman aşımı yönetimi
- API erişimi için uygun HTTP başlıkları
- Hata yönetimi ve kullanıcı geri bildirimi
- JSON yanıt ayrıştırma

## 📦 Kullanılabilir Komutlar

\`\`\`bash
npm run dev      # Geliştirme sunucusunu başlat (localhost:3000)
npm run build    # Production derlemesi oluştur
npm start        # Production sunucusunu başlat
npm run lint     # Kod kalitesi için ESLint çalıştır
\`\`\`

## 🎯 Ana Bileşenler

### SearchForm
Gönder düğmesi ile interaktif arama girişi. Kullanıcı sorgularını işler ve API isteklerini tetikler.

### WordEntry
Şunları içeren kapsamlı kelime bilgilerini görüntüler:
- Kelime başlığı ve dil bilgisi
- Özelliklerle birlikte numaralandırılmış anlamlar
- Yazar atıflarıyla kullanım örnekleri
- İlgili birleşik kelimeler

### API Route Handler
Uygun başlıklar ve hata yönetimiyle TDK API'sine istekleri proxy eden sunucu tarafı uç noktası.

## 🌐 Tarayıcı Desteği

- Chrome/Edge (son sürüm)
- Firefox (son sürüm)
- Safari (son sürüm)
- Mobil tarayıcılar (iOS Safari, Chrome Mobile)

## 📄 Lisans

Bu proje açık kaynaklıdır ve MIT Lisansı altında mevcuttur.

## 🙏 Teşekkürler

- Sözlük verileri **Türk Dil Kurumu (TDK)** tarafından sağlanmaktadır
- Arayüz bileşenleri **shadcn/ui** tarafından sağlanmıştır
- İkonlar **Lucide** tarafından sağlanmıştır
- Fontlar **Vercel (Geist)** tarafından sağlanmıştır

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen sorun bildirmekten veya pull request göndermekten çekinmeyin.

## 📞 Destek

Sorular veya sorunlar için lütfen GitHub'da bir issue açın.
