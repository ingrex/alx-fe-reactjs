import axios from "axios";

const BASE_URL = "https://api.github.com/users";

/**
 * Fetch user data from GitHub API
 * @param {string} username
 * @returns {object|null}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
