# Axios ile GET İsteği

## Temel Kavramlar

### Fetch Nedir?

**fetch**, tarayıcıların yerleşik (native) API'sidir. Sunucudan veri çekmek için kullanılır.

- Tarayıcıda hazır gelir, kurulum gerektirmez
- JSON dönüşümü için `.json()` çağrılmalı
- Sadece network hatalarını yakalar

---

### Axios Nedir?

**axios**, HTTP istekleri yapmak için kullanılan popüler bir JavaScript kütüphanesidir.

- npm ile kurulması gerekir
- JSON dönüşümü otomatik
- Tüm HTTP hatalarını yakalar (4xx, 5xx)
- Sektörde yaygın kullanılır

---

### Async/Await Nedir?

**async/await**, JavaScript'te asenkron işlemleri daha okunabilir şekilde yazmamızı sağlar.

| Özellik | Then/Catch | Async/Await |
|---------|------------|-------------|
| Okunabilirlik | Zor (callback chain) | Kolay (senkron gibi) |
| Hata yakalama | .catch() | try/catch |
| Debug | Zor | Kolay |
| Sektör tercihi | Eski projeler | Modern projeler |

**async**: Fonksiyonun asenkron olduğunu belirtir
**await**: Promise'in tamamlanmasını bekler

---

## Fetch vs Axios Karşılaştırması

| Özellik | fetch | axios |
|---------|-------|-------|
| Yerleşik mi? | Evet | Hayır (kurulum gerekli) |
| JSON dönüşümü | Manuel | Otomatik |
| Hata yakalama | Sadece network | HTTP hataları da |
| Boyut | 0 KB | ~13 KB |
| Tercih | Basit projeler | Profesyonel projeler |

---

## JSON Server Nedir?

**JSON Server**, basit bir JSON dosyasından tam bir REST API oluşturan araçtır. Backend olmadan frontend geliştirmek için idealdir.

### Neden Kullanılır?

- Backend hazır değilken frontend geliştirme
- API'leri test etme
- Prototip oluşturma
- Öğrenme amaçlı

---

## JSON Server Kurulumu

### 1. Global Kurulum

```bash
npm install -g json-server
```

### 2. Proje İçinde Kurulum (Önerilen)

```bash
npm install json-server
```

---

## db.json Dosyası Oluşturma

Proje ana dizininde `db.json` dosyası oluşturun:

```json
{
  "users": [
    { "id": 1, "name": "Ali", "email": "ali@mail.com" },
    { "id": 2, "name": "Ayşe", "email": "ayse@mail.com" },
    { "id": 3, "name": "Mehmet", "email": "mehmet@mail.com" }
  ],
  "posts": [
    { "id": 1, "title": "React Nedir?", "userId": 1 },
    { "id": 2, "title": "Axios Kullanımı", "userId": 2 }
  ],
  "comments": [
    { "id": 1, "body": "Güzel yazı!", "postId": 1 },
    { "id": 2, "body": "Teşekkürler", "postId": 1 }
  ]
}
```

---

## JSON Server Çalıştırma

```bash
npx json-server --watch db.json --port 3001
```

veya `package.json`'a script ekleyin:

```json
{
  "scripts": {
    "server": "json-server --watch db.json --port 3001"
  }
}
```

Sonra:

```bash
npm run server
```

---

## JSON Server Endpoint'leri

JSON Server otomatik olarak şu endpoint'leri oluşturur:

| Endpoint | Metod | Açıklama |
|----------|-------|----------|
| /users | GET | Tüm kullanıcılar |
| /users/1 | GET | ID'si 1 olan kullanıcı |
| /posts | GET | Tüm postlar |
| /posts?userId=1 | GET | userId=1 olan postlar |
| /comments?postId=1 | GET | postId=1 olan yorumlar |

**Base URL:** `http://localhost:3001`

---

## Axios Kurulumu

```bash
npm install axios
```

---

## Axios Response Yapısı

| Özellik | Açıklama |
|---------|----------|
| `response.data` | Sunucudan dönen veri |
| `response.status` | HTTP durum kodu (200, 404 vb.) |
| `response.statusText` | Durum mesajı |
| `response.headers` | Response başlıkları |

---

## Neden Axios Tercih Edilir?

| Özellik | Açıklama |
|---------|----------|
| Otomatik JSON | `.json()` çağırmaya gerek yok |
| Daha iyi hata yönetimi | 4xx/5xx hatalarını yakalar |
| Interceptors | Merkezi loglama, auth token ekleme |
| Tarayıcı desteği | Eski tarayıcılarda da çalışır |

---

## Özet

```
┌─────────────────────────────────────────────────────────────┐
│                    API İstekleri                            │
├─────────────────────────────────────────────────────────────┤
│  fetch        → Tarayıcı native, manuel JSON dönüşümü       │
│  axios        → Kütüphane, otomatik JSON, daha kolay        │
│  async/await  → Promise'leri okunabilir şekilde yazma       │
│  JSON Server  → Sahte API oluşturma (db.json ile)           │
└─────────────────────────────────────────────────────────────┘
```

| Soru | Cevap |
|------|-------|
| Hangisini kullanmalıyım? | axios önerilir |
| async/await zorunlu mu? | Hayır ama önerilir |
| JSON Server ne için? | Backend olmadan API simülasyonu |
| db.json nedir? | Sahte veritabanı dosyası |

---

## Örnek Kod

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
```

---

*Bu döküman React öğrenme serinizin 13. dersi için hazırlanmıştır.*


.
