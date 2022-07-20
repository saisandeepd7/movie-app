import * as React from "react";


export function TicTacToe() {
  return (
    <div>
      <h1>fun game</h1>
      <Board/>
    </div>
  );
}
function Gamebox(){
  
    const [val,setVal]= React.useState("")
    const styles={
      color:val==="X"?"green":"red",}
  
    return(
    <div style={styles} onClick={()=>setVal(val==="X"?"O":"X")} className='game-box'>
{val}
    </div>
  )
    }
function Board(){
  
  return(
  <div className="board">
    <Gamebox/>
    <Gamebox/>
    <Gamebox/>
    <Gamebox/>
    <Gamebox/>
    <Gamebox/>
    <Gamebox/>
    <Gamebox/>
    <Gamebox/>
  </div>
  )
}
