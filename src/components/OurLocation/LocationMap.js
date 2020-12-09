import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const { REACT_APP_SPACE_ID, REACT_APP_CDA_ACCESS_TOKEN } = process.env;
const query = `{
    contentTypeLocationCollection{
      items{
        heading
        map{
          lat
          lon
        }
        title
        description
      }
    }
  }
  `;

class LocationMap extends Component {
    constructor() {
        super();

        this.state = {
            location: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        window.fetch(
            `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${REACT_APP_CDA_ACCESS_TOKEN}`
                },
                body: JSON.stringify({
                    query
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                console.log(response);

                const { data } = response;
                this.setState({
                    loading: false,
                    location: data ? data.contentTypeLocationCollection.items : []
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error.message
                });
            })
    }

    render() {



        const { location } = this.state;

        return (
            <>
                {
                    <div className="find-us">
                        <div className="container">
                            <div className="row">

                                {
                                    location.map(locations => {

                                        const lat = locations.map.lat;
                                        const long = locations.map.lon;
                                        var querystring = 'q='+lat+','+long+'&z=17&output=embed';
                                        let _url = `https://maps.google.com/maps?`+querystring;
                                        return (
                                            <>

                                               
                                                <div className="col-md-12">
                                                    <div className="section-heading">
                                                        <h2>{locations.heading}</h2>
                                                    </div>


                                                </div>
                                                <div className="col-md-8">
                                                    <iframe frameBorder="0" width="730" height="337" src={_url} style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0">
                                                    </iframe>
                                                    

                                                </div>


                                                <div className="col-md-4">
                                                    <div className="left-content">
                                                        <h4>{locations.title}</h4>
                                                        <p>{locations.description}</p>

                                                        <ul className="social-icons">
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>



                                            </>



                                        );
                                    })
                                }

                            </div>
                        </div>
                    </div>
                }
            </>
        )



    }
}

export default LocationMap