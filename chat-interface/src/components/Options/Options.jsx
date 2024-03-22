import React from "react";

const Options = (props) => {
    const options = [
        {
            text: 'Javascript',
            handler:() => {console.log("JavaScript")},
            id: 1,
        },
        {
            text: 'Python',
            handler: () => {console.log("Python")},
            id: 2,
        },
        {
            text: 'Java',
            handler: () => {console.log("Java")},
            id: 3,
        },
    ]

    const buttonsMarkup = options.map((option) => {
        return (<button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>)
    });

    return <div className="options-container">{buttonsMarkup}</div>
}
export default Options;