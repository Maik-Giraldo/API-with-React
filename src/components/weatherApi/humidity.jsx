import React, { useEffect, useState } from 'react';

const Humidity = () => {
    const [humiditys, setHumiditys] = useState(null);
    const [currentCity, setCurrentCity] = useState(null);

    useEffect(async ()=>{
        const humiditys = [];
        
        //HUMIDITY FOR MIAMI
        await fetch("https://api.openweathermap.org/data/2.5/weather?q=Miami,US&appid=f70fbf785f80384487c0df7f24a02b7f")
        .then(res => res.json())
        .then(data => humiditys.push(data.main.humidity))

        //HUMIDITY FOR ORLANDO
        await fetch("https://api.openweathermap.org/data/2.5/weather?q=Orlando,US&appid=f70fbf785f80384487c0df7f24a02b7f")
        .then(res => res.json())
        .then(data => humiditys.push(data.main.humidity))

        //HUMIDITY FOR New York
        await fetch("https://api.openweathermap.org/data/2.5/weather?q=New%20York,US&appid=f70fbf785f80384487c0df7f24a02b7f")
        .then(res => res.json())
        .then(data => humiditys.push(data.main.humidity))

        console.log(humiditys);

        setHumiditys(humiditys);

    }, []);

    return (
        <>
        <div>
            {humiditys ?
                (<div>
                <button onClick={()=>setCurrentCity("Miami " + humiditys[0])} className='btn btn-primary'>Miami</button>
                <button onClick={()=>setCurrentCity("Orlando " + humiditys[1])} className='btn btn-success'>Orlando</button>
                <button onClick={()=>setCurrentCity("New York " + humiditys[2])} className='btn btn-danger'>New York</button>
                </div>)
            : null}
        </div>
        <div>
            {currentCity && (
                <h1>{ currentCity }</h1>
            )}
        </div>
        </>
    )
}

export default Humidity;