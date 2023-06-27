import React from 'react'

const SectionTitle = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="wpo-section-title">
                    <span>{props.subTitle}</span>
                    <h2>{props.Title}</h2>
                </div>
            </div>
        </div>
    )
}

export default SectionTitle;