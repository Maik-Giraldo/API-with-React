import React, { useEffect } from 'react';
import { Map } from 'mapbox-gl';
import { Intermediary } from '../utils/intermediary';
import './mapboxApi.css'

const Maps = () => {
        useEffect(() => {

        //Map
        const map = new Map({
            container: 'mapView', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [0, 0], // starting position [lng, lat]
            zoom: 12 // starting zoom
        });
        
        Intermediary.subscribe((data)=>{
           switch(data){
                case "Miami":
                    map.flyTo({
                        center: [-80.19366, 25.77427]
                    })
                   break;
                
                case "Orlando":
                    map.flyTo({
                        center: [-81.37924, 28.53834]
                    })
                   break;

                case "NewYork":
                    map.flyTo({
                        center: [-74.00597, 40.71427]
                    })
                   break;

                default:
                    console.error("the map doesn't exist");
                    break;
           }
        });

    }, []);


    return (
        <>
            <div id='mapView'/>
        </>
)
}

export default Maps;