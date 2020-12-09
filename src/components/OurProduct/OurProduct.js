import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import { ProdContext } from '../../context/ProductContext'

export default class OurProductShubh extends Component {
    static contextType = ProdContext;

    render() {
        const {products} = this.context;
        console.log(this.context);
        console.log("value of context product is");
        console.log(products);
        return (
// <div></div>
            <div className="latest-products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Latest Products</h2>
                                <Link to='/products'>view all products <i className="fa fa-angle-right"></i></Link>
                                {/* <a href="products.html">view all products <i className="fa fa-angle-right"></i></a> */}
                            </div>
                        </div>
                        {
                            products.map((product,i) => {
                                return (
                                <>
                                <div className="col-md-4">
                                <div className="product-item"  key={i}>
                                    <a href="#"><img src={product.productPhoto.url} alt={product.productPhoto.title}/></a>
                                    <div className="down-content">
                                    <Link to={{
                                  pathname: `products/${product.title}`,
                                  product: product
                                }}>
                                  <h4>{product.title}</h4>
                                {/* <Link to='/ProductDetails/${product.title}'><h4>{product.title}</h4></Link> */}
                                           
                                      </Link>
                                 
                                    <h6>${product.price}</h6>
                                    <p>{product.description}</p>
                                    <ul className="stars">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                    <span>Reviews ({product.reviews})</span>
                                    </div>
                                </div>
                                </div>
                                </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}
