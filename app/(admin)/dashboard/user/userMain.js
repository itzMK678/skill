"use client";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../../public/logo.png"
import { getDatabase, ref, update } from "firebase/database";
import { db } from "../../../lib/firebase";



export default function Password() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("@Email");

  const handleChangePassword = async () => {
    setError(null);
    if (newPassword.length < 6) {
      setError("New password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
   

     
      const userId = "ksaladjpoasdjpoeijwqemdpowejdpoq";
      const userRef = ref(db, `users/${userId}`);
      await update(userRef, {
        password: newPassword, // Update password field
        updatedAt: new Date().toISOString(), 
      });



      setOldPassword("");
      setNewPassword("");
      alert("Password updated successfully in Realtime Database!");
    } catch (error) {
      console.error("Error updating password: ", error);
      setError(error.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-gray-900 text-purple-100 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-6">
          Change Password
        </h2>
        <div className="flex flex-col items-center mb-8">
         <div
  className="w-20 h-20 bg-cover bg-center rounded-full mb-3 border-4 border-purple-500"
  style={{ backgroundImage: `url(${logo.src})` }}
></div>
          
        </div>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="old-password"
              className="block text-sm mb-1 text-purple-300"
            >
              Old Password
            </label>
            <div className="relative">
              <input
                id="old-password"
                type={showOldPassword ? "text" : "password"}
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-purple-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-100"
                placeholder="Enter old password"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-200"
              >
                {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label
              htmlFor="new-password"
              className="block text-sm mb-1 text-purple-300"
            >
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-purple-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-100"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-200"
              >
                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            onClick={handleChangePassword}
            disabled={loading}
            className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </div>
    </div>
  );
}