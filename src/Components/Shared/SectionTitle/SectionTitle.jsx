import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <div>
           <h3 className='font-bold text-black py-4 lg:text-xl text-lg text-center'>{children}</h3>
        </div>
    );
};

export default SectionTitle;