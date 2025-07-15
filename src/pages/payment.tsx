import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Payment() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvv, setCvv] = useState("")

    const handlePayment = () => {
        if (!name || !cardNumber || !expiry || !cvv) {
            alert("Please fill all payment details")
            return
        }

        navigate("/payment-success")
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
            <h2 className="text-xl font-bold mb-4">Payment for Trip ID: {id}</h2>

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Name on Card"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    maxLength={16}
                />
                <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    maxLength={5}
                />
                <input
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    maxLength={3}
                />
            </div>

            <button
                onClick={handlePayment}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Confirm Payment
            </button>
        </div>
    )
}



