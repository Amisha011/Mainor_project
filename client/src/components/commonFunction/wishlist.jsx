import React from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const token=localStorage.getItem("token")
const wishList =async(productId)=>{
    try {
        const response=await axios.post(`${process.env.REACT_APP_URL}/api/wishlist/addToWishlist?productId=${productId}`, {}, { headers: { "Authorization": `Bearer ${token}` } })

        toast.success("Successfully added to wishList");
    } catch (error) {

        toast.error("Error occured in adding to wishlist");
    }
}
export default wishList;