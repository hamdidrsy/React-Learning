# React Router Nedir?

## Tanım

**React Router**, React uygulamalarında sayfa yönlendirmesi (routing) yapmayı sağlayan kütüphanedir.

Tek sayfa uygulamalarında (SPA) sayfa yenilemeden URL değişimi sağlar.

---

## Kurulum

```bash
npm install react-router-dom
```

---

## Temel Bileşenler

| Bileşen | Açıklama |
|---------|----------|
| `BrowserRouter` | Router'ı sarmalayan ana bileşen |
| `Routes` | Route'ları gruplar |
| `Route` | URL-Component eşleştirmesi |
| `Link` | Sayfa yenilemeden yönlendirme |
| `NavLink` | Aktif link stili desteği |
| `useNavigate` | Programatik yönlendirme |
| `useParams` | URL parametrelerini okuma |

---

## Temel Kullanım

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Link Kullanımı

```jsx
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* Basit link */}
      <Link to="/">Ana Sayfa</Link>
      <Link to="/about">Hakkında</Link>

      {/* Aktif durumda stil */}
      <NavLink
        to="/contact"
        className={({ isActive }) => isActive ? "active" : ""}
      >
        İletişim
      </NavLink>
    </nav>
  );
}
```

---

## Dinamik Route (URL Parametreleri)

```jsx
// App.jsx
<Route path="/urun/:id" element={<UrunDetay />} />

// UrunDetay.jsx
import { useParams } from 'react-router-dom';

function UrunDetay() {
  const { id } = useParams();

  return <h1>Ürün ID: {id}</h1>;
}
```

---

## Programatik Yönlendirme

```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Giriş işlemi...
    navigate('/dashboard');      // Yönlendir
    navigate(-1);                // Geri git
  };

  return <button onClick={handleLogin}>Giriş</button>;
}
```

---

## 404 Sayfası

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />  {/* 404 */}
</Routes>
```

---

## Nested Routes (İç İçe Route)

```jsx
// App.jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route index element={<DashboardHome />} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

// Dashboard.jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />  {/* Alt route'lar burada render edilir */}
    </div>
  );
}
```

---

## Özet

| Hook/Bileşen | Kullanım |
|--------------|----------|
| `<Link to="">` | Sayfa yönlendirme |
| `useNavigate()` | Kod ile yönlendirme |
| `useParams()` | URL parametresi okuma |
| `useLocation()` | Mevcut URL bilgisi |
| `<Outlet />` | Nested route render |

---

*Bu döküman React öğrenme serinizin 11. dersi için hazırlanmıştır.*


.
