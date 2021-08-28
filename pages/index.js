import Link from 'next/link';
import Layout from '@/components/Layout';
export default function HomePage() {
  return (
    <Layout>
      <h2>Home</h2>
      <Link href='/about'>About</Link>
      <meta name='description' content='Dj events'/>
    </Layout>
  );
}
