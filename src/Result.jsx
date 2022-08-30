import React from 'react'
import Confetti from "react-confetti";

/**
 * Home component
 * @returns {JSX} Home
 */
function Home() {

  const Splash = (props) =>
  <div className="splash">
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      opacity={0.9}
      gravity={0.07}
    />
  </div>;

  const fetchedName = localStorage.getItem('name')
  console.log(fetchedName)

  return (
    <div className="result">
      <p>Welcome, {fetchedName}</p>
      <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      opacity={0.9}
      gravity={0.07}
    />
    </div>
  )
}

export default Home
