import React, { useEffect, useState } from "react";
import axios from "axios"
import "../common-products-css/commonProducts.css"

const token = localStorage.getItem("token")

const MyOrders = () => {

    const [myOrdersData, setMyOrdersData] = useState([])
    const orders = async () => {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/orders/myOrders`, { headers: { "Authorization": `Bearer ${token}` } })
        const data = response.data
        setMyOrdersData(data);
    }
    useEffect(() => {
        orders();
    }, [])

    return (
        <div className="parent-div">
            <h2>My orders</h2>
            {myOrdersData.map((details, index) => {
                return (
                    <div className="container-of-page">
                        {/* // <h2>New Arrival {index + 1}</h2> */}


                        <div className="product-card">
                            <div className="product-image">
                                <img src={details.product.image} alt="product image"></img>
                            </div>
                            <div className="product-details">
                                <h3>{details.product.bookName}</h3>
                                <h4>{details.product.author}</h4>
                                <div className="products-price">
                                    <span className="product-discountPrice">Rs.{details.product.price}</span>
                                    <span className="product-price">{details.product.cutPrice}</span>
                                </div>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>

    )
}


export default MyOrders;