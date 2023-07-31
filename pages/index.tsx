import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '../components/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <MainLayout title='Pokemon List'>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              {pokemon.name}, {pokemon.id}
            </li>
          ))}
        </ul>
      </MainLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons:SmallPokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1;
    pokemon.id = id;
    pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return pokemon;
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;

