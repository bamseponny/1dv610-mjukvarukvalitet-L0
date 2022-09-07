import React from 'react'
import Confetti from "react-confetti";

/**
 * Home component
 * @returns {JSX} Home
 */
function Home() {

  const fetchedName = localStorage.getItem('name')
  console.log(fetchedName)

  return (
    <div className="result">
      <p>Welcome, {fetchedName}</p>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        opacity={1}
        gravity={0.06}
      />
    </div>
  )
}

export default Home
