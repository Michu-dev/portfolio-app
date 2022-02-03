import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-2 px-4">
            <p className="object-top">
                &copy; 2022 Michał Ciesielski 
                <SocialMedia />
            </p>
        </footer>
    );
};

export default Footer;