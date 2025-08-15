//components/Navbar/AuthControls.jsx
"use client";

export default function AuthControls({ user, onLoginClick, onLogout, mobile }) {
  if (user) {
    return (
      <div
        className={`flex items-center gap-3 ${mobile ? "mt-4" : ""}`}
      >
        <div
          className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-bold text-lg text-blue-600"
          aria-label={`Profile avatar for ${user.name}`}
        >
          {user.name[0]}
        </div>
        <span className="font-medium">{user.name}</span>
        <button
          onClick={onLogout}
          className="text-red-500 border border-red-400 px-3 py-1 rounded-full hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={onLoginClick}
      className={`bg-white text-blue-600 px-4 py-2 rounded-full border border-blue-600 font-semibold shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
        mobile ? "w-full bg-blue-600 text-white hover:bg-blue-700 mt-4" : ""
      }`}
    >
      Login
    </button>
  );
}
