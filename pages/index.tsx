import { Button } from '@nextui-org/react';
import { NextPage } from 'next';
import { MainLayout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <>
      <MainLayout title='Pokemon List'>
        <h1>Hola Mundo</h1>
        <Button color='gradient'>Hola Mundo</Button>
      </MainLayout>
    </>
  );
};

export default HomePage;

