import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addNumber } from "../slices/counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            
            <button onClick={() => dispatch(increment())}>
                Incrémenter
            </button>
            
            <button onClick={() => dispatch(decrement())}>
                Décrémenter
            </button>
            
            <button onClick={() => dispatch(addNumber(10))}>
                Ajouter 10
            </button>
            </div>
        );
    }