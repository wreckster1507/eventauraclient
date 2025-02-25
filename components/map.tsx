// import React, { useRef, useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapComponent = () => {
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1Ijoid3JlY2tzdGVyMTUwNyIsImEiOiJjbHF0YmlqaGsyNmF0Mmltd3BzeHozY3dvIn0.9O9es4coT63vv1FBGriEQA';

//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v12',
//       center: [17.4292987, 78.3385112], // Specify the longitude and latitude for your fixed location
//       zoom: 9
//     });

//     const marker = new mapboxgl.Marker()
//       .setLngLat([ 17.4292987, 40]) // Set the same coordinates as the map center
//       .addTo(mapRef.current);

//     return () => mapRef.current.remove();
//   }, []);

//   return <div ref={mapContainerRef} style={{ height: '400px' }} />;
// };

// export default MapComponent;







// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapComponent = () => {
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   // Set Mapbox token
//   mapboxgl.accessToken = 'pk.eyJ1Ijoid3JlY2tzdGVyMTUwNyIsImEiOiJjbHF0YmlqaGsyNmF0Mmltd3BzeHozY3dvIn0.9O9es4coT63vv1FBGriEQA';

//   useEffect(() => {
//     // Create a new map instance
//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [78.3385112, 17.4292987],
//       zoom: 15,
//     });

//     // Wait for the map to load before placing the marker
//     mapRef.current.on('load', () => {
//       // Create and place a marker at the given coordinates
//       new mapboxgl.Marker()
//         .setLngLat([78.3385112, 17.4292987])
//         .addTo(mapRef.current);
//     });

//     return () => {
//       mapRef.current.remove(); // Clean up the map when the component unmounts
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         ref={mapContainerRef}
//         style={{ width: '100%', height: '500px' }}
//       ></div>
//     </div>
//   );
// };

// export default MapComponent;







// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapComponent = () => {
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   // Set Mapbox token
//   mapboxgl.accessToken = 'pk.eyJ1Ijoid3JlY2tzdGVyMTUwNyIsImEiOiJjbHF0YmlqaGsyNmF0Mmltd3BzeHozY3dvIn0.9O9es4coT63vv1FBGriEQA';

//   useEffect(() => {
//     // Create a new map instance
//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [78.34122319996311, 17.42940183950308], // Updated coordinates
//       zoom: 15,
//     });

//     // Wait for the map to load before placing the marker
//     mapRef.current.on('load', () => {
//       // Create and place a marker at the given coordinates
//       new mapboxgl.Marker()
//         .setLngLat([78.34122319996311, 17.42940183950308]) // Updated coordinates
//         .addTo(mapRef.current);
//     });

//     return () => {
//       mapRef.current.remove(); // Clean up the map when the component unmounts
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         ref={mapContainerRef}
//         style={{ width: '100%', height: '500px' }}
//       ></div>
//     </div>
//   );
// };

// export default MapComponent;




// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapComponent = ({ latitude, longitude }) => {
//   const mapContainerRef = useRef(null);
//   const mapRef = useRef(null);

//   // Set Mapbox token
//   mapboxgl.accessToken = 'pk.eyJ1Ijoid3JlY2tzdGVyMTUwNyIsImEiOiJjbHF0YmlqaGsyNmF0Mmltd3BzeHozY3dvIn0.9O9es4coT63vv1FBGriEQA';

//   useEffect(() => {
//     // Create a new map instance
//     mapRef.current = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [longitude, latitude], // Use props here
//       zoom: 15,
//     });

//     // Wait for the map to load before placing the marker
//     mapRef.current.on('load', () => {
//       // Create and place a marker at the given coordinates
//       new mapboxgl.Marker()
//         .setLngLat([longitude, latitude]) // Use props here
//         .addTo(mapRef.current);
//     });

//     return () => {
//       mapRef.current.remove(); // Clean up the map when the component unmounts
//     };
//   }, [latitude, longitude]); // Add latitude and longitude to the dependency array

//   return (
//     <div>
//       <div
//         ref={mapContainerRef}
//         style={{ width: '100%', height: '500px' }}
//       ></div>
//     </div>
//   );
// };

// export default MapComponent;