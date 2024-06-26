import React from 'react'

const HistoryCard = ({transaction}) => {
  return (
    <div className="flex items-center justify-center  ">
  <div className="w-full max-w-md p-8 bg-white border-2 border-gray-300 rounded-lg shadow-md">
    <div className="flex justify-between p-4 bg-blue-100 rounded-lg">
    {transaction && transaction.type && <div className="text-lg font-medium text-gray-700">
      
        Type: <span className="font-bold text-blue-700">{transaction.type}</span>
      </div>}
      {transaction && transaction.amount && <div className="text-lg font-medium text-gray-700">
        Amount: <span className="font-bold text-green-700">{transaction.amount}</span>
      </div> }
      {transaction && transaction.accountNumber && <div className="text-lg font-medium text-gray-700">
        Account Number: <span className="font-bold text-red-700">{transaction.accountNumber}</span>
      </div>}
      
    </div>
  </div>
</div>

  )
}

export default HistoryCard