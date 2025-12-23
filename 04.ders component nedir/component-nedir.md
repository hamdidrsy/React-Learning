# React Component Nedir?

## Component Tanımı

**Component**, React uygulamalarının temel yapı taşıdır. Kullanıcı arayüzünün bağımsız, yeniden kullanılabilir parçalarıdır.

Component'leri **LEGO parçaları** gibi düşünebilirsiniz:

```
┌─────────────────────────────────────┐
│            App Component            │
│  ┌───────────────────────────────┐  │
│  │      Header Component         │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │      Content Component        │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │      Footer Component         │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## Neden Component Kullanırız?

| Avantaj | Açıklama |
|---------|----------|
| **Yeniden Kullanım** | Bir kez yaz, her yerde kullan |
| **Kolay Bakım** | Değişiklik tek yerden yapılır |
| **Okunabilirlik** | Kod küçük parçalara bölünür |
| **Takım Çalışması** | Herkes farklı component üzerinde çalışabilir |

---

## Component Oluşturma

```jsx
// Component adı BÜYÜK harfle başlamalı
function Merhaba() {
  return <h1>Merhaba Dünya!</h1>;
}
```

---

## Mini Örnek

```jsx
// components/Button.jsx
function Button({ text, color }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default Button;
```

```jsx
// App.jsx
import Button from './components/Button';

function App() {
  return (
    <div>
      <Button text="Kaydet" color="green" />
      <Button text="Sil" color="red" />
      <Button text="Düzenle" color="blue" />
    </div>
  );
}

export default App;
```

**Sonuç:** Aynı Button component'i 3 farklı yerde, farklı özelliklerle kullanıldı.

---

## Export Kullanımı

### export default (Varsayılan)

Dosyada **tek bir şey** dışa aktarılır. Import ederken isim serbestçe değiştirilebilir.

```jsx
// Button.jsx
function Button() {
  return <button>Tıkla</button>;
}
export default Button;

// App.jsx
import Button from './Button';       // Çalışır
import MyButton from './Button';     // Bu da çalışır (isim değişebilir)
```

### export (Named)

Dosyada **birden fazla şey** dışa aktarılır. Import ederken süslü parantez gerekir.

```jsx
// helpers.js
export function topla(a, b) {
  return a + b;
}

export function cikar(a, b) {
  return a - b;
}

// App.jsx
import { topla, cikar } from './helpers';
```

### Fark Özeti

|                | export default         | export |
|----------------|------------------------|---------------------------|
|Dosya başına    | 1 tane                 | Sınırsız                  |
|Import          | `import X from '...'`  | `import { X } from '...'` |
|İsim değiştirme | Serbest                | `as` gerekli              |

---

*Bu döküman React öğrenme serinizin 4. dersi için hazırlanmıştır.*


