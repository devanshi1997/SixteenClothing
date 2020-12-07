import React, { Component } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';


class ProductDetail extends Component{

    state={
        product: [],
        des: ''
    }


    componentDidMount(){
      
        let product = this.props.location.product;
        console.log("product details....",product);

        localStorage.setItem('details', JSON.stringify(product.details.json));

        this.setState({
            ...this.state.product,
            product: product,
            des: JSON.parse(localStorage.getItem('details'))
        })
        console.log("product Details",product);
    }
  
    render(){

        let description;

        if (this.state.des)
            description = this.state.des;
        else
            return (
                <p>No Description</p>
            )

        const rawRichTextField = description;
        let richTextSummary = documentToHtmlString(rawRichTextField);
        let productSummary = parse(richTextSummary);

        return(
            <>
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                        
                    <div className="productDetail">
                      <h1 className="productDetailTitle">{this.state.product.title}</h1>
                      <hr></hr>
                    </div>
                    <br/>
                        {
                                this.state.product.productPhoto && 
                                <img className="productDetailImage" src={this.state.product.productPhoto.url} alt={this.state.product.title} />
                        }
                        <br/>
                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="productPrice">
                    <h2>Price: ${this.state.product.price} </h2>
                   

                    </div>

                        </div>
                        <div className="col-md-6">
                        <div className="prod">
                    <div className="productReview">
                    <ul className="starContainer">
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                                <li><i className="fa fa-star"></i></li>
                    </ul>
                    </div>
                    </div>
                        </div>
                    </div>
                   
                    
                   
                   
                  
                    <section className="productDetailDescription">
                       <article>
                           {productSummary}
                        </article> 
                    </section>
                  </div>
                  </div>
                </div>
                
            </>
    )

}
}
export default ProductDetail