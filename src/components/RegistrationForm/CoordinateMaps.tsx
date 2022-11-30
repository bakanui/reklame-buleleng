import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  width: "full",
  height: "24rem",
};

const center = {
  lat: -8.223,
  lng: 114.951,
};

const libraries: ["places"] = ["places"];

function CoordinateMaps({
  setTitik_koordinat,
  titik_koordinat,
  editTitikKoordinat,
}: {
  setTitik_koordinat?: React.Dispatch<React.SetStateAction<string>>;
  editTitikKoordinat?: React.Dispatch<
    React.SetStateAction<{
      id: number;
      value: string;
    }>
  >;
  titik_koordinat: string;
}) {
  let libRef = React.useRef(libraries);
  const [currentCenter, setCurrentCenter] = React.useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY!,
    libraries: libRef.current,
  });
  const mapRef = React.useRef<GoogleMap>();
  const defaultCenter = {
    lat: parseFloat(titik_koordinat.split(",")[0]),
    lng: parseFloat(titik_koordinat.split(",")[1]),
  };

  console.log(titik_koordinat);

  const originRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const onLoad = React.useCallback((map: any) => (mapRef.current = map), []);

  const handleSearch = async () => {
    if (originRef.current.value === "") {
      return;
    }
    const geocoder = new google.maps.Geocoder();
    geocoder
      .geocode({
        address: originRef.current.value,
      })
      .then((res: any) => {
        setCurrentCenter({
          lat: res.results[0].geometry.location.lat(),
          lng: res.results[0].geometry.location.lng(),
        });
      });
  };

  return (
    <>
      {isLoaded && (
        <div>
          <div className="flex justify-between pb-5 md:w-1/3 gap-5">
            <Autocomplete className="mt-1 w-full">
              <input
                className="border-2 border-primary rounded py-1 md:py-2 px-1 w-full"
                type="search"
                placeholder="Nama Lokasi"
                ref={originRef}
              />
            </Autocomplete>
            <button
              className="bg-primary px-2 rounded font-semibold text-white py-1.5"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={
              currentCenter
                ? currentCenter
                : titik_koordinat
                ? defaultCenter
                : center
            }
            zoom={15}
            onLoad={onLoad}
            onClick={(e) => {
              if (setTitik_koordinat) {
                setTitik_koordinat(`${e.latLng?.lat()},${e.latLng?.lng()}`);
              }
              if (editTitikKoordinat) {
                editTitikKoordinat((current) => ({
                  id: current.id,
                  value: `${e.latLng?.lat()},${e.latLng?.lng()}`,
                }));
              }
            }}
          >
            {titik_koordinat && (
              <MarkerF
                // onLoad={onLoad}
                position={{
                  lat: parseFloat(titik_koordinat.split(",")[0]),
                  lng: parseFloat(titik_koordinat.split(",")[1]),
                }}
              />
            )}
          </GoogleMap>
        </div>
      )}
    </>
  );
}

export default React.memo(CoordinateMaps);
