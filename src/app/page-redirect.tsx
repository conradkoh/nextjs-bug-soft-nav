'use client';

import { useRouter } from 'next/navigation';

export function ClientButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/page')}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go to page
    </button>
  );
}
