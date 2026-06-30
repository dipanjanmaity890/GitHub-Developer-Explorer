// ============================================================
// All GitHub REST API calls using fetch() and Promise chaining.
// Depends on: helpers.js (updateRateLimit)
// ============================================================

// Fetches a single user's profile from GitHub API.
// Returns a Promise that resolves to the profile object.
// Endpoint: GET /users/{username}
function fetchProfile(username) {
  const token = document.getElementById("githubToken")?.value.trim();
  const options = token ? { headers: { "Authorization": `Bearer ${token}` } } : {};

  return fetch("https://api.github.com/users/" + username, options)
    .then(function (res) {
      updateRateLimit(res);
      if (!res.ok) {
        if (res.status === 403) {
          throw new Error("GitHub API rate limit (60 requests/hour) exceeded. Please try again later.");
        }
        throw new Error(
          res.status === 404 ? "User not found." : "API error: " + res.status
        );
      }
      return res.json();
    });
}

// Fetches up to 100 repositories for a given user.
// Returns a Promise that resolves to an array of repo objects.
// Endpoint: GET /users/{username}/repos
function fetchRepos(username) {
  const token = document.getElementById("githubToken")?.value.trim();
  const options = token ? { headers: { "Authorization": `Bearer ${token}` } } : {};

  return fetch(
    "https://api.github.com/users/" + username + "/repos?per_page=100&sort=pushed",
    options
  )
    .then(function (res) {
      updateRateLimit(res);
      if (!res.ok) {
        if (res.status === 403) {
          throw new Error("GitHub API rate limit (60 requests/hour) exceeded. Please try again later.");
        }
        throw new Error("Failed to fetch repositories.");
      }
      return res.json();
    });
}

// Main search function — called when user clicks Search or presses Enter.
// Fires both API calls simultaneously using Promise.all(),
// then passes results to the render functions.
function searchUser() {
  const username = document.getElementById("searchInput").value.trim();
  if (!username) return;

  // Reset state and show loading
  allRepos = [];
  document.getElementById("profileSection").style.display = "none";
  document.getElementById("errorMsg").style.display       = "none";
  document.getElementById("loading").style.display        = "block";

  // Promise.all fires both fetches at the same time
  Promise.all([fetchProfile(username), fetchRepos(username)])
    .then(function (results) {
      const profile = results[0];
      const repos   = results[1];

      allRepos = repos;  // save to global so renderRepos() can reuse

      renderProfile(profile);      // profile.js
      renderStats(profile, repos); // profile.js
      renderChart(repos);          // chart.js
      renderRepos();               // repos.js

      document.getElementById("loading").style.display        = "none";
      document.getElementById("profileSection").style.display = "block";
    })
    .catch(function (err) {
      document.getElementById("loading").style.display  = "none";
      document.getElementById("errorMsg").style.display = "block";
      document.getElementById("errorMsg").textContent   = err.message;
    });
}
