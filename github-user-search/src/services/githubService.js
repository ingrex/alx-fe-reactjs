import axios from "axios";

/**
 * Fetch users from GitHub Search API with advanced filters.
 * @param {string} username - GitHub username (can be partial).
 * @param {string} location - Location filter.
 * @param {number} minRepos - Minimum repositories filter.
 * @returns {Promise<Object>} GitHub search results
 */
export async function fetchUserData(username, location = "", minRepos = 0) {
  try {
    let query = username ? `${username}` : "";

    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos > 0) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
}
