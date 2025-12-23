# Redux Toolkit Kurulum ve Kullanımı

## Kurulum

### Yeni Projede Kurulum

```bash
npm install @reduxjs/toolkit react-redux
```

### Gerekli Paketler

| Paket | Açıklama |
|-------|----------|
| **@reduxjs/toolkit** | Redux Toolkit ana paketi |
| **react-redux** | React ile Redux bağlantısı |

---

## Proje Yapısı

```
src/
├── app/
│   └── store.js          # Store yapılandırması
├── features/
│   ├── counter/
│   │   └── counterSlice.js
│   └── user/
│       └── userSlice.js
├── App.jsx
└── main.jsx
```

---

## Store Oluşturma

Store, uygulamadaki tüm state'in tutulduğu merkezi depodur.

`configureStore` fonksiyonu ile oluşturulur.

### Store Özellikleri

| Özellik | Açıklama |
|---------|----------|
| **reducer** | Slice reducer'larının birleştirildiği yer |
| **middleware** | Varsayılan olarak thunk dahil |
| **devTools** | Geliştirme modunda otomatik aktif |

---

## Slice Oluşturma

Slice, bir özelliğin state, reducer ve action'larını tek dosyada toplar.

`createSlice` fonksiyonu ile oluşturulur.

### Slice Yapısı

| Özellik | Açıklama |
|---------|----------|
| **name** | Slice'ın benzersiz adı |
| **initialState** | Başlangıç state değeri |
| **reducers** | State'i güncelleyen fonksiyonlar |

### Reducer Fonksiyonları

Her reducer fonksiyonu iki parametre alır:

| Parametre | Açıklama |
|-----------|----------|
| **state** | Mevcut state değeri |
| **action** | Gönderilen action (payload içerir) |

---

## Provider ile Bağlama

Store'u React uygulamasına bağlamak için Provider kullanılır.

Provider, uygulamanın en dışına sarılır (genellikle main.jsx).

Tüm alt component'ler store'a erişebilir.

---

## Component'te Kullanım

### useSelector

Store'dan state okumak için kullanılır.

| Özellik | Açıklama |
|---------|----------|
| Görevi | State'ten veri çekme |
| Parametre | Selector fonksiyonu |
| Dönüş | Seçilen state değeri |

### useDispatch

Action göndermek için kullanılır.

| Özellik | Açıklama |
|---------|----------|
| Görevi | Action dispatch etme |
| Dönüş | Dispatch fonksiyonu |

---

## Action Payload

Reducer'a veri göndermek için payload kullanılır.

Dispatch sırasında parametre olarak verilir.

Reducer içinde `action.payload` ile erişilir.

---

## Birden Fazla Slice

Büyük uygulamalarda birden fazla slice olabilir.

Her slice ayrı bir dosyada tutulur.

Store'da tüm slice'lar birleştirilir.

### Örnek Yapı

| Slice | Görevi |
|-------|--------|
| **userSlice** | Kullanıcı bilgileri |
| **cartSlice** | Sepet işlemleri |
| **productSlice** | Ürün listesi |
| **authSlice** | Kimlik doğrulama |

---

## State Güncelleme

Redux Toolkit'te Immer entegrasyonu sayesinde state direkt değiştirilebilir.

### Güncelleme Yöntemleri

| Yöntem | Açıklama |
|--------|----------|
| **Direkt atama** | `state.value = 5` |
| **Push** | `state.items.push(item)` |
| **Splice** | `state.items.splice(index, 1)` |
| **Obje güncelleme** | `state.user.name = "Ali"` |

Immer arka planda immutable güncelleme yapar.

---

## Selector Fonksiyonları

State'ten veri çekmek için kullanılır.

Slice dosyasında tanımlanıp export edilebilir.

### Avantajları

| Avantaj | Açıklama |
|---------|----------|
| **Yeniden kullanım** | Aynı selector birden fazla yerde |
| **Merkezi yönetim** | State yapısı değişince tek yerde güncelleme |
| **Okunabilirlik** | Component'ler daha temiz |

---

## Özet

### Kurulum Adımları

| Adım | Açıklama |
|------|----------|
| 1 | Paketleri kur |
| 2 | Store oluştur |
| 3 | Slice oluştur |
| 4 | Provider ile sar |
| 5 | Component'lerde kullan |

### Temel Hooklar

| Hook | Görevi |
|------|--------|
| **useSelector** | State okuma |
| **useDispatch** | Action gönderme |

### Temel Fonksiyonlar

| Fonksiyon | Görevi |
|-----------|--------|
| **configureStore** | Store oluşturma |
| **createSlice** | Slice oluşturma |

---

| Soru | Cevap |
|------|-------|
| Hangi paketler gerekli? | @reduxjs/toolkit ve react-redux |
| Store nerede oluşturulur? | app/store.js |
| Slice nedir? | State, reducer ve action birleşimi |
| useSelector ne yapar? | Store'dan state okur |
| useDispatch ne yapar? | Action gönderir |

---

*Bu döküman React öğrenme serinizin 16. dersi için hazırlanmıştır.*


