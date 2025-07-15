# React + TypeScript + Vite
# Trip Payment App
This is a front-end web application built with **React + TypeScript + Tailwind CSS** + shadcn/ui CSS**  that allows users to:

- Search for trips
- View trip details
- Fill in payment details
- Simulate a payment
- Get a success confirmation



## Step-by-Step UI Workflow

1. Home Page
   - This is the starting point of the app.
   - You will see a welcome message or buttons to navigate to the trip search page.

2. Search Page 
   - You can search available trips using filters or search input.
   - Each trip result includes a **"View Details"** button.

3. Trip Detail Page 
   - Clicking a trip opens this page.
   - It shows all the information related to the selected trip.
   - Has a **"Proceed to Payment"** button that routes to the payment form using that trip’s ID.

4. Payment Page
   - A form to fill **Cardholder Name**, **Card Number**, **Expiry Date**, and **CVV**.
   - Form includes simple validation (no empty fields).
   - After submitting, simulates a successful payment and routes to the success page.

5. Success Page
   - Displays a success message: **“Payment Successful”**.
   - Includes a button to return to home or start a new search.

---
1. Clone the repository
git clone https://github.com/saungthazin13/TravelPayment
cd TravelPayment
npm install
npm run dev

## Live Demo


