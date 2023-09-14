import './RouteCard.css';

// Функция добавления кнопки для покупки товара
function ButtonAddToCart() {
    return (
        <div className="frame__routecard" id="frame__button">
            <button className="add_to_cart__routecard text_content__routecard">Положить в корзину</button>
        </div>
    );
}

export default ButtonAddToCart;