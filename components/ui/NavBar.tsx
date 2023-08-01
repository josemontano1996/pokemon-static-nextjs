import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
        alt='App Icon'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref legacyBehavior>
        <Link>
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okemon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favourites' passHref legacyBehavior>
        <Link>
          <Text color='white'>Favourites</Text>
        </Link>
      </NextLink>
    </div>
  );
};
