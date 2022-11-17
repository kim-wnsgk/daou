import React, { useEffect, useState } from 'react';
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import { useParams } from 'react-router-dom';
import Geocode from "react-geocode";
import styles from "./Lunch.module.css"

function Lunch() {
    const { loc } = useParams();
    const [lati, setLati] = useState(37.3399941);
    const [lngi, setLngi] = useState(127.1111889);

    return (
        <div className={styles.wrap}>
            <div>점심메뉴추천</div>
            <RenderAfterNavermapsLoaded
                ncpClientId={"mqq3iqhd3w"}
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
            >

                <NaverMap
                    mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                    className={styles.map}
                    defaultCenter={{ lat: lati, lng: lngi }}
                    defaultZoom={16}
                >
                    <Marker
                        position={{ lat: lati, lng: lngi }}
                    />
                </NaverMap>

            </RenderAfterNavermapsLoaded>
        </div>
    );
}

export default Lunch;
