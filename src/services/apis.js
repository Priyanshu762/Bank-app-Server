const REACT_APP_BASE_URL = "http://localhost:4000/api/v1";

export const transactionEndpoints = {
        DEPOSITE_API : REACT_APP_BASE_URL + "/transaction/deposit",
        WITHDRAW_API: REACT_APP_BASE_URL + "/transaction/withdraw",
        HISTORY_API: REACT_APP_BASE_URL + "/transaction/allTransaction",
}