import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

  const[apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2Y3ZTdjM2IyZmM4OTRhNjE3NjAxMDI5YjJlODc0MiIsIm5iZiI6MTc1OTcxOTI3MC43NjE5OTk4LCJzdWIiOiI2OGUzMmY2NjAzOWQ0MmIyNzBiZDk4MGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QtaEy5avSd_cyXcaKgzdFrhiHZtWrvymaKgDZhhYLvI'
  }
};

useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src='https://www.youtube.com/embed/hkHHwA-vEyQ'
      title='trailer' frameBorder='0'allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player
