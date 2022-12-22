
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "./actions/cartAction";


const Cart = ()=>{
    const state = useSelector((state)=>state);
    console.log("store", state)
    const dispatch = useDispatch();
    return(
        <div className="cart">
            <h2>Number of items in Cart: {state.numOfItems}</h2>
            <button onClick={()=>{dispatch(addItem())}} className="bg-emerald-400 p-2 rounded-lg m-2">Add Item to Cart</button>
            <button onClick={()=>{dispatch(deleteItem())}} className="bg-red-500 p-2 rounded-lg m-2">Remove Item from Cart</button>
        </div>
    )
}

export default Cart;