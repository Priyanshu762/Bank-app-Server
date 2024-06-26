const Transaction = require('../models/Transaction')
exports.deposit = async (req,res)=> {
    try {
        const {type, amount, accountNumber} = req.body;
    if ( !type || !amount || !accountNumber){
        res.status(403).json({
            success:false,
            message:"All fields are required",
        })
    }

    const transactionNew = await Transaction.create({
        type,
        amount,
        accountNumber,
    })

    return res.status(200).json({
        success:true,
        message:"Transaction Done successfully",
        transactionNew,
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Transaction can not be done successfully"

        })
    }
    
}

exports.withdraw = async (req,res)=> {
    try {
        const {type, amount, accountNumber} = req.body;
    if ( !type || !amount || !accountNumber){
        res.status(403).json({
            success:false,
            message:"All fields are required",
        })
    }

    const transactionNew = await Transaction.create({
        type,
        amount,
        accountNumber,
    })

    return res.status(200).json({
        success:true,
        message:"Transaction Done successfully",
        transactionNew,
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Transaction can not be done successfully"

        })
    }
    
}

exports.getAllTransaction = async (req,res)=> {
    try {

    const allTransaction = await Transaction.find({}).sort({ createdAt: -1 }).exec()

    return res.status(200).json({
        success:true,
        message:"Transaction Done successfully",
        allTransaction,
    })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Transaction can not be done successfully"

        })
    }
}