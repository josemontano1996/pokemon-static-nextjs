import { useState, useEffect } from 'react';

import { MainLayout } from '@/components/layouts';
import { NoFavourites } from '@/components/ui';
import { localFavourites } from '@/utils';

import { FavouritePokemons } from '@/components/ui/FavouritePokemons';

const FavouritesPage = () => {
  const [favouritePokemons, setFavouritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavouritePokemons(localFavourites.pokemons);
  }, []);

  return (
    <MainLayout title='Favourite pokemons'>
      {favouritePokemons.length === 0 ? (
        <NoFavourites />
      ) : (
        <FavouritePokemons pokemons={favouritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavouritesPage;
