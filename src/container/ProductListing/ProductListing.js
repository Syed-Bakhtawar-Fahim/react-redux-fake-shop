import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ProductComponent from '../../container/ProductComponent/ProductComponent'
import { setProducts } from "../../redux/actions/productActions"
import axios from 'axios';
import "./ProductListing.css"

const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("err", err)
            })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products ", products)




    return (
        <>
            <div>


                <div className='gridd'>
                    <ProductComponent />
                </div>


            </div>
        </>
    )
}

export default ProductListing