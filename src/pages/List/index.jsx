import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    fetchMotor,
    selectMotor,
    selectMotorLoading
} from './ListSlice'

export default function List() {
  const firstLoad = useRef(true)
  const motor = useSelector(selectMotor)
  const motorLoading = useSelector(selectMotorLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    if(firstLoad.current) dispatch(fetchMotor())

    return () => {
        firstLoad.current = false
    }
  }, [])
  

  return (
    <div>
        { motorLoading === 'loading' && <div>Loading...</div>}
        { motor ? 
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Model</th>
                        <th>Manufactur</th>
                        <th>Foto</th>
                        <th>Harga Sewa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        motor.map((e, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{e.model}</td>
                                <td>{e.manufacture}</td>
                                <img height="50" src={"https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" + e.image.substring(1)}/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        : "No Data"}
    </div>
  )
}
