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

const CustomLeafletPage = (props) => {
  const { theme } = props;
  const defaultPosition = [48.864716, 2.349]; // Paris position

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  console.log("leflet", props);
  return PageLayout({
    header: "Custom-Leaflet",
    content: (
      <CustomLeafletStyle selectedTheme={theme.selected}>
        <h1 className="pageTitle">Component List </h1>
        <MapContainer center={defaultPosition} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={defaultPosition}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
          <LocationMarker />
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
