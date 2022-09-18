import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { supabaseClient } from '../lib/client';
import Navbar from '../components/navbar/navbar';
import ManageTodo from '../components/manage-todo/manage-todo';
import { useDisclosure } from '@chakra-ui/hooks';

export default function Home() {
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const user = supabaseClient.auth.user();

  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Awesome todoapp to store your awesome todos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar onOpen={onOpen} />
        <ManageTodo isOpen={isOpen} onClose={onClose} initialRef={initialRef} />
      </main>
    </div>
  );
}
