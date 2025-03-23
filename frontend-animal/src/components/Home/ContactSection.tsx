import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);


  return (
    <div>
            <div className="last-img">
                <img src="./img/Forte.png" className="last-img-1" alt="Forte" />
                <img src="./img/Forte-dance.png" className="last-img-2" alt="Forte Dance" />
                <img src="./img/cafe2-2.png" className="last-img-3" alt="Cafe" />
            </div>
            {/* CONTACT */}
            {/* <div className="contact-img"><img src="/img/Forte-siki.png" alt="Forte Siki" /></div> */}
            <section id="contact">
                <div className="contact-title-action">
                    <h2>お気軽にお問い合わせください。</h2>
                </div>
                <div className="contact-detail">
                    <div className="contact-content">
                        <div className="contact-text">
                            <p>
                                気になる点、疑問やご意見やご要望もございましたら、<br />
                                今後の活動の参考にさせていただきます。
                            </p>
                        </div>
                        <div className="contact-button">
                            <a href="/contact">お問い合わせはこちら</a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
};

export default ContactSection;
