// I WAS TRYING WITH A SELECT/OPTION TAG INSTEAD
// console.log("Start");

// const fetchDog = async () => {

//     const response = await fetch('https://dogapi.dog/api/v2/breeds');
//     const dogBreeds = await response.json();
//     console.log(dogBreeds);
//     printDogs(dogBreeds);
// }

// const printDogs = (breeds) => {
//     const select = document.querySelector('.breedsList');
//     const breedOptions = breeds.map(breed => {
//         const option = document.createElement('option');
//         option.text = breed.name;
//         option.value = breed.id;
//         return option;

//     })

//     breedOptions.forEach(breedOption => {
//         select.appendChild(breedOption);
//     })

// }

console.log('Start');

    // Basic Fetch Request
    fetch('https://dogapi.dog/api/v2/breeds')
      .then(response => response.json())
      .then(data => {
        //Printing Data
        console.log(data);
        // Handling Responses
        if (data.status === 'success') {
          const breeds = data.message;
          // Breed Selection
          const breedList = document.getElementById('breedList');
          breeds.forEach(breed => {
            const listItem = document.createElement('li');
            listItem.textContent = breed;
            listItem.addEventListener('click', () => fetchBreedDetails(breed));
            breedList.appendChild(listItem);
          });
        } else {
          throw new Error('Failed to fetch');
        }
      })
      .catch(error => console.error(error));

    // Breed Info
    function fetchBreedDetails(breed) {
      fetch(`https://dogapi.dog/api/v2/breeds/${breed}`)
        .then(response => response.json())
        .then(data => {
          const breedDetails = document.getElementById('breedDetails');
          breedDetails.innerHTML = `
            <h2>${data.message.name}</h2>
            <p>Description: ${data.message.description}</p>
            <p>Other attributes: ${JSON.stringify(data.message)}</p>
          `;
        })
        .catch(error => console.error(error));
    }

    // Dog Facts and Groups.
    fetch('https://dogapi.dog/api/v2/facts')
      .then(response => response.json())
      .then(data => {
        const dogFactsList = document.getElementById('dogFacts');
        data.message.forEach(fact => {
          const listItem = document.createElement('li');
          listItem.textContent = fact;
          dogFactsList.appendChild(listItem);
        });
      })
      .catch(error => console.error(error));

    //info about dog groups
    fetch('https://dogapi.dog/api/v2/groups')
      .then(response => response.json())
      .then(data => {
        const dogGroupsList = document.getElementById('dogGroups');
        Object.keys(data.message).forEach(group => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<strong>${group}</strong>: ${data.message[group]}`;
          dogGroupsList.appendChild(listItem);
        });
      })
      .catch(error => console.error(error));


        
       