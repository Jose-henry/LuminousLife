import React from 'react';

const Picture: React.FC = () => {
    return (
        <div>
            <div style={{ 
            backgroundImage: 'url("/assets/office2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '500px', 
            borderBottom: '2px solid white',
            marginTop: '58px',
        }}>
        </div>
        </div>
    );
}

export default Picture;
