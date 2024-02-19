import React, {useState} from 'react';

function Handle(){
    const [buttonText, setButtonText] = useState('Click me');
    const handleClick = () => {
        setButtonText('Button clicked');
    };
    return (
        <button onClick={handleClick}>
            {buttonText}

        </button>
    );
};
export default Handle;