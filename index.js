const DOG_API_URL = 'https://api.thedogapi.com/v1/images/search';
const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

// Fetch & Display Random Dog Image
const fetchRandomDog = async () => {
  try {
    const response = await fetch(DOG_API_URL);
    const data = await response.json();
    document.getElementById('animal-image').src = data[0].url;
  } catch (error) {
    console.error('Error fetching dog image:', error);
  }
};

// Fetch & Display Random Cat Image
const fetchRandomCat = async () => {
  try {
    const response = await fetch(CAT_API_URL);
    const data = await response.json();
    document.getElementById('animal-image').src = data[0].url;
  } catch (error) {
    console.error('Error fetching cat image:', error);
  }
};

document.getElementById('dog-btn').addEventListener('click', fetchRandomDog);
document.getElementById('cat-btn').addEventListener('click', fetchRandomCat);

// Load a random dog image on page load
fetchRandomDog();
