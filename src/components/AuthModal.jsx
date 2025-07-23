"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthModal({ open, onClose, onLogin }) {
  const [showRegister, setShowRegister] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-800 text-2xl font-bold"
          aria-label="Close"
        >&times;</button>
        {!showRegister ? (
          <LoginForm
            onLogin={user => {
              onLogin(user);
              onClose();
            }}
            switchToRegister={() => setShowRegister(true)}
          />
        ) : (
          <RegisterForm
            onRegister={() => setShowRegister(false)}
            switchToLogin={() => setShowRegister(false)}
          />
        )}
      </div>
    </div>
  );
}
