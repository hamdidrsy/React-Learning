# React useContext Nedir?

## useContext Tanımı

**useContext**, component'ler arasında props geçmeden veri paylaşmayı sağlar. "Global state" oluşturur.

---

## Props Drilling Problemi

```
        App (tema: "dark")
         │
         ▼ props
       Header
         │
         ▼ props
       Navbar
         │
         ▼ props
       Button (tema kullanmak istiyor)

Her seviyeden props geçirmek zorundayız!
```

## Context Çözümü

```
        App (tema: "dark")
         │
         ▼ Context Provider
       ┌─────────────────┐
       │  Header         │
       │  Navbar         │
       │  Button ◄───────┼── useContext ile direkt erişim
       └─────────────────┘
```

---

## 3 Adımda Context Kullanımı

### 1. Context Oluştur

```jsx
// context/TemaContext.js
import { createContext } from 'react';

export const TemaContext = createContext();
```

### 2. Provider ile Sar

```jsx
// App.jsx
import { TemaContext } from './context/TemaContext';

function App() {
  const tema = "dark";

  return (
    <TemaContext.Provider value={tema}>
      <Header />
      <Main />
      <Footer />
    </TemaContext.Provider>
  );
}
```

### 3. useContext ile Kullan

```jsx
// components/Button.jsx
import { useContext } from 'react';
import { TemaContext } from '../context/TemaContext';

function Button() {
  const tema = useContext(TemaContext);

  return (
    <button className={tema}>
      Tıkla
    </button>
  );
}
```

---

## Context ile State Yönetimi

```jsx
// context/TemaContext.js
import { createContext, useState } from 'react';

export const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [tema, setTema] = useState("light");

  const temaDegistir = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

  return (
    <TemaContext.Provider value={{ tema, temaDegistir }}>
      {children}
    </TemaContext.Provider>
  );
}
```

```jsx
// App.jsx
import { TemaProvider } from './context/TemaContext';

function App() {
  return (
    <TemaProvider>
      <Header />
      <Main />
    </TemaProvider>
  );
}
```

```jsx
// components/Button.jsx
import { useContext } from 'react';
import { TemaContext } from '../context/TemaContext';

function Button() {
  const { tema, temaDegistir } = useContext(TemaContext);

  return (
    <button onClick={temaDegistir}>
      Tema: {tema}
    </button>
  );
}
```

---

## Ne Zaman Kullanılır?

| Durum | Context Kullan |
|-------|----------------|
| Tema (dark/light) | Evet |
| Kullanıcı bilgisi | Evet |
| Dil seçimi | Evet |
| Sadece 1-2 seviye props | Hayır (props yeterli) |
| Sık değişen veri | Hayır (performans sorunu) |

---

## Props vs Context

| Özellik | Props | Context |
|---------|-------|---------|
| Veri akışı | Parent → Child | Global |
| Kullanım | Direkt geçirme | Provider + useContext |
| Ne zaman | Az seviye | Çok seviye / global veri |
| Performans | Daha iyi | Dikkatli kullanılmalı |

---

*Bu döküman React öğrenme serinizin 9. dersi için hazırlanmıştır.*


.
