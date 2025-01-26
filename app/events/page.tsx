


// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import Card08 from "@/components/ui/EventCard"; // Adjust the import path to your project structure

// const Events = () => {
//   const [eventData, setEventData] = useState([]);
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get("https://api.eventaura.tech/event");
//         const events = response.data.data;
//         setEventData(events);
//         setFilteredEvents(events); // Initially set filtered events to all events
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = eventData.filter((event) =>
//       event.eventName.toLowerCase().includes(query) ||
//       event.eventDescription.toLowerCase().includes(query)
//     );
//     setFilteredEvents(filtered);
//   };

//   const ongoingEvents = filteredEvents.filter(
//     (event) => event.eventDate > new Date(Date.now()).toISOString()
//   );
//   const completedEvents = filteredEvents.filter(
//     (event) => event.eventDate <= new Date(Date.now()).toISOString()
//   );

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div role="status" className="animate-pulse">
//           <div className="h-6 bg-gray-300 rounded w-48 mb-4"></div>
//           {[...Array(5)].map((_, i) => (
//             <div
//               key={i}
//               className="h-24 bg-gray-200 rounded w-full max-w-md mb-6"
//             ></div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search events..."
//           className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-300"
//         />
//       </div>

//       {/* Ongoing Events */}
//       {ongoingEvents.length > 0 && (
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
//             Ongoing Events
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {ongoingEvents.map((event) => (
//               <Card08
//                 key={event._id}
//                 title={event.eventName}
//                 subtitle={event.eventDescription}
//                 image={event.image || "https://via.placeholder.com/300"} // Default image if none provided
//                 badge={{
//                   text: "On Going",
//                   variant: "indigo",
//                 }}
//                 href={`/event/${event._id}`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Completed Events */}
//       {completedEvents.length > 0 && (
//         <div>
//           <h2 className="text-2xl font-semibold text-orange-600 mb-4">
//             Completed Events
//           </h2>
//           <div className="flex flex-wrap justify-center gap-6">
//             {completedEvents.map((event) => (
//               <Card08
//                 key={event._id}
//                 title={event.eventName}
//                 subtitle={event.eventDescription}
//                 image={event.image || "https://via.placeholder.com/300"} // Default image if none provided
//                 badge={{
//                   text: "Completed",
//                   variant: "orange",
//                 }}
//                 href={`/event/${event._id}`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* No Events Found */}
//       {filteredEvents.length === 0 && (
//         <p className="text-center text-gray-500">No events found.</p>
//       )}
//     </div>
//   );
// };

// export default Events;














"use client";

import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Card08 from "@/components/ui/EventCard"; // Adjust the import path to your project structure
import EventLoaderSkeleton from "@/components/EventLoader";

const Events = () => {
  const [eventData, setEventData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://api.eventaura.tech/event");
        const events = response.data.data;
        setEventData(events);
        setFilteredEvents(events); // Initially set filtered events to all events
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = eventData.filter((event) =>
      event.eventName.toLowerCase().includes(query) ||
      event.eventDescription.toLowerCase().includes(query)
    );
    setFilteredEvents(filtered);
  };

  const ongoingEvents = filteredEvents.filter(
    (event) => event.eventDate > new Date(Date.now()).toISOString()
  );
  const completedEvents = filteredEvents.filter(
    (event) => event.eventDate <= new Date(Date.now()).toISOString()
  );

  if (loading) {
    return (
    //   <div className="flex justify-center items-center h-screen">
    //     <div role="status" className="animate-pulse">
    //       <div className="h-6 bg-gray-300 rounded w-48 mb-4"></div>
    //       {[...Array(5)].map((_, i) => (
    //         <div
    //           key={i}
    //           className="h-24 bg-gray-200 rounded w-full max-w-md mb-6"
    //         ></div>
    //       ))}
    //     </div>
    //   </div>
    <EventLoaderSkeleton />
    );
  }

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <div className="flex items-center p-1 rounded-full max-w-[22rem] w-full border border-primary/10 border-opacity-10 gap-1">
          <Input
            className="rounded-full py-3 w-full border-0 shadow-none focus-visible:ring-0"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
          <Button
            variant="secondary"
            className="border bg-primary text-primary-foreground border-opacity-5 rounded-full px-2.5 py-3"
          >
            <FaSearch size={19} />
          </Button>
        </div>
      </div>

      {/* Ongoing Events */}
      {ongoingEvents.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            Ongoing Events
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {ongoingEvents.map((event) => (
              <Card08
                key={event._id}
                title={event.eventName}
                subtitle={event.eventDescription}
                image={event.image || "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg"} // Default image if none provided
                badge={{
                  text: "On Going",
                  variant: "indigo",
                }}
                href={`/event/${event._id}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Completed Events */}
      {completedEvents.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Completed Events
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {completedEvents.map((event) => (
              <Card08
                key={event._id}
                title={event.eventName}
                subtitle={event.eventDescription}
                image={event.image || "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg"} // Default image if none provided
                badge={{
                  text: "Completed",
                  variant: "orange",
                }}
                href={`/event/${event._id}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* No Events Found */}
      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-500">No events found.</p>
      )}
    </div>
  );
};

export default Events;

