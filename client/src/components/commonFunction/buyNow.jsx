import React from "react";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const token = localStorage.getItem("token");
const BuyNow = async (productId) => {

    try {
        const response = await axios.post(`${process.env.REACT_APP_URL}/api/orders/placeOrder?productId=${productId}`, {}, { headers: { "Authorization": `Bearer ${token}` } })

        toast.success("Successfully Placed order");

    } catch (error) {

        toast.error("error occured in adding product")
    }
}
export default BuyNow