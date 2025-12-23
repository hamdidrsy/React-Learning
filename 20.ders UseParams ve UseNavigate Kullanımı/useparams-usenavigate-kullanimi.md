# useParams ve useNavigate Kullanımı

## useParams Nedir?

useParams, URL'deki dinamik parametreleri okumak için kullanılan React Router hook'udur.

Route tanımında `:parametre` şeklinde belirtilen değerleri almayı sağlar.

---

## Dinamik Route Nedir?

URL'de sabit olmayan, değişken değer içeren route'lardır.

| Route Tanımı | Dinamik Kısım | Açıklama |
|--------------|---------------|----------|
| `/urun/:id` | `:id` | Ürün ID'si değişken |
| `/kullanici/:username` | `:username` | Kullanıcı adı değişken |
| `/blog/:slug` | `:slug` | Yazı slug'ı değişken |

---

## useParams Nasıl Çalışır?

1. Route tanımında parametre belirlenir (`:id` gibi)
2. Kullanıcı URL'e gider (`/urun/5` gibi)
3. Component içinde useParams çağrılır
4. Parametre değeri alınır (`id = 5`)

---

## Çoklu Parametre

Bir route'da birden fazla parametre olabilir.

| Route Tanımı | Örnek URL | Parametreler |
|--------------|-----------|--------------|
| `/kategori/:kat/urun/:id` | /kategori/elektronik/urun/15 | kat = elektronik, id = 15 |
| `/blog/:yil/:ay/:slug` | /blog/2024/03/react-nedir | yil = 2024, ay = 03, slug = react-nedir |
| `/user/:userId/post/:postId` | /user/10/post/25 | userId = 10, postId = 25 |

---

## useParams Kullanım Alanları

| Alan | Açıklama |
|------|----------|
| **Ürün Detay Sayfası** | URL'den ürün ID'sini alıp detayları getirme |
| **Kullanıcı Profili** | URL'den kullanıcı adını alıp profili gösterme |
| **Blog Yazısı** | URL'den yazı slug'ını alıp içeriği getirme |
| **Kategori Sayfası** | URL'den kategori adını alıp ürünleri filtreleme |
| **Sipariş Detayı** | URL'den sipariş numarasını alıp detayları gösterme |

---

## Parametre Tipi

useParams her zaman **string** döndürür.

| URL | Parametre Değeri | Tipi |
|-----|------------------|------|
| /urun/5 | "5" | string |
| /urun/abc | "abc" | string |

Sayı olarak kullanmak için dönüşüm gerekir: `Number(id)` veya `parseInt(id)`

---

## Opsiyonel Parametre

Parametre sonuna `?` eklenirse opsiyonel olur.

| Route Tanımı | URL | Sonuç |
|--------------|-----|-------|
| `/urunler/:kategori?` | /urunler | kategori = undefined |
| `/urunler/:kategori?` | /urunler/elektronik | kategori = elektronik |

---

## useNavigate Nedir?

useNavigate, kod içinde programatik olarak sayfa yönlendirmesi yapmak için kullanılan hook'tur.

Kullanıcı etkileşimi olmadan, JavaScript kodu ile sayfa değiştirmeyi sağlar.

---

## useNavigate vs Link

| Özellik | Link | useNavigate |
|---------|------|-------------|
| Kullanım | JSX içinde | JavaScript kodu içinde |
| Tetiklenme | Kullanıcı tıklaması | Kod ile |
| Görünüm | Tıklanabilir element | Görünmez (fonksiyon) |
| Kullanım alanı | Menü, navbar | Form submit, koşullu yönlendirme |

---

## useNavigate Kullanım Şekilleri

| Kullanım | Açıklama |
|----------|----------|
| `navigate('/sayfa')` | Belirtilen sayfaya git |
| `navigate(-1)` | Bir sayfa geri git (tarayıcı geri butonu gibi) |
| `navigate(-2)` | İki sayfa geri git |
| `navigate(1)` | Bir sayfa ileri git |
| `navigate(0)` | Sayfayı yenile |

---

## Navigate Options

| Option | Açıklama |
|--------|----------|
| `replace: true` | Geçmişe eklemeden git (geri tuşu ile dönülemez) |
| `state: { ... }` | Yönlendirme ile birlikte veri gönder |

### Replace Kullanım Alanları

| Durum | Açıklama |
|-------|----------|
| Login sonrası | Kullanıcı geri tuşuna basınca login sayfasına dönmesin |
| Form submit sonrası | Çift gönderimi önleme |
| Redirect işlemleri | Ara sayfaları geçmişte tutmama |

---

## State ile Veri Gönderme

Navigate ile birlikte hedef sayfaya veri gönderilebilir.

Gönderilen veri `useLocation` hook'u ile alınır.

| Hook | Görevi |
|------|--------|
| `useNavigate` | State ile veri gönderme |
| `useLocation` | Gönderilen state'i alma |

---

## useNavigate Kullanım Alanları

| Alan | Açıklama |
|------|----------|
| **Form Gönderimi** | Başarılı kayıt sonrası yönlendirme |
| **Login İşlemi** | Giriş başarılı → Dashboard'a git |
| **Logout İşlemi** | Çıkış sonrası → Ana sayfaya git |
| **Yetki Kontrolü** | Yetkisiz kullanıcı → Login sayfasına yönlendir |
| **Silme İşlemi** | Silme sonrası → Liste sayfasına dön |
| **Hata Durumu** | 404 veya hata sayfasına yönlendirme |
| **Timeout** | Belirli süre sonra otomatik yönlendirme |

---

## useParams ve useNavigate Birlikte Kullanımı

Sık karşılaşılan senaryolar:

| Senaryo | useParams | useNavigate |
|---------|-----------|-------------|
| Ürün silme | Silinecek ürün ID'sini al | Silme sonrası listeye yönlendir |
| Ürün güncelleme | Güncellenecek ürün ID'sini al | Güncelleme sonrası detaya yönlendir |
| Profil düzenleme | Kullanıcı ID'sini al | Kayıt sonrası profile yönlendir |

---

## Özet

### useParams

| Özellik | Açıklama |
|---------|----------|
| Görevi | URL parametrelerini okuma |
| Dönüş tipi | Object (parametre: değer) |
| Değer tipi | Her zaman string |
| Çoklu parametre | Destekler |
| Opsiyonel parametre | `?` ile destekler |

### useNavigate

| Özellik | Açıklama |
|---------|----------|
| Görevi | Programatik yönlendirme |
| Dönüş tipi | Fonksiyon |
| Sayısal değer | Geçmiş navigasyonu (-1, -2, 1) |
| replace | Geçmişe eklemeden yönlendirme |
| state | Veri gönderme |

---

| Soru | Cevap |
|------|-------|
| useParams ne döndürür? | Parametre objesi (string değerler) |
| useNavigate ne döndürür? | Navigate fonksiyonu |
| navigate(-1) ne yapar? | Bir sayfa geri gider |
| replace: true ne işe yarar? | Geçmişe eklemeden yönlendirir |
| Çoklu parametre olabilir mi? | Evet, sınırsız |

---

*Bu döküman React öğrenme serinizin 20. dersi için hazırlanmıştır.*


.
