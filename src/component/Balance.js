import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { GlobalProvider } from '../Context/GlobalState'

const Balance = () => {

  const {transections} = useContext(GlobalContext);
  const amounts = transections.map(transections =>transections.amount);
  const total =amounts.reduce((acc,item)=> (acc += item),0).toFixed(2);
  return (
    <>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}

export default Balance