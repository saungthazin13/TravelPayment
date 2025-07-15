
import { useNavigate } from "react-router-dom"

export default function Success() {
    const navigate = useNavigate()

    return (
        <div className="max-w-md mx-auto p-6 text-center mt-20 bg-gray-100 rounded shadow">
            <h1 className="text-3xl font-bold mb-4 text-blue-700">Payment Successful !</h1>
            <p className="mb-6 text-blue-800">
                Thank you for your payment. Your transaction has been completed successfully.
            </p>
            <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
                Back to Home
            </button>
        </div>
    )
}
