import React, { useState } from "react";
import { connect } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import { PageLayout } from "../../../layout";
import { CustomLeafletStyle } from "./style";
import {getPlaces} from "./helper";

const CustomLeafletPage = (props) => {
  const { theme } = props;
  const defaultPosition = [48.864716, 2.349]; // Paris position
  const[currentPosition,setCurrentPosition]=useState(null);
  function LocationMarker(e) {
    console.log("line20",e);
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        // map.locate();
        setPosition(e.latlng);
        setCurrentPosition(e.latlng);
        const places = getPlaces(e.latlng);
        console.log("line30",e,places)
      }
      // locationfound(e) {
      //   setPosition(e.latlng);
      //   setCurrentPosition(e.latlng);
      //
      //   // map.flyTo(e.latlng, map.getZoom());
      //
      // },
    });

    // return position === null ? null : (
    //   // <Marker position={position}>
    //   //   <Popup>You are here</Popup>
    //   // </Marker>
    //     <Marker
    //         position={position}
    //         // icon={getIcon(item)}
    //     >
    //       <Popup position={position}>
    //         You are here {position}
    //         {/*<PopupContent*/}
    //         {/*    item={item}*/}
    //         {/*    userSettings={userSettings}*/}
    //         {/*/>*/}
    //       </Popup>
    //     </Marker>
    // );
  }
  const handleClick=(e)=>{
    setCurrentPosition(e.latlng )
    console.log("line50",e.latlng);
    console.log(getPlaces(e.latlng));
  }

  const filterPlaces = (places, category, center, maxDistance) => {
    return places.filter(place => {
      // Calculate distance using Haversine formula
      const R = 6371; // Earth's radius in km
      const lat1 = center[0];
      const lon1 = center[1];
      const lat2 = place.location.lat;
      const lon2 = place.location.lon;

      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;

      return place.category === category && distance <= maxDistance;
    });
  };



  console.log("leflet", props);
  return PageLayout({
    header: "Custom-Leaflet",
    content: (
      <CustomLeafletStyle selectedTheme={theme.selected}>
        <h1 className="pageTitle">Component List </h1>
        <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom={true} onClick={handleClick}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { currentPosition ?
              <Marker position={currentPosition} draggable={true}>
                <Popup position={currentPosition}>
                  Current location: <pre>{JSON.stringify(currentPosition, null, 2)}</pre>
                </Popup>
              </Marker>:null
          }
          {/* <Marker position={defaultPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
          <LocationMarker />
          {/*{filteredPlaces.map(place => (*/}
          {/*    <Marker key={place.id} position={[place.location.lat, place.location.lon]}>*/}
          {/*      <Popup>*/}
          {/*        {place.name}*/}
          {/*      </Popup>*/}
          {/*    </Marker>*/}
          {/*))}*/}
        </MapContainer>
      </CustomLeafletStyle>
    ),
    ...props,
  });
};

const mapStateToProps = (state) => {
  console.log("line46", state);
  return {
    userData: state.userReducer.userData,
  };
};
export const CustomLeaflet = connect(mapStateToProps)(CustomLeafletPage);
