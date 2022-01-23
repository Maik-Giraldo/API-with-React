import React, { useEffect, useState } from 'react';
import './humidity.css'
import { changeValue } from '../utils/intermediary';

const Humidity = () => {
    const [humiditys, setHumiditys] = useState(null);
    const [currentCity, setCurrentCity] = useState(null);

    const changeMap = (map) => {
        changeValue(map);
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

        setHumiditys(humiditys);

    }, []);

    return (
        <>
            <br /><br />
            <b><h1>Humidity</h1></b>
            <div className='home'>
                {humiditys ?
                    (<div className='row'>
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-4">
                                    <button onClick={()=>{
                                        setCurrentCity("Miami humidity: " + humiditys[0] + "%");
                                        changeMap("Miami");
                                    }} className='btn btn-dark'>Miami</button>
                                </div>
                                <div className="col-md-4">
                                    <button onClick={()=>{
                                        setCurrentCity("Orlando humidity: " + humiditys[1] + "%");
                                        changeMap("Orlando");
                                    }} className='btn btn-dark'>Orlando</button>
                                </div>
                                <div className="col-md-4">
                                    <button onClick={()=>{
                                        setCurrentCity("New York humidity: " + humiditys[2] + "%");
                                        changeMap("NewYork");
                                    }} className='btn btn-dark'>New York</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>)
                : null}
            </div>
            <div className='information'>
                {currentCity && (
                    <h1>{ currentCity }</h1>
                )}
            </div>
        </>
    )
}

export default Humidity;