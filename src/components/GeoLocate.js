/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react";
import { useMap, Marker, Popup, Tooltip } from 'react-leaflet';
import geolocate from '../icons/geolocate.svg';
import icon from '../icons/constants';

export default function GeoLocate() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    const geolocateBtnClick = () => {
        map.locate();
        map.on('locationfound', (e) => {
            console.log(e.latlng);
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom())
        });
    }

    return (
        <>
        <button id="locate-position" css={locateBtnCss} onClick={geolocateBtnClick}>
            <svg width="20" height="20"><use xlinkHref={`${geolocate}#geolocate`} /></svg>
        </button>
        { position === null ? null : (
            <Marker position={position} icon={icon}>
                <Popup>You are here: { `Lat: ${position.lat.toFixed(6)}, Lng: ${position.lng.toFixed(6)}`}</Popup>
                <Tooltip>You are here</Tooltip>
            </Marker>
        )}
        </>
    )

}

const locateBtnCss = css`
    position: absolute;
    top: 78px;
    left: 10px;
    z-index: 1001;
`;
// const locateBtnCss = css`
//     position: absolute;
//     top: 140px;
//     left: 35px;
//     z-index: 1001;
// `;

