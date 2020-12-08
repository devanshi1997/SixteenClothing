import React from 'react';
import Accordian from '../Accordion/Accordion';

const SendUsMessageContainer = () => {
    return (
        <div className="send-message">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Send us a Message</h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        {/* Form Goes Here */}
                    </div>
                    <div className="col-md-4">
                        <Accordian/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SendUsMessageContainer;