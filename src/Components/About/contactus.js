import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import FB from '../../siteContent/socials/FB.png'
import IG from '../../siteContent/socials/IG.png'
import { ContactH1, ContactUsDiv, ContactUsUl, ContactDiv, ContactP, ContactInfo, ContactLinks, ContactLi, ContactImg } from './contactusStyle';

const ContactUs = () => {

    

    return (
        <ContactUsDiv id="contactus">
            <ContactDiv>
                <ContactH1>Contact Us</ContactH1>
            </ContactDiv>
            <ContactInfo>
                Reach out to us through any of our Social Medias!
            </ContactInfo>
            <ContactLinks>
                <ContactUsUl>
                    <ContactLi><a href='https://www.facebook.com/pirocphiotas' target="_blank"><ContactImg src={FB}></ContactImg></a></ContactLi>
                    <ContactLi><a href='https://www.instagram.com/rochesterphiotas/' target="_blank"><ContactImg src={IG}></ContactImg></a></ContactLi>
                </ContactUsUl>
            </ContactLinks>
        </ContactUsDiv>
    );
};

export default ContactUs;