import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Grid, Card, Button, Container, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '@/api';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { MainLayout } from '@/components/layouts';
import { getPokemonInfo, localFavourites } from '@/utils';
import Image from 'next/image';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavourites, setIsInFavourites] = useState(
    localFavourites.existsInFavourites(pokemon.id)
  );

  const onToggleFavourite = () => {
    localFavourites.toggleFavourite(pokemon.id);
    setIsInFavourites(!isInFavourites);

    if (!isInFavourites) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }
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
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const paths = data.results.map((pokemon) => {
    const name: string = pokemon.name;
    return { params: { name } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};

export default PokemonByNamePage;
