function switchTab(id, btn) {
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-tabs button")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("tab-" + id).classList.add("active");
  btn.classList.add("active");
  if (id === "rhetoric") {
    requestAnimationFrame(positionRhetoricMap);
  }
}

function normalise(value, min, max) {
  return ((value - min) / (max - min)) * 100;
}

function positionRhetoricMap() {
  const map = document.querySelector(".rhetoric-map");
  if (!map) return;

  const yearMin = Number(map.dataset.yearMin || 1900);
  const yearMax = Number(map.dataset.yearMax || 2026);
  const sentimentMin = -1;
  const sentimentMax = 1;

  const nodes = [...map.querySelectorAll(".rhetoric-node")].sort(
    (a, b) => Number(a.dataset.year) - Number(b.dataset.year)
  );

  nodes.forEach((node) => {
    const year = Number(node.dataset.year);
    const sentiment = Number(node.dataset.sentiment);

    const x = normalise(sentiment, sentimentMin, sentimentMax);
    const y = normalise(year, yearMin, yearMax);

    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
  });

  const polyline = map.querySelector(".rhetoric-line");
  if (polyline) {
    const points = nodes.map((node) => {
      const year = Number(node.dataset.year);
      const sentiment = Number(node.dataset.sentiment);
      const x = normalise(sentiment, sentimentMin, sentimentMax);
      const y = normalise(year, yearMin, yearMax);
      return `${x},${y}`;
    });
    polyline.setAttribute("points", points.join(" "));
  }

  map.querySelectorAll(".law-marker").forEach((marker) => {
    const year = Number(marker.dataset.year);
    const y = normalise(year, yearMin, yearMax);
    marker.style.top = `${y}%`;
  });
}

document.addEventListener("DOMContentLoaded", positionRhetoricMap);
window.addEventListener("resize", positionRhetoricMap);