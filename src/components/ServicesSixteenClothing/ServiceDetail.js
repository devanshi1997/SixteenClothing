import React, { Component } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import parse from 'html-react-parser';


class ServiceDetail extends Component{

    state={
        service: [],
        des: ''
    }

    componentDidMount(){
        let service = this.props.location.service;
        // console.log(service.description.json);
        localStorage.setItem('description', JSON.stringify(service.description.json));
        this.setState({
            ...this.state.service,
            service: service,
            des: JSON.parse(localStorage.getItem('description'))
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
                          <h2 className="service-detail-title">{this.state.service.title}</h2>
                        </div>
                        <br/>
                            {
                                    this.state.service.image && 
                                    <img className="service-detail-image" src={this.state.service.image.url} alt={this.state.service.title} />
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