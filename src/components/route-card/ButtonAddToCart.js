import './RouteCard.css';

// Функция добавления кнопки для покупки товара
function ButtonAddToCart() {
    return (
        <div className="frame" id="frame__button">
            <button className="add_to_cart text_content">Положить в корзину</button>
        </div>
    );
}

export default ButtonAddToCart;