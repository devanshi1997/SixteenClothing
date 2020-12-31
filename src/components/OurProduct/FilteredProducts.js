import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ProdContext } from '../../context/ProductContext'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export default class FilteredProducts extends Component {
    static contextType = ProdContext;
    constructor() {
        super();

        this.state = {
            //allProducts: [],
            featured: [],
            flashDeals: [],
            lastMinute: [],
            loading: true,
            error: null
        };
    }

    render() {
        const { products } = this.context;
        //const { allProducts } = this.state;
        var {featured} = this.state;
        var {flashDeals} = this.state;
        var {lastMinute} = this.state;
        featured = []; flashDeals =[]; lastMinute= [];
        products.map((product, i) => {
            if (product.category == "featured") {
                featured.push(product);
            }
            if (product.category == "flashDeals") {
                flashDeals.push(product);
            }
            if (product.category == "lastMinute") {
                lastMinute.push(product);
            }
        })
        return (
            <>
                {
                    <div>
                        {/* <ScriptTag isHydrating={true} type="text/javascript" src={process.env.PUBLIC_URL + 'assets/js/custom.js'} />
                        <ScriptTag isHydrating={true} type="text/javascript" src={process.env.PUBLIC_URL + 'assets/js/isotope.js'} /> */}
                        <div className="products">
                            <div className="container">
                                <div className="row">
                                    <Tabs className="col-md-12">
                                        <TabList className="filters">
                                            <Tab>All Products</Tab>
                                            <Tab>Featured</Tab>
                                            <Tab>Flash Deals</Tab>
                                            <Tab>Last Minute</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <div className="col-md-12">
                                                <div className="filters-content">
                                                    <div className="row grid">
                                                        {
                                                            products.map((product, i) => {
                                                                return (
                                                                    <>

                                                                        <div className={'col-lg-4 col-md-4 all ' + product.category}>
                                                                            <div className="product-item">
                                                                                <Link to={{
                                                                                    pathname: `products/${product.title}`,
                                                                                    product: product
                                                                                }}>
                                                                                    <img src={product.productPhoto.url} alt={product.productPhoto.title} />
                                                                                </Link>
                                                                                <div className="down-content">
                                                                                    <Link to={{
                                                                                        pathname: `products/${product.title}`,
                                                                                        product: product
                                                                                    }}>
                                                                                        <h4>{product.title}</h4>
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
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="col-md-12">
                                                <div className="filters-content">
                                                    <div className="row grid">
                                                        {
                                                            featured.map((product, i) => {
                                                                return (
                                                                    <>

                                                                        <div className={'col-lg-4 col-md-4 all ' + product.category}>
                                                                            <div className="product-item">
                                                                                <Link to={{
                                                                                    pathname: `products/${product.title}`,
                                                                                    product: product
                                                                                }}>
                                                                                    <img src={product.productPhoto.url} alt={product.productPhoto.title} />
                                                                                </Link>
                                                                                <div className="down-content">
                                                                                    <Link to={{
                                                                                        pathname: `products/${product.title}`,
                                                                                        product: product
                                                                                    }}>
                                                                                        <h4>{product.title}</h4>
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
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="col-md-12">
                                                <div className="filters-content">
                                                    <div className="row grid">
                                                        {
                                                            flashDeals.map((product, i) => {
                                                                return (
                                                                    <>

                                                                        <div className={'col-lg-4 col-md-4 all ' + product.category}>
                                                                            <div className="product-item">
                                                                                <Link to={{
                                                                                    pathname: `products/${product.title}`,
                                                                                    product: product
                                                                                }}>
                                                                                    <img src={product.productPhoto.url} alt={product.productPhoto.title} />
                                                                                </Link>
                                                                                <div className="down-content">
                                                                                    <Link to={{
                                                                                        pathname: `products/${product.title}`,
                                                                                        product: product
                                                                                    }}>
                                                                                        <h4>{product.title}</h4>
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
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="col-md-12">
                                                <div className="filters-content">
                                                    <div className="row grid">
                                                        {
                                                            lastMinute.map((product, i) => {
                                                                return (
                                                                    <>

                                                                        <div className={'col-lg-4 col-md-4 all ' + product.category}>
                                                                            <div className="product-item">
                                                                                <Link to={{
                                                                                    pathname: `products/${product.title}`,
                                                                                    product: product
                                                                                }}>
                                                                                    <img src={product.productPhoto.url} alt={product.productPhoto.title} />
                                                                                </Link>
                                                                                <div className="down-content">
                                                                                    <Link to={{
                                                                                        pathname: `products/${product.title}`,
                                                                                        product: product
                                                                                    }}>
                                                                                        <h4>{product.title}</h4>
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
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                }
            </>)
    }
}
