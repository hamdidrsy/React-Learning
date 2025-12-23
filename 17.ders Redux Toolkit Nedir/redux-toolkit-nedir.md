# Redux Toolkit Nedir?

## Redux Nedir?

Redux, JavaScript uygulamaları için **global state yönetim** kütüphanesidir.

Uygulamadaki tüm verileri tek bir merkezde (Store) tutar ve bu verilere her yerden erişim sağlar.

---

## Redux Temel Kavramları

| Kavram | Açıklama |
|--------|----------|
| **Store** | Tüm state'in tutulduğu merkezi depo |
| **Action** | State'te ne değişiklik yapılacağını belirten nesne |
| **Reducer** | Action'a göre state'i güncelleyen fonksiyon |
| **Dispatch** | Action'ı store'a gönderme işlemi |

---

## Redux Toolkit Nedir?

Redux Toolkit, Redux'ın **resmi ve önerilen** kullanım şeklidir.

Redux ekibi tarafından geliştirilmiştir. Klasik Redux'ın tüm özelliklerini içerir, ancak çok daha az kod ile aynı işi yapar.

---

## Neden Ortaya Çıktı?

Klasik Redux kullanımında yaşanan sorunlar:

| Problem | Açıklama |
|---------|----------|
| **Fazla Boilerplate** | Basit bir işlem için çok fazla dosya ve kod yazmak gerekiyordu |
| **Karmaşık Kurulum** | Store yapılandırması, middleware ekleme işlemleri zordu |
| **Immutability Zorluğu** | State'i değiştirmeden güncellemek hata yapmaya açıktı |
| **Çok Fazla Bağımlılık** | redux-thunk, immer, reselect gibi ek paketler gerekiyordu |
| **Standart Eksikliği** | Herkes farklı yapılar kullanıyordu, tutarlılık yoktu |

Redux ekibi bu sorunları çözmek için Redux Toolkit'i geliştirdi.

---

## Redux Toolkit'in Avantajları

### 1. Daha Az Kod

Klasik Redux'ta 4-5 dosyada yazılan kodlar, Redux Toolkit ile tek dosyada yazılır.

Boilerplate kod miktarı yaklaşık **%80 azalır**.

---

### 2. Kolay Kurulum

`configureStore` fonksiyonu ile store tek satırda oluşturulur.

DevTools ve middleware'ler otomatik olarak yapılandırılır.

---

### 3. Slice Yapısı

`createSlice` fonksiyonu ile action ve reducer'lar tek yerde tanımlanır.

Action creator'lar otomatik olarak oluşturulur.

---

### 4. Immer Entegrasyonu

State güncellemelerinde spread operatörü kullanmaya gerek kalmaz.

State'i direkt değiştirir gibi kod yazılır, Immer arka planda immutable güncelleme yapar.

---

### 5. Async İşlemler İçin createAsyncThunk

API çağrıları için `createAsyncThunk` kullanılır.

Loading, success ve error durumları otomatik yönetilir.

---

### 6. Dahili Araçlar

| Araç | Görevi |
|------|--------|
| **configureStore** | Store oluşturma |
| **createSlice** | Reducer ve action tanımlama |
| **createAsyncThunk** | Asenkron işlemler |
| **createSelector** | Memoized selector oluşturma |

Tüm bu araçlar tek pakette gelir, ekstra kurulum gerekmez.

---

### 7. TypeScript Desteği

Tip tanımlamaları dahili olarak gelir. Ekstra yapılandırma gerektirmez.

---

## Klasik Redux vs Redux Toolkit

| Özellik | Klasik Redux | Redux Toolkit |
|---------|--------------|---------------|
| Kod miktarı | Fazla | Az |
| Kurulum | Karmaşık | Basit |
| Dosya yapısı | Dağınık | Düzenli |
| Immutability | Manuel | Otomatik (Immer) |
| Async işlemler | Ek paket gerekli | Dahili |
| DevTools | Manuel kurulum | Otomatik |
| Best practices | Manuel uygulama | Varsayılan |

---

## Ne Zaman Kullanılmalı?

| Durum | Öneri |
|-------|-------|
| Küçük uygulama | useState yeterli |
| Orta ölçekli, prop drilling sorunu | useContext |
| Büyük uygulama, karmaşık state | Redux Toolkit |
| Ekip projesi | Redux Toolkit |
| State geçmişi takibi gerekli | Redux Toolkit |

---

## Özet

| Soru | Cevap |
|------|-------|
| Redux Toolkit nedir? | Redux'ın resmi, modern araç seti |
| Neden ortaya çıktı? | Klasik Redux'ın zorluklarını çözmek için |
| Ana avantajı nedir? | Daha az kod, daha kolay kullanım |
| Slice nedir? | Action ve reducer'ın birleştiği yapı |
| Immer ne sağlar? | State güncellemeyi kolaylaştırır |
| Ne zaman kullanılır? | Büyük ve karmaşık uygulamalarda |

---

*Bu döküman React öğrenme serinizin 17. dersi için hazırlanmıştır.*

