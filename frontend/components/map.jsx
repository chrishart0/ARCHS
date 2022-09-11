import { useState } from "react";

// MUI Components
import Container from "@mui/material/Container";
import Popover from "@mui/material/Popover";
import CloseIcon from "@mui/icons-material/Close";

// Components
import MarketCard from "../components/MarketCard";

// Map Stuff
import Map, { Marker, GeolocateControl, FullscreenControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// data
import marketData from "../data/markets.json";

// https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/
const mapboxApiKey = "pk.eyJ1IjoiY2hhcnQwIiwiYSI6ImNsMmgybWV4cTAyYWgza3J6NTJwdm9zMHMifQ.qclGU7o-GXKBbmmkYdk5pg";


function MarkerWithPopup({ specificMarketData, uniqueMarketName }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = ({ originalEvent }) => {
    originalEvent.stopPropagation();
    setShowPopup(true);
  };

  return (
    <>
      <Marker
        key={`${specificMarketData.latitude}+${specificMarketData.longitude}`}
        latitude={specificMarketData.latitude}
        longitude={specificMarketData.longitude}
        onClick={handleMarkerClick}
        scale={0.8}
        color={"blue"}
      />
      <Popover open={showPopup} onClose={() => setShowPopup(false)}>
        <Container disableGutters maxWidth="sm">
          <Container
            align="right"
            position="static"
            sx={{ backgroundColor: "background.paper", color: "black", margin: "2px" }}
          >
            <div style={{width: "100%"}}>
              <CloseIcon
                onClick={() => {
                  setShowPopup(false);
                }}
                sx={{ color: "darkred" }}
              />
            </div>
          </Container>
          <MarketCard
            key={uniqueMarketName}
            marketState={specificMarketData["state"]}
            marketRegion={specificMarketData["region"]}
            marketCity={specificMarketData["city"]}
            marketPageLink={`/markets/${uniqueMarketName}`}
            marketName={specificMarketData["marketName"]}
            marketExternalWebsiteLink={specificMarketData["marketWebsiteLink"]}
            marketTimes={specificMarketData["marketTimes"]}
            marketAddress={specificMarketData["marketAddressText"]}
            marketImageSrc={specificMarketData["marketImageSrc"]}
            marketDescription={specificMarketData["marketDescription"]}
          />
        </Container>
      </Popover>
    </>
  );
}

function generateLocations(marketData) {
  return Object.keys(marketData["markets"]).map((market) => {
    const specificMarketData = marketData["markets"][market];
    if (specificMarketData.latitude && specificMarketData.longitude) {
      return <MarkerWithPopup key={`${specificMarketData.latitude}${specificMarketData.longitude}`} specificMarketData={specificMarketData} uniqueMarketName={market} />;
    }
  });
}

export default function LocationsMap() {
  return (
    <>
      <div style={{ width: "100%", height: "70vh" }} id="map">
        <Map
          initialViewState={{
            latitude: 33,
            longitude: -81.710488,
            zoom: 5,
          }}
          mapLib={maplibregl}
          style={{ width: "100%", height: "100%" }}
          mapboxApiAccessToken={mapboxApiKey}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
          <GeolocateControl />
          <FullscreenControl />
          {generateLocations(marketData)}
        </Map>
      </div>
    </>
  );
}