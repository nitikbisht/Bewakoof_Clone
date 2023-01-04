import React from 'react';
import Carousel from './Carousel';
function Mansec(props) {
    return (
        <div>
        <Carousel
        show={3}
    >
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/Homepage-1X1-WinterJackets-men-1672754392.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-indofusion-men-1672754393.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/winterful-1x1-m-2-1672135659.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/Revised-1672676580.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/printed-swtshrts-hoodies-1x1-m-1672822031.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        
    </Carousel>
        </div>
    );
}

export default Mansec;