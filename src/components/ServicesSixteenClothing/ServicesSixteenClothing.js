import React from "react";
import { withRouter,Link } from 'react-router-dom';


const query = `
{
  servicesCollection(order:[
    sys_firstPublishedAt_ASC
  ]){
    items{
      title,
      serviceIcon,
      buttonText,
      summary,
      description{
        json
      },
      image{
        title,
        url
      }
    }
  }
}
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_ACCESS_TOKEN } = process.env

class ServicesSixteenClothing extends React.Component {

  state = {
    sixteenClothingServices: []
  }

  componentDidMount() {
    window.fetch(
      `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${REACT_APP_CDA_ACCESS_TOKEN}`
        },
        body: JSON.stringify({ query }),
      }
    ).then(res => res.json())
      .then(({ data }) => {
        console.log(data);
        this.setState({
          sixteenClothingServices: data.servicesCollection.items
        });
        console.log(this.state.sixteenClothingServices);
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.props);
    return (
      <div className="services">
        <div className="container">
          <div className="row">
            {
              this.state.sixteenClothingServices.map((service, index) => {
                return(
                <div key={index} className="col-md-4">
                  <div className="service-item">
                    <div className="icon">
                      <i className={service.serviceIcon}></i>
                    </div>
                    <div className="down-content">
                      <h4>{service.title}</h4>
                      <p>{service.summary}</p>
                        <Link className="filled-button" to={{
                          pathname: `services/${service.title}`,
                          service: service
                        }}>
                          {service.buttonText}
                        </Link>        
                    </div>
                  </div>
                </div>
                );
              })
            }
          </div>
        </div>
      </div>


    );
  }
}

export default withRouter(ServicesSixteenClothing);
