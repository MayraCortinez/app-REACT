import React from 'react';
import Footer from './Footer';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';

const ContentWrapper = () => {
    return (
        <div id="content-wrapper" className="d-flex flex-column">		
        <div id="content">
        <TopBar/>
        <ContentRowTop/>
        </div>
       <Footer/>
    </div>
    );
}

export default ContentWrapper;
