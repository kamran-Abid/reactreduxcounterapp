import './App.css';
// import Button from 'bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {decNumber, incNumber} from './actions/action';

function App() {
  const myState = useSelector(state => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className="heading">Increment / Decrement Counter</h1>
      <h4 className="heading2">Using React Redux</h4>
      <div className='quantity'>
        <button className='quantity_sign minus' title='decrement' onClick={() => dispatch(decNumber(3))}>
          <span>-</span>
        </button>
        <input name='quantity' type='text' className="quantity_input" value={myState} />
        <button className='quantity_sign plus' title='increment' onClick={() => dispatch(incNumber(5))}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default App;
