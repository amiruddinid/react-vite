import { useState, useEffect, useRef } from 'react'

export default function List() {
  const firstLoad = useRef(true)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
        try{
            const res = await fetch('http://localhost:8000/api/v1/motors')
            const json = await res.json()

            console.log(json);
            setData(json.data);
        } catch(e){
            console.log(e)
        }
    }

    if(firstLoad.current) fetchData();

    return () => {
        firstLoad.current = false
    }
  }, [])
  

  return (
    <div>
        { data ? 
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
                        data.motors.map((e, i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{e.model}</td>
                                <td>{e.manufactur}</td>
                                <td>{e.foto}</td>
                                <td>{e.harga_sewa}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        : "No Data"}
    </div>
  )
}
