import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { supabaseClient } from '../lib/client';
import Navbar from '../components/Navbar/navbar';

export default function Home() {
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
        <Navbar />
      </main>
    </div>
  );
}
