// ParagraphForm.js
import React, { useState } from "react";

const ParagraphForm = ({ setResponseData }) => {
    const [paragraph, setParagraph] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ paragraph })
        };

        try {
            const response = await fetch('http://localhost:8000/api/extract_paragraph_info', requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setResponseData(data);
            } catch (error) {
        }
    };

    return (
        <div className="container mt-5">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <textarea
                className="form-control"
                id="paragraph"
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                rows="10"
                required
            />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Extract Information</button>
        </form>
        </div>
    );
};

export default ParagraphForm;
