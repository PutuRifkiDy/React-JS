import ButtonDistractering from "../components/Elements/Button/ButtonConsepDistractering";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
    {
        id: 1,
        image: "assets/shoes-2.png",
        title: "Sepatu Baru",
        price: "Rp. 1000.000",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        image: "assets/shoes-2.png",
        title: "Sepatu Lama",
        price: "Rp. 1000.000",
        description: "Ini adalah sepatu lama"
    },
    {
        id: 3,
        image: "assets/shoes-2.png",
        title: "Sepatu wawwwwww",
        price: "Rp. 1000.000",
        description: "Ini adalah sepatu waw"
    },
]

const HandleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login"
}

const email = localStorage.getItem("email");

const ProductPage = () => {
    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <ButtonDistractering backgroundColor="bg-black hover:bg-slate-800 ml-5" onClick={HandleLogout}>Logout</ButtonDistractering>
            </div>
            <div className="flex justify-center py-5 gap-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
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
            <div className="flex justify-center items-center">
                <Counter />
            </div>
        </>
    );
}

export default ProductPage;