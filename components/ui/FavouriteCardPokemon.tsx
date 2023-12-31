import { FC } from 'react';
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemonId: number;
}

export const FavouriteCardPokemon: FC<Props> = ({ pokemonId }) => {
  const router = useRouter();

  const onFavouriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <Grid xs={6} sm={3} xl={1} key={pokemonId}>
      <Card isHoverable isPressable css={{ padding: 10 }} onPress={onFavouriteClicked}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  );
};
