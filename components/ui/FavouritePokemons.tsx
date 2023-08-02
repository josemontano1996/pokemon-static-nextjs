import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavouriteCardPokemon } from './';

interface Props {
  pokemons: number[];
}

export const FavouritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map((id) => (
        <FavouriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  );
};
