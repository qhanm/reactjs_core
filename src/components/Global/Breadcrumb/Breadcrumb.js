import React, {Component} from 'react';

const Breadcrumb = () => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb" style={{backgroundColor: 'white'}}>
                <li className="breadcrumb-item">Project</li>
                <li className="breadcrumb-item">CyberLearn</li>
                <li className="breadcrumb-item active" aria-current="page">
                    Cyber Board
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;