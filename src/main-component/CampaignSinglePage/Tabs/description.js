import React from 'react'

const Description = ({ CampaignDetails }) => {
    return (
        <div id="Description">
            <div className="wpo-campaign-content">
                <div className="wpo-campaign-text-top">
                    <h2>{CampaignDetails.title}</h2>
                    <div className="progress-sub">
                        <div className="progress-section">
                            <div className="process">
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: `${CampaignDetails.progress}%` }}>
                                        <div className="progress-value">
                                            <span>{CampaignDetails.progress}</span>%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li><span>Raised:</span> ${CampaignDetails.raised}</li>
                            <li><span>Goal:</span> ${CampaignDetails.goal}</li>
                            <li><span>Donar:</span> 380</li>
                        </ul>
                    </div>
                    <div className="campaign-b-text">
                        <p>On the other hand, we denounce with righteous indignation
                            and dislike men who are so beguiled and demoralized by
                            the charms of pleasure of the moment, so blinded by
                            desire, that they cannot foresee the pain and trouble
                            that are bound to ensue and equal blame belongs to those
                            who fail in their duty through weakness of will, which
                            is the same as saying through shrinking from toil and
                            pain.</p>
                        <p>These campaigns are perfectly simple and easy to distinguish.
                            In a free hour, when our power of choice is untrammelled
                            and when nothing prevents our being able to do what we
                            like best, every pleasure is to be welcomed and every
                            pain avoided.</p>
                        <p>But in certain circumstances and owing to the claims of
                            duty or the obligations of business it will frequently
                            occur that pleasures have to be repudiated and
                            annoyances accepted. The wise man therefore always holds
                            in these matters to this principle of selection: he
                            rejects pleasures.</p>
                    </div>
                    <div className="campaign-bb-text">
                        <h3>Support for Woman's April 2023</h3>
                        <p>These campaigns are perfectly simple and easy to distinguish.
                            In a free hour, when our power of choice is untrammelled
                            and when nothing prevents our being able to do what we
                            like best, every pleasure.</p>
                        <ul>
                            <li>The wise man therefore always holds in these
                                matters.</li>
                            <li>In a free hour, when our power of choice and when
                                nothing.</li>
                            <li>Else he endures pains to avoid worse pains.</li>
                            <li>We denounce with righteous indignation and dislike
                                men. </li>
                            <li>Which is the same as saying through.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;