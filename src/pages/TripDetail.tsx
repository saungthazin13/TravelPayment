import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Trip {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  price: string;
  description?: string;
}

const dummyTrips: Trip[] = [
  {
    id: 1,
    from: "yangon",
    to: "bagan",
    date: "2025-08-21",
    time: "08:00 AM",
    price: "50000MMK ",
  },
  {
    id: 2,
    from: "yangon",
    to: "mandalay",
    date: "2025-08-21",
    time: "09:30 AM",
    price: "60000MMK",
  },
  {
    id: 3,
    from: "mandalay",
    to: "bagan",
    date: "2025-08-21",
    time: "07:00 AM",
    price: "70000MMK",
  },
  {
    id: 4,
    from: "yangon",
    to: "pyinoolwin",
    date: "2025-08-21",
    time: "10:00 AM",
    price: "80000MMK",
  },
  {
    id: 5,
    from: "naypyidaw",
    to: "taunggyi",
    date: "2025-08-21",
    time: "06:30 AM",
    price: "90000MMK",
  },
  {
    id: 6,
    from: "mandalay",
    to: "ngapali",
    date: "2025-08-21",
    time: "07:45 AM",
    price: "30000MMK",
  },
  {
    id: 7,
    from: "yangon",
    to: "chaungtha",
    date: "2025-08-21",
    time: "05:30 AM",
    price: "40000MMK",
  },
];

export default function TripDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [trip, setTrip] = useState<Trip | null>(null);

  useEffect(() => {
    // Find the trip by id
    const tripId = Number(id);
    const foundTrip = dummyTrips.find((t) => t.id === tripId) || null;
    setTrip(foundTrip);
  }, [id]);

  if (!trip) {
    return (
      <div className="max-w-md mx-auto p-6 text-center">
        <p className="text-red-500 mb-4">Trip not found!</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-xl font-bold mb-4">
        {trip.from.charAt(0).toUpperCase() + trip.from.slice(1)} →{" "}
        {trip.to.charAt(0).toUpperCase() + trip.to.slice(1)}
      </h2>
      <p>
        <strong>Date:</strong> {trip.date}
      </p>
      <p>
        <strong>Time:</strong> {trip.time}
      </p>
      <p>
        <strong>Price:</strong> {trip.price}
      </p>
      {trip.description && (
        <p className="mt-4">
          <strong>Details:</strong> {trip.description}
        </p>
      )}
      <div className="flex justify-between ">
        <button
          onClick={() => navigate(`/payment/${trip.id}`)}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          &larr; Book Now
        </button>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          &larr; Back to Home
        </button>
      </div>
    </div>
  );
}
