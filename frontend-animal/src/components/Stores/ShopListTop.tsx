{/* <head><link rel="stylesheet" type="text/css" href="/css/cafe.css"></head>
<script src="./js/cafe.js"></script> */}

import React from 'react';
import storeInImage from '/img/Stores/store-in.jpg';
import shopListImage from '/img/Stores/SHOPLIST.png';
const ShopList: React.FC = () => {
    return (
        <div className="shoplist">
            <div className="shoplist-all">
                <img src={storeInImage} className="store-in" alt="店舗の内部" />
            </div>
            <div className="shoplist-left">
                <div className="shoplist-img">
                    <img src={shopListImage} alt="ショップリスト" />
                </div>
                <div className="shoplist-title">
                    <h1>SHOPLIST</h1>
                </div>
            </div>
            <div className="shoplist-messages">
                <div className="shoplist-message">
                    <p>
                        「動物と過ごす時間って、こんなに心が温まるんだ」
                        <br />ふとした瞬間に感じる癒しや、思わず笑顔になってしまうひととき。
                        <br />そんな素敵な体験をお届けできるように、どの店舗も心地よい空間づくりにこだわっています。
                        <br />清潔で、のんびりとくつろげる動物カフェをご紹介していますので、
                        <br />あなたのお気に入りの場所を、ぜひ楽しく見つけてみてください。
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ShopList;
