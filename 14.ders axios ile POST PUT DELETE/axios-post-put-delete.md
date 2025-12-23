# Axios ile POST, PUT, DELETE İstekleri

## HTTP Metodları

| Metod | Açıklama | Kullanım |
|-------|----------|----------|
| **GET** | Veri okuma | Listeleme, detay görüntüleme |
| **POST** | Yeni veri oluşturma | Kayıt ekleme, form gönderme |
| **PUT** | Veri güncelleme (tümü) | Tüm alanları güncelleme |
| **PATCH** | Veri güncelleme (kısmi) | Sadece değişen alanları güncelleme |
| **DELETE** | Veri silme | Kayıt silme |

---

## CRUD İşlemleri

```
CRUD = Create, Read, Update, Delete

┌──────────┬──────────┬─────────────────────┐
│  CRUD    │  HTTP    │  Axios Metodu       │
├──────────┼──────────┼─────────────────────┤
│  Create  │  POST    │  axios.post()       │
│  Read    │  GET     │  axios.get()        │
│  Update  │  PUT     │  axios.put()        │
│  Delete  │  DELETE  │  axios.delete()     │
└──────────┴──────────┴─────────────────────┘
```

---

## POST İsteği (Veri Ekleme)

Yeni bir kayıt oluşturmak için kullanılır.

### Axios Söz Dizimi

```jsx
axios.post(url, data)
```

| Parametre | Açıklama |
|-----------|----------|
| `url` | API endpoint adresi |
| `data` | Gönderilecek veri (obje) |

### Kullanım Alanları

- Yeni kullanıcı kaydı
- Form gönderimi
- Yeni ürün ekleme
- Yorum yazma

---

## PUT İsteği (Veri Güncelleme)

Mevcut bir kaydı tamamen güncellemek için kullanılır.

### Axios Söz Dizimi

```jsx
axios.put(url, data)
```

| Parametre | Açıklama |
|-----------|----------|
| `url` | Güncellenecek kaynağın adresi (id ile) |
| `data` | Yeni veri (tüm alanlar) |

### PUT vs PATCH

| Özellik | PUT | PATCH |
|---------|-----|-------|
| Güncelleme | Tüm alanlar | Sadece değişenler |
| Veri gönderimi | Tüm obje | Kısmi obje |
| Kullanım | Tam güncelleme | Kısmi güncelleme |

---

## DELETE İsteği (Veri Silme)

Mevcut bir kaydı silmek için kullanılır.

### Axios Söz Dizimi

```jsx
axios.delete(url)
```

| Parametre | Açıklama |
|-----------|----------|
| `url` | Silinecek kaynağın adresi (id ile) |

### Dikkat Edilmesi Gerekenler

- Silme işlemi geri alınamaz
- Kullanıcıdan onay alınmalı
- Başarılı silme genellikle `200` veya `204` döner

---

## JSON Server ile Test

### db.json

```json
{
  "users": [
    { "id": 1, "name": "Ali", "email": "ali@mail.com" },
    { "id": 2, "name": "Ayşe", "email": "ayse@mail.com" }
  ]
}
```

### Endpoint'ler

| İşlem | Metod | Endpoint | Açıklama |
|-------|-------|----------|----------|
| Listele | GET | /users | Tüm kullanıcılar |
| Ekle | POST | /users | Yeni kullanıcı |
| Güncelle | PUT | /users/1 | ID=1 güncelle |
| Sil | DELETE | /users/1 | ID=1 sil |

---

## HTTP Durum Kodları

| Kod | Anlamı | Ne Zaman Döner |
|-----|--------|----------------|
| 200 | OK | GET, PUT, DELETE başarılı |
| 201 | Created | POST başarılı (yeni kayıt) |
| 204 | No Content | DELETE başarılı (içerik yok) |
| 400 | Bad Request | Hatalı istek |
| 404 | Not Found | Kayıt bulunamadı |
| 500 | Server Error | Sunucu hatası |

---

## İstek Gövdesi (Request Body)

POST ve PUT isteklerinde veri gönderilir:

```jsx
// Gönderilen veri
const newUser = {
  name: "Mehmet",
  email: "mehmet@mail.com"
};

// axios otomatik olarak JSON'a çevirir
axios.post('/users', newUser)
```

JSON Server otomatik olarak `id` atar.

---

## Hata Yönetimi

Tüm isteklerde hata yakalama önemlidir:

| Hata Türü | Açıklama |
|-----------|----------|
| `error.response` | Sunucu yanıt verdi ama hata kodu döndü |
| `error.request` | İstek yapıldı ama yanıt alınamadı |
| `error.message` | İstek oluşturulurken hata |

---

## Özet

```
┌─────────────────────────────────────────────────────────────┐
│                    CRUD İşlemleri                           │
├─────────────────────────────────────────────────────────────┤
│  POST    → Yeni kayıt oluştur    → axios.post(url, data)    │
│  PUT     → Kaydı güncelle        → axios.put(url, data)     │
│  DELETE  → Kaydı sil             → axios.delete(url)        │
└─────────────────────────────────────────────────────────────┘
```

| Soru | Cevap |
|------|-------|
| POST ne yapar? | Yeni kayıt oluşturur |
| PUT ne yapar? | Mevcut kaydı günceller |
| DELETE ne yapar? | Kaydı siler |
| PUT vs PATCH? | PUT tümünü, PATCH kısmını günceller |
| Başarılı POST kodu? | 201 (Created) |

---

## Örnek Kod

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/users';

function UserCRUD() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // GET - Kullanıcıları listele
  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST - Yeni kullanıcı ekle
  const addUser = async () => {
    await axios.post(API_URL, { name, email });
    setName('');
    setEmail('');
    fetchUsers();
  };

  // PUT - Kullanıcı güncelle
  const updateUser = async (id) => {
    const newName = prompt('Yeni isim:');
    await axios.put(`${API_URL}/${id}`, { name: newName, email: '' });
    fetchUsers();
  };

  // DELETE - Kullanıcı sil
  const deleteUser = async (id) => {
    if (window.confirm('Silmek istediğinize emin misiniz?')) {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    }
  };

  return (
    <div>
      <h1>Kullanıcı Yönetimi</h1>

      {/* Ekleme Formu */}
      <input
        placeholder="İsim"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Ekle</button>

      {/* Kullanıcı Listesi */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser(user.id)}>Düzenle</button>
            <button onClick={() => deleteUser(user.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCRUD;
```

---

*Bu döküman React öğrenme serinizin 14. dersi için hazırlanmıştır.*


