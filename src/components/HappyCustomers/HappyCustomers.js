import React, { Component } from 'react'
import ScriptTag  from 'react-script-tag'

const { REACT_APP_SPACE_ID, REACT_APP_CDA_ACCESS_TOKEN } = process.env;
const query = `{
    companyRelationCollection(order: name_ASC, where: {category_contains: "customer"}) {
      items {
        name
        profilePicture {
          title
          url
        }
      }
    }
  }
  `;

class HappyCustomers extends Component {
    constructor(){
        super();

        this.state = {
            partners: [],
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
            //console.log(response);

            const {data} = response;
            this.setState({
                loading: false,
                partners: data ? data.companyRelationCollection.items : []
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
        const {partners} = this.state;
        return(
        <>
        {
          <div>
          <ScriptTag isHydrating={true} type="text/javascript" src={process.env.PUBLIC_URL + 'assets/js/custom.js'}/>
            <div className="happy-clients">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>Happy Customers</h2>
                  </div>
                </div>
                <div className="col-md-12">
                <div className="owl-clients owl-carousel">    
                    {
                        partners.map((partner,i) => {
                            return (
                            <>
                                <div className="client-item">
                                <img
                                    src = {partner.profilePicture.url}
                                    alt = {partner.profilePicture.title}
                                />
                                <div className="team-member">
                                  <div className=" down-content">
                                  <h4>{partner.name}</h4></div>
                                </div>
                                </div>
                            </>
                            )
                        })
                    }
                </div>
                </div>
                </div>
            </div>
            </div>     
            </div>           
              
        }
        </>)
    }
}

export default HappyCustomers