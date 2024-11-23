import React from 'react';
import ProfileCard from './ProfileCard';

// Main App component manages the state of whether the user is following
let isFollowing = false;

function App({ render }) {
  // Toggles the 'following' state and triggers a re-render
  function handleClick() {
    isFollowing = !isFollowing;
    render();
  }

  // Static data for the profile card
  const name = "Sarah Johnson";
  const title = "Front-End Developer";
  const bio = "Passionate about creating beautiful, user-friendly web applications. With a background in design and a love for coding, I specialize in building responsive websites and creating seamless user experiences using modern web technologies like React, CSS, and JavaScript.";

  // Passing state and handler as props to ProfileCard component
  return (
    <ProfileCard
      name={name}
      title={title}
      bio={bio}
      isFollowing={isFollowing}
      handleClick={handleClick}
    />
  );
}

export default App;