import ButtonDistractering from "../Elements/Button/ButtonConsepDistractering";
const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
            {children}
        </div>
    );
}

const Body = (props) => {
    const {title, children} = props;
    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-light text-white">
                    {title}
                </h5>
                <p className="text-m text-white">
                    {children}
                </p>
            </a>
        </div>
    );
}

const Footer = (props) => {
    const {price} = props;
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-3xl font-bold text-white">
                {price}
            </span>
            <ButtonDistractering backgroundColor="bg-blue-600 hover:bg-blue-400 transition-all duration-400 ease-in-out">
                Add To Cart
            </ButtonDistractering>
        </div>
    );
}

const Header = (props) => {
    const {image} = props;
    return (
        <a href="#">
            <img
                src={image}
                alt="test"
                className="p-8 rounded-t-lg"
            />
        </a>
    );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;