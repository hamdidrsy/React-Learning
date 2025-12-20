# React Debug Nedir?

## Debug Tanımı

**Debug**, koddaki hataları (bug) bulma ve düzeltme sürecidir.

---

## React'te Debug Yöntemleri

### 1. Console.log

En basit debug yöntemi:

```jsx
function App() {
  const [count, setCount] = useState(0);

  console.log("count değeri:", count);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 2. React Developer Tools

Chrome/Firefox eklentisi. Kurulum: [React DevTools](https://react.dev/learn/react-developer-tools)

| Özellik | Açıklama |
|---------|----------|
| Components | Component ağacını görme |
| Props | Her component'in props'larını inceleme |
| State | State değerlerini görme/değiştirme |
| Profiler | Performans analizi |

### 3. Browser DevTools

`F12` veya `Sağ tık > İncele`

| Sekme | Kullanım |
|-------|----------|
| Console | console.log çıktıları |
| Elements | DOM yapısı |
| Network | API istekleri |
| Sources | Breakpoint ile debug |

---

## Yaygın Hatalar ve Çözümleri

| Hata | Sebep | Çözüm |
|------|-------|-------|
| `undefined is not an object` | Null/undefined değere erişim | Optional chaining `?.` kullan |
| `Too many re-renders` | Sonsuz döngü | useEffect dependency kontrol |
| `Each child should have a unique key` | Map'te key eksik | `key={id}` ekle |
| `Cannot read property of undefined` | API verisi henüz yok | Loading state ekle |

---

## Debug İpuçları

1. **Hatayı oku** - Konsoldaki hata mesajını dikkatlice oku
2. **Küçük parçala** - Sorunu izole et
3. **console.log** - Değerleri kontrol et
4. **React DevTools** - State/props incele
5. **Google/Stack Overflow** - Hata mesajını ara

---

## Örnek: API Debug

```jsx
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        console.log("API yanıtı:", data); // Debug
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Hata:", err); // Debug
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

---

*Bu döküman React öğrenme serinizin 10. dersi için hazırlanmıştır.*
