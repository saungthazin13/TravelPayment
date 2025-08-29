import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

interface Trip {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  price: string;
}

const dummyTrips: Trip[] = [
  {
    id: 1,
    from: "yangon",
    to: "bagan",
    date: "2025-08-29",
    time: "08:00 AM",
    price: "50000MMK ",
  },
  {
    id: 2,
    from: "yangon",
    to: "mandalay",
    date: "2025-08-29",
    time: "09:30 AM",
    price: "60000MMK",
  },
  {
    id: 3,
    from: "mandalay",
    to: "bagan",
    date: "2025-08-29",
    time: "07:00 AM",
    price: "70000MMK",
  },
  {
    id: 4,
    from: "yangon",
    to: "pyinoolwin",
    date: "2025-08-29",
    time: "10:00 AM",
    price: "80000MMK",
  },
  {
    id: 5,
    from: "naypyidaw",
    to: "taunggyi",
    date: "2025-08-29",
    time: "06:30 AM",
    price: "90000MMK",
  },
  {
    id: 6,
    from: "mandalay",
    to: "ngapali",
    date: "2025-08-29",
    time: "07:45 AM",
    price: "30000MMK",
  },
  {
    id: 7,
    from: "yangon",
    to: "chaungtha",
    date: "2025-08-29",
    time: "05:30 AM",
    price: "40000MMK",
  },
];

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();

  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);

  // Parse URL query parameters
  const params = new URLSearchParams(location.search);
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const date = params.get("date") || "";

  useEffect(() => {
    // Simulate API fetch delay
    setLoading(true);
    setTimeout(() => {
      const filtered = dummyTrips.filter(
        (trip) => trip.from === from && trip.to === to && trip.date === date
      );
      setTrips(filtered);
      setLoading(false);
    }, 500);
  }, [from, to, date]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Search Results</h1>
      <p className="mb-4 text-center">
        From <b>{from}</b> to <b>{to}</b> on{" "}
        <b>{dayjs(date).format("MMM D, YYYY")}</b>
      </p>

      {loading ? (
        <p className="text-center">Loading trips...</p>
      ) : trips.length === 0 ? (
        <p className="text-center text-red-500">
          No trips found for your search.
        </p>
      ) : (
        <ul className="space-y-4">
          {trips.map((trip) => (
            <li
              key={trip.id}
              className="border p-4 rounded-md cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/trip/${trip.id}`)}
            >
              <div className="flex justify-between">
                <span>
                  {trip.from.charAt(0).toUpperCase() + trip.from.slice(1)} →{" "}
                  {trip.to.charAt(0).toUpperCase() + trip.to.slice(1)}
                </span>
                <span>{trip.time}</span>
              </div>
              <div className="mt-1 font-semibold">{trip.price}</div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex mt-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-200 text-blue-600 px-4 py-2 rounded hover:bg-gray-300 transition ml-auto"
        >
          &larr; Back to Home
        </button>
      </div>
    </div>
  );
}
