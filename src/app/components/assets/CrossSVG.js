    import React from 'react';

    const CrossSVG = (props) => {
    return (
        <svg 
                        {...props}
                        className='inline-block md:hidden w-6 cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
    )
    }

    export default CrossSVG;