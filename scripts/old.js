const posts = [
    { type: "video", src: "././assets/1.mp4", user: "Shwetabh Gangwar" },
    { type: "video", src: "././assets/2.mp4", user: "Shwetabh Gangwar" },
    { type: "video", src: "././assets/3.mp4", user: "Shwetabh Gangwar" },
    { type: "img", src: "https://picsum.photos/400?1", user: "Aura Farmer 1" },
    { type: "img", src: "https://picsum.photos/400?2", user: "Aura Farmer 2" },
    { type: "img", src: "https://picsum.photos/400?3", user: "Aura Farmer 3" },
];

// Shuffle so posts appear random
posts.sort(() => Math.random() - 0.5);

let pointer = 0;
const LOAD_COUNT = 2;
const feed = document.getElementById("feed");

// ------------------------------
// 2) Create IG-style Card
// ------------------------------
function createCard(post) {
    const card = document.createElement("div");
    card.style.background = "#fff";
    card.style.padding = "10px";
    card.style.margin = "20px 0";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";

    // header
    card.innerHTML = `
    <div style="font-weight:bold;margin-bottom:8px;">
      @${post.user}
    </div>
  `;

    // media
    if (post.type === "img") {
        const img = document.createElement("img");
        img.src = post.src;
        img.loading = "lazy"; // lazy load
        img.style.width = "100%";
        img.style.borderRadius = "10px";
        card.appendChild(img);
    }

    if (post.type === "video") {
        const vid = document.createElement("video");
        vid.src = post.src;
        vid.muted = true;
        vid.controls = false;
        vid.style.width = "100%";
        vid.style.borderRadius = "10px";
        vid.preload = "none";  // lazy load
        card.appendChild(vid);
    }

    return card;
}

// ------------------------------
// 3) Video autoplay when visible
// ------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;
        if (el.tagName === "VIDEO") {
            if (entry.isIntersecting) el.play();
            else el.pause();
        }
    });
}, { threshold: 0.6 });

// ------------------------------
// 4) Load next posts
// ------------------------------
function loadMore() {
    for (let i = 0; i < LOAD_COUNT; i++) {
        if (pointer >= posts.length) pointer = 0;

        const card = createCard(posts[pointer]);
        feed.appendChild(card);

        // attach observer to video
        const vid = card.querySelector("video");
        if (vid) observer.observe(vid);

        pointer++;
    }
}

// ------------------------------
// 5) Infinite scroll logic
// ------------------------------
window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadMore();
    }
});


// ------------------------------
// 6) Tap-to-unmute (NEW)
// ------------------------------
document.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "video") {
        e.target.muted = false;
    }
});

// ------------------------------
// Initial load
// ------------------------------
loadMore();
