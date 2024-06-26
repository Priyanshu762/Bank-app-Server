const express = require("express");
const { deposit, withdraw, getAllTransaction } = require("../controller/Transaction");

const router = express.Router();

router.post('/deposit', deposit )
router.post('/withdraw', withdraw )
router.get('/allTransaction', getAllTransaction)


module.exports = router ;