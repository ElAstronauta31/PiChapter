import React from 'react';
import Body from './body/body';
import Highlight from './highlight/highlight';
import Photos from './photos/photos';
import { PhotosData } from './photos/photosData';

const Home = () => {
    return (
        <div>
            <Photos />
            <Body />
            <Highlight />
            
        </div>
    );
};

export default Home;