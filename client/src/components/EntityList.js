// EntityList.js
import React from 'react';

const EntityList = ({ responseData }) => {
    let paragraph, entities = responseData;

    const renderHighlightedParagraph = () => {
        debugger;
        let highlightedText = paragraph;
        entities.forEach(entity => {
            highlightedText = highlightedText.replace(new RegExp(entity[0], 'g'), `<span class="badge badge-primary rounded-pill">${entity[0]}</span>`);
        });
        return { __html: highlightedText };
    };

    return (
        <div className="container mt-5">
            {entities.length > 0 &&
                <div>
                    <div className="highlighted-paragraph mt-3" dangerouslySetInnerHTML={renderHighlightedParagraph()} />
                </div>
            }
        </div>
    );
};

export default EntityList;
