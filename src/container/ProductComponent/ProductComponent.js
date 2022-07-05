import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap"
import "./ProductComponent.css"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    // const { id, title } = products[0];
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
           
                <div className='four column wide' key={id}>
                    <Link to={`/product/${id}`} >
                        <div className='ui link cards'>
                            <div className='card'>
                                <div className='image product_image'>
                                    <img src={image} alt={title} />
                                </div>
                                <div className='content'>
                                    <div className='header'>{title}</div>
                                    <div className='meta price'>$ {price}</div>
                                    <div className='meta'>{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            
        )
    })

    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent
/*
<div className='four column wide' key={id}>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'>
                            <img src={image} alt={title} />
                        </div>
                        <div className='content'>
                            <div className='header'>{title}</div>
                            <div className='meta price'>$ {price}</div>
                            <div className='meta'>{category}</div>
                        </div>
                    </div>
                </div>
            </div>
*/

/*   <Row xs={1} md={2} className="g-4"  key={product.id}>
            <Col>
                <Card>
                    <Card.Img variant="top" src= {image} alt = {title} />
                    <Card.Body>
                        <Card.Title> {title} </Card.Title>
                        <Card.Text>
                            {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
</Row>


 <Container>
                <Row xs={1} md={2} className="g-4" key={product.id}>
                <Col xs={5}>
                    <Card>
                        <Card.Img variant="top" src={image} alt={title} />
                        <Card.Body>
                            <Card.Title> {title} </Card.Title>
                            <Card.Text>
                                {price}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
            
            
            
            
             <div className="main__container">
                <div className="main__container-behind">
                    <div className="main__container-heading">
                        <h6 className="main__container-heading-h6"> {title} </h6>
                        <h6 className="main__container-heading-h6-like section__like"> {price} </h6>
                    </div>
                    <div className="main__container__img">
                        <img src= {image} alt={title} className="main__container__img-img" />
                    </div>
                </div>
            </div>
            
            */