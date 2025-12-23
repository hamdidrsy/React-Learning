# Asenkron Programlamada Karşılaşılan Problemler

## Asenkron Nedir?

**Asenkron (Asynchronous)**: İşlemlerin sırayla değil, bağımsız olarak çalışmasıdır.

```
Senkron:    İşlem1 → Bekle → İşlem2 → Bekle → İşlem3
Asenkron:   İşlem1 ─┐
            İşlem2 ─┼─→ Hepsi aynı anda
            İşlem3 ─┘
```

---

## Yaygın Problemler

| Problem | Açıklama |
|---------|----------|
| **Race Condition** | Yarış durumu - hangi istek önce biter? |
| **Memory Leak** | Bellek sızıntısı - component unmount |
| **Stale Closure** | Eski değerlere erişim |
| **Callback Hell** | İç içe callback'ler |
| **State Senkronizasyonu** | State güncel değil |

---

## 1. Race Condition (Yarış Durumu)

Birden fazla istek yapıldığında, son yapılan istek ilk bitmeyebilir.

### Problem

```
Kullanıcı "A" arar → İstek 1 (yavaş) ─────────────→ Sonuç A
Kullanıcı "AB" arar → İstek 2 (hızlı) ───→ Sonuç AB

Beklenen: "AB" sonuçları
Olan: "A" sonuçları (çünkü sonra geldi)
```

### Senaryo

- Arama kutusuna hızlı yazma
- Sayfa değiştirme
- Filtre değiştirme

### Çözüm

- Son isteği takip et
- Önceki istekleri iptal et (AbortController)
- Debounce kullan

---

## 2. Memory Leak (Bellek Sızıntısı)

Component unmount olduktan sonra state güncellemeye çalışmak.

### Problem

```
1. Component mount oldu
2. API isteği başladı
3. Kullanıcı başka sayfaya geçti (unmount)
4. API yanıtı geldi
5. setState çalıştı → HATA! (component yok artık)
```

### Hata Mesajı

```
Warning: Can't perform a React state update on an unmounted component.
```

### Çözüm

- useEffect cleanup fonksiyonu
- AbortController ile istek iptali
- isMounted flag kullanımı

---

## 3. Stale Closure (Eski Değer Problemi)

Asenkron fonksiyon içinde eski state değerine erişmek.

### Problem

```
count = 0
Button tıklandı → setTimeout içinde count kullanıldı
count = 1, 2, 3... oldu
setTimeout çalıştı → hala count = 0 görüyor!
```

### Neden?

Closure, tanımlandığı andaki değeri yakalar.

### Çözüm

- Fonksiyonel state güncelleme: `setCount(prev => prev + 1)`
- useRef kullanımı
- Dependency array doğru kullanımı

---

## 4. Callback Hell (Callback Cehennemi)

İç içe geçmiş callback'ler - okunması ve yönetilmesi zor.

### Problem

```jsx
// Okunması zor
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getYetMoreData(c, function(d) {
        // ... daha da devam eder
      });
    });
  });
});
```

### Çözüm

- async/await kullanımı
- Promise chaining
- Fonksiyonları ayırma

---

## 5. State Senkronizasyon Problemi

setState asenkron çalışır, hemen güncellenmez.

### Problem

```jsx
setCount(count + 1);
console.log(count); // Hala eski değer!
```

### Neden?

React state güncellemelerini batch'ler (toplar) ve optimize eder.

### Çözüm

- useEffect ile state değişimini izle
- Fonksiyonel güncelleme kullan

---

## Çözüm Yöntemleri

### 1. useEffect Cleanup

Component unmount olduğunda çalışır:

```jsx
useEffect(() => {
  // Setup kodu

  return () => {
    // Cleanup kodu (unmount'ta çalışır)
  };
}, []);
```

---

### 2. AbortController

Fetch/axios isteklerini iptal etmek için:

| Özellik | Açıklama |
|---------|----------|
| `new AbortController()` | Yeni controller oluştur |
| `controller.signal` | İsteğe bağlanacak sinyal |
| `controller.abort()` | İsteği iptal et |

---

### 3. Debounce

Hızlı ardışık işlemleri geciktirmek için:

| Terim | Açıklama |
|-------|----------|
| **Debounce** | Son işlemden X ms sonra çalış |
| **Throttle** | X ms'de bir çalış |

Kullanım: Arama kutusu, resize eventi, scroll eventi

---

### 4. Loading ve Error State

Her asenkron işlemde 3 state yönetilmeli:

| State | Açıklama |
|-------|----------|
| `loading` | İşlem devam ediyor mu? |
| `error` | Hata oluştu mu? |
| `data` | Gelen veri |

---

## İyi Pratikler

| Pratik | Açıklama |
|--------|----------|
| Cleanup kullan | useEffect return fonksiyonu |
| Loading state | Kullanıcıya feedback ver |
| Error handling | try/catch ile hata yakala |
| AbortController | Gereksiz istekleri iptal et |
| Debounce | Arama/filtre için |
| Fonksiyonel update | `setState(prev => ...)` |

---

## Özet

```
┌─────────────────────────────────────────────────────────────┐
│              Asenkron Problemler ve Çözümler                │
├─────────────────────────────────────────────────────────────┤
│  Race Condition  → AbortController, debounce               │
│  Memory Leak     → useEffect cleanup                       │
│  Stale Closure   → Fonksiyonel update, useRef              │
│  Callback Hell   → async/await                             │
│  State Sync      → useEffect, fonksiyonel update           │
└─────────────────────────────────────────────────────────────┘
```

| Soru | Cevap |
|------|-------|
| Race condition nedir? | İsteklerin yarışması |
| Memory leak neden olur? | Unmount sonrası setState |
| Cleanup ne zaman çalışır? | Component unmount olunca |
| Debounce ne işe yarar? | Ardışık istekleri geciktirir |

---

## Örnek Kod

```jsx
import { useState, useEffect } from 'react';
import axios from 'axios';

function SearchUsers() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Boş sorgu kontrolü
    if (!query) {
      setUsers([]);
      return;
    }

    // AbortController oluştur
    const controller = new AbortController();

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://localhost:3001/users?name_like=${query}`,
          { signal: controller.signal }
        );
        setUsers(response.data);
      } catch (err) {
        // İptal edilen istek hata değil
        if (axios.isCancel(err)) {
          console.log('İstek iptal edildi');
          return;
        }
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Debounce: 300ms bekle
    const timeoutId = setTimeout(fetchUsers, 300);

    // Cleanup: önceki istek ve timeout'u temizle
    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <div>
      <h1>Kullanıcı Ara</h1>

      <input
        type="text"
        placeholder="İsim ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <p>Aranıyor...</p>}
      {error && <p>Hata: {error}</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
```

**Bu örnekte çözülen problemler:**
- Race Condition → AbortController ile önceki istek iptali
- Memory Leak → Cleanup fonksiyonu
- Gereksiz istek → Debounce (300ms)
- Kullanıcı deneyimi → Loading ve error state

---

*Bu döküman React öğrenme serinizin 15. dersi için hazırlanmıştır.*

