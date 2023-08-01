const toggleFavourite = (id: number) => {
  console.log('toggle favourite called');

  let favourites: number[] = JSON.parse(localStorage.getItem('favourites') || '[]');

  if (favourites.includes(id)) {
    favourites = favourites.filter((pokeId) => pokeId !== id);
  } else {
    favourites.push(id);
  }

  localStorage.setItem('favourites', JSON.stringify(favourites));
};

const existsInFavourites = (id: number): Boolean => {
  if (typeof window === 'undefined') return false;

  const favourites: number[] = JSON.parse(localStorage.getItem('favourites') || '[]');

  return favourites.includes(id);
};

export default { toggleFavourite, existsInFavourites };
