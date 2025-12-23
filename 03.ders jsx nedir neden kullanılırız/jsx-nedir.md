# JSX Nedir ve Neden Kullanılır?

## JSX Nedir?

JSX (JavaScript XML), JavaScript içinde HTML benzeri kod yazmamızı sağlayan bir sözdizimi uzantısıdır. React tarafından geliştirilmiştir.

```jsx
const element = <h1>Merhaba Dünya!</h1>;
```

Bu ne HTML ne de string'dir. Bu **JSX**'tir.

---

## Neden Kullanılır?

### 1. Okunabilirlik
UI kodunu daha anlaşılır ve okunabilir hale getirir.

**JSX olmadan (React.createElement ile):**
```javascript
const element = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'Başlık'),
  React.createElement('p', null, 'Paragraf')
);
```

**JSX ile:**
```jsx
const element = (
  <div className="container">
    <h1>Başlık</h1>
    <p>Paragraf</p>
  </div>
);
```

### 2. JavaScript Gücü
HTML içinde JavaScript ifadelerini kolayca kullanabilirsin.

```jsx
const isim = "Ahmet";
const element = <h1>Merhaba, {isim}!</h1>;
```

### 3. Hata Yakalama
Derleme aşamasında hataları yakalar, çalışma zamanı hatalarını azaltır.

### 4. Geliştirici Deneyimi
Kod yazımı daha hızlı ve sezgiseldir.

---

## JSX Temel Kuralları

| Kural | Açıklama |
|-------|----------|
| Tek kök eleman | Her zaman tek bir parent eleman döndürmelisin |
| className | HTML'deki `class` yerine `className` kullan |
| htmlFor | HTML'deki `for` yerine `htmlFor` kullan |
| camelCase | Özellikler camelCase yazılır (onClick, onChange) |
| Kapalı etiketler | Tüm etiketler kapatılmalı (`<img />`, `<br />`) |
| {} süslü parantez | JavaScript ifadeleri için `{}` kullan |

---

## Örnekler

### Değişken Kullanımı
```jsx
function Selamlama() {
  const kullanici = "Zeynep";
  const saat = 14;

  return (
    <div>
      <h1>Merhaba, {kullanici}!</h1>
      <p>Saat şu an: {saat}:00</p>
    </div>
  );
}
```

### Koşullu İfade
```jsx
function Durum() {
  const aktif = true;

  return (
    <p>Durum: {aktif ? "Çevrimiçi" : "Çevrimdışı"}</p>
  );
}
```

### Style Kullanımı
```jsx
function StilliKutu() {
  const stil = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "8px"
  };

  return (
    <div style={stil}>
      <p>Stillendirilmiş kutu</p>
    </div>
  );
}
```

---

## JSX vs HTML Farkları

| HTML | JSX |
|------|-----|
| `class="..."` | `className="..."` |
| `for="..."` | `htmlFor="..."` |
| `onclick="..."` | `onClick={...}` |
| `<img>` | `<img />` |
| `<br>` | `<br />` |
| `style="color: red"` | `style={{ color: 'red' }}` |

---

## Özet

- JSX, JavaScript içinde HTML benzeri kod yazmayı sağlar
- Daha okunabilir ve anlaşılır kod sağlar
- JavaScript ifadelerini `{}` içinde kullanabilirsin
- React tarafından JavaScript'e dönüştürülür
- Zorunlu değil ama şiddetle önerilir

---

**Hazırlayan:** React Eğitim Serisi - Ders 3


.
