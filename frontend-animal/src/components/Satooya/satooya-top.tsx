import React from 'react';
import topImage from '/img/Animals/satooya-top.png';
import bottomImage from '/img/Animals/satooya-bottom2.png';
const SatooyaTop: React.FC = () => {
    return (
        <div className="satooya-top-content">
            <div className="satooya-top">
                <img src={topImage} className="top-img" alt="Top Image" />
                <div className="satooya-bottom-img">
                    <img src={bottomImage} className="bottom-img" alt="Bottom Image" />
                </div>
            </div>
            <div className="satooya-title balloon3-right">
                <h1 className="satooya-title-h">里親になりませんか？</h1>
                <h2 className="satooya-title-h">可愛い子たちが待っています。</h2>
            </div>
            <div className="satooya-title-secound">
                <h1 className="satooya-title-h">里親になりませんか？</h1>
                <h2 className="satooya-title-h">可愛い子たちが待っています。</h2>
            </div>
        </div>
    );
};
export default SatooyaTop;