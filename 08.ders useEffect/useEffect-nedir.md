# React useEffect Nedir?

## useEffect Tanımı

**useEffect**, component'te "yan etkileri" (side effects) yönetmek için kullanılan hook'tur.

Yan etkiler:
- API'den veri çekme
- DOM'u manuel değiştirme
- Timer/Interval kullanma
- Event listener ekleme
- LocalStorage işlemleri

---

## Temel Söz Dizimi

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Yapılacak işlem
}, [bağımlılıklar]);
```

---

## Kullanım Şekilleri

### 1. Her Render'da Çalışır

```jsx
useEffect(() => {
  console.log("Her render sonrası çalışır");
});
```

### 2. Sadece İlk Yüklemede Çalışır

```jsx
useEffect(() => {
  console.log("Sadece component ilk yüklendiğinde");
}, []);  // Boş dizi
```

### 3. Belirli Değer Değiştiğinde Çalışır

```jsx
useEffect(() => {
  console.log("count değiştiğinde çalışır");
}, [count]);  // count değişirse çalışır
```

### 4. Cleanup (Temizlik) Fonksiyonu

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Component kaldırılınca çalışır
  return () => {
    clearInterval(timer);
  };
}, []);
```

---

## Dependency Array (Bağımlılık Dizisi)

| Kullanım | Ne Zaman Çalışır |
|----------|------------------|
| `useEffect(() => {})` | Her render'da |
| `useEffect(() => {}, [])` | Sadece ilk mount'ta |
| `useEffect(() => {}, [a])` | `a` değiştiğinde |
| `useEffect(() => {}, [a, b])` | `a` veya `b` değiştiğinde |

---

## Component Yaşam Döngüsü

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   MOUNTING  │ ──▶ │   UPDATING  │ ──▶ │  UNMOUNTING │
│   (Doğum)   │     │   (Yaşam)   │     │   (Ölüm)    │
└─────────────┘     └─────────────┘     └─────────────┘
      │                   │                   │
      ▼                   ▼                   ▼
 useEffect([])      useEffect([dep])     return () => {}
 ilk çalışma        dep değişince        cleanup fonksiyonu
```

---

## Yaygın Kullanım Senaryoları

| Senaryo | Dependency |
|---------|------------|
| API'den veri çekme | `[]` veya `[id]` |
| Event listener ekleme | `[]` |
| Document title değiştirme | `[title]` |
| Timer/Interval | `[]` |
| LocalStorage okuma | `[]` |

---

## Kurallar

1. **useEffect component içinde en üstte olmalı** - if/for içinde kullanılmaz
2. **Async fonksiyon direkt kullanılmaz** - içeride tanımlanmalı
3. **Kullanılan tüm değişkenler dependency'de olmalı**

```jsx
// ❌ YANLIŞ - async direkt kullanım
useEffect(async () => {
  await fetchData();
}, []);

// ✅ DOĞRU - içeride async tanımlama
useEffect(() => {
  const fetchData = async () => {
    const data = await fetch('/api');
  };
  fetchData();
}, []);
```

---

*Bu döküman React öğrenme serinizin 8. dersi için hazırlanmıştır.*


.
