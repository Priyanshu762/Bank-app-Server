import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { transactionEndpoints } from "../apis";

export const deposite = async (type, amount, accountNumber)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", transactionEndpoints.DEPOSITE_API, {
        type,
        amount,
        accountNumber,
      });
      console.log("DEPOSITE API RESPONSE............", response);
      if (!response?.data?.success) {
        throw new Error("Could Not Add Blog Details");
      }
      toast.success("DEPOSITE Successfully");
      result = response?.data?.data;
    } catch (error) {
      console.log("DEPOSITE API ERROR............", error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const withdraw = async (type, amount, accountNumber)=>{
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
      const response = await apiConnector("POST", transactionEndpoints.WITHDRAW_API, {
        type,
        amount,
        accountNumber,
      });
      console.log("DEPOSITE API RESPONSE............", response);
      if (!response?.data?.success) {
        throw new Error("Could Not Add Blog Details");
      }
      toast.success("DEPOSITE Successfully");
      result = response?.data?.data;
    } catch (error) {
      console.log("DEPOSITE API ERROR............", error);
      toast.error(error.response.data.message);
    }
    toast.dismiss(toastId);
    return result;
}

export const fetchAllTransaction = async () => {
    let result = []
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector(
        "GET",
        transactionEndpoints.HISTORY_API,
        null,
      )
      console.log("ALL Transaction API RESPONSE............", response)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Transaction")
      }
      result = response?.data?.allTransaction
    } catch (error) {
      console.log("ALL Transaction API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
  }