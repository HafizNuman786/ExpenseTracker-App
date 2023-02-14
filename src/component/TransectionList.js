import React from 'react'
import Transection from './Transection'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const TransectionList = () => {
  const {transections} = useContext(GlobalContext);
  
  return (
    <>
    <h3>History</h3>
    <ul className="list">
      {transections.map(transections =>(<Transection  key={transections.id} transections={transections}/>))}
    </ul>
    </>
  )
}

export default TransectionList