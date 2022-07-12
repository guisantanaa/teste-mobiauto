function maskify() {
  let numberFormat = "4556364607935616";
  let lastFour = numberFormat.slice(-4);
  let formatedData = "#".repeat(numberFormat.length - 4) + lastFour;
  console.log(formatedData);
}

maskify();

function updateData(currentObject, newDataObject) {
  let output = currentObject;

  Object.keys(newDataObject).forEach((value) => {
    if (currentObject.hasOwnProperty(value)) {
      output[value] = newDataObject[value];
    }
  });

  return output;
}

const currentObject = {
  name: "Marcos",
  country: "Brazil",
  age: 22,
};

const newDataObject = {
  descr: "Shorts",
  country: "Canada",
  age: 32,
};

let updatedData = updateData(currentObject, newDataObject);

console.log(`Dados atualizados: ${JSON.stringify(updatedData)}`);

async function getRickAndMortyCharacters() {
  const names = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];

  await fetch("https://rickandmortyapi.com/api/character", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      let data = [];

      json.results.map(function (results) {
        if (names.includes(results.name)) {
          data.push({
            nome: results.name,
            genero: results.gender,
            avatar: results.image,
            especie: results.species,
          });
        }
      });

      console.log(data);
    });
}

// getRickAndMortyCharacters();

function checkIfTheFirstLetterIsUppercase() {
  const firstWord = "Brasil";

  if (firstWord.charAt(0) === firstWord.charAt(0).toUpperCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkIfTheFirstLetterIsUppercase();
