import FrameTransport from './FrameTransport';
import FrameRoute from './FrameRoute';
import FrameTime from './FrameTime';
import FramePrice from './FramePrice';
import ButtonAddToCart from "./ButtonAddToCart";
import './RouteCard.css';

function RouteCard() {
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

export default RouteCard;