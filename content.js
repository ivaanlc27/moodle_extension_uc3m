const subjects = [
  { name: "CCT", url: "https://aulaglobal.uc3m.es/course/view.php?id=194629" },
  { name: "CS",  url: "https://aulaglobal.uc3m.es/course/view.php?id=194620" },
  { name: "ESS", url: "https://aulaglobal.uc3m.es/course/view.php?id=194621" },
  { name: "SC",  url: "https://aulaglobal.uc3m.es/course/view.php?id=194623" },
  { name: "TC",  url: "https://aulaglobal.uc3m.es/course/view.php?id=194624" },
  { name: "SEM", url: "https://aulaglobal.uc3m.es/course/view.php?id=194625" },
];

// Create the menu container
const menu = document.createElement("div");
menu.id = "subject-menu";

// Add links for each subject
subjects.forEach(subject => {
  const link = document.createElement("a");
  link.href = subject.url;
  link.textContent = subject.name;
  link.target = "_self"; // Open in the same tab
  menu.appendChild(link);
});

// Prepend menu to the top of the page if #topofscroll exists, otherwise to body
const topOfScroll = document.querySelector("#topofscroll");
if (topOfScroll) {
  topOfScroll.prepend(menu);
} else {
  document.body.prepend(menu);
}
