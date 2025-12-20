import React from 'react'
import UrunFiyati from "./UrunFiyati"

function UrunKarti({ productName, price }) {
    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>
            <div>
                <div>isim:{productName}</div>
                <div>fiyat:{price}</div>
            </div>
        </div>
    )
}

export default UrunKarti
