import React, { useState } from "react";

function SearchBar() {
  const [username, setUsername] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", username);
    // GitHub API call will come here later
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
