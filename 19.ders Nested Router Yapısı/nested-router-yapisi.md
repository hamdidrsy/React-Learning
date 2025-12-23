# İç İçe (Nested) Router Yapısı

## Nested Route Nedir?

Nested Route, bir route'un içinde başka route'ların tanımlanmasıdır.

Ana sayfa yapısı sabit kalırken, içerik kısmının URL'e göre değişmesini sağlar.

---

## Neden Kullanılır?

| Sebep | Açıklama |
|-------|----------|
| **Layout Paylaşımı** | Header, Sidebar, Footer gibi ortak alanlar her sayfada tekrar yazılmaz |
| **Kod Tekrarını Önleme** | Aynı yapıyı her sayfada yazmak yerine bir kez tanımlanır |
| **URL Hiyerarşisi** | URL yapısı mantıksal bir hiyerarşi oluşturur |
| **Düzenli Kod** | Sayfa yapısı daha organize olur |

---

## Nested Route Yapısı

```
/dashboard              → Dashboard Layout + Dashboard Ana Sayfa
/dashboard/profile      → Dashboard Layout + Profil Sayfası
/dashboard/settings     → Dashboard Layout + Ayarlar Sayfası
/dashboard/users        → Dashboard Layout + Kullanıcılar Sayfası
```

Tüm sayfalarda Dashboard Layout (sidebar, header) sabit kalır. Sadece içerik değişir.

---

## Outlet Nedir?

Outlet, nested route'larda alt route'ların nerede görüneceğini belirleyen bileşendir.

Parent component içinde Outlet nereye yerleştirilirse, child route orada render edilir.

| Kavram | Açıklama |
|--------|----------|
| **Parent Route** | Ana route (layout'u içerir) |
| **Child Route** | Alt route (içerik sayfası) |
| **Outlet** | Child route'un render edileceği yer |

---

## Yapı Şeması

```
┌─────────────────────────────────────────────────────────┐
│  Parent Route (Dashboard Layout)                        │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Header                                           │  │
│  ├───────────┬───────────────────────────────────────┤  │
│  │           │                                       │  │
│  │  Sidebar  │         <Outlet />                    │  │
│  │           │                                       │  │
│  │           │    (Child Route burada görünür)       │  │
│  │           │                                       │  │
│  ├───────────┴───────────────────────────────────────┤  │
│  │  Footer                                           │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Index Route

Parent route'a gidildiğinde varsayılan olarak gösterilecek child route'tur.

| Route | Açıklama |
|-------|----------|
| `/dashboard` | Index route gösterilir (varsayılan sayfa) |
| `/dashboard/profile` | Profile sayfası gösterilir |

Index route, path yerine `index` özelliği ile tanımlanır.

---

## Kullanım Alanları

### 1. Admin Paneli

```
/admin
/admin/users
/admin/products
/admin/orders
/admin/settings
```

Tüm sayfalarda admin sidebar ve header sabit kalır.

---

### 2. Kullanıcı Dashboard'u

```
/dashboard
/dashboard/profile
/dashboard/notifications
/dashboard/settings
```

---

### 3. E-Ticaret Kategori Yapısı

```
/shop
/shop/electronics
/shop/electronics/phones
/shop/electronics/computers
/shop/clothing
```

---

### 4. Blog Yapısı

```
/blog
/blog/category/teknoloji
/blog/post/react-nedir
```

---

## Çoklu Nested Route

Nested route'lar birden fazla seviye derinlikte olabilir.

```
/dashboard                          → Seviye 1
/dashboard/settings                 → Seviye 2
/dashboard/settings/account         → Seviye 3
/dashboard/settings/account/privacy → Seviye 4
```

Her seviyede ayrı bir Outlet kullanılır.

---

## Layout Route

Path'i olmayan route'lara layout route denir.

Sadece ortak layout paylaşmak için kullanılır, URL'i değiştirmez.

| Özellik | Normal Route | Layout Route |
|---------|--------------|--------------|
| Path | Var | Yok |
| URL değiştirir | Evet | Hayır |
| Kullanım amacı | Sayfa gösterme | Layout paylaşma |

---

## Relative ve Absolute Path

Nested route'larda path tanımlaması iki şekilde yapılabilir:

| Tür | Örnek | Açıklama |
|-----|-------|----------|
| **Relative** | `path="profile"` | Parent path'e eklenir → /dashboard/profile |
| **Absolute** | `path="/dashboard/profile"` | Tam path yazılır |

Relative path kullanımı önerilir. Daha temiz ve bakımı kolaydır.

---

## Nested Route vs Ayrı Route

| Özellik | Nested Route | Ayrı Route |
|---------|--------------|------------|
| Layout paylaşımı | Otomatik | Manuel (her sayfada tekrar) |
| Kod tekrarı | Az | Çok |
| URL yapısı | Hiyerarşik | Düz |
| Karmaşıklık | Orta | Basit |

---

## Outlet Context

Parent route'tan child route'a veri geçirmek için kullanılır.

Parent'ta Outlet'e context verilir, child'da useOutletContext hook'u ile alınır.

| Hook | Görevi |
|------|--------|
| **useOutletContext** | Parent'tan gelen context verisini okur |

---

## Özet

| Kavram | Açıklama |
|--------|----------|
| **Nested Route** | Route içinde route tanımlama |
| **Outlet** | Child route'un render edileceği yer |
| **Index Route** | Parent route'un varsayılan içeriği |
| **Layout Route** | Path'siz, sadece layout için route |
| **Parent Route** | Alt route'ları içeren üst route |
| **Child Route** | Parent içinde tanımlanan alt route |

---

| Soru | Cevap |
|------|-------|
| Nested Route nedir? | Route içinde route yapısı |
| Neden kullanılır? | Layout paylaşımı, kod tekrarını önleme |
| Outlet ne işe yarar? | Alt route'un nerede görüneceğini belirler |
| Index route nedir? | Parent'a gidildiğinde varsayılan gösterilen sayfa |
| Kaç seviye nested olabilir? | Sınır yok, ihtiyaca göre |

---

*Bu döküman React öğrenme serinizin 19. dersi için hazırlanmıştır.*
