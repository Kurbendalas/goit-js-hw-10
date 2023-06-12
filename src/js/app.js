import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.getElementById('breed-select');
const catInfo = document.querySelector('.cat-info');
const loadingMessage = document.getElementById('loading-message');

// Show loading message
function showLoadingMessage() {
  loadingMessage.style.display = 'block';
}

// Hide loading message
function hideLoadingMessage() {
  loadingMessage.style.display = 'none';
}

// Show error message
function showError(errorMessage) {
  catInfo.innerHTML = `<p class="error-message">${errorMessage}</p>`;
  hideLoadingMessage(); // Hide loading message
}

// Fetch breeds and populate the select options
function populateBreeds() {
  showLoadingMessage(); // Show loading message

  breedSelect.innerHTML = '<option value=""></option>'; // Add empty option for initial state

  fetchBreeds()
    .then(breeds => {
      if (breeds.length > 0) {
        const breedOptions = breeds.map(breed => {
          const option = document.createElement('option');
          option.value = breed.id;
          option.textContent = breed.name;
          return option;
        });

        breedOptions.forEach(option => {
          breedSelect.appendChild(option);
        });

        breedSelect.style.display = 'block'; // Show breed select
        hideLoadingMessage(); // Hide loading message
      } else {
        breedSelect.style.display = 'none'; // Hide breed select if no breeds available
        hideLoadingMessage(); // Hide loading message
      }
    })
    .catch(() => {
      showError('Failed to fetch breeds.'); // Show error message if fetching breeds fails
    });
}

// Fetch cat information by breed
function fetchCatInformation(breedId) {
  catInfo.innerHTML = ''; // Clear previous cat information
  showLoadingMessage(); // Show loading message

  fetchCatByBreed(breedId)
    .then(cats => {
      hideLoadingMessage(); // Hide loading message

      if (cats.length > 0) {
        const cat = cats[0];
        const image = document.createElement('img');
        image.src = cat.url;
        image.addEventListener('error', () => {
          showError('Failed to load image.'); // Show error message if image fails to load
        });

        const description = document.createElement('p');
        description.textContent = `Description: ${cat.breeds[0].description}`;

        const temperament = document.createElement('p');
        temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

        catInfo.appendChild(image);
        catInfo.appendChild(description);
        catInfo.appendChild(temperament);
      } else {
        showError('No cat information available.'); // Show error message if no cat information is available
      }
    })
    .catch(() => {
      showError('Failed to fetch cat information.'); // Show error message if fetching cat information fails
    });
}

// Event listener for breed select change
breedSelect.addEventListener('change', () => {
  const breedId = breedSelect.value;
  fetchCatInformation(breedId);
});

// Initialize app
breedSelect.style.display = 'none'; // Hide breed select initially
populateBreeds();
hideLoadingMessage(); // Hide loading message on initial load
