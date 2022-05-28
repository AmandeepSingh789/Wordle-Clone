import { useEffect, useState } from "react";
const solutions = [
  {"id": 1, "word": "ninja"},
  {"id": 2, "word": "spade"},
  {"id": 3, "word": "pools"},
  {"id": 4, "word": "drive"},
  {"id": 5, "word": "relax"},
  {"id": 6, "word": "times"},
  {"id": 7, "word": "train"},
  {"id": 8, "word": "cores"},
  {"id": 9, "word": "pours"},
  {"id": 10, "word": "blame"},
  {"id": 11, "word": "banks"},
  {"id": 12, "word": "phone"},
  {"id": 13, "word": "bling"},
  {"id": 14, "word": "coins"},
  {"id": 15, "word": "hello"}
]
function App() {

  const[word,Setword]=useState(null)
  // useEffect(() => {
  //   fetch('http://localhost:3004/solutions')
  //   .then(res=> res.json())
  //   .then(json=>{
  //     console.log(json)
  //   })
  // }, [])

  useEffect(() =>{
    const randomSolution = solutions[Math.floor(Math.random()*solutions.length)]

    Setword(randomSolution)
  },[Setword])
  return (
    <div className="App">
      <h1>Wordle</h1>

    </div>
  );
}

export default App;

