import { GetServerSideProps } from 'next';
import { FormEvent, useContext, useState } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { withSSRGuest } from '../utils/withSSRGuest';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const { signIn } = useContext(AuthContext);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input id="email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      <input id="password" name="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});