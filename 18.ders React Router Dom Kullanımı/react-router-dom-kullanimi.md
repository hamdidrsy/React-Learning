# React Router Dom Kullanımı

## React Router Dom Nedir?

React Router Dom, React uygulamalarında sayfa yönlendirmesi yapmayı sağlayan kütüphanedir.

Tek sayfa uygulamalarında (SPA) sayfa yenilemeden farklı içeriklere geçiş sağlar.

---

## Kurulum

```bash
npm install react-router-dom
```

---

## Temel Bileşenler

| Bileşen | Görevi |
|---------|--------|
| **BrowserRouter** | Uygulamayı saran ana router bileşeni |
| **Routes** | Route bileşenlerini gruplar |
| **Route** | URL ile component eşleştirmesi yapar |
| **Link** | Sayfa yenilemeden yönlendirme sağlar |

---

## Temel Hooklar

| Hook | Görevi |
|------|--------|
| **useNavigate** | Kod ile sayfa yönlendirmesi yapar |
| **useParams** | URL'deki parametreleri okur |

---

## BrowserRouter

Uygulamanın en dışına sarılır. Router özelliklerini aktif eder.

Genellikle `main.jsx` veya `App.jsx` dosyasında kullanılır.

Uygulama başına bir tane olmalıdır.

---

## Routes

Tüm Route bileşenlerini içinde barındırır.

URL değiştiğinde hangi Route'un eşleştiğini kontrol eder.

Eşleşen ilk Route'u render eder.

---

## Route

İki temel özelliği vardır:

| Özellik | Açıklama |
|---------|----------|
| **path** | Hangi URL'de çalışacağını belirtir |
| **element** | O URL'de hangi component'in gösterileceğini belirtir |

### Özel Path Değerleri

| Path | Anlamı |
|------|--------|
| `/` | Ana sayfa |
| `/about` | /about URL'i |
| `/urun/:id` | Dinamik parametre (id değişken) |
| `*` | Eşleşmeyen tüm URL'ler (404 sayfası) |

---

## Link

HTML'deki `<a>` etiketinin React Router versiyonudur.

Sayfa yenilemeden yönlendirme yapar.

| Özellik | Açıklama |
|---------|----------|
| **to** | Hedef URL'i belirtir |

### Link vs a Etiketi

| Özellik | `<a href="">` | `<Link to="">` |
|---------|---------------|----------------|
| Sayfa yenileme | Evet | Hayır |
| Performans | Yavaş | Hızlı |
| State korunur mu? | Hayır | Evet |

---

## useNavigate

Kod içinde programatik yönlendirme yapmak için kullanılır.

### Kullanım Alanları

| Durum | Açıklama |
|-------|----------|
| Form gönderimi sonrası | Başarılı kayıt sonrası yönlendirme |
| Giriş işlemi sonrası | Login sonrası dashboard'a yönlendirme |
| Butona tıklama | Belirli bir sayfaya gitme |
| Koşullu yönlendirme | Yetkisiz kullanıcıyı login sayfasına yönlendirme |

### Kullanım Şekilleri

| Kullanım | Açıklama |
|----------|----------|
| `navigate('/sayfa')` | Belirtilen sayfaya git |
| `navigate(-1)` | Bir sayfa geri git |
| `navigate(-2)` | İki sayfa geri git |
| `navigate(1)` | Bir sayfa ileri git |
| `navigate('/', { replace: true })` | Geçmişe eklemeden git |

---

## useParams

URL'deki dinamik parametreleri okumak için kullanılır.

### Dinamik Route Nedir?

URL'de değişken değer taşıyan route'lardır.

| Route Tanımı | Örnek URL | Parametre |
|--------------|-----------|-----------|
| `/urun/:id` | /urun/5 | id = 5 |
| `/kullanici/:username` | /kullanici/ahmet | username = ahmet |
| `/kategori/:kat/urun/:id` | /kategori/elektronik/urun/10 | kat = elektronik, id = 10 |

### Kullanım Alanları

| Durum | Açıklama |
|-------|----------|
| Ürün detay sayfası | URL'den ürün ID'sini alma |
| Kullanıcı profili | URL'den kullanıcı adını alma |
| Blog yazısı | URL'den yazı slug'ını alma |

---

## NavLink

Link bileşeninin gelişmiş versiyonudur.

Aktif sayfada farklı stil uygulamak için kullanılır.

| Özellik | Açıklama |
|---------|----------|
| **isActive** | Mevcut URL ile eşleşirse true döner |
| **className** | Aktif/pasif duruma göre class ataması |
| **style** | Aktif/pasif duruma göre inline stil |

---

## Outlet

Nested (iç içe) route'larda alt route'ların nerede render edileceğini belirtir.

Layout yapılarında kullanılır.

| Kullanım Alanı | Açıklama |
|----------------|----------|
| Dashboard layout | Sidebar sabit, içerik değişken |
| Admin panel | Header/Footer sabit, sayfa içeriği değişken |

---

## Özet

| Bileşen/Hook | Ne Zaman Kullanılır |
|--------------|---------------------|
| **BrowserRouter** | Uygulama başlangıcında, bir kez |
| **Routes** | Route'ları gruplamak için |
| **Route** | URL-Component eşleştirmesi için |
| **Link** | Kullanıcı tıklamasıyla yönlendirme |
| **useNavigate** | Kod ile yönlendirme |
| **useParams** | URL parametresi okuma |
| **NavLink** | Aktif link stili için |
| **Outlet** | İç içe route'lar için |

---

| Soru | Cevap |
|------|-------|
| React Router Dom nedir? | Sayfa yönlendirme kütüphanesi |
| Link ne işe yarar? | Sayfa yenilemeden yönlendirme |
| useNavigate ne zaman kullanılır? | Kod ile yönlendirme gerektiğinde |
| useParams ne işe yarar? | URL parametrelerini okur |
| Route path="*" ne anlama gelir? | 404 sayfası için kullanılır |

---

*Bu döküman React öğrenme serinizin 18. dersi için hazırlanmıştır.*
