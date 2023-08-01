import { useState } from 'react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';

import { pokeApi } from '@/api';
import { MainLayout } from '@/components/layouts';
import { Pokemon } from '@/interfaces';
import { localFavourites } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavourites, setIsInFavourites] = useState(
    localFavourites.existsInFavourites(pokemon.id)
  );

  const onToggleFavourite = () => {
    localFavourites.toggleFavourite(pokemon.id);
    setIsInFavourites(!isInFavourites);
  };

  return (
    <MainLayout title={pokemon.name.toUpperCase()}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button color='gradient' ghost={!isInFavourites} onPress={onToggleFavourite}>
                {isInFavourites ? 'Delete from Favourites' : 'Save into Favourites'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' direction='row' gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  const paths = pokemons151.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  //TODO return data that i only need

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
