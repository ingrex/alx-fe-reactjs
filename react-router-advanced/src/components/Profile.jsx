import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>

      <nav className="flex gap-4 mb-6">
        <Link
          to="details"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Profile Details
        </Link>
        <Link
          to="settings"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Profile Settings
        </Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
