import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const { REACT_APP_SPACE_ID, REACT_APP_CDA_ACCESS_TOKEN } = process.env;
const query = `{
    productCollection(order:sys_firstPublishedAt_ASC) {
      items {
        title
        description
        productPhoto {
          url
          title
        }
        price
        rating
        reviews
        details{
          json
        }
      }
    }
  }
  `;

class LatestProducts extends Component {
    constructor(){
        super();

        this.state = {
            products: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        window.fetch(
            `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
            {
                method: "POST",
                headers:{
                    "content-type":"application/json",
                    authorization: `Bearer ${REACT_APP_CDA_ACCESS_TOKEN}`
                },
                body: JSON.stringify({
                    query
                })
            }
        )
        .then(res => res.json())
        .then(response =>{
            console.log(response);

            const {data} = response;
            this.setState({
                loading: false,
                products: data ? data.productCollection.items : []
                
            });
            // console.log(this.state)
        })
        .catch(error => {
            this.setState({
                loading: false,
                error: error.message
            });
        })
    }
    render(){
        const {products} = this.state;
        console.log("productdata")
        console.log(products)
        return(
        <>
        {
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
                          pathname: `ProductDetails/${product.title}`,
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
        }
        </>)
    }
}

export default withRouter (LatestProducts)