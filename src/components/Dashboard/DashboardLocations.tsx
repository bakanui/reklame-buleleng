// googleMapsApiKey: "AIzaSyDZXIDxd-cOGFyy9aLGXXRcS3mFI21slDY"
// const center = {
//   lat: -8.223,
//   lng: 114.951,
// };

import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import useFetch from "../../utils/useFetch";

const containerStyle = {
  width: "full",
  height: "24rem",
};

interface LocationType {
  id: number;
  name: string;
  status: string;
  position: {
    lat: string;
    lng: string;
  };
}

const center = {
  lat: -8.223,
  lng: 114.951,
};

// const onLoad = (marker: any) => {
//   // console.log("marker: ", marker);
// };
function DashboardLocation() {
  const { data } = useFetch("/api/reklame/posisi-reklame", 0);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {data.map((i: LocationType, n) => (
            <MarkerF
              // onLoad={onLoad}
              position={{
                lat: parseFloat(i.position.lat),
                lng: parseFloat(i.position.lng),
              }}
              icon={{
                path: "M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z",
                strokeColor: "gold",
                fillOpacity: 0.7,
                fillColor: `${
                  i.status === "belum"
                    ? "red"
                    : i.status === "proses"
                    ? "orange"
                    : "green"
                }`,
              }}
              onClick={() =>
                window.open(
                  `http://maps.google.com?q=${i.position.lat},${i.position.lng}`,
                  "_blank"
                )
              }
              key={n}
            />
          ))}
        </GoogleMap>
      )}
    </>
  );
}

export default React.memo(DashboardLocation);
