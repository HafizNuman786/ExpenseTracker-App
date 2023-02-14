import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Transection = ({transections}) => {
  const {deleteTransaction} =useContext(GlobalContext);
  const {EditTransaction} =useContext(GlobalContext);
  let sign= transections.amount < 0 ? "-" : "+"

  function updateHistory(){

    let updateDiscription=prompt("enter update value");
    let updateAmount=+prompt("enter updateamount value");

    const UpdateTransaction = {
      text:updateDiscription,
      amount:updateAmount,
      id:transections.id
  }

  EditTransaction(UpdateTransaction);

  }
  return (
    <>
    <li className={transections.amount < 0 ? "minus" : "plus"}>
    {transections.text} <span>{sign}${Math.abs(transections.amount)}</span><button  onClick={()=> deleteTransaction(transections.id)} className="delete-btn">x</button>

  <button  onClick={updateHistory} className={transections.amount < 0 ? "minus1" : "plus1"}>Edit</button>
  </li> 

  </>
  )
}

export default Transection