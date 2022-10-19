const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const createoption = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

const houseelement = document.querySelector("select");

houses.forEach(house => {
  houseelement.appendChild(createoption(house.name, house.code));
});

const createli = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
}

houseelement.addEventListener("change", e => {
  const characters = getCharacters(e.target.value);
  const characterElement = document.getElementById("characters");
  characterElement.innerHTML = "";
  characters.forEach(character => {
    characterElement.appendChild(createli(character));
  });
});