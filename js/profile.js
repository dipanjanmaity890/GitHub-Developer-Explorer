// Renders the user profile card and the stats strip.

// Fills in the profile card with data from the GitHub user object.
// Sets avatar image, name, login, bio, and location.
function renderProfile(profile) {
  document.getElementById("avatar").src  = profile.avatar_url;
  document.getElementById("name").textContent = profile.name || profile.login;
  document.getElementById("login").textContent = "@" + profile.login;
  document.getElementById("bio").textContent = profile.bio || "";
  document.getElementById("location").textContent= profile.location
    ? "📍 " + profile.location
    : "";
}

// Fills in the 4 stat boxes: Repos, Followers, Following, Total Stars.
// Total Stars is computed by adding up stargazers_count across all repos
// using Array.reduce() — not directly available in the profile object.
function renderStats(profile, repos) {
  const totalStars = repos.reduce(function (sum, r) {
    return sum + r.stargazers_count;
  }, 0);

  document.getElementById("statRepos").textContent     = fmtNum(profile.public_repos);
  document.getElementById("statFollowers").textContent = fmtNum(profile.followers);
  document.getElementById("statFollowing").textContent = fmtNum(profile.following);
  document.getElementById("statStars").textContent     = fmtNum(totalStars);
}
