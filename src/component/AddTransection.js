import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddTransection = () => {
  const {addTransaction} =useContext(GlobalContext);

  let [text,setText]=useState();
  let [amount,setAmount]=useState();

  function onSubmit(e){

    e.preventDefault();

    const newTransaction={
      id:Math.floor(Math.random()*100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }
  return (
    <>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input  required type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input required type="number" value={amount} onChange={(m)=>setAmount(m.target.value)} placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
    </>
  )
}

export default AddTransection