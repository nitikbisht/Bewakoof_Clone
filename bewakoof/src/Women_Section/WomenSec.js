import React from 'react';
import Carousel from './Wcarousel';
function Womensec(props) {
    return (
        <div>
        <Carousel
        show={3}
    >
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-indofusion-women-1672755099.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/Homepage-1X1-WinterJackets-women-1672755098.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/oversized-women-tee-1671713222.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/printed-swtshrts-hoodies-1x1-w-1672822031.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        <div>
            <div style={{padding: 8}}>
                <img src="https://images.bewakoof.com/uploads/grid/app/winterful-1x1-w-2-1672135659.jpg" alt="placeholder" style={{width: '100%'}} />
            </div>
        </div>
        
    </Carousel>
        </div>
    );
}

export default Womensec;