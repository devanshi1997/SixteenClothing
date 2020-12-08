import React, { Component } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';


class ServiceDetail extends Component{

    state={
        title: '',
        img: '', 
        des: '',
    }

    componentDidMount(){
        let service = this.props.location.service;
       
        localStorage.setItem('description', JSON.stringify(service.description.json));
        localStorage.setItem('image', JSON.stringify(service.image));
        localStorage.setItem('title', JSON.stringify(service.title));

        this.setState({
            img: JSON.parse(localStorage.getItem('image')),
            des: JSON.parse(localStorage.getItem('description')),
            title: JSON.parse(localStorage.getItem('title'))
        })
       
        console.log(service);
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
        let serviceSummary = parse(richTextSummary);

        return(
                <>
                <div className="container">
                   <div className="row">
                      <div className="col-md-12">
                            
                        <div className="service-detail service-item">
                          <h2 className="service-detail-title">{this.state.title}</h2>
                        </div>
                        <br/>
                            {       
                                this.state.img && 
                                <img className="service-detail-image" src={ this.state.img.url} alt={this.state.img.title} />   
                            }
                            <br/>
                            <br/>
                        <section className="service-detail-description">
                           <article>
                               {serviceSummary}
                            </article> 
                        </section>
                      </div>
                      </div>
                    </div>
                    
                </>
        )
    }
}

export default ServiceDetail;
