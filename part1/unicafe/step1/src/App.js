import { useState } from 'react'

const Button = ({ handleClick, text }) => (  
<button onClick={handleClick}>    {text}  </button>
)
 
const App = () => {
   const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good + 1) }
  const handleNeutralClick = () => { setNeutral(neutral + 1) }
  const handleBadClick = () => {setBad(bad + 1)}

  return (
    <div>
      <h1>Give Feedback</h1>      
      <Button handleClick={handleGoodClick} text='Good' />      
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
     
    </div>
  )
}
export default App
