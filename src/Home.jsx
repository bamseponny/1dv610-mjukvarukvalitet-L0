import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Home component
 * @returns {JSX} Home
 */
function Home() {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(fullName)
    localStorage.setItem("name", fullName)
    navigate(`/result`)
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit}>
        <label>Please state your name</label>
        <br/>
        <input
          type="text"
          required
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
              />
          <br/>
        <button class="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home
