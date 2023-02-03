import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Tank = ({ id, zoom, optionsHandler }) => {
  const [sharks, setSharks] = useState(null)

  const getSharks = async () => {
    let data = await axios.get(`/api/${id}`)
      .then(res => res.data.data)
      .catch(err => console.log(err))
    console.log(data)
    if (data[0] && id === data[0].tankID)setSharks(data)
  }

  useEffect(() => {
    getSharks()
  }, [])

  return (
    <div className={'tank'} id={`${id}`}>
      <div className='zoomTrigger' onClick={() => zoom(`${id}`)}></div>
      {sharks && sharks.map((shark, i) => {
        return <img key={i} id="shark" onClick={optionsHandler} className="shark sharkAnimation1" src={shark.image} />
      })}
    </div>
  )
}

export default Tank
