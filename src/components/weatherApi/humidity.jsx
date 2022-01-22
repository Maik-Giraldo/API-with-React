import React, { useEffect, useState } from 'react';

const Humidity = () => {
    const [humiditys, setHumiditys] = useState(null);
    
    const currentCity = {
        city : ''
    };
    
    const showCity = (city)=>{
        currentCity.city = city;
    };

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
        <div>
            {humiditys ?
                (<div>
                {currentCity.city == "Miami" ? (<h1>Miami: {humiditys[0]}%</h1>) : null}
                {currentCity.city == "Orlando" ? (<h1>Orlando: {humiditys[1]}%</h1>) : null}
                {currentCity.city == "New York" ?  (<h1>New York: {humiditys[2]}%</h1>) : null}
                <button onClick={()=>showCity("Miami")} className='btn btn-primary'>Miami</button>
                <button onClick={()=>showCity("Orlando")} className='btn btn-success'>Orlando</button>
                <button onClick={()=>showCity("New York")} className='btn btn-danger'>New York</button>
                </div>)
            : null}
        </div>
    )
}

export default Humidity;