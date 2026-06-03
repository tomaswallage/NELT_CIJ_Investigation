(function () {
  let frameChartReady = false;

  async function loadCSV(path) {
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error(`Failed to load ${path}`);
    }

    const text = await res.text();
    const rows = text.trim().split(/\r?\n/);
    const headers = rows[0].split(",");

    return rows.slice(1).map((row) => {
      const values = row.split(",");
      const obj = {};

      headers.forEach((header, i) => {
        obj[header] = values[i];
      });

      return obj;
    });
  }

  function toNumber(value) {
    if (value === undefined || value === null || value === "") return null;
    const num = Number(value);
    return Number.isNaN(num) ? null : num;
  }

  function prepFrameData(rows) {
    return rows
      .map((d) => ({
        year: toNumber(d.year),
        threat: toNumber(d.threat_crisis_per_million_words),
        control: toNumber(d.control_legality_per_million_words),
        humanitarian: toNumber(d.humanitarian_per_million_words),
        integration: toNumber(d.integration_economy_per_million_words)
      }))
      .filter((d) => d.year !== null)
      .sort((a, b) => a.year - b.year);
  }

  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);

    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }

  function rgba(hex, alpha) {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  function getChartElement() {
    return document.getElementById("frame-comparison-chart");
  }

  function buildButtons(frames, data) {
    function visibleForSingleFrame(frameKey) {
      return frames.flatMap((frame) => {
        const active = frame.key === frameKey;
        return [active, active];
      });
    }

    function visibleForAllFrames() {
      return new Array(data.length).fill(true);
    }

    return [
      {
        label: "All frames",
        method: "update",
        args: [
          { visible: visibleForAllFrames() },
          { title: { text: "All frames over time" } }
        ]
      },
      ...frames.map((frame) => ({
        label: frame.label,
        method: "update",
        args: [
          { visible: visibleForSingleFrame(frame.key) },
          { title: { text: `${frame.label} over time` } }
        ]
      }))
    ];
  }

  async function initialiseFrameChart() {
    const chartEl = getChartElement();
    if (!chartEl || typeof Plotly === "undefined") return;

    if (frameChartReady) {
      Plotly.Plots.resize(chartEl);
      return;
    }

    const guardianRaw = await loadCSV("guardian_yearly_frame_summary.csv");
    const telegraphRaw = await loadCSV("telegraph_yearly_frame_summary.csv");

    const guardian = prepFrameData(guardianRaw);
    const telegraph = prepFrameData(telegraphRaw);

    const allYears = [
      ...new Set([
        ...guardian.map((d) => d.year),
        ...telegraph.map((d) => d.year)
      ])
    ].sort((a, b) => a - b);

    const frames = [
      { key: "threat", label: "Threat / Crisis", color: "#d73027" },
      { key: "control", label: "Control / Legality", color: "#4575b4" },
      { key: "humanitarian", label: "Humanitarian", color: "#1a9850" },
      { key: "integration", label: "Integration / Economy", color: "#984ea3" }
    ];

    const data = [];

    frames.forEach((frame) => {
      data.push({
        x: guardian.map((d) => d.year),
        y: guardian.map((d) => d[frame.key]),
        mode: "lines+markers",
        name: `Guardian — ${frame.label}`,
        line: {
          color: rgba(frame.color, 0.45),
          width: 3,
          shape: "linear"
        },
        marker: {
          color: rgba(frame.color, 0.45),
          size: 6,
          symbol: "circle"
        },
        hovertemplate:
          "<b>Guardian</b><br>" +
          frame.label +
          "<br>Year %{x}<br>Per million words %{y:.0f}<extra></extra>",
        visible: true
      });

      data.push({
        x: telegraph.map((d) => d.year),
        y: telegraph.map((d) => d[frame.key]),
        mode: "lines+markers",
        name: `Telegraph — ${frame.label}`,
        line: {
          color: rgba(frame.color, 1),
          width: 3.2,
          shape: "linear"
        },
        marker: {
          color: rgba(frame.color, 1),
          size: 6,
          symbol: "circle"
        },
        hovertemplate:
          "<b>Telegraph</b><br>" +
          frame.label +
          "<br>Year %{x}<br>Per million words %{y:.0f}<extra></extra>",
        visible: true
      });
    });

    const buttons = buildButtons(frames, data);

    const layout = {
      title: {
        text: "All frames over time",
        x: 0,
        xanchor: "left",
        font: {
          family: '"IBM Plex Mono", monospace',
          size: 18,
          color: "#0d0d0d"
        }
      },
      paper_bgcolor: "#ffffff",
      plot_bgcolor: "#ffffff",
      margin: {
        t: 96,
        r: 24,
        b: 72,
        l: 64
      },
      height: 620,
      hovermode: "closest",
      font: {
        family: '"Helvetica Neue", sans-serif',
        size: 12,
        color: "#0d0d0d"
      },
      xaxis: {
        title: {
          text: "Year",
          font: {
            family: '"IBM Plex Mono", monospace',
            size: 11,
            color: "#8d857f"
          }
        },
        tickmode: "array",
        tickvals: allYears,
        ticktext: allYears.map(String),
        tickangle: -45,
        showgrid: true,
        gridcolor: "rgba(42, 42, 42, 0.12)",
        zeroline: false,
        linecolor: "#2a2a2a",
        tickfont: {
          family: '"IBM Plex Mono", monospace',
          size: 10,
          color: "#8d857f"
        }
      },
      yaxis: {
        title: {
          text: "Per million words",
          font: {
            family: '"IBM Plex Mono", monospace',
            size: 11,
            color: "#8d857f"
          }
        },
        showgrid: true,
        gridcolor: "rgba(42, 42, 42, 0.12)",
        zeroline: false,
        linecolor: "#2a2a2a",
        tickfont: {
          family: '"IBM Plex Mono", monospace',
          size: 10,
          color: "#8d857f"
        }
      },
      legend: {
        orientation: "h",
        x: 0,
        y: -0.2,
        xanchor: "left",
        yanchor: "top",
        bgcolor: "rgba(224, 90, 30, 0.04)",
        bordercolor: "#2a2a2a",
        borderwidth: 1,
        traceorder: "grouped",
        font: {
          family: '"Helvetica Neue", sans-serif',
          size: 12,
          color: "#0d0d0d"
        }
      },
      updatemenus: [
        {
          type: "dropdown",
          x: 1,
          y: 1.16,
          xanchor: "right",
          yanchor: "top",
          showactive: true,
          bgcolor: "#ffffff",
          bordercolor: "#2a2a2a",
          borderwidth: 1,
          font: {
            family: '"IBM Plex Mono", monospace',
            size: 11,
            color: "#0d0d0d"
          },
          buttons
        }
      ]
    };

    Plotly.newPlot(chartEl, data, layout, {
      responsive: true,
      displayModeBar: false
    });

    frameChartReady = true;
  }

  function resizeFrameChart() {
    const chartEl = getChartElement();
    if (!chartEl || typeof Plotly === "undefined" || !chartEl.data) return;
    Plotly.Plots.resize(chartEl);
  }

  function rhetoricTabIsActive() {
    const rhetoricTab = document.getElementById("tab-rhetoric");
    return rhetoricTab && rhetoricTab.classList.contains("active");
  }

  function runChartWhenVisible() {
    if (!rhetoricTabIsActive()) return;
    initialiseFrameChart().catch((err) => {
      console.error("Frame chart failed to initialise:", err);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    runChartWhenVisible();
  });

  window.addEventListener("resize", () => {
    if (rhetoricTabIsActive()) {
      resizeFrameChart();
    }
  });

  const originalSwitchTab = window.switchTab;

  if (typeof originalSwitchTab === "function") {
    window.switchTab = function (id, btn) {
      originalSwitchTab(id, btn);

      if (id === "rhetoric") {
        requestAnimationFrame(() => {
          runChartWhenVisible();
          resizeFrameChart();
        });
      }
    };
  }

  window.initialiseFrameChart = initialiseFrameChart;
  window.resizeFrameChart = resizeFrameChart;
})();