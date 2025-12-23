# React useState Nedir?

## useState Tanımı

**useState**, component'te state (durum) tutmak için kullanılan temel hook'tur.

**State**, component'in "hafızası"dır. Kullanıcı etkileşimleri sonucu değişen ve ekranda güncellenmesi gereken verileri tutar.

Örneğin:
- Bir formda yazılan metin
- Bir butonun tıklanma sayısı
- Bir menünün açık/kapalı durumu
- Sepetteki ürün listesi

---

## State vs Props Farkı

```
┌─────────────────────────────────────────────────────────┐
│                        PROPS                            │
│  • Dışarıdan (parent'tan) gelir                        │
│  • Salt okunur - değiştirilemez                        │
│  • Fonksiyon parametresi gibi                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                        STATE                            │
│  • Component içinde tanımlanır                         │
│  • Değiştirilebilir                                    │
│  • Component'in özel hafızası gibi                     │
│  • Değişince ekran yeniden çizilir (re-render)         │
└─────────────────────────────────────────────────────────┘
```

| Özellik | Props | State |
|---------|-------|-------|
| Tanım yeri | Parent component | Kendi içinde |
| Değiştirilebilir mi? | Hayır | Evet |
| Kim kontrol eder? | Parent | Component kendisi |
| Re-render tetikler mi? | Parent değişirse | Evet |

---

## useState Kullanımı

```jsx
import { useState } from 'react';

const [deger, setDeger] = useState(baslangicDegeri);
//      ↑        ↑                    ↑
//    değer  değiştirici       başlangıç değeri
```

### useState Kuralları

1. **Component'in en üstünde çağrılmalı** - if/for içinde kullanılmaz
2. **Sadece functional component'lerde** kullanılır
3. **Direkt değiştirme yapılmaz** - setter fonksiyonu kullanılır

```jsx
// ❌ YANLIŞ
deger = 5;

// ✅ DOĞRU
setDeger(5);
```

---

## Farklı Veri Tiplerinde State

```jsx
const [isim, setIsim] = useState("");           // String
const [yas, setYas] = useState(0);              // Number
const [aktif, setAktif] = useState(false);      // Boolean
const [liste, setListe] = useState([]);         // Array
const [kullanici, setKullanici] = useState({}); // Object
```

---

## State Ne Zaman Kullanılır?

| Durum | State Gerekli mi? |
|-------|-------------------|
| Kullanıcı input'u | Evet |
| Açılır menü durumu | Evet |
| API'den gelen veri | Evet |
| Sayaç değeri | Evet |
| Sabit bir metin | Hayır |
| Props'tan gelen veri | Hayır |

---

*Bu döküman React öğrenme serinizin 7. dersi için hazırlanmıştır.*


