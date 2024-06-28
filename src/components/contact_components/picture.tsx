import React from 'react';

const Picture: React.FC = () => {
    return (
        <div style={{ 
            backgroundImage: 'url("/assets/contact_img1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '500px', 
            borderBottom: '2px solid white',
        }}>
        </div>
    );
}

export default Picture;