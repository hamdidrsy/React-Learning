# React Props Nedir?

## Props Tanımı

**Props (Properties)**, component'lere dışarıdan veri göndermek için kullanılır. HTML'deki attribute'lar gibi düşünebilirsiniz.

```
┌─────────────────────────────────────────┐
│           Parent Component              │
│                                         │
│   <Child isim="Ali" yas={25} />         │
│              │                          │
│              ▼ props                    │
│   ┌─────────────────────┐               │
│   │   Child Component   │               │
│   │   props.isim = Ali  │               │
│   │   props.yas = 25    │               │
│   └─────────────────────┘               │
└─────────────────────────────────────────┘
```

---

## Props Özellikleri

| Özellik | Açıklama |
|---------|----------|
| **Tek Yönlü** | Parent → Child (yukarıdan aşağıya) |
| **Salt Okunur** | Component içinde değiştirilemez |
| **Her Türlü Veri** | String, number, array, object, function gönderilebilir |

---

## Temel Kullanım

```jsx
// Selamlama.jsx
function Selamlama(props) {
  return <h1>Merhaba, {props.isim}!</h1>;
}

export default Selamlama;
```

```jsx
// App.jsx
import Selamlama from './Selamlama';

function App() {
  return (
    <div>
      <Selamlama isim="Ali" />
      <Selamlama isim="Ayşe" />
      <Selamlama isim="Mehmet" />
    </div>
  );
}
```

**Çıktı:**
```
Merhaba, Ali!
Merhaba, Ayşe!
Merhaba, Mehmet!
```

---

## Destructuring ile Kullanım

Props'u daha temiz yazmak için destructuring kullanılır:

```jsx
// Önceki (props ile)
function Kart(props) {
  return <p>{props.baslik} - {props.icerik}</p>;
}

// Sonraki (destructuring ile) ✓ Önerilen
function Kart({ baslik, icerik }) {
  return <p>{baslik} - {icerik}</p>;
}
```

---

## Farklı Veri Tipleri Gönderme

```jsx
<Kullanici
  isim="Ali"              // String
  yas={25}                // Number
  aktif={true}            // Boolean
  hobiler={["futbol", "müzik"]}  // Array
  adres={{ il: "İstanbul", ilce: "Kadıköy" }}  // Object
  tikla={() => alert("Merhaba")}  // Function
/>
```

```jsx
function Kullanici({ isim, yas, aktif, hobiler, adres, tikla }) {
  return (
    <div>
      <h2>{isim}</h2>
      <p>Yaş: {yas}</p>
      <p>Durum: {aktif ? "Aktif" : "Pasif"}</p>
      <p>Hobiler: {hobiler.join(", ")}</p>
      <p>Adres: {adres.il} / {adres.ilce}</p>
      <button onClick={tikla}>Tıkla</button>
    </div>
  );
}
```

---

## Varsayılan Değer (Default Props)

Props gönderilmezse kullanılacak varsayılan değer:

```jsx
function Button({ text = "Tıkla", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

// Kullanım
<Button />                     // text="Tıkla", color="blue"
<Button text="Gönder" />       // text="Gönder", color="blue"
<Button color="red" />         // text="Tıkla", color="red"
```

---

## Children Props

Component etiketleri arasındaki içerik `children` olarak gelir:

```jsx
function Kutu({ children, renk }) {
  return (
    <div style={{ border: `2px solid ${renk}`, padding: 10 }}>
      {children}
    </div>
  );
}

// Kullanım
<Kutu renk="red">
  <h2>Başlık</h2>
  <p>Bu içerik children olarak geçer</p>
</Kutu>
```

---

## Mini Proje: Ürün Kartı

```jsx
// UrunKarti.jsx
function UrunKarti({ isim, fiyat, stokta }) {
  return (
    <div className="urun-karti">
      <h3>{isim}</h3>
      <p>{fiyat} TL</p>
      <p>{stokta ? "✓ Stokta var" : "✗ Stokta yok"}</p>
    </div>
  );
}

export default UrunKarti;
```

```jsx
// App.jsx
import UrunKarti from './UrunKarti';

function App() {
  return (
    <div>
      <UrunKarti isim="Laptop" fiyat={15000} stokta={true} />
      <UrunKarti isim="Telefon" fiyat={8000} stokta={true} />
      <UrunKarti isim="Tablet" fiyat={5000} stokta={false} />
    </div>
  );
}
```

---

## Özet

| Kavram | Açıklama |
|--------|----------|
| `props` | Component'e dışarıdan gelen veriler |
| `props.xxx` | Gelen veriye erişim |
| `{ xxx }` | Destructuring ile erişim |
| `children` | Etiketler arasındaki içerik |
| `xxx = "değer"` | Varsayılan değer tanımlama |

---

*Bu döküman React öğrenme serinizin 5. dersi için hazırlanmıştır.*

