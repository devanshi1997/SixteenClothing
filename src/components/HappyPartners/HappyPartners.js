import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import ScriptTag  from 'react-script-tag'

const { REACT_APP_SPACE_ID, REACT_APP_CDA_ACCESS_TOKEN } = process.env;
const query = `{
    companyRelationCollection(order: name_ASC, where: {category_contains: "partner"}) {
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

class HappyPartners extends Component {
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
            console.log(response);

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
            <div class="happy-clients">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-heading">
              <h2>Happy Partners</h2>
            </div>
          </div>
          <div class="col-md-12">
            <div class="owl-clients owl-carousel">
              <div class="client-item">
                <img src="../HappyPartners/p4.jpg" alt="1"/>
              </div>
              
              <div class="client-item">
                <img src="../HappyPartners/p4.jpg" alt="2"/>
              </div>
              
              <div class="client-item">
                <img src="../HappyPartners/p4.jpg" alt="3"/>
              </div>
              
              <div class="client-item">
                <img src="../HappyPartners/p4.jpg" alt="4"/>
              </div>
              
              <div class="client-item">
                <img src="../HappyPartners/p4.jpg" alt="5"/>
              </div>
              
              <div class="client-item">
                <img src="../HappyPartners/p4.jpg" alt="6"/>
              </div>
            </div>`
          </div>
        </div>
      </div>
    </div>          
              
        }
        </>)
    }
}

export default HappyPartners