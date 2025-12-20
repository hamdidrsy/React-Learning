# API Nedir?

## Tanım

**API (Application Programming Interface)**, uygulamaların birbirleriyle iletişim kurmasını sağlayan arayüzdür.

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   Frontend  │  ──────▶│     API     │──────▶  │   Backend   │
│   (React)   │  ◀──────│   (Köprü)   │◀──────  │  (Sunucu)   │
└─────────────┘         └─────────────┘         └─────────────┘
```

---

## Sektörde Kullanılan API Türleri

### 1. REST API (En Yaygın)

| Özellik | Açıklama |
|---------|----------|
| Format | JSON |
| Protokol | HTTP/HTTPS |
| Metodlar | GET, POST, PUT, DELETE |
| Kullanım | %70+ projede |

```
GET    /api/users      → Kullanıcıları listele
GET    /api/users/1    → Tek kullanıcı getir
POST   /api/users      → Yeni kullanıcı oluştur
PUT    /api/users/1    → Kullanıcı güncelle
DELETE /api/users/1    → Kullanıcı sil
```

### 2. GraphQL

| Özellik | Açıklama |
|---------|----------|
| Format | JSON |
| Tek Endpoint | /graphql |
| Avantaj | İstediğin veriyi al (over-fetching yok) |
| Kullanım | Facebook, GitHub, Shopify |

```graphql
query {
  user(id: 1) {
    name
    email
  }
}
```

### 3. WebSocket

| Özellik | Açıklama |
|---------|----------|
| Bağlantı | Sürekli açık |
| Kullanım | Canlı chat, bildirimler, oyunlar |
| Avantaj | Gerçek zamanlı iletişim |

### 4. gRPC

| Özellik | Açıklama |
|---------|----------|
| Format | Protocol Buffers |
| Hız | REST'ten hızlı |
| Kullanım | Mikroservisler, yüksek performans |

---

## Karşılaştırma

| API Türü | Hız | Öğrenme | Kullanım Alanı |
|----------|-----|---------|----------------|
| REST | Orta | Kolay | Genel amaçlı |
| GraphQL | İyi | Orta | Karmaşık veri yapıları |
| WebSocket | Çok iyi | Orta | Gerçek zamanlı |
| gRPC | En iyi | Zor | Mikroservisler |

---

## React'te API Kullanımı

### fetch (Native)

```jsx
useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error(err));
}, []);
```

### axios (Popüler Kütüphane)

```bash
npm install axios
```

```jsx
import axios from 'axios';

useEffect(() => {
  axios.get('https://api.example.com/users')
    .then(res => setUsers(res.data))
    .catch(err => console.error(err));
}, []);
```

### React Query / TanStack Query (Modern)

```bash
npm install @tanstack/react-query
```

```jsx
import { useQuery } from '@tanstack/react-query';

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json())
  });

  if (isLoading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata!</p>;

  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

---

## Sektörde Popüler Araçlar

| Araç | Kullanım |
|------|----------|
| **axios** | HTTP istekleri |
| **React Query** | Veri yönetimi, cache |
| **SWR** | Vercel'in veri çekme kütüphanesi |
| **Apollo Client** | GraphQL için |
| **Socket.io** | WebSocket için |

---

## HTTP Durum Kodları

| Kod | Anlamı |
|-----|--------|
| 200 | Başarılı |
| 201 | Oluşturuldu |
| 400 | Hatalı istek |
| 401 | Yetkisiz |
| 403 | Yasaklı |
| 404 | Bulunamadı |
| 500 | Sunucu hatası |

---

## Özet

| Soru | Cevap |
|------|-------|
| En yaygın API? | REST API |
| Modern alternatif? | GraphQL |
| Gerçek zamanlı? | WebSocket |
| React'te veri çekme? | fetch, axios, React Query |

---

*Bu döküman React öğrenme serinizin 12. dersi için hazırlanmıştır.*
