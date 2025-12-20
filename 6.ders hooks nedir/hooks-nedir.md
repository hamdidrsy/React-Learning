# React Hooks Nedir?

## Hooks Tanımı

**Hooks**, functional component'lerde state ve lifecycle özelliklerini kullanmamızı sağlayan fonksiyonlardır.

React 16.8 ile geldi. Artık class component yazmaya gerek yok.

---

## Neden Hooks?

| Öncesi (Class) | Sonrası (Hooks) |
|----------------|-----------------|
| Karmaşık söz dizimi | Basit fonksiyonlar |
| `this` karmaşası | `this` yok |
| Lifecycle metodları | useEffect |
| Kod tekrarı | Custom hooks ile paylaşım |

---

## Hook Kuralları

1. **Sadece en üst seviyede çağır** - if/for/while içinde kullanma
2. **Sadece React fonksiyonlarında çağır** - normal JS fonksiyonlarında kullanma
3. **"use" ile başlamalı** - useState, useEffect, useCustomHook

```jsx
// ❌ YANLIŞ
if (kosul) {
  const [deger, setDeger] = useState(0);
}

// ✅ DOĞRU
const [deger, setDeger] = useState(0);
if (kosul) {
  // deger'i burada kullan
}
```

---

## Temel Hooks

| Hook | Açıklama |
|------|----------|
| `useState` | State tutma ve güncelleme |
| `useEffect` | Yan etkiler (API, DOM, timer) |
| `useContext` | Context'ten veri okuma |

---

## Ek Hooks

| Hook | Açıklama |
|------|----------|
| `useReducer` | Karmaşık state yönetimi |
| `useCallback` | Fonksiyon önbellekleme |
| `useMemo` | Değer önbellekleme |
| `useRef` | DOM referansı / değişken tutma |
| `useLayoutEffect` | DOM ölçümleri |
| `useImperativeHandle` | Ref özelleştirme |
| `useDebugValue` | DevTools etiketi |

---

## React 18+ Hooks

| Hook | Açıklama |
|------|----------|
| `useId` | Benzersiz ID üretme |
| `useTransition` | Geçiş durumu yönetimi |
| `useDeferredValue` | Değer erteleme |
| `useSyncExternalStore` | Harici store senkronizasyonu |

---

## Custom Hook

Kendi hook'unuzu oluşturabilirsiniz:

```jsx
// hooks/useLocalStorage.js
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
```

---

## Özet

```
Hooks = Functional Component + State + Lifecycle
```

| Kavram | Açıklama |
|--------|----------|
| Hook | "use" ile başlayan özel fonksiyon |
| useState | State yönetimi |
| useEffect | Yan etkiler |
| useContext | Global veri erişimi |
| Custom Hook | Kendi oluşturduğunuz hook |

---

*Bu döküman React öğrenme serinizin 6. dersi için hazırlanmıştır.*
