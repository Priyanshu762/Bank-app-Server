import React, { useState } from 'react'
import { deposite } from '../services/operations/TransactionAPI'

const Deposite = () => {

  const [formData, setFormData] = useState({
    type: "Deposite",
    amount : "",
    accountNumber : ""
    
  })

  const { type, amount, accountNumber} = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e)=> {
      e.preventDefault()
      const response = await deposite(type,amount,accountNumber)
      console.log(response)

      setFormData({
        type: "Deposite",
        amount : "",
        accountNumber : ""
      })
  }
  return (
    <div className="flex items-center justify-center h-[600px]  w-[400px]">
  <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full max-w-md p-8 space-y-6 bg-white border-2 border-gray-300 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-700">Deposit Form</h2>
    <div className="w-full">
      <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-600">Enter amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={handleOnChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter amount you want to deposit"
      />
    </div>
    <div className="w-full">
      <label htmlFor="accountNumber" className="block mb-2 text-sm font-medium text-gray-600">Enter account number:</label>
      <input
        type="number"
        id="accountNumber"
        name="accountNumber"
        value={accountNumber}
        onChange={handleOnChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter account number"
      />
    </div>
    <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">Deposit</button>
  </form>
</div>

  )
}

export default Deposite