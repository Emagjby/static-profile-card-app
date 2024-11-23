import React from 'react';

// Functional component for the profile card UI
function ProfileCard(props) {
    const UI = (
        <div className="container">
            <div className="cover-photo"></div>
            <h2 className="profile-name">{props.name}</h2>
            <h3 className="title">{props.title}</h3>
            <p className="bio">{props.bio}</p>
            <button className="msg-btn">Message</button>
            {/* Follow button toggles based on isFollowing prop */}
            <button className="follow-btn" onClick={props.handleClick}>
                {props.isFollowing ? "Following" : "Follow"}
            </button>
        </div>
    );

    return UI;
}

export default ProfileCard;