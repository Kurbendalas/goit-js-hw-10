const apiKey =
  'live_dlFP3jsFWHclypgDvvpFxsWNbxQ2NZUt8Y3YPwYnT7OElWYqrnuAfcUDZHbQipzX';

export async function fetchBreeds() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': apiKey,
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to fetch breeds');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
      {
        headers: {
          'x-api-key': apiKey,
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to fetch cat by breed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}
