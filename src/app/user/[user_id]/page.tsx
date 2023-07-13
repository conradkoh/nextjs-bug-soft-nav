import { ClientButton } from '@/app/page-redirect';
export const revalidate = 0;
export default async function UserDetails({
  params,
}: {
  params: { user_id: string };
}) {
  const [data] = await Promise.all([getTime()]);
  return (
    <>
      <div>User Details</div>
      <h1 className="m-10">{data.time}</h1>
      <div className="bg-white p-10">{params.user_id}</div>
      <ClientButton />
    </>
  );
}
async function getTime(): Promise<{ time: string }> {
  const res = await fetch('http://localhost:3000/api/time', {
    next: { revalidate: 1 },
  });
  return res.json();
}
