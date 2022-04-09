import React from 'react';
import Map from '../assets/map.png';
/*
import { GoogleMap , useLoadScript } from "@react-google-maps/api";
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: 12,
    lng: 12,
};
*/

export default function OndeComprar(){

    /* const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places']
    });

    if (loadError) return "Erro carregando o mapa";
    if (!isLoaded) return "Carregando Mapa"; */

    return (
        <div className='onde-comprar' id='onde-comprar'>
            <h2 className='comprar_titulo titulo'>Onde Comprar</h2>
            <div className='comprar_descricao texto'>
                <p>
                    Rio de Janeiro, Brasil
                    <br/>
                    Aberto de segunda à sexta, das 12:00 às 20:00
                </p>
            </div>
            <div className='comprar_mapa'>
                <img src={Map} alt="screenshot do goggle maps da localizacao ficticia do local"></img>
                {/* <GoogleMap
                    mapContainerSytle={mapContainerStyle}
                    zoom={8}
                    center={center}
                ></GoogleMap> */}
            </div>
        </div>    
    )
};
