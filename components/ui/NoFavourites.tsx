import { Container, Image, Text } from '@nextui-org/react';

export const NoFavourites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h1>There is no favourites</Text>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        width={250}
        height={250}
      />
    </Container>
  );
};
