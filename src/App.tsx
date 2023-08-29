import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const {count} = useAppSelector((state)=>state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-10">
      <button onClick={()=>dispatch(increment())}>
        increment
      </button>
      <div className="mx-10">{count}</div>
      <button onClick={()=>dispatch(decrement())}>
        decrement
      </button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>
        increment by 5
      </button>
    </div>
  )
}

export default App
