import logo from './logo.svg';
import './App.css';
import Deposite from './components/Deposite';
import Withdraw from './components/Withdraw';
import TransactionHistory from './components/TransactionHistory';
import HistoryCard from './components/HistoryCard';

function App() {
  return (
    <div className="App w-full">
    <div className='flex w-full justify-evenly'>
      <Deposite/>
      <Withdraw/>
    </div>
    <TransactionHistory/>
      
    </div>
  );
}

export default App;
