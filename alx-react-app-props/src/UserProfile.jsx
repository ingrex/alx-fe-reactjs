import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px" }}>
      <h2>{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
}

export default UserProfile;
