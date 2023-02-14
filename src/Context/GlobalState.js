import react,{ createContext,useReducer } from "react"
import AppReducer  from './AppReducer'


//initial state
const initialState = {
  transections:[]
}


//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children})=>{
  const [state,dispatch] = useReducer(AppReducer,initialState)
  
  //Action delete

  function deleteTransaction(id){
    dispatch({
      type:"DELETE_TRANSACTION",
      payload:id
    });
  }

  //add transaction action 

  function addTransaction(transection){
    dispatch({
      type:"ADD_TRANSACTION",
      payload:transection
    });
  }

  function EditTransaction(transection){
    dispatch({
      type:"EDIT_TRANSACTION",
      payload:transection,
    });
  }

  return(<GlobalContext.Provider value={{
    transections: state.transections,
    deleteTransaction,
    addTransaction,
    EditTransaction
  }}>

    {children}
  </GlobalContext.Provider>)
}