import React from 'react'
import { card } from './card.module.css'
import { Button } from 'react-bootstrap'

export default function Card({handleClick, count}) {
  return (
    <div className={card}>
        <Button variant="primary" onClick={() => handleClick((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    </div>
  )
}
