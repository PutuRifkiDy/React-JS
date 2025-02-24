import ButtonDistractering from "../components/Elements/Button/ButtonConsepDistractering";
import CardProduct from "../components/Fragments/CardProduct";
import { useState, useEffect, useRef } from "react";
import { getProducts } from "../products.services";



const email = localStorage.getItem("email");



const ProductPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setCart(
            JSON.parse(localStorage.getItem("cart")) || []    
        );
    }, [] // ini untuk memanggil api atau dependency
    )

    // useRef
    const cartRef = useRef(
        JSON.parse(localStorage.getItem("cart")) || [],
    );

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products])

    const HandleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }

    const handleToCartRef = (id) => {
        cartRef.current = [...cartRef.current, {id, qty: 1}];
        localStorage.setItem("cart", JSON.stringify(cartRef.current));
    }

    // penggunaan useRef sebagai dom
    const totalRef = useRef(null);
    console.log(totalRef);

    useEffect(() => {
        if(cart.length > 0){
            totalRef.current.style.display = "table-row";
        } else {
            totalRef.current.style.display = "none";
        }
    }, [cart]);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 font-['Poppins']">
                {email}
                <ButtonDistractering backgroundColor="bg-black hover:bg-slate-800 ml-5" onClick={HandleLogout}>Logout</ButtonDistractering>
            </div>
            <div className="flex justify-center py-5 px-3 font-['Poppins']">
                <div className="w-4/6 flex flex-wrap gap-1">
                    {products.length > 0 && products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body
                                title={product.title}
                            >
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer
                                price={product.price}
                                id={product.id}
                                handleAddToCart={handleAddToCart}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5">
                        Cart
                    </h1>
                    <table className="w-full text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <th>
                                Product
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Total
                            </th>
                        </thead>
                        <tbody>
                            {products.length > 0 &&cart.map((item) => {
                                const produk = products.find((product) => product.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            {produk.title.substring(0, 10)}...
                                        </td>
                                        <td>
                                            {produk.price.toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}
                                        </td>
                                        <td>
                                            {item.qty}
                                        </td>
                                        <td>
                                            {(produk.price * item.qty).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr className="font-bold" ref={totalRef}>
                                <td colSpan={3}>
                                    Total
                                </td>
                                <td>{(totalPrice).toLocaleString('id-ID', { style: 'currency', currency: 'USD' })}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ProductPage;