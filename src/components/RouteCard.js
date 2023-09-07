// Подключаем модули содержащие данные о фреймах
import FrameTransport from './FrameTransport';
import FrameRoute from './FrameRoute';
import FrameTime from './FrameTime';
import FramePrice from './FramePrice';
import ButtonAddToCart from "./ButtonAddToCart";
import './RouteCard.css';

// Функция динамического добавления карточки товара
function RouteCard() {
    // Возвращаем карточку товара
    return (
        <div className="container">
            <div className="row col-md-12" id="route_card">
                <FrameTransport />
                <FrameRoute />
                <FrameTime />
                <FramePrice />
                <ButtonAddToCart />
            </div>
        </div>
    );
}

// По умолчанию возвращаем функцию с карточкой товара
export default RouteCard;