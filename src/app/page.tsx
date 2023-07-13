import { ClientButton } from '@/app/page-redirect';
async function getTime(): Promise<{ time: string }> {
  const res = await fetch('http://localhost:3000/api/time', {
    next: { revalidate: 1 },
  });
  return res.json();
}
export default async function Home() {
  const [data] = await Promise.all([getTime()]);
  return (
    <div className="bg-white h-screen w-full p-10">
      <h1 className="m-10">{data.time}</h1>
      <ClientButton />
    </div>
  );
}
