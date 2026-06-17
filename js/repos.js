
// Renders the language doughnut chart and the repo card list.
// Handles sort and filter controls.
// Depends on: state.js (allRepos, chartInstance, LANG_COLORS),
//             helpers.js (fmtNum, timeAgo)
// ============================================================

// Builds the language breakdown doughnut chart using Chart.js.
// Uses reduce() to count how many repos use each language,
// then sorts and picks the top 7.
function renderChart(repos) {

  // Count occurrences of each language across all repos
  const langCount = repos.reduce(function (acc, repo) {
    if (repo.language) {
      acc[repo.language] = (acc[repo.language] || 0) + 1;
    }
    return acc;
  }, {});

  // Convert object to array, sort by count descending, take top 7
  const sorted = Object.entries(langCount)
    .sort(function (a, b) { return b[1] - a[1]; })
    .slice(0, 7);

  // Build three parallel arrays that Chart.js needs
  const labels = sorted.map(function (item) { return item[0]; });
  const data   = sorted.map(function (item) { return item[1]; });
  const colors = labels.map(function (l) { return LANG_COLORS[l] || "#8b949e"; });

  // Destroy old chart before drawing a new one
  if (chartInstance) {
    chartInstance.destroy();
  }

  // Draw the new doughnut chart and save instance to global
  chartInstance = new Chart(document.getElementById("langChart"), {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data:            data,
        backgroundColor: colors,
        borderColor:     "#161b22",
        borderWidth:     2
      }]
    },
    options: {
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: "#8b949e", font: { size: 11 }, boxWidth: 12 }
        }
      }
    }
  });
}

// Renders the repo card list.
// Called on first load AND every time the user changes sort or filter.
// Reads from global allRepos — no extra API call needed.
function renderRepos() {
  const sortBy = document.getElementById("sortSelect").value;
  const filter = document.getElementById("filterInput").value.toLowerCase().trim();

  // filter() — keep only repos matching the search term
  let repos = allRepos.filter(function (r) {
    if (!filter) return true;
    return r.name.toLowerCase().includes(filter)
        || (r.language    || "").toLowerCase().includes(filter)
        || (r.description || "").toLowerCase().includes(filter);
  });

  // sort() — reorder by the selected criterion
  repos.sort(function (a, b) {
    if (sortBy === "stars")   return b.stargazers_count - a.stargazers_count;
    if (sortBy === "forks")   return b.forks_count - a.forks_count;
    if (sortBy === "updated") return new Date(b.updated_at) - new Date(a.updated_at);
    if (sortBy === "name")    return a.name.localeCompare(b.name);
    return 0;
  });

  // Update repo count label
  document.getElementById("repoCount").textContent = "(" + repos.length + ")";

  // map() each repo to an HTML card string, join() all into one string,
  // then set as innerHTML of the repo list container
  document.getElementById("repoList").innerHTML = repos.map(function (r) {
    const langColor = LANG_COLORS[r.language] || "#8b949e";
    const langDot = r.language
      ? `<span style="width:10px;height:10px;border-radius:50%;
                      background:${langColor};display:inline-block;"></span> ${r.language}`
      : "";
    return `
      <div class="repo-card">
        <a href="${r.html_url}" target="_blank">${r.name}</a>
        <p>${r.description || ""}</p>
        <div class="repo-meta">
          <span>⭐ ${fmtNum(r.stargazers_count)}</span>
          <span>🍴 ${fmtNum(r.forks_count)}</span>
          <span>${langDot}</span>
          <span>Updated ${timeAgo(r.updated_at)}</span>
        </div>
      </div>`;
  }).join("");
}

// Enter key support — triggers search when Enter is pressed in the input
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("searchInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") searchUser();
  });
});