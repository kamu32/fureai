import React from 'react';
import topImage from '/img/IMGBOX.png';
import bottomImage from '/img/Animals/satooya-bottom.png';
import footerImage from '/img/Animals/satooya-footer.png';

interface Animal {
    id: number;
    animal_img: string;
    type?: string;
    animal_age?: string;
    animal_vaccine?: string;
    animal_name: string;
    animal_gender: string;
    animal_address: string;
}
interface SatooyaListProps {
    animals: Animal[];
}
const SatooyaList: React.FC<SatooyaListProps> = ({ animals= [] }) => {
    return (
        <>
            <div className="reccomend-content">
                <h2>まだ、動物たちに苦手意識がある方。<br />
                    まずは、こちらのサービスをお試しください。
                </h2>
                <div className="main-content">
                    <a href="/stores">
                        <div className="first-content">
                            {/* 店舗紹介 */}
                            <div className="content-img box">
                                <img src={topImage} className="box" alt="店舗紹介" />
                                <div className="message"><h3>動物と触れ合ってみたい方</h3></div>
                            </div>
                        </div>
                    </a>
                    <a href="/blogt">
                        <div className="second-content">
                            {/* ニュース・記事 */}
                            <div className="content-img box">
                                <img src={topImage} className="box" alt="ニュース・記事" />
                                <div className="message"><h3>動物について知りたい方</h3></div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="reccomend-bottom"><img src={bottomImage} alt="おすすめの底部" /></div>
            </div>
            <section id="satooya-list">
            <div className="satooya-container">
                <div className="satooya-head">
                    <div className="satooya-head-title"><h1>里親募集情報</h1></div>
                </div>
                <div className="satooya-content">
                    {/* 検索フィルター */}
                    <div className="search-filter">
                        <div className="searchformCategory">
                            <h3 className="search-title">里親募集中の子を探す</h3>
                            <form id="search-form" action="/satooya" method="GET">
                                <dl>
                                    <dt>種別</dt>
                                    <dd>
                                        <div className="scroll-container">
                                            <ul>
                                                <li>
                                                    <input type="radio" name="key-pet-type" value="すべて" id="all" className="defaultButton" />
                                                    <label htmlFor="all" className="active">すべて</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="key-pet-type" value="犬" id="dog" />
                                                    <label htmlFor="dog">犬</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="key-pet-type" value="猫" id="cat" />
                                                    <label htmlFor="cat">猫</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="key-pet-type" value="うさぎ" id="rabbit" />
                                                    <label htmlFor="rabbit">うさぎ</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="key-pet-type" value="小動物" id="small" />
                                                    <label htmlFor="small">小動物</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="key-pet-type" value="魚" id="fish" />
                                                    <label htmlFor="fish">魚</label>
                                                </li>
                                                <li>
                                                    <input type="radio" name="key-pet-type" value="爬虫類" id="reptiles" />
                                                    <label htmlFor="reptiles" className="last-label">爬虫類</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>地域</dt>
                                    <dd>
                                        <select name="prefectures">
                                            <option value="すべて" selected>すべて</option>
                                            <option value="北海道">北海道</option>
                                            <option value="青森県">青森県</option>
                                            <option value="岩手県">岩手県</option>
                                            <option value="宮城県">宮城県</option>
                                            <option value="秋田県">秋田県</option>
                                            <option value="山形県">山形県</option>
                                            <option value="福島県">福島県</option>
                                            <option value="茨城県">茨城県</option>
                                            <option value="栃木県">栃木県</option>
                                            <option value="群馬県">群馬県</option>
                                            <option value="埼玉県">埼玉県</option>
                                            <option value="千葉県">千葉県</option>
                                            <option value="東京都">東京都</option>
                                            <option value="神奈川県">神奈川県</option>
                                        </select>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>性別</dt>
                                    <dd>
                                        <select name="animal_gender">
                                            <option value="すべて" selected>すべて</option>
                                            <option value="♂">オス</option>
                                            <option value="♀">メス</option>
                                        </select>
                                    </dd>
                                </dl>
                                <div className="conected-button box">
                                    <input type="submit" value="検索" name="search-filter-input" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <h3 className="satooya-total-text">現在の募集総数 <span>{/* totalAnimalsの値をここで表示 */}</span></h3>
                    <div id="search-results">
                        {/* Animal filter component should be included here */}
                        <div className="satooya-list">
                            {animals.length === 0 ? (
                                <h2>現在は募集していません</h2>
                            ) : (
                                animals.map(animal => (
                                    <a key={animal.id} href={`/satooya/${animal.id}`}>
                                        <div className="animal-card">
                                            <div className="animal-img">
                                                <img src={`./img/Animals/animal-img/${animal.animal_img}`} alt={animal.animal_name} />
                                            </div>
                                            <div className="tags">
                                                {animal.type && <div className="animal-tag">{animal.type}</div>}
                                                {animal.animal_age && <div className="animal-tag">{animal.animal_age}</div>}
                                                {animal.animal_vaccine && <div className="animal-tag">{animal.animal_vaccine}</div>}
                                            </div>
                                            <div className="animal-name">
                                                <h2>{animal.animal_name} {animal.animal_gender}</h2>
                                            </div>
                                            <div className="animal-address">
                                                <p>{animal.animal_address}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="satooya-footer"><img src={footerImage} alt="フッター画像" /></div>
            </section>
        </>
    );
};
export default SatooyaList;