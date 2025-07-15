import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

export default function Home() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (fromCity && toCity && date) {
      const query = new URLSearchParams({
        from: fromCity,
        to: toCity,
        date: dayjs(date).format("YYYY-MM-DD"),
      }).toString();
      navigate(`/search?${query}`);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl space-y-4">
        <h1 className="text-2xl font-bold text-center text-blue-800">
          TravelPay
        </h1>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            From
          </label>
          <select
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select departure city</option>
            <option value="yangon">Yangon</option>
            <option value="mandalay">Mandalay</option>
            <option value="bagan">Bagan</option>
            <option value="naypyidaw">Naypyidaw</option>
            <option value="pyinoolwin">Pyin Oo Lwin</option>
            <option value="taunggyi">Taunggyi</option>
            <option value="ngapali">Ngapali</option>
            <option value="chaungtha">Chaungtha</option>
            <option value="hpa-an">Hpa-An</option>
            <option value="kachin">Myitkyina</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">To</label>
          <select
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select destination city</option>
            <option value="yangon">Yangon</option>
            <option value="mandalay">Mandalay</option>
            <option value="bagan">Bagan</option>
            <option value="naypyidaw">Naypyidaw</option>
            <option value="pyinoolwin">Pyin Oo Lwin</option>
            <option value="taunggyi">Taunggyi</option>
            <option value="ngapali">Ngapali</option>
            <option value="chaungtha">Chaungtha</option>
            <option value="hpa-an">Hpa-An</option>
            <option value="kachin">Myitkyina</option>
          </select>
        </div>

        <div className="space-y-2 w-full">
          <label className=" w-full block text-sm font-medium text-gray-700 ">
            Departure Date
          </label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholderText="Select a date"
            minDate={new Date()}
          />
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Search Trips
        </button>
      </div>
    </div>
  );
}
