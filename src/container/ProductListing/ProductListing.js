import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import ProductComponent from '../../container/ProductComponent/ProductComponent'
import { setProducts } from "../../redux/actions/productActions"
import axios from 'axios';
import "./ProductListing.css"

const ProductListing = () => {

    const [loader, setLoader] = useState(false)
    const [errorHandling, setErrorHandling] = useState(false)
    const products = useSelector((state) => state)
    const dispatch = useDispatch()



    useEffect(() => {
        const fetchProducts = async () => {
            setLoader(true)
            const response = await axios.get("https://fakestoreapi.com/products")
                .catch((err) => {
                    console.log("err", err)
                    setErrorHandling(true)
                })
                setLoader(false)
            dispatch(setProducts(response.data))
        }
        fetchProducts()
    }, [dispatch])
    console.log("Products ", products)




    return (
        <>

            {
                errorHandling?"Errror" : loader ? "loading" :  <div>


                    <div className='gridd'>
                        <ProductComponent />
                    </div>


                </div>
            }

        </>
    )
}

export default ProductListing