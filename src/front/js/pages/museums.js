import React, { useState } from 'react';
import Jumbotron from '../../img/jumbotron.png';
import comingsoon from '../../img/comingsoon.png';
import '../../styles/museums.css';

export const Museums = () => {
    const [showPopup, setShowPopup] = useState({
        jumbotron: false,
        comingSoon1: false,
        comingSoon2: false,
    });

    // Adjusted togglePopup function
    const togglePopup = (popupName, event) => {
        if (event) event.stopPropagation(); // Prevents event bubbling if event is provided
        setShowPopup(prev => ({
            ...prev,
            [popupName]: !prev[popupName],
        }));
    };

    return (
        <div className="content-container">
            {/* Jumbotron Image */}
            <div className="image-frame-container">
                <div className="image-frame" onClick={() => togglePopup('jumbotron')}>
                    <img src={Jumbotron} alt="Museum Jumbotron" />
                    {showPopup.jumbotron && (
                        <div className="popup show-popup">
                            <h3>The Metropolitan Museum of Art</h3>
                            <h6>New York, New York</h6>
                            <h4>History of the MET</h4>
                            <p>The Metropolitan Museum of Art's earliest roots date back to 1866 in Paris, France...</p>
                            <button className="popup-close-button" onClick={(e) => togglePopup('jumbotron', e)}>Close</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Coming Soon 1 Image */}
            <div className="image-frame-container">
                <div className="image-frame" onClick={() => togglePopup('comingSoon1')}>
                    <img src={comingsoon} alt="Coming Soon" />
                    {showPopup.comingSoon1 && (
                        <div className="popup show-popup">
                            <h3>Check Back For Updates</h3>
                            <h5>Our next museum will be revealed soon!</h5>
                            <button className="popup-close-button" onClick={(e) => togglePopup('comingSoon1', e)}>Close</button>
                        </div>
                    )}
                </div>
            </div>

            {/* Coming Soon 2 Image */}
            <div className="image-frame-container">
                <div className="image-frame" onClick={() => togglePopup('comingSoon2')}>
                    <img src={comingsoon} alt="Coming Soon" />
                    {showPopup.comingSoon2 && (
                        <div className="popup show-popup">
                            <h3>Check Back For Updates</h3>
                            <h5>Our next museum will be revealed soon!</h5>
                            <button className="popup-close-button" onClick={(e) => togglePopup('comingSoon2', e)}>Close</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

