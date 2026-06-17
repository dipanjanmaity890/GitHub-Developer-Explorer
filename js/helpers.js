
// Formats a large number into a short readable string,like : fmtNum(57400) → "57.4k" | fmtNum(42) → 42
function fmtNum(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + "k";
  return n;
}

// Converts an ISO date string into a relative time label.
// Example: timeAgo("2024-01-10") → "5mo ago"
function timeAgo(dateStr) {
  const days = Math.floor((Date.now() - new Date(dateStr)) / 86400000);
  if (days < 1)   return "today";
  if (days < 30)  return days + "d ago";
  if (days < 365) return Math.floor(days / 30) + "mo ago";
  return Math.floor(days / 365) + "y ago";
}  

// Reads the X-RateLimit-Remaining header from GitHub API response and updates the rate limit counter shown in the header.
// Example: updateRateLimit(response) → shows "API: 58/60 remaining"
function updateRateLimit(response) {
  const remaining = response.headers.get("X-RateLimit-Remaining");
  if (remaining !== null) {
    document.getElementById("rateInfo").textContent = "API: " + remaining + "/60 remaining";
  }
}
