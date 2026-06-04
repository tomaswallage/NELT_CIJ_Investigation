(() => {
  const SVG_NS = "http://www.w3.org/2000/svg";

  const INLINE_VIDEO_META = {
    "6": {
      time: "11:34 PM",
      mins: 1414,
      caption: "Safely arrived home.\nWhat a beautiful experience.\n#UniteTheKingdom",
    },
    "12": {
      time: "10:27 PM",
      mins: 1347,
      caption: "Been a good day in London ❤️ #UniteTheKingdom 🇬🇧",
    },
    "33": {
      time: "8:56 PM",
      mins: 1256,
      caption:
        "“Hardly anyone was at this new Tommy Robinson rally”…\n\n… yup, no body showed up (allegedly) 😂, and people were shoulder to shoulder walking down that road for hours. 🫡🇬🇧\n\n#UTK\n#UniteTheKingdom",
    },
    "34": {
      time: "8:46 PM",
      mins: 1246,
      caption: "#Unitethekingdom",
    },
    "36": {
      time: "8:14 PM",
      mins: 1214,
      caption:
        "Where the true flags are raised, there you can find the truth and peace.\n\nIranian and British patriots stand together for their homeland, for their country.\n\nMake Iran Great Again.\nUnite The Kingdom.\n\n🇮🇷🇮🇱🇬🇧\n\n#KingRezaPahlavi‌ForIran \n#UniteTheKingdom",
    },
    "44": {
      time: "7:53 PM",
      mins: 1193,
      caption: "#unitethekingdom",
    },
    "50": {
      time: "7:39 PM",
      mins: 1179,
      caption: "#UnitetheKingdom",
    },
    "51": {
      time: "7:37 PM",
      mins: 1177,
      caption: "I don't know this couple but check out those bags. Kudos. 👏🏻\n#UniteTheKingdom #UTK",
    },
    "52": {
      time: "7:24 PM",
      mins: 1164,
      caption: "#utk #unitethekingdom \n@TRobinsonNewEra\n well done everyone 💪",
    },
    "53": {
      time: "7:21 PM",
      mins: 1161,
      caption:
        "Proud of Our Joint History \nas Christian Nations\n\nAmerican broadcaster Glenn Beck addresses the huge crowds at the #UniteTheKingdom rally outside the Palace of Westminster",
    },
    "56": {
      time: "7:10 PM",
      mins: 1150,
      caption:
        "Tommy Robinson had promised that millions will attend his Unite the Kingdom rally but only a few thousands showed up - as compared to his last year’s rally attended by over 100,000 in London #unitethekingdom #nakbahday",
    },
    "62": {
      time: "6:53 PM",
      mins: 1133,
      caption:
        "#UniteTheKingdom #RestoreBritain 🇬🇧🇮🇪🏴🏴",
    },
    "68": {
      time: "6:47 PM",
      mins: 1127,
      caption:
        "Say what he like about \n@TRobinsonNewEra\n but he stood by Iranians when most British politicians didn’t \n\n#FreeIran‌ \n#UniteTheKingdom",
    },
    "87": {
      time: "6:05 PM",
      mins: 1085,
      caption:
        "No slogans. No slurs. No calls for death. No hatred. No calls for the eradication of any nation. No chants against any religion. Just people united under one flag, proudly displaying patriotism, heritage, and love for their country. Unite the Kingdom #unitethekingdom",
    },
    "89": {
      time: "6:00 PM",
      mins: 1080,
      caption: "@TRobinsonNewEra\n and everyone u did us proud I see no hate just love #unitethekingdom",
    },
    "95": {
      time: "5:50 PM",
      mins: 1070,
      caption: "A day of peaceful protest, hope and song. Protect #freedom of speech #UniteTheKingdom",
    },
    "98": {
      time: "5:46 PM",
      mins: 1066,
      caption: "So proud to be an Iranian!\n#UniteTheKingdom",
    },
    "100": {
      time: "5:44 PM",
      mins: 1064,
      caption:
        "This is the final battle, Pahlavi will return home. \n\nLondon, 16 May, Unite the Kingdom Rally \n\n#KingRezaPahlavi‌ForIran\n#UnitetheKingdom",
    },
    "110": {
      time: "5:19 PM",
      mins: 1039,
      caption:
        "Tommy Robinson speaks out on Parliament Square during his #UniteTheKingdom rally, and Whitehall is almost completely deserted.",
    },
    "113": {
      time: "5:09 PM",
      mins: 1029,
      caption:
        "The Main Man 🏴🇬🇧\n#UniteTheKingdom \n@TRobinsonNewEra",
    },
    "121": {
      time: "4:49 PM",
      mins: 1009,
      caption:
        "🇬🇧🇬🇧🇬🇧 Amazing Day 🇬🇧🇬🇧🇬🇧\n#unitethekingdom \n#UTK \n👍",
    },
    "140": {
      time: "4:09 PM",
      mins: 969,
      caption: "An unemployed wanker soon\n#utk #unitethekingdom",
    },
    "145": {
      time: "4:04 PM",
      mins: 964,
      caption:
        "Wow… 😮 there might be much more than last time… 💪🏻💪🏻\n\nOrders of magnitude more than the 50,000 the traitor media people said 😂\n\n#UTK\n#UniteTheKingdom",
    },
    "153": {
      time: "3:56 PM",
      mins: 956,
      caption: "Enjoying a wonderful spot of racist music at #unitethekingdom #utk",
    },
    "168": {
      time: "3:36 PM",
      mins: 936,
      caption: "Thanks to \n@daveatherton\n for sharing with us! #unitethekingdom",
    },
    "179": {
      time: "3:14 PM",
      mins: 914,
      caption: "#unitethekingdom",
    },
    "182": {
      time: "2:57 PM",
      mins: 897,
      caption:
        "London Now\n\nMajestic Gathering of British and Iranian Patriots\n 🇮🇷✌🏼🇬🇧\n\n#UniteTheKingdom",
    },
    "183": {
      time: "2:57 PM",
      mins: 897,
      caption:
        "What a beautiful sight 🏴 #UniteTheKingdom \n@TRobinsonNewEra\n x",
    },
    "185": {
      time: "2:41 PM",
      mins: 881,
      caption:
        "@Keir_Starmer\n is this the far right ur talking about i see nothing but love #unitethekingdom #kierstarmer \n@TRobinsonNewEra",
    },
    "187": {
      time: "... 2:38 PM",
      mins: 878,
      caption:
        "The fact of seeing so many people unite around shared convictions highlights just how important issues of identity and orientation are for many citizens today. #UniteTheKingdom #NationalUnity #FutureOfBritain ❤️",
    },
    "189": {
      time: "2:25 PM",
      mins: 865,
      caption:
        "Passed through #UniteTheKingdom as it’s on my way to the spa…\n\nA Bob Marley song is currently playing. The vibe is actually similar to the Notting Hill Carnival, just British instead of Afro-Caribbean.\n\nI smell weed, see some dilated pupils, lots of booze, cheerful singing and chants of “Keir Starmer’s a wanker”\n\nMostly white, some black and brown faces. Not threatening at all at present. Hope it stays this way…",
    },
    "195": {
      time: "2:16 PM",
      mins: 856,
      caption:
        "Finally at Parliament Square 🫡🇬🇧\nAnd the Patriots keep coming 😲👌🏻\n\n… and that’s me.\nOff for a pint (or 3) and a few packs of pork scratchings. 💪🏻\n\n#UTK #UniteTheKingdom",
    },
    "197": {
      time: "2:11 PM",
      mins: 851,
      caption: "#UniteTheKingdom #UTK 🇬🇧",
    },
    "201": {
      time: "1:58 PM",
      mins: 838,
      caption:
        "London Right Now\n\nA gathering of British and Iranian patriots, accompanied by the Lion and Sun flag of Iran and an image of Reza Shah II.\n\n#UniteTheKingdom",
    },
    "204": {
      time: "1:46 PM",
      mins: 826,
      caption:
        "Playing Ghost Town at the #UniteTheKingdom rally when there’s literally nobody there! \n\nOh the IRONY! 🤣🤣🤣🤣🤣",
    },
    "205": {
      time: "1:46 PM",
      mins: 826,
      caption:
        "Beautiful People. 🥰🥰🥰\n\n#UniteTheKingdom #UTK #FourNationsOneKingdom",
    },
    "215": {
      time: "1:33 PM",
      mins: 813,
      caption:
        "Wow 🤩\n\n🎵 Sweet Caroline wah wah wah 🎶\n\n🫡🇬🇧 #UTK #UniteTheKingdom",
    },
    "220": {
      time: "1:20 PM",
      mins: 800,
      caption:
        "London Right Now\n\nPatriotic Iranians residing in Britain supporting Tommy Robinson's call with the national Lion and Sun flag of Iran and an image of Reza Shah II.\n\n#UniteTheKingdom",
    },
    "222": {
      time: "1:16 PM",
      mins: 796,
      caption: "#unitethekingdom Here we go! The march has started 🇬🇧",
    },
    "227": {
      time: "1:11 PM",
      mins: 791,
      caption: "Unite the Kingdom.\nLondon.\nCome and join us.\n#UnitetheKingdom",
    },
    "230": {
      time: "1:07 PM",
      mins: 787,
      caption: "Here we go… 👌🏻🇬🇧\nOn the move.\n\n#UTK #UniteTheKingdom",
    },
    "243": {
      time: "12:51 PM",
      mins: 771,
      caption:
        "Thousands are gathering in London ahead of Tommy Robinson's march, which is set to take off at 1pm \n\n#UniteTheKingdom #UTK #FourNationsOneKingdom",
    },
    "244": {
      time: "12:51 PM",
      mins: 771,
      caption:
        "#UniteTheKingdom , in the UK people are taking to the streets en masse to take the country back from the globalist politicians. They too are fed up with #immigration , replacement 💪❤️ #StarmerOut",
    },
    "245": {
      time: "12:51 PM",
      mins: 771,
      caption: "What a wonderful sight. #UTK #UniteTheKingdom",
    },
    "248": {
      time: "12:48 PM",
      mins: 768,
      caption: "London will be British. \n\n#UniteTheKingdom #UTK #FourNationsOneKingdom",
    },
    "260": {
      time: "12:14 PM",
      mins: 734,
      caption:
        "#unitethekingdom \n\nAt the unite the kingdom march with a sea of patriots. The atmosphere is off the scale. Looking forward to hearing \n@officialsammyuk\n later 🏴💪🏻",
    },
    "265": {
      time: "12:11 PM",
      mins: 731,
      caption:
        "UTK march, Kier Starmer is a wanker\n\n#UniteTheKingdom\n#UK\n#UTK \n#London",
    },
    "286": {
      time: "11:49 AM",
      mins: 709,
      caption: "#UniteTheKingdom A busy turnout and it's only the start.",
    },
    "312": {
      time: "10:58 AM",
      mins: 658,
      caption:
        "The number of people here is staggering… and I was at the first (Sept 13th 2025) #UTK #UniteTheKingdom march. 💪🏻\n\n🫡🇬🇧 - Unite The Kingdom 2 looks like even more people… and it’s only 10:30am - 30 minutes before the start.",
    },
    "325": {
      time: "10:13 AM",
      mins: 613,
      caption:
        "1 hour before #UTK #UniteTheKingdom officially begins… and now BOTH sides of the street are at bursting point 💪🏻\n\nPeople from all over the country, all ages, ethnicities and cultures, Brits and non-Brits - all patriots ❤️🇬🇧",
    },
    "328": {
      time: "10:04 AM",
      mins: 604,
      caption:
        "Male and Female, Black and White, Old and Young… The voice of the people Mr Starmer..\n#UTK #unitethekingdom #Britainfirst",
    },
    "336": {
      time: "9:40 AM",
      mins: 580,
      caption:
        "#UniteTheKingdom\n#UTK - 9:30am… already over 1000 patriots here 🫡🇬🇧\n\nIt doesn’t start officially until 11:00am",
    },
    "341": {
      time: "9:28 AM",
      mins: 568,
      caption: "It has begun…\n#UTK #unitethekingdom #Britainfirst",
    },
  };

  const CONFIG = {
    ROUTE_FILE: "UTK_Route_New.geojson",
    POINTS_FILE: "Video_positions.geojson",
    VIDEO_DIR: "CSV_Videos/",
    MAP_FILE: "map_image.png",
    LEGACY_META_FILE: null,

    MAP_MINX: 529660.4693,
    MAP_MAXX: 530859.5843,
    MAP_MINY: 179484.2842,
    MAP_MAXY: 182672.9419,

    ACTIVE_FRACTION: 0.02,
    START_DEADZONE: 0.01,
    VIDEO_SCALE: 0.75,

    AXIS_TOP_MIN: 540,
    AXIS_BOT_MIN: 1439,

    FRAME_MAP_GAP: 75,
    CAPTION_MAX_WIDTH: 500,
  };

  const state = {
    initialised: false,
    dataLoaded: false,
    overlayBuilt: false,
    progress: 0,
    routeGeo: [],
    points: [],
    routePx: [],
    cumulative: [],
    total: 0,
    activePoint: null,
    layout: null,
    dragging: false,
    legacyMeta: {},
    currentVideoId: null,
    resizeObserver: null,
  };

  const els = {};

  function cache() {
    els.root = document.getElementById("march-root");
    els.stage = document.getElementById("march-stage");
    els.overlay = document.getElementById("march-overlay");

    els.media = document.getElementById("march-media");
    els.caption = document.getElementById("march-caption");
    els.captionTime = document.getElementById("march-caption-time");
    els.captionText = document.getElementById("march-caption-text");

    els.videoFrame = document.getElementById("march-video-frame");
    els.video = document.getElementById("march-video");

    els.mapCol = document.getElementById("march-map-col");
    els.mapImage = document.getElementById("march-map-image");

    els.timeAxis = document.getElementById("march-time-axis");
    els.timeTicks = document.getElementById("march-time-ticks");
    els.activeTime = document.getElementById("march-active-time");

    els.track = document.getElementById("march-track");
    els.trackTicks = document.getElementById("march-track-ticks");
    els.handle = document.getElementById("march-handle");
  }

  async function init() {
    if (state.initialised) return;
    cache();
    if (!els.root || !els.stage || !els.overlay) return;

    state.initialised = true;

    setupDom();
    bindEvents();
    ensureOverlay();
    await loadData();

    if (els.mapImage && !els.mapImage.complete) {
      await new Promise((resolve) => {
        els.mapImage.addEventListener("load", resolve, { once: true });
      });
    }

    refresh();
  }

  let refreshRaf = null;

  function queueRefresh() {
    if (refreshRaf) return;

    refreshRaf = requestAnimationFrame(() => {
      refreshRaf = null;
      refresh();
    });
  }

  function setupDom() {
    if (els.mapImage && !els.mapImage.getAttribute("src")) {
      els.mapImage.setAttribute("src", CONFIG.MAP_FILE);
    }

    if (els.video) {
      els.video.muted = false;
      els.video.loop = true;
      els.video.playsInline = true;
      els.video.preload = "metadata";
      // els.video.setAttribute("muted", "");
      els.video.setAttribute("playsinline", "");
    }

    if (els.track) {
      els.track.setAttribute("role", "slider");
      els.track.setAttribute("aria-label", "March route timeline");
      els.track.setAttribute("aria-valuemin", "0");
      els.track.setAttribute("aria-valuemax", "100");
      els.track.setAttribute("tabindex", "0");
    }
  }

  function bindEvents() {
    if (!els.track) return;

    const onPointerMove = (event) => {
      if (!state.dragging) return;
      setProgressFromClientY(event.clientY);
    };

    const endDrag = () => {
      state.dragging = false;
      document.body.style.userSelect = "";
    };

    els.track.addEventListener("pointerdown", (event) => {
      state.dragging = true;
      document.body.style.userSelect = "none";
      els.track.focus();
      if (els.track.setPointerCapture && event.pointerId != null) {
        try {
          els.track.setPointerCapture(event.pointerId);
        } catch (_) {}
      }
      setProgressFromClientY(event.clientY);
    });

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    els.track.addEventListener("keydown", (event) => {
      const step = 0.01;
      const bigStep = 0.05;

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setProgress(state.progress - step);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setProgress(state.progress + step);
      } else if (event.key === "PageUp") {
        event.preventDefault();
        setProgress(state.progress - bigStep);
      } else if (event.key === "PageDown") {
        event.preventDefault();
        setProgress(state.progress + bigStep);
      } else if (event.key === "Home") {
        event.preventDefault();
        setProgress(0);
      } else if (event.key === "End") {
        event.preventDefault();
        setProgress(1);
      }
    });

    els.trackTicks?.addEventListener("click", (event) => {
      const tick = event.target.closest(".march-track-tick");
      if (!tick) return;
      const point = state.points.find((p) => p.id === tick.dataset.id);
      if (!point || !state.total) return;
      setProgress(point.dist / state.total);
    });

    els.timeTicks?.addEventListener("click", (event) => {
      const tick = event.target.closest(".march-time-tick");
      if (!tick) return;
      const point = state.points.find((p) => p.id === tick.dataset.id);
      if (!point || !state.total) return;
      setProgress(point.dist / state.total);
    });

    els.video?.addEventListener("loadedmetadata", () => {
      updateVideoFrameSize();
      drawConnectors();
    });

    els.video?.addEventListener("loadeddata", () => {
      drawConnectors();
    });

    window.addEventListener("resize", queueRefresh);
    window.addEventListener("load", queueRefresh);

    if ("ResizeObserver" in window) {
      state.resizeObserver = new ResizeObserver(() => queueRefresh());
      [
        els.root,
        els.stage,
        els.media,
        els.mapCol,
        els.timeAxis,
        els.track,
        els.videoFrame,
      ]
        .filter(Boolean)
        .forEach((el) => state.resizeObserver.observe(el));
    }
  }

  function ensureOverlay() {
    if (state.overlayBuilt || !els.overlay) return;

    els.overlay.innerHTML = `
      <path id="march-route-base" class="march-overlay-path-base"></path>
      <path id="march-route-progress" class="march-overlay-path-progress"></path>
      <g id="march-route-ends"></g>
      <g id="march-point-layer"></g>
      <g id="march-connector-layer"></g>
      <circle id="march-playhead" class="march-overlay-playhead" r="5"></circle>
    `;

    els.routeBase = document.getElementById("march-route-base");
    els.routeProgress = document.getElementById("march-route-progress");
    els.routeEnds = document.getElementById("march-route-ends");
    els.pointLayer = document.getElementById("march-point-layer");
    els.connectorLayer = document.getElementById("march-connector-layer");
    els.playhead = document.getElementById("march-playhead");

    state.overlayBuilt = true;
  }

  async function loadData() {
  if (state.dataLoaded) return;

  try {
    const [routeJson, pointsJson] = await Promise.all([
      fetch(CONFIG.ROUTE_FILE).then((r) => {
        if (!r.ok) throw new Error(`Could not load route file: ${CONFIG.ROUTE_FILE}`);
        return r.json();
      }),
      fetch(CONFIG.POINTS_FILE).then((r) => {
        if (!r.ok) throw new Error(`Could not load points file: ${CONFIG.POINTS_FILE}`);
        return r.json();
      }),
    ]);

    state.legacyMeta = { ...INLINE_VIDEO_META };

    state.routeGeo = extractRoute(routeJson);
    state.points = extractPoints(pointsJson).map((point) => ({
      ...point,
      meta: state.legacyMeta[point.id] || null,
      dist: 0,
      x: 0,
      y: 0,
      tickY: 0,
    }));

    state.dataLoaded = true;
  } catch (err) {
    console.error("March timeline failed to load:", err);
  }
}

  function extractLegacyMeta(sourceText) {
    const match = sourceText.match(/const\s+VIDEO_META\s*=\s*(\{[\s\S]*?\});\s*let\s+geo/);
    if (!match) return {};
    try {
      return new Function(`return (${match[1]});`)();
    } catch (error) {
      console.warn("Could not parse VIDEO_META from march_sketch.js", error);
      return {};
    }
  }

  function extractRoute(data) {
    const features = data?.features || [];
    for (const feature of features) {
      const geometry = feature?.geometry;
      if (!geometry) continue;

      if (geometry.type === "LineString" && Array.isArray(geometry.coordinates)) {
        return geometry.coordinates;
      }

      if (geometry.type === "MultiLineString" && Array.isArray(geometry.coordinates)) {
        return geometry.coordinates.flat();
      }
    }
    return [];
  }

  function extractPoints(data) {
    const features = data?.features || [];
    return features
      .map((feature) => {
        const geometry = feature.geometry || {};
        let coord = null;

        if (geometry.type === "Point") {
          coord = geometry.coordinates;
        } else if (geometry.type === "MultiPoint" && geometry.coordinates?.length) {
          coord = geometry.coordinates[0];
        }

        if (!coord || coord.length < 2) return null;

        const id = String(feature.properties?.id ?? "");
        if (!id) return null;

        return {
          id,
          gx: Number(coord[0]),
          gy: Number(coord[1]),
          videoSrc: `${CONFIG.VIDEO_DIR}${id}.mp4`,
        };
      })
      .filter(Boolean);
  }

  function refresh() {
    if (!state.initialised || !state.dataLoaded) return;
    if (!els.stage || !els.root || !els.mapCol || !els.timeAxis || !els.track) return;

    const timelinePanel = document.getElementById("tab-timeline");
    if (timelinePanel && !timelinePanel.classList.contains("active")) return;

    const stageRect = els.stage.getBoundingClientRect();
    if (!stageRect.width || !stageRect.height) return;

    computeLayout();
    buildGeometry();
    renderStatic();
    renderDynamic();
  }

  function computeLayout() {
    const stageRect = els.stage.getBoundingClientRect();
    const mapColRect = els.mapCol.getBoundingClientRect();
    const mediaRect = els.media.getBoundingClientRect();
    const axisRect = els.timeAxis.getBoundingClientRect();
    const trackRect = els.track.getBoundingClientRect();

    const toLocal = (rect) => ({
      x: rect.left - stageRect.left,
      y: rect.top - stageRect.top,
      w: rect.width,
      h: rect.height,
      left: rect.left - stageRect.left,
      top: rect.top - stageRect.top,
      right: rect.right - stageRect.left,
      bottom: rect.bottom - stageRect.top,
      cx: rect.left - stageRect.left + rect.width / 2,
      cy: rect.top - stageRect.top + rect.height / 2,
    });

    const mapAspect =
     els.mapImage.naturalWidth / els.mapImage.naturalHeight;

    const mapLocal = toLocal(mapColRect);
    const imageRect = fitContain(mapLocal, mapAspect);

    state.layout = {
      stage: { w: stageRect.width, h: stageRect.height },
      media: toLocal(mediaRect),
      axis: toLocal(axisRect),
      track: toLocal(trackRect),
      mapBox: mapLocal,
      imageRect,
    };

    els.overlay.setAttribute("viewBox", `0 0 ${stageRect.width} ${stageRect.height}`);
    els.overlay.setAttribute("width", String(stageRect.width));
    els.overlay.setAttribute("height", String(stageRect.height));
  }

  function fitContain(box, aspect) {
    const boxAspect = box.w / box.h;
    let w;
    let h;
    let x;
    let y;

    if (boxAspect > aspect) {
      h = box.h;
      w = h * aspect;
      x = box.x + (box.w - w) / 2;
      y = box.y;
    } else {
      w = box.w;
      h = w / aspect;
      x = box.x;
      y = box.y + (box.h - h) / 2;
    }

    return {
      x,
      y,
      w,
      h,
      right: x + w,
      bottom: y + h,
    };
  }

  function buildGeometry() {
    if (!state.routeGeo.length || !state.layout?.imageRect) {
      state.routePx = [];
      state.cumulative = [0];
      state.total = 0;
      return;
    }

    state.routePx = state.routeGeo.map((coord) => geoToLocal(coord[0], coord[1]));
    state.cumulative = [0];

    for (let i = 1; i < state.routePx.length; i += 1) {
      state.cumulative[i] =
        state.cumulative[i - 1] + distance(state.routePx[i - 1], state.routePx[i]);
    }

    state.total = state.cumulative[state.cumulative.length - 1] || 0;

    state.points.forEach((point) => {
      const localPoint = geoToLocal(point.gx, point.gy);
      point.x = localPoint.x;
      point.y = localPoint.y;
      point.dist = state.total ? projectOntoRoute(localPoint.x, localPoint.y).dist : 0;
      point.tickY = point.meta?.mins != null ? timeY(point.meta.mins) : 0;
    });
  }

  function geoToLocal(x, y) {
    const rect = state.layout.imageRect;
    const px =
      rect.x +
      ((x - CONFIG.MAP_MINX) / (CONFIG.MAP_MAXX - CONFIG.MAP_MINX)) * rect.w;
    const py =
      rect.y +
      ((CONFIG.MAP_MAXY - y) / (CONFIG.MAP_MAXY - CONFIG.MAP_MINY)) * rect.h;
    return { x: px, y: py };
  }

  function distance(a, b) {
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  function buildPathD(points) {
    if (!points.length) return "";
    return points
      .map((point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x.toFixed(3)} ${point.y.toFixed(3)}`
      )
      .join(" ");
  }

  function buildTravelPathD(distanceValue) {
    if (!state.routePx.length) return "";
    if (state.routePx.length === 1) {
      return `M ${state.routePx[0].x} ${state.routePx[0].y}`;
    }

    const d = clamp(distanceValue, 0, state.total);
    const parts = [`M ${state.routePx[0].x.toFixed(3)} ${state.routePx[0].y.toFixed(3)}`];

    let i = 0;
    while (i < state.routePx.length - 1 && state.cumulative[i + 1] < d) {
      i += 1;
      parts.push(`L ${state.routePx[i].x.toFixed(3)} ${state.routePx[i].y.toFixed(3)}`);
    }

    const p = pointAtDistance(d);
    parts.push(`L ${p.x.toFixed(3)} ${p.y.toFixed(3)}`);

    return parts.join(" ");
  }

  function renderStatic() {
    const pathD = buildPathD(state.routePx);
    els.routeBase.setAttribute("d", pathD);
    renderRouteEnds();
    renderTimeTicks();
    renderTrackTicks();
    updateVideoFrameSize();
  }

  function renderRouteEnds() {
    if (!state.routePx.length) {
      els.routeEnds.innerHTML = "";
      return;
    }

    const start = state.routePx[0];
    const end = state.routePx[state.routePx.length - 1];

    els.routeEnds.innerHTML = `
      <rect class="march-overlay-end" x="${start.x - 4.5}" y="${start.y - 4.5}" width="9" height="9"></rect>
      <rect class="march-overlay-end" x="${end.x - 4.5}" y="${end.y - 4.5}" width="9" height="9"></rect>
    `;
  }

  function renderPoints() {
    els.pointLayer.innerHTML = state.points
      .map((point) => {
        const active = state.activePoint?.id === point.id;
        const width = active ? 8 : 6;
        const height = active ? 13 : 10;
        const x = point.x - width / 2;
        const y = point.y - height / 2;
        return `
          <rect
            class="march-overlay-point${active ? " is-active" : ""}"
            data-id="${point.id}"
            x="${x.toFixed(3)}"
            y="${y.toFixed(3)}"
            width="${width}"
            height="${height}"
            rx="0"
            ry="0"
          ></rect>
        `;
      })
      .join("");
  }

  function renderTimeTicks() {
    els.timeTicks.innerHTML = state.points
      .filter((point) => point.meta?.mins != null)
      .map((point) => {
        const top = axisPercent(point.meta.mins);
        return `<span class="march-time-tick" data-id="${point.id}" style="top:${top}%"></span>`;
      })
      .join("");
  }

  function renderTrackTicks() {
    els.trackTicks.innerHTML = state.points
      .map((point) => {
        const top = state.total ? (point.dist / state.total) * 100 : 0;
        return `<span class="march-track-tick" data-id="${point.id}" style="top:${top}%"></span>`;
      })
      .join("");
  }

  function renderDynamic() {
    updateActivePoint();
    updateHandle();
    updatePlayhead();
    updateProgressStroke();
    updateTickStates();
    updateMedia();
    renderPoints();
    drawConnectors();
  }

  function updateHandle() {
    const y = state.progress * 100;
    els.handle.style.top = `${y}%`;
    els.track.setAttribute("aria-valuenow", String(Math.round(state.progress * 100)));
  }

  function updatePlayhead() {
    if (!state.routePx.length) return;
    const p = pointAtDistance(state.progress * state.total);
    els.playhead.setAttribute("cx", p.x);
    els.playhead.setAttribute("cy", p.y);
  }

  function updateProgressStroke() {
    const d = buildTravelPathD(state.progress * state.total);
    els.routeProgress.setAttribute("d", d);
  }

  function updateTickStates() {
    const activeId = state.activePoint?.id;

    els.timeTicks.querySelectorAll(".march-time-tick").forEach((tick) => {
      tick.classList.toggle("is-active", tick.dataset.id === activeId);
    });

    els.trackTicks.querySelectorAll(".march-track-tick").forEach((tick) => {
      tick.classList.toggle("is-active", tick.dataset.id === activeId);
    });
  }

  function updateActivePoint() {
    if (!state.total) {
      state.activePoint = null;
      state.currentVideoId = null;
      return;
    }

    if (state.progress <= CONFIG.START_DEADZONE) {
      if (!els.video.paused) els.video.pause();
      state.activePoint = null;
      state.currentVideoId = null;
      return;
    }

    const scrubDist = state.progress * state.total;
    const range = CONFIG.ACTIVE_FRACTION * state.total;

    let best = null;
    let bestDist = Infinity;

    state.points.forEach((point) => {
      const d = Math.abs(point.dist - scrubDist);
      if (d < range && d < bestDist) {
        best = point;
        bestDist = d;
      }
    });

    if (state.activePoint?.id === best?.id) return;

    if (!els.video.paused) {
      els.video.pause();
    }

    state.activePoint = best || null;
    state.currentVideoId = null;
  }

  function updateMedia() {
    const point = state.activePoint;
    const meta = point?.meta;

    if (!point) {
      els.caption.hidden = true;
      els.videoFrame.hidden = true;
      els.activeTime.hidden = true;
      if (els.video.getAttribute("src")) {
        els.video.pause();
        els.video.removeAttribute("src");
        els.video.load();
      }
      return;
    }

    if (meta?.caption) {
      els.caption.hidden = false;
      els.captionTime.textContent = meta.time || "";
      els.captionText.textContent = meta.caption || "";
    } else {
      els.caption.hidden = true;
      els.captionTime.textContent = "";
      els.captionText.textContent = "";
    }

    if (meta?.time && meta?.mins != null) {
      els.activeTime.hidden = false;
      els.activeTime.textContent = meta.time;
      els.activeTime.style.top = `${axisPercent(meta.mins)}%`;
    } else {
      els.activeTime.hidden = true;
    }

    els.videoFrame.hidden = false;

    if (state.currentVideoId !== point.id) {
      state.currentVideoId = point.id;
      els.video.src = point.videoSrc;
      els.video.currentTime = 0;
      els.video.load();
      const playPromise = els.video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    }

    updateVideoFrameSize();
  }

  function updateVideoFrameSize() {
    if (!state.layout || !els.videoFrame) return;

    const media = state.layout.media;
    const imageRect = state.layout.imageRect;
    const maxLongSide = imageRect.h * CONFIG.VIDEO_SCALE;

    let vw = 16;
    let vh = 9;

    if (els.video.videoWidth && els.video.videoHeight) {
      vw = els.video.videoWidth;
      vh = els.video.videoHeight;
    }

    let scale = maxLongSide / Math.max(vw, vh);
    let width = vw * scale;
    let height = vh * scale;

    const maxWidth = Math.max(180, media.w - 8);
    const maxHeight = Math.max(220, media.h * 0.56);

    if (width > maxWidth) {
      const s = maxWidth / width;
      width *= s;
      height *= s;
    }

    if (height > maxHeight) {
      const s = maxHeight / height;
      width *= s;
      height *= s;
    }

    els.videoFrame.style.width = `${width}px`;
    els.videoFrame.style.height = `${height}px`;
  }

  function drawConnectors() {
    const point = state.activePoint;
    const meta = point?.meta;

    if (!point) {
      els.connectorLayer.innerHTML = "";
      return;
    }

    const stageRect = els.stage.getBoundingClientRect();
    const toLocal = (rect) => ({
      left: rect.left - stageRect.left,
      top: rect.top - stageRect.top,
      right: rect.right - stageRect.left,
      bottom: rect.bottom - stageRect.top,
      cx: rect.left - stageRect.left + rect.width / 2,
      cy: rect.top - stageRect.top + rect.height / 2,
    });

    const handleRect = toLocal(els.handle.getBoundingClientRect());

    const activeTick = meta
      ? els.timeTicks.querySelector(`.march-time-tick[data-id="${point.id}"]`)
      : null;
    const tickRect = activeTick ? toLocal(activeTick.getBoundingClientRect()) : null;

    const videoRect = !els.videoFrame.hidden
      ? toLocal(els.videoFrame.getBoundingClientRect())
      : null;

    const captionRect = !els.caption.hidden
      ? toLocal(els.caption.getBoundingClientRect())
      : null;

    const parts = [];

    if (tickRect) {
      parts.push(`
        <line class="march-connector-line" x1="${handleRect.cx}" y1="${handleRect.cy}" x2="${tickRect.cx}" y2="${tickRect.cy}"></line>
        <line class="march-connector-line" x1="${tickRect.cx}" y1="${tickRect.cy}" x2="${point.x}" y2="${point.y}"></line>
      `);
    }

    if (videoRect) {
      const topRightX = videoRect.right;
      const topRightY = videoRect.top;
      const bottomRightX = videoRect.right;
      const bottomRightY = videoRect.bottom;

      parts.push(`
        <polygon class="march-connector-beam" points="${topRightX},${topRightY} ${point.x},${point.y} ${bottomRightX},${bottomRightY}"></polygon>
        <line class="march-connector-line" x1="${topRightX}" y1="${topRightY}" x2="${point.x}" y2="${point.y}"></line>
        <line class="march-connector-line" x1="${bottomRightX}" y1="${bottomRightY}" x2="${point.x}" y2="${point.y}"></line>
      `);
    }

    if (videoRect && captionRect) {
      const cblX = captionRect.left;
      const cblY = captionRect.bottom;
      const cbrX = captionRect.right;
      const cbrY = captionRect.bottom;

      const vtlX = videoRect.left;
      const vtlY = videoRect.top;
      const vtrX = videoRect.right;
      const vtrY = videoRect.top;

      parts.push(`
        <polygon class="march-connector-beam" points="${vtlX},${vtlY} ${vtrX},${vtrY} ${cbrX},${cbrY} ${cblX},${cblY}"></polygon>
        <line class="march-connector-line" x1="${vtlX}" y1="${vtlY}" x2="${cblX}" y2="${cblY}"></line>
        <line class="march-connector-line" x1="${vtrX}" y1="${vtrY}" x2="${cbrX}" y2="${cbrY}"></line>
      `);
    }

    els.connectorLayer.innerHTML = parts.join("");
  }

  function axisPercent(mins) {
    if (mins == null || Number.isNaN(Number(mins))) return 0;
    const top = CONFIG.AXIS_TOP_MIN;
    const bottom = CONFIG.AXIS_BOT_MIN;
    const clamped = clamp((Number(mins) - top) / (bottom - top), 0, 1);
    return clamped * 100;
  }

  function timeY(mins) {
    if (!state.layout) return 0;
    return state.layout.axis.top + (axisPercent(mins) / 100) * state.layout.axis.h;
  }

  function projectOntoRoute(px, py) {
    let bestD2 = Infinity;
    let result = { dist: 0 };

    for (let i = 0; i < state.routePx.length - 1; i += 1) {
      const a = state.routePx[i];
      const b = state.routePx[i + 1];
      const abx = b.x - a.x;
      const aby = b.y - a.y;
      const len2 = abx * abx + aby * aby || 1;

      let t = ((px - a.x) * abx + (py - a.y) * aby) / len2;
      t = clamp(t, 0, 1);

      const qx = a.x + t * abx;
      const qy = a.y + t * aby;

      const dx = px - qx;
      const dy = py - qy;
      const d2 = dx * dx + dy * dy;

      if (d2 < bestD2) {
        bestD2 = d2;
        result = {
          dist: state.cumulative[i] + t * (state.cumulative[i + 1] - state.cumulative[i]),
        };
      }
    }

    return result;
  }

  function pointAtDistance(distanceValue) {
    if (!state.routePx.length) return { x: 0, y: 0 };
    if (state.routePx.length === 1) return { ...state.routePx[0] };

    const d = clamp(distanceValue, 0, state.total);
    let index = 0;

    while (
      index < state.routePx.length - 1 &&
      state.cumulative[index + 1] < d
    ) {
      index += 1;
    }

    const segLen = state.cumulative[index + 1] - state.cumulative[index] || 1;
    const t = (d - state.cumulative[index]) / segLen;

    return {
      x: lerp(state.routePx[index].x, state.routePx[index + 1].x, t),
      y: lerp(state.routePx[index].y, state.routePx[index + 1].y, t),
    };
  }

  function setProgressFromClientY(clientY) {
    const rect = els.track.getBoundingClientRect();
    const y = clamp(clientY - rect.top, 0, rect.height);
    const next = rect.height ? y / rect.height : 0;
    setProgress(next);
  }

  function setProgress(value) {
    state.progress = clamp(value, 0, 1);
    renderDynamic();
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  window.MarchTimeline = {
  init,
  refresh,
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
})();