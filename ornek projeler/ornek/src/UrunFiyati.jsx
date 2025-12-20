import React from 'react'

function UrunFiyati({ children }) {
    return (
        <div>
            <p>Urun fiyat componenti çalıştı</p>
            <div>{children}</div>
        </div>
    )
}

export default UrunFiyati
