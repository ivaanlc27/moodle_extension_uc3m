const subjects = [
<<<<<<< HEAD
  { name: "AFSI", url: "https://aulaglobal.uc3m.es/course/view.php?id=194635" },
  { name: "AIM",  url: "https://aulaglobal.uc3m.es/course/view.php?id=194633" },
  { name: "APT",  url: "https://aulaglobal.uc3m.es/course/view.php?id=194634" },
  { name: "GAC", url: "https://aulaglobal.uc3m.es/course/view.php?id=194627" },
  { name: "IYA", url: "https://aulaglobal.uc3m.es/course/view.php?id=194626" },
  { name: "SEM", url: "https://aulaglobal.uc3m.es/course/view.php?id=194628" }
=======
  { name: "ESS", url: "https://aulaglobal.uc3m.es/course/view.php?id=194621" },
  { name: "SC",  url: "https://aulaglobal.uc3m.es/course/view.php?id=194623" },
  { name: "SEM", url: "https://aulaglobal.uc3m.es/course/view.php?id=194625" }
>>>>>>> main
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
