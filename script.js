/* =========================================================
   script.js
   Ditambahkan oleh Anggota 3 di branch "scripting"
   ========================================================= */

const members = [
  {
    name: "Rafael Clinton Wijaya",
    role: "Frontend Developer",
    image: "https://stspresourceprod.blob.core.windows.net/basicpersonalphoto/profilephoto/63de5f2a-8ea5-496c-be1f-a2af7d84b977.png?sv=2024-05-04&se=9999-12-31T23%3A59%3A59Z&sr=b&sp=r&sig=S%2F0yCWfPKYe9lvW76Tbye7p7hKtmVuLR4RDpjjE6JOU%3D",
    description: "Saya fokus membangun tampilan web yang rapi, responsif, dan mudah digunakan melalui struktur HTML dan desain antarmuka yang konsisten.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "Reuben Irniandi",
    role: "UI/UX Designer",
    image: "https://stspresourceprod.blob.core.windows.net/basicpersonalphoto/profilephoto/713f3271-5840-4b01-9ce3-c541a7b02b5a.png?sv=2024-05-04&se=9999-12-31T23%3A59%3A59Z&sr=b&sp=r&sig=23dTBC7ifjTVQRnnEp%2FJZevcbShYId9bH08ARZmRqV8%3D",
    description: "Saya merancang pengalaman pengguna yang sederhana, menarik, dan mudah dipahami dengan memperhatikan kebutuhan pengguna di setiap halaman.",
    skills: ["Figma", "Wireframing", "Prototyping"]
  },
  {
    name: "Moses Adriel Setiadi",
    role: "JavaScript Developer",
    image: "https://stspresourceprod.blob.core.windows.net/basicpersonalphoto/profilephoto/2d1fe84e-3190-48ea-b5c7-43adf118fda8.png?sv=2024-05-04&se=9999-12-31T23%3A59%3A59Z&sr=b&sp=r&sig=i7TPsRybxG2%2BpM7dAX8NmEU3tGnyyNR1v%2BojzS37Eao%3D",
    description: "Saya mengembangkan interaksi halaman yang dinamis dan memastikan setiap fitur berjalan lancar, cepat, serta nyaman digunakan.",
    skills: ["JavaScript", "DOM", "Git"]
  }
];

const memberLinks = document.querySelectorAll(".member-link");
const userName = document.getElementById("user-name");
const userRole = document.getElementById("user-role");
const avatar = document.querySelector(".avatar");
const aboutText = document.querySelector(".about p");
const skillList = document.getElementById("skill-list");
const likeCounts = [0, 0, 0];
let activeMember = 0;

function renderMember(memberIndex) {
  const member = members[memberIndex];
  activeMember = memberIndex;

  userName.textContent = member.name;
  userRole.textContent = member.role;
  avatar.src = member.image;
  avatar.alt = `Foto profil ${member.name}`;
  aboutText.textContent = member.description;
  skillList.innerHTML = member.skills.map((skill) => `<li>${skill}</li>`).join("");
  counterSpan.textContent = likeCounts[activeMember];

  memberLinks.forEach((link, index) => {
    const isActive = index === memberIndex;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-pressed", String(isActive));
  });
}

memberLinks.forEach((link) => {
  link.addEventListener("click", () => {
    renderMember(Number(link.dataset.member));
  });
});

// ---------- Dark mode toggle ----------
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// ---------- Like counter ----------
const counterBtn = document.getElementById("counter-btn");
const counterSpan = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  likeCounts[activeMember] += 1;
  counterSpan.textContent = likeCounts[activeMember];
});
