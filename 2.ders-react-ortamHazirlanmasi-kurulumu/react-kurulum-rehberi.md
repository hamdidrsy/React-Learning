# React Geliştirme Ortamı Kurulum Rehberi

## 1. Gerekli Yazılımlar

### Node.js Kurulumu
- **İndirme:** [nodejs.org](https://nodejs.org) adresinden LTS (Long Term Support) sürümünü indir
- **Neden LTS?** Daha kararlı ve uzun süreli destek alır
- Kurulum sonrası terminalde kontrol:
```bash
node -v
npm -v
```

### VS Code Kurulumu
- **İndirme:** [code.visualstudio.com](https://code.visualstudio.com) adresinden indir
- Kurulum sırasında "PATH'e ekle" seçeneğini işaretle

### Git Kurulumu (Opsiyonel ama Önerilir)
- **İndirme:** [git-scm.com](https://git-scm.com) adresinden indir
- Versiyon kontrolü için gerekli

---

## 2. React Projesi Oluşturma Yöntemleri

### Yöntem 1: Vite ile (Önerilen - Hızlı)
```bash
npm create vite@latest proje-adi -- --template react
cd proje-adi
npm install
npm run dev
```

### Yöntem 2: Create React App ile (Klasik)
```bash
npx create-react-app proje-adi
cd proje-adi
npm start
```

> **Not:** Vite, CRA'ya göre çok daha hızlı çalışır ve modern projeler için tercih edilir.

---

## 3. Kurulum Yaparken Dikkat Edilmesi Gerekenler

### Genel Kurallar
| Dikkat Edilecek | Açıklama |
|-----------------|----------|
| Node.js sürümü | LTS sürümünü tercih et (18.x veya 20.x) |
| Proje adı | Türkçe karakter ve boşluk KULLANMA |
| Klasör yolu | Türkçe karaktersiz bir yol seç |
| Admin yetkisi | Windows'ta "Yönetici olarak çalıştır" ile terminali aç |

### Sık Yapılan Hatalar
1. **Proje adında büyük harf kullanmak** - Küçük harf kullan
2. **Boşluklu klasör yolları** - Hata verebilir
3. **Eski Node.js sürümü** - Güncel LTS sürümünü kullan
4. **npm cache sorunları** - `npm cache clean --force` ile temizle

### Sorun Çözme Komutları
```bash
# Cache temizleme
npm cache clean --force

# Node modüllerini silip yeniden yükleme
rm -rf node_modules
npm install

# PowerShell yetki hatası için (Windows)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

## 4. Proje Yapısını Anlamak

```
proje-adi/
├── node_modules/     # Bağımlılıklar (dokunma!)
├── public/           # Statik dosyalar
├── src/              # Kaynak kodlar
│   ├── App.jsx       # Ana bileşen
│   ├── main.jsx      # Giriş noktası
│   └── index.css     # Global stiller
├── package.json      # Proje ayarları ve bağımlılıklar
├── vite.config.js    # Vite ayarları
└── index.html        # Ana HTML dosyası
```

---

## 5. En Çok Kullanılan 10 VS Code Eklentisi

### Zorunlu Eklentiler

| # | Eklenti Adı | Açıklama |
|---|-------------|----------|
| 1 | **ES7+ React/Redux/React-Native snippets** | React kod parçacıkları (rafce, rfc gibi kısayollar) |
| 2 | **Prettier - Code formatter** | Otomatik kod formatlama |
| 3 | **ESLint** | Kod hatalarını ve kötü pratikleri yakalar |
| 4 | **Auto Rename Tag** | HTML/JSX etiketlerini otomatik yeniden adlandırır |
| 5 | **Bracket Pair Colorizer 2** | Parantezleri renklendirir (artık VS Code'da dahili) |

### Çok Faydalı Eklentiler

| # | Eklenti Adı | Açıklama |
|---|-------------|----------|
| 6 | **Path Intellisense** | Dosya yollarını otomatik tamamlar |
| 7 | **CSS Peek** | CSS sınıflarına hızlı erişim |
| 8 | **GitLens** | Git geçmişini detaylı görüntüler |
| 9 | **Thunder Client** | API test etmek için (Postman alternatifi) |
| 10 | **Live Server** | Statik dosyalar için canlı sunucu |

### Bonus Eklentiler
- **Material Icon Theme** - Dosya ikonları
- **One Dark Pro** - Popüler tema
- **Error Lens** - Hataları satır içinde gösterir
- **Import Cost** - Import edilen paketlerin boyutunu gösterir

---

## 6. Faydalı VS Code Ayarları

`settings.json` dosyasına ekle (Ctrl + Shift + P → "settings json"):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

---

## 7. İlk React Uygulamasını Çalıştırma

```bash
# 1. Proje oluştur
npm create vite@latest ilk-react-uygulamam -- --template react

# 2. Klasöre gir
cd ilk-react-uygulamam

# 3. Bağımlılıkları yükle
npm install

# 4. Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine git.

---

## Özet Kontrol Listesi

- [ ] Node.js LTS kuruldu
- [ ] npm çalışıyor
- [ ] VS Code kuruldu
- [ ] Gerekli eklentiler yüklendi
- [ ] İlk React projesi oluşturuldu
- [ ] Proje başarıyla çalıştı

---

**Hazırlayan:** React Eğitim Serisi - Ders 2
