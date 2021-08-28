import { useRouter } from 'next/router';
import Layout from "@/components/Layout";
export default function EventPage() {
    const router=useRouter()
    return (
      <Layout>
        My Event1
        <h3>{router.query.slug}</h3>
        <button onClick={() => router.push("/")}>Click</button>
      </Layout>
    );
}
