import ButtonDistractering from "../components/Elements/Button/ButtonConsepDistractering";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
    {
        id: 1,
        image: "assets/shoes-2.png",
        title: "Sepatu Baru",
        price: "Rp. 1000.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 1,
        image: "assets/shoes-2.png",
        title: "Sepatu Lama",
        price: "Rp. 1000.000",
        description: "Ini adalah sepatu lama"
    },
    {
        id: 1,
        image: "assets/shoes-2.png",
        title: "Sepatu wawwwwww",
        price: "Rp. 1000.000",
        description: "Ini adalah sepatu waw"
    },
]

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5 gap-5">
            {products.map((product) => (
                <CardProduct>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body
                        title={product.title}
                    >
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
    );
}

export default ProductPage;