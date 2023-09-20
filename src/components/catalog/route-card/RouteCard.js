// Подключаем модули содержащие данные о фреймах
import FrameTransport from './FrameTransport';
import FrameRoute from './FrameRoute';
import FrameTime from './FrameTime';
import FramePrice from './FramePrice';
import ButtonAddToCart from "./ButtonAddToCart";
import './RouteCard.css';

// Функция динамического добавления карточки товара
function RouteCard({ to, from, number_of_transport, days, type_of_transport }) {
    // Возвращаем карточку товара
    return (
        <div className="container__routecard">
            <div className="row col-md-12" id="route_card">
                <FrameTransport number_of_transport={number_of_transport} type_of_transport={type_of_transport} />
                <FrameRoute to={to} from={from} />
                <FrameTime days={days} />
                <FramePrice />
                <ButtonAddToCart />
            </div>
        </div>
    );
}

// По умолчанию возвращаем функцию с карточкой товара
export default RouteCard;