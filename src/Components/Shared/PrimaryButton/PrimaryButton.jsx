import React from 'react';
import './button.css';
const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className='py-1 text-white rounded-md px-6 bg-gradient-to-r from-second to-main'>{children}</button>
        </div>
    );
};

export default PrimaryButton;

