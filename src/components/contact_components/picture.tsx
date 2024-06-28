"use client";
import React from 'react';
import Typewriter from 'typewriter-effect';

const Picture: React.FC = () => {
    return (
        <div>
            <div style={{ 
            backgroundImage: 'url("/assets/contact_img1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '500px', 
            borderBottom: '2px solid white',
            position: 'relative',
        }}>
        </div>
        <p className='absolute bottom-[200px] left-5 text-[#622D25] opacity-[40%] text-[20px] font-bold'>
        <Typewriter
            options={{
                strings: ['Lighting Up the Dark Places!!!'],
                autoStart: true,
                loop: true,
            }}
            />
        </p>
        </div>
    );
}

export default Picture;
