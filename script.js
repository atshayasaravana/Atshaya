// ---------------------------------------------------------------------------
// Configuration – tweak these values to customize the experience
// ---------------------------------------------------------------------------

const CONFIG = {
  login: {
    id: "Atshaya", // Change ID here
    password: "atshaya", // Change password here
  },
  // Set the birthday date here (local time)
  birthdayDate: "2026-04-01T00:00:00",
  // Secret puzzle code – hide this in the content somewhere (e.g. 0310 for 3rd of Oct)
  secretCode: "0310",
  letterLines: [
    "Dear Atshaya,",
    "",
    "Many More happiee returns of the day... Vijayan Unkil Movaleyyy😅... Yeppayum sirichineyyy iruu..",
    "You don't deserve all the sadness and the bad days you are coming across...",
    "Everything will be alright soon...",
    "With all love,",
    "Saravana",
  ],
  predictions: [
    "You will receive unlimited hugs.",
    "Today will be unforgettable.",
    "Your smile will make someone very happy.",
    "The universe will send you a tiny miracle today.",
    "You will laugh so hard you forget what you were sad about.",
    "Someone will think of you and instantly feel lighter.",
    "You will discover a new favorite memory today.",
    "Every mirror you pass will agree: you look incredible.",
    "A random moment today will secretly become iconic.",
    "You will feel, even for a second, truly and completely enough.",
  ],
  easterEggMessages: [
    "Secret 01: You are someone’s safest place.",
    "Secret 02: The universe softens a little when you smile.",
    "Secret 03: You are more loved than you realize.",
    "Secret 04: The world is quietly grateful you exist.",
    "Secret 05: Somewhere, right now, someone is glad you were born.",
  ],
};

// ---------------------------------------------------------------------------
// Asset lists – update these to use files from /Photos
// ---------------------------------------------------------------------------

// Gallery images for the Polaroid section.
// Replace each path with any image inside the /Photos folder.
const galleryImages = [
  // Single source image used in multiple places
  // Replace with any image filename that lives inside /Photos
  "Photos/IMG20260125082758.jpg",
  "Photos/atshaya.png",
  "Photos/IMG_20260131_163839.jpg",
  "Photos/Screenshot_20251111_071420.jpg",
];

// Optional captions for each gallery image (same order as galleryImages).
const galleryCaptions = [
  "The smile that made my day special.",
  "A random day, upgraded by you.",
  "The moment of being ourselves.",
  "Proof that magic is real.",
];

// Timeline memories, each with an image from /Photos.
const timelineMemories = [{
  date: "28th September 2024",
  title: "My first sight",
  description:
    "Even in my first sight of stalking your photo we have been together in that...😅",
  image: "Photos/Screenshot 2025-10-25 095212.png", // Replace with any image inside /Photos
},
  {
    date: "13th March 2025",
    title: "When I saw you for the first time I felt like... ",
    description:
      "Is this the Girl I am talking for 168days!!!... One glance, and suddenly the world felt softer and warmer. Some hearts recognize each other before words ever do...",
    image: "Photos/IMG20260125082758.jpg", // Replace with any image inside /Photos
  },
  {
    date: "28th August 2025",
    title: "That First laugh we both had together",
    description: "The moment your laughter turned into my favorite soundtrack.",
    image: "Photos/IMG_20250831_131117~2.jpg", // Replace with any image inside /Photos
  },
  {
    date: "13th September 2025",
    title: "A quiet, perfect day",
    description:
      "That day when nothing big happened, yet everything felt more happier because this is the time where you are with me for a whole day.   Paathutu freeze Memory kuduthutu adutha memory ku scroll pannu...😊 ",
  
    initMedia(container) {
  
      // VIDEO
      const video = document.createElement("video");
      video.src = "Photos/videomemory.mp4";
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.playbackRate = 0.5;
      video.style.width = "100%";
      video.style.borderRadius = "14px";
  
      // CUSTOM AUDIO
      const customAudio = new Audio("Photos/videoplayback.mp3");
      customAudio.loop = true;
      customAudio.playbackRate = 1;
  
      // BUTTON
      const btn = document.createElement("button");
      btn.textContent = "🎵 Play Music";
      btn.style.marginTop = "10px";
      btn.style.padding = "8px 14px";
      btn.style.borderRadius = "8px";
      btn.style.border = "none";
      btn.style.cursor = "pointer";
      btn.style.background = "#4f46e5";
      btn.style.color = "white";
      btn.style.fontSize = "14px";
  
      let playing = false;
  
      btn.addEventListener("click", () => {
  
        if (!playing) {
          // start video + audio
          video.currentTime = 0;
          customAudio.currentTime = 0;
  
          video.play().catch(()=>{});
          customAudio.play().catch(()=>{});
  
          btn.textContent = "⏸️ Freeze Memory";
          playing = true;
  
        } else {
          // mute/pause everything
          video.pause();
          customAudio.pause();
  
          btn.textContent = "🎵 Play Memory";
          playing = false;
        }
  
      });
  
      // keep audio synced
      video.addEventListener("seeking", () => {
        customAudio.currentTime = video.currentTime;
      });
  
      // insert elements
      container.innerHTML = "";
      container.appendChild(video);
      container.appendChild(btn);
    },
  },
  {
    date: "No Date needed",
    title: "I adore this everytime seeing this...❤️",
    description:
      "A video combining frames collected from a video which I adored the most than anything. Paathutu freeze Memory kuduthutu adutha memory ku scroll pannu...😊 ",
  
    initMedia(container) {
  
      // VIDEO
      const video = document.createElement("video");
      video.src = "Photos/mAst_vvcvideo_1764603860360.mp4";
      video.muted = true; // start muted
      video.playsInline = true;
      video.loop = true;
      video.playbackRate = 1; // original speed
      video.style.width = "100%";
      video.style.borderRadius = "14px";
  
      // BUTTON
      const btn = document.createElement("button");
      btn.textContent = "🎵 Play Memory";
      btn.style.marginTop = "10px";
      btn.style.padding = "8px 14px";
      btn.style.borderRadius = "8px";
      btn.style.border = "none";
      btn.style.cursor = "pointer";
      btn.style.background = "#4f46e5";
      btn.style.color = "white";
      btn.style.fontSize = "14px";
  
      let playing = false;
  
      btn.addEventListener("click", () => {
  
        if (!playing) {
  
          video.muted = false; // enable original audio
          video.play().catch(()=>{});
  
          btn.textContent = "⏸️ Freeze Memory";
          playing = true;
  
        } else {
  
          video.pause();
          video.muted = true; // mute again
  
          btn.textContent = "🎵 Play Memory";
          playing = false;
        }
  
      });
  
      // insert elements
      container.innerHTML = "";
      container.appendChild(video);
      container.appendChild(btn);
    },
  },

  {
    date: "31st January 2026",
    title: "The Laugh together we had...😉",
    description: "The Laugh I had with my heart filled with full of joy... I wish you will be happiee like this forever😊❤️",
    image: "Photos/IMG_20260131_163841.jpg", // Replace with any image inside /Photos
  },
    {
    date: "31st January 2026",
    title: "Freezed - Photo? No!! the moment itself...",
    description: "A freezed moment where we could not control our joy..😊❤️",
    image: "Photos/IMG_20260131_164029.jpg", // Replace with any image inside /Photos
  },
  {
    date: "Wait for it",
    title: "A quiet, perfect day",
    description:
      "That day when nothing big happened, yet everything felt right because she existed.",
    image: "Photos/1770567693435.png", // Replace with any image inside /Photos
  },
];

// Map of memories – each pin uses coordinates plus an optional image from /Photos.
const mapMemories = [
  {
    title: "[PLACE_HERE]",
    body: "[YOUR_MESSAGE] — Describe what happened here with Atshaya.",
    image: "Photos/1770567693435.png", // Replace with any image inside /Photos
    top: "20%",
    left: "30%",
  },
  {
    title: "[PLACE_HERE]",
    body: "[YOUR_MESSAGE] — Tell the story hidden at this spot.",
    image: "Photos/1770567693435.png", // Replace with any image inside /Photos
    top: "55%",
    left: "60%",
  },
  {
    title: "[PLACE_HERE]",
    body: "[YOUR_MESSAGE] — Another memory that refuses to fade.",
    image: "Photos/1770567693435.png", // Replace with any image inside /Photos
    top: "70%",
    left: "20%",
  },
];

// ---------------------------------------------------------------------------
// Entry – initialize login or main page depending on body class
// ---------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  createStarfield();

  if (document.body.classList.contains("login-page")) {
    initLoginPage();
    return;
  }

  if (document.body.classList.contains("main-page")) {
    initMainPage();
  }
});

// ---------------------------------------------------------------------------
// Shared visual helpers
// ---------------------------------------------------------------------------

function createStarfield() {
  const containers = document.querySelectorAll(".starfield");
  if (!containers.length) return;

  containers.forEach((container) => {
    const count = 60;
    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.className = "star";
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 4;
      const size = Math.random() * 1.4 + 0.4;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;
      star.style.animationDelay = `${delay}s`;
      star.style.transform = `scale(${size})`;
      container.appendChild(star);
    }
  });
}

function smoothScrollTo(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("toast--visible");
  window.clearTimeout(showToast._timeoutId);
  showToast._timeoutId = window.setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 2600);
}

// ---------------------------------------------------------------------------
// Login page
// ---------------------------------------------------------------------------

function initLoginPage() {
  const form = document.getElementById("loginForm");
  const idInput = document.getElementById("loginId");
  const passwordInput = document.getElementById("loginPassword");
  const errorEl = document.getElementById("loginError");

  if (!form || !idInput || !passwordInput || !errorEl) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const id = idInput.value.trim();
    const pw = passwordInput.value.trim();

    if (id === CONFIG.login.id && pw === CONFIG.login.password) {
      errorEl.classList.remove("login-error--visible", "login-error--shake");
      // Subtle delay for UX polish
      setTimeout(() => {
        window.location.href = "index.html";
      }, 260);
    } else {
      errorEl.textContent = "The ID or password is incorrect. Try again, stargazer.";
      errorEl.classList.add("login-error--visible", "login-error--shake");
      setTimeout(() => {
        errorEl.classList.remove("login-error--shake");
      }, 450);
    }
  });
}

// ---------------------------------------------------------------------------
// Main page – global init
// ---------------------------------------------------------------------------

function initMainPage() {
  initScrollLinks();
  // Build dynamic, asset-driven sections before we attach scroll reveals
  initTimeline();
  initPolaroids();
  initMapOfMemories();
  initRevealOnScroll();
  initCountdown();
  initPlanets();
  initLetter();
  initReasons();
  initMovies();
  initRoom();
  initPuzzle();
  initPredictionMachine();
  initWhatIfSection();
  initEasterEggs();
  initCake();
  initNightSky();
  initTimeCapsule();
  // GSAP-specific enhancements last so the page works without it as well
  initGsapIfAvailable();
}

function initScrollLinks() {
  document.querySelectorAll("[data-scroll-to]").forEach((el) => {
    el.addEventListener("click", () => {
      const target = el.getAttribute("data-scroll-to");
      if (target) {
        smoothScrollTo(target);
      }
    });
  });
}

function initRevealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const revealWithIntersection = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    reveals.forEach((el) => observer.observe(el));
  };

  if ("IntersectionObserver" in window) {
    revealWithIntersection();
  } else {
    reveals.forEach((el) => el.classList.add("reveal--visible"));
  }
}

// ---------------------------------------------------------------------------
// Countdown
// ---------------------------------------------------------------------------

function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const target = new Date(CONFIG.birthdayDate).getTime();

  function updateCountdown() {
    const now = Date.now();
    const distance = target - now;

    if (distance <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ---------------------------------------------------------------------------
// Journey planets
// ---------------------------------------------------------------------------

function initPlanets() {
  const detail = document.getElementById("planetDetail");
  if (!detail) return;

  const titleEl = detail.querySelector(".planet-detail-title");
  const bodyEl = detail.querySelector(".planet-detail-body");

  const copy = {
    "first-memory": {
      title: "First Memory",
      body: "Adiyehhh!!! I knew you were special before even I saw you!!! I don't know why but the moment I talked to you first time in call is my first favourite memory.",
    },
    "things-i-love": {
      title: "Things I Love About You",
      body: "The way you laugh before i drop a thing thinking that is a joke. How you care too much and pretend you don’t. The random chaos. The soft moments when you are with me.",
    },
    "fun-fact": {
      title: "Fun Fact",
      body: "Do you remember how much days it took to meet you in person? after beginning to chat?..Have a guess😅 It's been 168 days.. it's a shocking fact even for me😅.",
    },
    "about-future": {
      title: "About Future",
      body: "Yenga Irundhaalum Happiee ah iru mahhh.... Yedhukagavum feel pannadha... Yenga ponalum nee neeyahh irundhu Palagiko... Aduthavanga Yenna nenaipanga nu yosichu unnoda happiness ah vitradhahh...❤️ ",
    },
  };

  document.querySelectorAll(".planet").forEach((planet) => {
    planet.addEventListener("click", () => {
      const key = planet.getAttribute("data-planet");
      if (!key || !copy[key]) return;
      titleEl.textContent = copy[key].title;
      bodyEl.textContent = copy[key].body;
    });
  });
}

// ---------------------------------------------------------------------------
// Timeline as a book-style "Can We Rewind" experience
// ---------------------------------------------------------------------------
function initTimeline() {
  const book = document.getElementById("timelineBook");
  const page = document.getElementById("timelinePage");
  const dateEl = document.getElementById("timelinePageDate");
  const titleEl = document.getElementById("timelinePageTitle");
  const mediaEl = document.getElementById("timelinePageMedia");
  const textEl = document.getElementById("timelinePageText");
  const prevBtn = document.getElementById("timelinePrev");
  const nextBtn = document.getElementById("timelineNext");
  const indicator = document.getElementById("timelinePageIndicator");

  if (
    !book ||
    !page ||
    !dateEl ||
    !titleEl ||
    !mediaEl ||
    !textEl ||
    !prevBtn ||
    !nextBtn ||
    !indicator ||
    !timelineMemories.length
  ) {
    return;
  }

  let currentIndex = 0;
  const total = timelineMemories.length;

  function renderPage(index) {
    const clampedIndex = Math.max(0, Math.min(total - 1, index));
    currentIndex = clampedIndex;
    const memory = timelineMemories[clampedIndex];

    // Begin subtle transition
    page.classList.remove("timeline-page--visible");

    setTimeout(() => {
      dateEl.textContent = memory.date || "";
      titleEl.textContent = memory.title || "";
      textEl.textContent = memory.description || "";

      // Clear previous media and insert new image/video
      mediaEl.innerHTML = "";

      if (memory.initMedia && typeof memory.initMedia === "function") {
        memory.initMedia(mediaEl);
      } else if (memory.image) {
        const img = document.createElement("img");
img.className = "timeline-img";
img.loading = "eager"; // prevent delayed loading
img.src = memory.image;
img.alt = `Memory: ${memory.title}`;

// hide page until image loads
img.style.opacity = "0";

img.onload = () => {
  img.style.opacity = "1";
  requestAnimationFrame(() => {
    page.classList.add("timeline-page--visible");
  });
};

mediaEl.appendChild(img);
      }

      indicator.textContent = `Page ${clampedIndex + 1} of ${total}`;
      prevBtn.disabled = clampedIndex === 0;
      nextBtn.disabled = clampedIndex === total - 1;

      // Trigger enter animation on next frame
      requestAnimationFrame(() => {
        page.classList.add("timeline-page--visible");
      });
    }, 60);
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      renderPage(currentIndex - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < total - 1) {
      renderPage(currentIndex + 1);
    }
  });

  // Initialize first page
  renderPage(0);
}
// ---------------------------------------------------------------------------
// Polaroid gallery from /Photos assets
// ---------------------------------------------------------------------------

function initPolaroids() {
  const grid = document.getElementById("polaroidGrid");
  if (!grid || !galleryImages.length) return;

  grid.innerHTML = "";

  galleryImages.forEach((src, index) => {
    const captionText =
      galleryCaptions[index] || `Memory ${index + 1} with Atshaya`;

    const figure = document.createElement("figure");
    figure.className = "polaroid reveal";

    const photoWrap = document.createElement("div");
    photoWrap.className = "polaroid-photo";

    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    img.alt = captionText; // Replace with any image inside /Photos

    photoWrap.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.textContent = captionText;

    figure.appendChild(photoWrap);
    figure.appendChild(caption);
    grid.appendChild(figure);

    figure.addEventListener("click", () => {
      openModal(
        `Photo ${index + 1}`,
        `<img src="${src}" alt="${captionText}" loading="lazy" class="modal-image" />` +
          `<p>${captionText}</p>`
      );
    });
  });
}

// ---------------------------------------------------------------------------
// Digital letter
// ---------------------------------------------------------------------------

function initLetter() {
  const openBtn = document.getElementById("openLetter");
  const letterTextEl = document.getElementById("letterText");
  const musicBtn = document.getElementById("toggleMusic");
  if (!openBtn || !letterTextEl) return;

  let hasTyped = false;
  let audio;

  openBtn.addEventListener("click", () => {
    if (!hasTyped) {
      typeLetterLines(letterTextEl, CONFIG.letterLines);
      hasTyped = true;
    }
    openBtn.classList.add("envelope--opened");
  });

  if (musicBtn) {
    musicBtn.addEventListener("click", () => {
      if (!audio) {
        // Simple placeholder for your own background track
        audio = new Audio();
        audio.src="Photos/videoplayback.mp3";
        audio.loop = true;
        // Set your audio file here, e.g. audio.src = "your-music.mp3";
      }
      if (audio.paused) {
        audio
          .play()
          .then(() => musicBtn.classList.add("icon-btn--active"))
          .catch(() => {
            showToast("Add your own music file to enable this button.");
          });
      } else {
        audio.pause();
        musicBtn.classList.remove("icon-btn--active");
      }
    });
  }
}

function typeLetterLines(target, lines) {
  const fullText = lines.join("\n");
  target.textContent = "";
  let index = 0;

  function step() {
    if (index > fullText.length) return;
    target.textContent = fullText.slice(0, index);
    index += 2;
    setTimeout(step, 26);
  }

  step();
}

// ---------------------------------------------------------------------------
// Reasons grid
// ---------------------------------------------------------------------------

function initReasons() {
  const cards = document.querySelectorAll(".reason-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("reason-card--active");
    });
  });
}

// ---------------------------------------------------------------------------
// Movies + modal
// ---------------------------------------------------------------------------

function initMovies() {
  const posters = document.querySelectorAll(".movie-poster");
  if (!posters.length) return;

  posters.forEach((poster) => {
    poster.addEventListener("click", () => {
      const title =
        poster.getAttribute("data-movie-title") || "A movie about Atshaya";
      const message =
        poster.getAttribute("data-movie-message") ||
        "[YOUR_MESSAGE] – Describe why this movie belongs to her.";
      const image = poster.getAttribute("data-movie-image");
      const imageHtml = image
        ? `<img src="${image}" alt="${title} poster" loading="lazy" class="modal-image" />`
        : "";
      openModal(title, `${imageHtml}<p>${message}</p>`);
    });
  });
}

function openModal(title, bodyHtml) {
  const modal = document.getElementById("universeModal");
  const titleEl = document.getElementById("modalTitle");
  const bodyEl = document.getElementById("modalBody");
  const closeBtn = document.getElementById("modalClose");
  if (!modal || !titleEl || !bodyEl || !closeBtn) return;

  titleEl.textContent = title;
  bodyEl.innerHTML = bodyHtml;

  modal.classList.add("modal--visible");
  modal.setAttribute("aria-hidden", "false");

  const handleBackdropClick = (event) => {
    if (event.target === modal || event.target.classList.contains("modal-backdrop")) {
      close();
    }
  };

  function onKeyDown(event) {
    if (event.key === "Escape") {
      close();
    }
  }

  function close() {
    modal.classList.remove("modal--visible");
    modal.setAttribute("aria-hidden", "true");
    modal.removeEventListener("click", handleBackdropClick);
    closeBtn.removeEventListener("click", close);
    document.removeEventListener("keydown", onKeyDown);
  }

  modal.addEventListener("click", handleBackdropClick);
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", onKeyDown);
}

// ---------------------------------------------------------------------------
// Virtual room
// ---------------------------------------------------------------------------

function initRoom() {
  const hotspots = document.querySelectorAll(".room-hotspot");
  if (!hotspots.length) return;

  hotspots.forEach((spot) => {
    spot.addEventListener("click", () => {
      const action = spot.getAttribute("data-room-action");
      switch (action) {
        case "open-polaroids":
          smoothScrollTo("#polaroids");
          break;
        case "open-letter":
          smoothScrollTo("#digital-letter");
          break;
        case "open-surprise":
          openModal(
            "A tiny surprise for Atshaya",
            "<p>[YOUR_MESSAGE] &mdash; Put a short, dramatic surprise note here, like a secret future plan or a promise.</p>"
          );
          break;
        case "open-future":
          smoothScrollTo("#future");
          break;
        default:
          break;
      }
    });
  });
}

// ---------------------------------------------------------------------------
// Secret puzzle
// ---------------------------------------------------------------------------

function initPuzzle() {
  const screen = document.getElementById("puzzleScreen");
  const keypad = document.querySelector(".puzzle-keypad");
  if (!screen || !keypad) return;

  let buffer = "";

  function renderBuffer() {
    if (!buffer) {
      screen.textContent = "••••";
      return;
    }
    screen.textContent = buffer.padEnd(CONFIG.secretCode.length, "•");
  }

  function handleEnter() {
    if (buffer === CONFIG.secretCode) {
      openModal(
        "Secret Birthday Message",
        "<p>This is where you reveal the deepest, sweetest, most overdramatic birthday message for Atshaya.</p><p>[YOUR_MESSAGE]</p>"
      );
    } else {
      screen.classList.add("puzzle-screen--error");
      setTimeout(() => screen.classList.remove("puzzle-screen--error"), 450);
    }
  }

  keypad.addEventListener("click", (event) => {
    const key = event.target.getAttribute("data-key");
    if (!key) return;

    if (key === "clear") {
      buffer = "";
    } else if (key === "enter") {
      handleEnter();
    } else if (/^\d$/.test(key)) {
      if (buffer.length < CONFIG.secretCode.length) {
        buffer += key;
      }
    }
    renderBuffer();
  });

  renderBuffer();
}

// ---------------------------------------------------------------------------
// Future prediction machine
// ---------------------------------------------------------------------------

function initPredictionMachine() {
  const btn = document.getElementById("predictButton");
  const output = document.getElementById("predictionOutput");
  if (!btn || !output) return;

  btn.addEventListener("click", () => {
    const list = CONFIG.predictions;
    const next = list[Math.floor(Math.random() * list.length)];
    output.textContent = next;
    output.classList.remove("prediction-output--animate");
    // Trigger reflow to restart animation
    void output.offsetWidth;
    output.classList.add("prediction-output--animate");
  });
}

// ---------------------------------------------------------------------------
// Map of memories
// ---------------------------------------------------------------------------

function initMapOfMemories() {
  const mapContainer = document.getElementById("memoryMap");
  if (!mapContainer || !mapMemories.length) return;

  mapContainer.innerHTML = "";

  mapMemories.forEach((memory) => {
    const pin = document.createElement("div");
    pin.className = "memory-pin";
    pin.style.top = memory.top;
    pin.style.left = memory.left;

    pin.addEventListener("click", () => {
      const imageHtml = memory.image
        ? `<img src="${memory.image}" alt="${memory.title}" loading="lazy" class="modal-image" />`
        : "";
      openModal(memory.title, `${imageHtml}<p>${memory.body}</p>`);
    });

    mapContainer.appendChild(pin);
  });
}

// ---------------------------------------------------------------------------
// What if you never existed
// ---------------------------------------------------------------------------

function initWhatIfSection() {
  const before = document.querySelector(".world--before");
  const after = document.querySelector(".world--after");
  if (!before || !after) return;

  const applyState = () => {
    before.classList.add("world--muted");
    after.classList.add("world--lit");
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyState();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(before);
  } else {
    applyState();
  }
}

// ---------------------------------------------------------------------------
// Easter eggs
// ---------------------------------------------------------------------------

function initEasterEggs() {
  const eggs = document.querySelectorAll(".easter-egg");
  if (!eggs.length) return;

  eggs.forEach((egg, index) => {
    egg.addEventListener("click", () => {
      const list = CONFIG.easterEggMessages;
      const message = list[index % list.length];
      showToast(message);
    });
  });
}

// ---------------------------------------------------------------------------
// Cake + confetti
// ---------------------------------------------------------------------------

function initCake() {
  const cake = document.getElementById("birthdayCake");
  if (!cake) return;

  cake.addEventListener("click", () => {
    cake.classList.add("cake--blown");
    launchConfettiFromElement(cake);
  });
}

function launchConfettiFromElement(element) {
  const rect = element.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 3;

  const colors = ["#f97316", "#facc15", "#4f46e5", "#22c55e", "#e11d48"];
  const count = 110;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.style.position = "fixed";
    piece.style.left = `${originX}px`;
    piece.style.top = `${originY}px`;
    piece.style.width = `${Math.random() * 6 + 3}px`;
    piece.style.height = `${Math.random() * 12 + 6}px`;
    piece.style.borderRadius = "2px";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.pointerEvents = "none";
    piece.style.zIndex = "80";
    piece.style.transform = "translate3d(0,0,0)";

    const angle = Math.random() * Math.PI - Math.PI / 2;
    const velocity = Math.random() * 8 + 9;
    const gravity = 0.45;
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    let x = originX;
    let y = originY;
    let life = 0;
    const maxLife = 90 + Math.random() * 60;

    document.body.appendChild(piece);

    function frame() {
      life += 1;
      x += vx;
      y += vy;
      vy += gravity;

      piece.style.transform = `translate3d(${x - originX}px, ${
        y - originY
      }px, 0) rotate(${life * 7}deg)`;
      piece.style.opacity = String(1 - life / maxLife);

      if (life < maxLife) {
        requestAnimationFrame(frame);
      } else {
        piece.remove();
      }
    }

    requestAnimationFrame(frame);
  }
}

// ---------------------------------------------------------------------------
// Night sky message
// ---------------------------------------------------------------------------

function initNightSky() {
  const message = document.querySelector(".night-message");
  if (!message) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            message.classList.add("night-message--connected");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(message);
  } else {
    message.classList.add("night-message--connected");
  }
}

// ---------------------------------------------------------------------------
// Time capsule (localStorage)
// ---------------------------------------------------------------------------

function initTimeCapsule() {
  const textarea = document.getElementById("capsuleMessage");
  const saveBtn = document.getElementById("saveCapsule");
  const clearBtn = document.getElementById("clearCapsule");
  const statusEl = document.getElementById("capsuleStatus");

  if (!textarea || !saveBtn || !statusEl || !clearBtn) return;

  const STORAGE_KEY = "birthday_time_capsule";

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      textarea.value = saved;
      statusEl.textContent = "Loaded from your time capsule on this device.";
    }
  } catch {
    // Ignore storage errors gracefully
  }

  saveBtn.addEventListener("click", () => {
    try {
      localStorage.setItem(STORAGE_KEY, textarea.value || "");
      statusEl.textContent = "Saved. Future you will be grateful for this.";
      statusEl.classList.add("capsule-status--saved");
      setTimeout(() => statusEl.classList.remove("capsule-status--saved"), 1800);
    } catch {
      statusEl.textContent =
        "Could not save this time. Your browser might have storage disabled.";
    }
  });

  clearBtn.addEventListener("click", () => {
    textarea.value = "";
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    statusEl.textContent = "Cleared. You can rewrite the future anytime.";
    statusEl.classList.remove("capsule-status--saved");
  });
}

// ---------------------------------------------------------------------------
// GSAP enhancements (optional)
// ---------------------------------------------------------------------------

function initGsapIfAvailable() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Parallax hero background
  gsap.to(".gradient-backdrop", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      scrub: true,
    },
  });

  // Subtle parallax on sections
  gsap.utils.toArray(".section").forEach((section) => {
    gsap.to(section, {
      backgroundPositionY: "15%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.7,
      },
    });
  });

  // Cinematic reveal overrides
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      }
    );
  });
}

