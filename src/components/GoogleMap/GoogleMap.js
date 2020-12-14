import { useEffect, useState } from "react";

const COORDS = { lat: 52.518611, lng: 13.408333 };

export default function GoogleMap({
  mapId,
  zoom,
  center = COORDS,
  locations = [],
}) {
  const [mapsApiLoaded, setMapApiLoaded] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [markersList, setMarkersList] = useState([]);

  const checkMapsApi = () => {
    if (window.google && window.google.maps) {
      window.clearTimeout(mapsApiLoaded);
      initMap();
    }
  };

  const initMap = () => {
    const mapEl = document.getElementById(mapId);
    if (!mapEl) {
      return;
    }
    if (!mapInstance) {
      setMapInstance(
        new window.google.maps.Map(mapEl, {
          center,
          zoom,
        })
      );
    }
  };

  const appendToMarkersList = (marker) => {    
    setMarkersList(prevItems => [...prevItems, marker]);
  };

  const clearMap = () => {
    if (!mapInstance) { 
      return;
    }    
    markersList.map(marker => marker.setMap(null));
    setMarkersList([]);
  }

  useEffect(() => {
    setMapApiLoaded(setTimeout(checkMapsApi, 200));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    clearMap();
    locations.map((location) => {
      return appendToMarkersList(
        new window.google.maps.Marker({
          position: location,
          map: mapInstance,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locations]);

  return null;
}
