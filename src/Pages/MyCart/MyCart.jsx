import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=> item.price + sum , 0)
    return (
        <div>
            <Helmet>
                <title>Imagine Studio | My Cart</title>
            </Helmet>
         <div className="uppercase">
         <h2 className="text-3xl ">Total Classes Added:{cart.length}</h2>
          <h2 className="text-3xl ">Total Classes Price:${total}</h2>
          <button className="btn btn-outline btn-success">Pay</button>
         </div>
        </div>
    );
};

export default MyCart;