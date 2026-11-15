// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    name: "Moss Dragon",
    description: "A gentle gardener who grows tiny forests wherever it naps.",
    image: "assets/moss-dragon.svg",
    alt: "A green dragon with leafy horns and small wings.",
  },
  {
    name: "Cloud Fox",
    description: "A sky wanderer collecting soft clouds and lost daydreams.",
    image: "assets/cloud-fox.svg",
    alt: "A pale blue fox with pointed ears and a fluffy tail.",
  },
  {
    name: "Ember Salamander",
    description: "A warm little companion that keeps campfires glowing.",
    image: "assets/ember-salamander.svg",
    alt: "An orange salamander with a flame at the end of its tail.",
  },
  {
    name: "Moon Owl",
    description: "A quiet navigator who reads the stories written in stars.",
    image: "assets/moon-owl.svg",
    alt: "A purple owl with a crescent moon on its forehead.",
  },
  {
    name: "Crystal Turtle",
    description: "A patient explorer carrying a sparkling crystal garden.",
    image: "assets/crystal-turtle.svg",
    alt: "A mint green turtle with purple crystals on its shell.",
  },
  {
    name: "Mushroom Sprite",
    description: "A woodland storyteller with a spotted cap and muddy boots.",
    image: "assets/mushroom-sprite.svg",
    alt: "A small cream sprite wearing a red spotted mushroom cap.",
  },
];

// YOUR WORK: build these features using the supplied HTML, CSS, and data.
// 1. Select the collection and preference controls.
const $preferences = document.getElementById("preferences-title");
const layout = document.getElementById("layout");
const theme = document.getElementById("theme");
const collection = document.getElementById("collection");

const html = [];

// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.
for (const creature of $creatures) {
  html.push(`
    <li class="creature-card">
      <img src="${creature.image}" alt="${creature.alt}">
      <h3>${creature.name}</h3>
      <p>${creature.description}</p>
    </li>
  `);
}
// convert the array of HTML strings into a single string and set it as the innerHTML of the collection
collection.innerHTML = html.join("");

// add an event listener to the collection to handle clicks on creature images

collection.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const selectedCreature = event.target.closest(".creature-card");
    console.log("Selected creature:", selectedCreature);
  }
});

// add event listeners to the theme and layout controls to update the appearance and save preferences

theme.addEventListener("change", (event) => {
  const selectedTheme = event.target.value;
  document.body.setAttribute("data-theme", selectedTheme);
  localStorage.setItem("selectedTheme", selectedTheme);
});

// add an event listener to the layout control to update the collection layout and save the preference
layout.addEventListener("change", (event) => {
  const selectedLayout = event.target.value;
  collection.setAttribute("data-layout", selectedLayout);
  localStorage.setItem("selectedLayout", selectedLayout);
});

// Check for saved preferences in Local Storage and apply them on page load
const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
  document.body.setAttribute("data-theme", savedTheme);
  theme.value = savedTheme;
} else {
  document.body.setAttribute("data-theme", "light");
  theme.value = "light";
}

// Check for saved layout preference in Local Storage and apply it on page load

const savedLayout = localStorage.getItem("selectedLayout");
if (savedLayout) {
  collection.setAttribute("data-layout", savedLayout);
  layout.value = savedLayout;
} else {
  collection.setAttribute("data-layout", "grid");
  layout.value = "grid";
}

// fetch data from a JSON file and process it
async function fetchData() {
  // try to fetch the data and handle any errors that may occur
  try {
    const response = await fetch("data/creatures.json");
    const creatures = await response.json();
    // Process the fetched data
  } catch (error) {
    console.error("Error fetching creature data:", error);
  }
}

// console.log statements to verify that the script is loaded and preferences are applied

console.log("Script loaded successfully.");
console.log("Saved theme:", savedTheme);
console.log("Saved layout:", savedLayout);

// 3. Listen for changes to each preference control and update the appearance.
// 4. Save both selected preferences to Local Storage.
// 5. Check for saved data on load and restore the controls and appearance.
// Add short pseudocode comments before writing each feature.
