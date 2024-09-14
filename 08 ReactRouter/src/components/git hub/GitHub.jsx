import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()          // this hook is used for optimizing loading (cursor ke change hone pr he api call ho jati hai)

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Aditya-Chauhan01')
    //     .then((Response) => Response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     } )
    // }, [])

  return (
    <div className='bg-gray-500 text-center text-white text-3xl m-4 p-4'>GitHub follower :{data.followers}
    <img src={data.avatar_url} alt="github picture" />
     </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const Response = await fetch('https://api.github.com/users/Aditya-Chauhan01')
    return Response.json();
} 