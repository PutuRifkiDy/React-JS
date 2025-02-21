import ButtonDistractering from "../components/Elements/Button/ButtonConsepDistractering";
import CardProduct from "../components/Fragments/CardProduct";
const ProductPage = () => {
    return (
        <div className="flex justify-center py-5 gap-5">
            <CardProduct>
                <CardProduct.Header image="assets/shoes-2.png" />
                <CardProduct.Body
                    title="Sepatu Baru"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus accusantium veniam, odio architecto voluptatem praesentium saepe quaerat eius tempore minus consectetur excepturi hic pariatur aperiam. Sint esse excepturi nostrum.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000"/>
            </CardProduct>

            <CardProduct>
                <CardProduct.Header image="assets/shoes-2.png" />
                <CardProduct.Body
                    title="Sepatu Baru"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus accusantium veniam, odio architecto voluptatem praesentium saepe quaerat eius tempore minus consectetur excepturi hic pariatur aperiam. Sint esse excepturi nostrum.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000"/>
            </CardProduct>
            
            <CardProduct>
                <CardProduct.Header image="assets/shoes-2.png" />
                <CardProduct.Body
                    title="Sepatu Baru"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus accusantium veniam, odio architecto voluptatem praesentium saepe quaerat eius tempore minus consectetur excepturi hic pariatur aperiam. Sint esse excepturi nostrum.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000"/>
            </CardProduct>
        </div>
    );
}

export default ProductPage;