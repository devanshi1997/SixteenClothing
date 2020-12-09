import React, { Component } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';


class ServiceDetail extends Component{

    state={
        service: [],
    }

    componentDidMount(){
        let service = this.props.location.service;

        this.setState({
            service: service
        })
       
        console.log(service);
    }

    render(){

        let description;

        if (this.state.service.description)
            description = this.state.service.description.json;
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
                          {/* <h2 className="service-detail-title">{this.state.title}</h2> */}
                          <h2 className="service-detail-title">{this.state.service.title}</h2>
                        </div>
                        <br/>
                            {       
                    
                                this.state.service.image && 
                                <img className="service-detail-image" src={ this.state.service.image.url} alt={this.state.service.image.title} />   
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