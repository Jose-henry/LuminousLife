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
            <Image src="/assets/office2.jpg" alt="Office" quality={85} fill style={{objectFit: 'cover', objectPosition: 'center' }}></Image>
        </div>
        </div>
    );
}

export default Picture;
