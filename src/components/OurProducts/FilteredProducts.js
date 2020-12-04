import React, { Component } from 'react'

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
        category
      }
    }
  }
  `;

class FilteredProducts extends Component {
    constructor(){
        super();

        this.state = {
            allProducts: [],
            loading: true,
            error: null
        };
    }
    filterMyProducts = (e) =>{
        e.preventDefault();
        //filteredourProducts();
        // filterProds();
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
            //console.log(response);

            const {data} = response;
            this.setState({
                loading: false,
                allProducts: data ? data.productCollection.items : []
            });
        })
        .catch(error => {
            this.setState({
                loading: false,
                error: error.message
            });
        })
    }
    
    render(){
        const {allProducts} = this.state;
        return(
        <>
        {
            <div className="products">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="filters">
                      {/* <button onClick={this.filterMyProducts}>Hit me</button> */}
                    <ul>
                        <li className="active" data-filter="*">All Products</li>
                        <li data-filter=".featured">Featured</li>
                        <li data-filter=".flashDeals">Flash Deals</li>
                        <li data-filter=".lastMinute">Last Minute</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="filters-content">
                      <div className="row grid">     
                        {
                            allProducts.map((product,i) => {
                                return (
                                <>
                                
                                <div className={'col-lg-4 col-md-4 all ' +product.category}>
                                    <div className="product-item">
                                    <a href="#"><img src={product.productPhoto.url} alt={product.productPhoto.title}/></a>
                                    <div className="down-content">
                                        <a href="#"><h4>{product.title}</h4></a>
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
                    {/* <div className="col-md-12">
                        <ul className="pages">
                            <li><a href="#">1</a></li>
                            <li className="active"><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                         </ul>
                    </div> */}
                </div>
            </div>
            </div>
        }
        </>)
    }
}


export default FilteredProducts