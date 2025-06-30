// pages/unavailable.js

export default function UnavailablePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold mb-4">🚫 Payments Unavailable</h1>
        <p className="text-lg text-gray-300">
          We are currently not accepting payments. Please check back later.
        </p>
      </div>
    </div>
  );
}
