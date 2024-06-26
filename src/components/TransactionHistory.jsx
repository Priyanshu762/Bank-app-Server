import React, { useEffect, useState } from 'react'
import { fetchAllTransaction } from '../services/operations/TransactionAPI'
import HistoryCard from './HistoryCard'

const TransactionHistory = () => {

    const [allTransaction, setAllTransaction] = useState([])
    const getAllTransaction = async ()=> {
        const res = await fetchAllTransaction()
        console.log("ALL",res)
        setAllTransaction(res);
    }
    useEffect(()=>{
        getAllTransaction()
    },[])
  return (
    <div>
    <div className='mb-7 text-3xl font-semibold'>
        Transaction History
    </div>
    <div className='flex flex-wrap gap-7 mx-14 mb-20'>
       {
        allTransaction.map((transaction) =>
         (
            <HistoryCard key={transaction._id} transaction={transaction}/>
            
        ))
    } 
    </div>
    



    </div>
  )
}

export default TransactionHistory