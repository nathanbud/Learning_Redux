import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './redux/actions'



function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLoggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">

        <h3>Counter: {counter}</h3>
        <button onClick={() => dispatch(increment())}>+</button>  <button onClick={() => dispatch(decrement())}>-</button>
        <br/>
        { isLogged ? <h5>User has log in</h5> : <h5>User is not log in</h5>}
      </header>
    </div>
  );
}

export default App;
