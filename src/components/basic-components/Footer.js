// Импорт библиотеки React
import React from 'react';
import './Footer.css';

// Функция для создания Footer
function Footer() {
    return (
        <footer className="container__footer">
            <div className="content__footer">
                <div className="links__footer">
                    <a id="home" className="footer__link">Главная</a>
                    <a id="map" className="footer__link">Карта</a>
                    <a id="catalog" className="footer__link">Каталог</a>
                    <a id="account" className="footer__link">Аккаунт</a>
                </div>
                <div className="social__links__footer">
                    <a href="https://www.linkedin.com/in/daniil-dashkevich-436058288/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/danidashkevich/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z" fill="black"/>
                        </svg>
                    </a>
                    <a href="https://www.threads.net/@danidashkevich">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M16.2178 10.1966C16.123 10.1512 16.0268 10.1074 15.9292 10.0656C15.7594 6.93667 14.0497 5.14536 11.1789 5.12703C11.1659 5.12695 11.153 5.12695 11.14 5.12695C9.4229 5.12695 7.99481 5.85989 7.11583 7.19362L8.69468 8.27668C9.35131 7.28043 10.3818 7.06805 11.1408 7.06805C11.1495 7.06805 11.1583 7.06805 11.167 7.06813C12.1122 7.07416 12.8255 7.34899 13.2872 7.88494C13.6231 8.27513 13.8478 8.81432 13.9591 9.49481C13.121 9.35237 12.2147 9.30858 11.2458 9.36413C8.51635 9.52135 6.76167 11.1132 6.87952 13.3251C6.93932 14.4471 7.49828 15.4124 8.45337 16.0429C9.26088 16.576 10.3009 16.8366 11.3818 16.7776C12.8093 16.6994 13.9291 16.1548 14.7103 15.1589C15.3036 14.4027 15.6789 13.4226 15.8446 12.1878C16.5248 12.5983 17.029 13.1386 17.3074 13.788C17.7809 14.8921 17.8085 16.7062 16.3282 18.1853C15.0313 19.481 13.4722 20.0415 11.1161 20.0588C8.50254 20.0395 6.52594 19.2013 5.2408 17.5676C4.03738 16.0378 3.41545 13.8281 3.39224 11C3.41545 8.17183 4.03738 5.96218 5.2408 4.43239C6.52594 2.79869 8.50251 1.96052 11.1161 1.9411C13.7486 1.96067 15.7597 2.80287 17.094 4.44446C17.7483 5.24948 18.2415 6.26184 18.5667 7.44222L20.4169 6.94859C20.0227 5.49567 19.4025 4.24367 18.5585 3.20535C16.8479 1.10077 14.346 0.0223607 11.1225 0H11.1096C7.89266 0.022283 5.41887 1.10479 3.75697 3.21742C2.27811 5.0974 1.51528 7.71326 1.48964 10.9923L1.48956 11L1.48964 11.0077C1.51528 14.2867 2.27811 16.9026 3.75697 18.7826C5.41887 20.8952 7.89266 21.9778 11.1096 22H11.1225C13.9826 21.9802 15.9986 21.2314 17.6593 19.5721C19.8322 17.4013 19.7668 14.6803 19.0506 13.0099C18.5368 11.8121 17.5572 10.8391 16.2178 10.1966ZM11.2796 14.8393C10.0834 14.9067 8.84059 14.3698 8.77931 13.2197C8.73389 12.367 9.38617 11.4155 11.353 11.3021C11.5783 11.2891 11.7993 11.2828 12.0164 11.2828C12.7309 11.2828 13.3992 11.3522 14.0069 11.485C13.7802 14.3155 12.4508 14.7751 11.2796 14.8393Z" fill="black"/>
                        </svg>
                    </a>
                    <a href="https://www.behance.net/daniildashkev">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7.44262 5.3501C8.08197 5.3501 8.67213 5.39957 9.21311 5.54798C9.7541 5.64692 10.1967 5.8448 10.5902 6.09215C10.9836 6.3395 11.2787 6.68579 11.4754 7.13102C11.6721 7.57625 11.7705 8.12042 11.7705 8.71406C11.7705 9.40664 11.623 10.0003 11.2787 10.4455C10.9836 10.8907 10.4918 11.2865 9.90164 11.5833C10.7377 11.8307 11.377 12.2759 11.7705 12.8695C12.1639 13.4632 12.4098 14.2052 12.4098 15.0462C12.4098 15.7388 12.2623 16.3324 12.0164 16.8271C11.7705 17.3218 11.377 17.7671 10.9344 18.0639C10.4918 18.3607 9.95082 18.608 9.36066 18.7565C8.77049 18.9049 8.18033 19.0038 7.59016 19.0038H1V5.3501H7.44262ZM7.04918 10.8907C7.59016 10.8907 8.03279 10.7423 8.37705 10.495C8.72131 10.2476 8.86885 9.80239 8.86885 9.25822C8.86885 8.96141 8.81967 8.66458 8.72131 8.4667C8.62295 8.26883 8.47541 8.12042 8.27869 7.97201C8.08197 7.87307 7.88525 7.77413 7.63934 7.72466C7.39344 7.67519 7.14754 7.67519 6.85246 7.67519H4V10.8907H7.04918ZM7.19672 16.7282C7.4918 16.7282 7.78689 16.6787 8.03279 16.6292C8.27869 16.5798 8.52459 16.4808 8.72131 16.3324C8.91803 16.184 9.06557 16.0356 9.21311 15.7883C9.31148 15.5409 9.40984 15.2441 9.40984 14.8978C9.40984 14.2052 9.21312 13.7105 8.81967 13.3642C8.42623 13.0674 7.88525 12.919 7.2459 12.919H4V16.7282H7.19672ZM16.6885 16.6787C17.082 17.0745 17.6721 17.2724 18.459 17.2724C19 17.2724 19.4918 17.1239 19.8852 16.8766C20.2787 16.5798 20.5246 16.283 20.623 15.9861H23.0328C22.6393 17.1734 22.0492 18.0144 21.2623 18.5586C20.4754 19.0533 19.541 19.3501 18.4098 19.3501C17.6229 19.3501 16.9344 19.2017 16.2951 18.9543C15.6557 18.707 15.1639 18.3607 14.7213 17.866C14.2787 17.4208 13.9344 16.8766 13.7377 16.2335C13.4918 15.5904 13.3934 14.8978 13.3934 14.1063C13.3934 13.3642 13.4918 12.6717 13.7377 12.0285C13.9836 11.3854 14.3279 10.8413 14.7705 10.3466C15.2131 9.90133 15.7541 9.50557 16.3443 9.25822C16.9836 9.01087 17.6229 8.86246 18.4098 8.86246C19.2459 8.86246 19.9836 9.01088 20.623 9.35716C21.2623 9.70345 21.7541 10.0992 22.1475 10.6929C22.541 11.237 22.8361 11.8801 23.0328 12.5727C23.1311 13.2653 23.1803 13.9579 23.1311 14.7494H16C16 15.5409 16.2951 16.283 16.6885 16.6787ZM19.7869 11.4844C19.4426 11.1381 18.9016 10.9402 18.2623 10.9402C17.8197 10.9402 17.4754 11.0391 17.1803 11.1876C16.8852 11.336 16.6885 11.5338 16.4918 11.7317C16.2951 11.9296 16.1967 12.177 16.1475 12.4243C16.0984 12.6717 16.0492 12.8695 16.0492 13.0674H20.4754C20.3771 12.3254 20.1311 11.8307 19.7869 11.4844ZM15.459 6.29003H20.9672V7.62572H15.459V6.29003Z" fill="black"/>
                        </svg>
                    </a>
                </div>
            </div >
            <div className="credits__footer">
                <div id="divider__footer"></div>
                <div className="row__footer">
                    <p id="footer__text">2023 Relume. Все права защищены.</p>
                    <div className="commercial__links__footer">
                        <a className="href__footer">Политика конфиденциальности</a>
                        <a className="href__footer">Условия использования</a>
                        <a className="href__footer">Настройки файлов cookie</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;