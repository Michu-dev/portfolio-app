import React from "react";

const SocialMedia = () => {
    return (
        <div className="text-white inline-flex items-center bg-white-800 border-0 mx-2 py-1 px-1 focus:outline-none hover:bg-gray-700">
            <a 
                href="https://www.facebook.com/profile.php?id=100002928572091"
                className="fa fa-facebook bg-blue-500 mx-2 py-1 px-1 text-white">
            </a>
            <a 
                href="https://github.com/Michu-dev"
                className="fa fa-github mx-2 py-2 px-1">
            </a>

            <a 
                href="https://www.linkedin.com/in/micha%C5%82-ciesielski-5ab255192/"
                className="fa fa-linkedin bg-blue-500 mx-2 py-1 px-1 text-white">
            </a>

            <a 
                href="https://www.instagram.com/michuc0/"
                className="fa fa-instagram mx-2 py-2 px-1">
            </a>

        </div>

        
    );
};

export default SocialMedia;