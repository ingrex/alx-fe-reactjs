import { useState } from "react";
import UserContext from "./UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const [user] = useState({
    name: "Kingsley Chinedu",
    email: "kingsley@example.com",
    bio: "Software Engineer passionate about problem solving and innovation."
  });

  return (
    <UserContext.Provider value={user}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
