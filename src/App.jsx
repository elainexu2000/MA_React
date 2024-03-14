import React, { useState } from 'react';

function Cell({ isCellOn, toggle }) {
  const cellStyle = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isCellOn ? 'black' : 'white',
  };

  return <div className = "cell" style = {cellStyle} onClick = {toggle}></div>;
}

function Grid() {
  const [cellsState, setCellsState] = useState([
    [false, false],
    [false, false],
  ]);
  
  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const toggle = (row, col) => {
    const updatedCellsState = [...cellsState];
    updatedCellsState[row][col] = !updatedCellsState[row][col];
    setCellsState(updatedCellsState);
  };

  const countOnCells = () => {
    let count = 0;
    cellsState.forEach((row) => {
      row.forEach((cell) => {
        if (cell) count++;
      });
    });
    return count;
  };

  return (
    <div style={gridStyle} className="grid">
      <div className="counter">Number of Cells On: {countOnCells()}</div>
      {cellsState.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((isCellOn, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              isCellOn={isCellOn}
              toggle={() => toggle(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Grid />
    </div>
  );
}
