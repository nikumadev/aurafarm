const posts = [
  { type: "video", src: "././assets/1.mp4", user: "Shwetabh Gangwar", pic: "././assets/shwetabh.jpg", music: "Original", category: "more", verified: true, title: "Hey AuraFarm, show me the aura that will change my life.", link: "https://www.youtube.com/@ShwetabhGangwar1" },
  { type: "video", src: "././assets/2.mp4", user: "Shwetabh Gangwar", pic: "././assets/shwetabh.jpg", music: "Original", category: "more", verified: true, title: "You deserve to be a champion, so become one.", link: "" },
  { type: "video", src: "././assets/6.mp4", user: "UFC", pic: "././assets/ufc.jpeg", music: "Original", category: "more", verified: true, title: "The real action starts after the match ends.", link: "https://www.youtube.com/shorts/0pR29ZMTgiY" },
  { type: "video", src: "././assets/7.mp4", user: "UFC", pic: "././assets/ufc.jpeg", music: "Original", category: "more", verified: true, title: "I will be champion one day.", link: "https://www.youtube.com/shorts/09Cwqy1o7vk" },
  { type: "video", src: "././assets/11.mp4", user: "Son Goku", pic: "././assets/goku.webp", music: "Original", category: "more", verified: true, title: "Unleash the Kakarot within you.", link: "https://www.youtube.com/shorts/VLmeUxOFngU" },
  { type: "video", src: "././assets/12.mp4", user: "Son Goku", pic: "././assets/goku.webp", music: "Original", category: "more", verified: true, title: "You are the hope of the universe. You are the answer to all questions.", link: "https://www.youtube.com/shorts/0KziD8qAeq8" },
  { type: "video", src: "././assets/16.mp4", user: "Lord कृष्ण", pic: "././assets/krsna.webp", music: "Original", category: "more", verified: true, title: "Lord कृष्ण doesn't need aura. Aura need Lord कृष्ण.", link: "https://www.youtube.com/shorts/UCVq1bmUHU4" },
  { type: "video", src: "././assets/17.mp4", user: "Lord कृष्ण", pic: "././assets/krsna.webp", music: "Original", category: "more", verified: true, title: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥", link: "https://www.youtube.com/shorts/ZmtPY7kJ34s" },
  { type: "video", src: "././assets/21.mp4", user: "Saitama", pic: "././assets/saitama.jpg", music: "Original", category: "more", verified: true, title: "I'll leave tomorrow's problems to tomorrow's me.", link: "https://www.youtube.com/shorts/GcQzg4a1xRU" },
  { type: "video", src: "././assets/22.mp4", user: "King", pic: "././assets/king.jpg", music: "Original", category: "more", verified: true, title: "The brave man is not he who does not feel afraid, but he who conquers that fear.", link: "https://www.youtube.com/shorts/hR6qxwBjtoI" },
  { type: "video", src: "././assets/26.mp4", user: "Zenitsu", pic: "././assets/zenitsu.webp", music: "Original", category: "more", verified: true, title: "Even the weakest can overcome anything once determined.", link: "https://www.youtube.com/shorts/nAe82r8C9_4" },
  { type: "video", src: "././assets/31.mp4", user: "Batman", pic: "././assets/batman.jpg", music: "Original", category: "more", verified: true, title: "Men After Losing Everything.", link: "https://www.youtube.com/shorts/zpC-6zM9cFs" }
];

const icons = {
  bookmark: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
</svg>
`,
  more: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
`

};

const verifiedIcon = `
<svg width="16" height="16" viewBox="0 0 24 24" fill="#1DA1F2">
  <path d="M22.5 12l-2.2-2.9.3-3.6-3.5-.8-2-3.1-3.1 2-3.5-.9-.8 3.6L1.5 12l2.2 2.9-.3 3.6 3.5.8 2 3.1 3.1-2 3.5.9.8-3.6 2.2-2.9zM10.5 16.5l-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4-6 6z"/>
</svg>
`;



// shuffle post
posts.sort(() => Math.random() - 0.5);

let pointer = 0;
const count = 2;
const feed = document.querySelector("#feed");

// feed 
function createCard(post) {
  const card = document.createElement("div");
  card.classList.add('card');

  // card header 
  card.innerHTML =
    `

<div class="head">
  <div class="left">
    <img src="${post.pic}" alt="" />
    <div class="meta">
      <div class="username">
        ${post.user} ${post.verified ? verifiedIcon : ""}
      </div>
      <div class="music">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#fafafa"
          height="1rem"
          width="1rem"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
          />
        </svg>
        ${post.music}
      </div>
    </div>
  </div>
  <div class="right icon">${icons[post.category] || ""}</div>
</div>
        `;

  // media (images and video)
  if (post.type === "img") {
    const img = document.createElement("img");
    img.src = post.src;
    img.loading = "lazy";
    img.style.width = "100%";
    img.style.borderRadius = "0.25rem";
    card.appendChild(img);
  }

  if (post.type === "video") {
    const vid = document.createElement("video");
    vid.src = post.src;
    vid.muted = true;
    vid.controls = false;
    vid.loop = true;
    vid.playsInline = true;
    vid.disablePictureInPicture = true;
    vid.style.width = "100%";
    vid.style.borderRadius = "0.25rem";
    vid.preload = "none";
    card.appendChild(vid);
  }

  const actionBar = `
  <div class="details">
  <div class="leftside">
    <div class="top">
      ${post.title}
    </div>
    <div class="bottom">(Tap on the video to enable the sound)</div>
  </div>
  <div class="rightside">
  <a href="${post.link}" target="_blank">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
      />
    </svg>
    </a>
  </div>
</div>
`;

  card.insertAdjacentHTML("beforeend", actionBar);

  return card;
}

// video autoplay code jb wo screen me visible ho jaye
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (el.tagName === "VIDEO") {
      if (entry.isIntersecting) el.play();
      else el.pause();
    }
  });
}, { threshold: 0.6 });


// add more posts in feed
function loadMore() {
  for (let i = 0; i < count; i++) {
    if (pointer >= posts.length) pointer = 0;

    const card = createCard(posts[pointer]);
    feed.appendChild(card);

    const vid = card.querySelector("video");
    if (vid) observer.observe(vid);

    pointer++
  }
}

// infinite scroll logic
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    loadMore();
  }
});


// unmute music code
document.addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "video") {
    e.target.muted = false;
  }
});


// initial load
loadMore();
