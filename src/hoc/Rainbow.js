import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'blue', 'orange', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';


    return (props) => {
        return (
            <div className={className} id="ena poutso">
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow