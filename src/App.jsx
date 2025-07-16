import React from 'react'
import SlotMachine from './components/SlotMachine'

function App() {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      height: "100vh",
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <SlotMachine />
    </div>
  )
}

export default App