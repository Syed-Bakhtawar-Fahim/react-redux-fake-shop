import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts } from '../redux/actions/productActions'


export const ProductDetails = () => {

  const product = useSelector((state) => state.product)
  const {image, price, title, category, description} = product
  const { productId } = useParams()
  const dispatch = useDispatch()
  console.log(product)
  console.log(productId)

  

  useEffect(() => {
    const fetchProductsDetails = async () => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
          console.log("err", err)
        })
  
      dispatch(selectedProducts(response.data))
  
  
    }
    fetchProductsDetails()
    // if (productId && productId !== "") fetchProductsDetails()

  }, [productId,dispatch])



  return (
    <>
      <div className='ui grid container'>
        {Object.keys(product).length === 0 ? (
          <div>...Looding</div>
        ) : (
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui vertical divider'>AND</div>
              <div className='middle aligned now'>
                <div className='column lp'>
                  <img src= {image} alt="hey"/>
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h2>
                    <p className='ui teal tag label'>${price}</p>
                  </h2>
                  <h3 className='ui brown block header'>{category}</h3>
                  <p>{description}</p>
                  <div className = "ui vertical animated button" tabIndex = "0">
                    <div className = "hidden content">
                      <i className='shop icon' ></i>
                    </div>
                    <div className='visible content'>Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      )

        }
      </div>
    </>
  )
}

//  "bootstrap": "^5.1.3",