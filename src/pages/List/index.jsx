import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    fetchMotor,
    selectMotor,
    selectMotorLoading
} from './ListSlice'
import { Card, Button } from 'react-bootstrap'

export default function List() {
  const firstLoad = useRef(true)
  const motor = useSelector(selectMotor)
  const motorLoading = useSelector(selectMotorLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(fetchMotor())
    console.log(motor)
    return () => {
        firstLoad.current = false
    }
  }, [])

//   useEffect(() => {
//     console.log(motor)
//   }, [motor])
  
  return (
    <div>
        { motorLoading === 'loading' && <div>Loading...</div>}
        <div className="container">
            <div className="row">
                { motor ? motor.map((e, i) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + e.image.substring(1)} />
                        <Card.Body>
                            <Card.Title>{e.model}</Card.Title>
                            <Card.Text>
                                {e.description}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ))
                : <div className='col-12'>No Data</div>}
            </div>
        </div>
    </div>
  )
}
