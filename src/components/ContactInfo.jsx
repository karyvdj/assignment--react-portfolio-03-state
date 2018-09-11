import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contactinfo">
                <a className="contactinfo__single" target="_blank">
                    <i className="ion-ios-location-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">Austin, TX USA</span>
                </a>
                <a href="#" className="contactinfo__single" target="_blank">
                    <i className="ion-ios-email-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">mariasantiago1989@gmail.com</span>
                </a>
                <a href="#" className="contactinfo__single" target="_blank">
                    <i className="ion-social-github-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">devmaria</span>
                </a>
                <a href="#" className="contactinfo__single" target="_blank">
                    <i className="ion-social-linkedin-outline contactinfo__icon"></i>
                    <span className="contactinfo__title">maria-x-santi</span>
                </a>
            </div>
        )  
    }
}

export default ContactInfo