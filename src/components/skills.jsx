import React from 'react';

const logos = [
    { src: '/linkedin_logo.jpg', color: '0,119,181', link: 'https://www.linkedin.com/in/qihao-lin/'}, // LinkedIn blue
    { src: '/github.jpg', color: '0,0,0', link: 'https://github.com/qihaolin2005'},
    { src: '/instagram-logo-colored.jpg', color: '255, 20, 147', link: 'https://www.instagram.com/qihoei/'},
    { src: '/resume-svg.svg', color: '0,200,0', link: '/Qihao_Lin_Resume.pdf'},    // Green
];

function Skills() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '2rem 0',
                flexWrap: 'wrap',
                gap: '2rem',
            }}
        >
            {logos.map((logo, index) => (
                <div key={index}>
                    <img
                        src={logo.src}
                        alt={`Logo ${index + 1}`}
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease, box-shadow 0.5s ease', // smooth scale + glow
                            cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.3)';
                            e.currentTarget.style.boxShadow = `0 0 25px rgba(${logo.color}, 0.8)`; // glow appears gradually
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none'; // glow disappears gradually
                        }}
                        onClick={() => window.open(logo.link, '_blank')}
                    />
                </div>
            ))}
        </div>
    );
}

export default Skills;
