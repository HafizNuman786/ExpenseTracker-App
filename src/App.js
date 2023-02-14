import './App.css';
import {Header} from './component/header'
import Balance from './component/Balance'
import IncomeExpenses from './component/IncomeExpenses'
import TransectionList from './component/TransectionList'
import AddTransection from './component/AddTransection'
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div class="container">
      <Balance/>
    </div>
    <IncomeExpenses/>
    <TransectionList/>
    <AddTransection/>
    
    
    </GlobalProvider>
    
  );
}

export default App;
