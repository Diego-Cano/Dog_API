console.log('Dog API Assingment :)')
// Fetch Request
fetch('https://dogapi.dog/api/v2/breeds')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('List of Dog Breeds:', JSON.stringify(data, null, 2));
    console.log('List of Links:', JSON.stringify(data.links, null, 2));
    
    // Part 2
    displayBreedList(data.data);
  })
  .catch(error => {
    console.error('Error fetching dog breeds:', error.message);
  });

// Displaying Breed Information
function fetchBreedDetails(breedId) {
  fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`)
//   fetch(`https://dogapi.dog/api/v2/breeds?page[number]=${breedId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Breed Details:', JSON.stringify(data.data, null, 2));
      displayBreedDetails(data.data);
    })
    .catch(error => {
      console.error('Error fetching breed details:', error.message);
    });
}

// Breeds 
function displayBreedList(breeds) {
  const breedListContainer = document.getElementById('breedList');
  breedListContainer.innerHTML = '<h3>Dog Breeds</h3>';

  breeds.forEach(breed => {
    const listItem = document.createElement('button');
    listItem.textContent = JSON.stringify(breed, null, 2);
    listItem.addEventListener('click', () => {
        console.log('clicked')
      fetchBreedDetails(breed);
    });
    breedListContainer.appendChild(listItem);
  });
}

function displayBreedDetails(breedDetails) {
    const detailsContainer = document.getElementById('breedDetails');
    detailsContainer.innerHTML = '<h3>Breed Details</h3>';
  
    for (const [id] of Object(breedDetails)) {
      const detailItem = document.createElement('p');
      detailItem.textContent = `${id}`;
      detailsContainer.appendChild(detailItem);
    }
  }

  //Facts
fetch('https://dogapi.dog/api/v2/facts')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Facts:', JSON.stringify(data.data, null, 2));

})
.catch(error => {
  console.error('Error fetching:', error.message);
});

  //Groups
  fetch('https://dogapi.dog/api/v2/groups')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Groups:', JSON.stringify(data.data, null, 2));
  
  })
  .catch(error => {
    console.error('Error fetching:', error.message);
  });
