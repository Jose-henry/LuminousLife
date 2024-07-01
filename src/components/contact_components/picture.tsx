import Image from 'next/image';
import React from 'react';

const Picture: React.FC = () => {
    return (
        <div>
            <div style={{ 
            position: 'relative',
            width: '100%',
            height: '500px', 
            borderBottom: '2px solid white',
            marginTop: '58px',
        }}>
            <Image src="/assets/office2.jpg" alt="Office" fill style={{objectFit: 'cover'}}></Image>
        </div>
        </div>
    );
}

export default Picture;
