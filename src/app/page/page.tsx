'use client';
import { useRouter } from 'next/navigation';

export default function Page2() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push('/user/user_1')}>Go Back</button>
    </>
  );
}
