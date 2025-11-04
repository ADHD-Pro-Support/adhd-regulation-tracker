'use client';
import { useFavourites } from '@/hooks/useFavourites';
import { useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function FavouritesPage() {
  const user = useUser();
  const router = useRouter();
  const { favouriteIds, isLoading } = useFavourites();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [user, router]);

  if (isLoading) return <div className="p-4">Loading your favourites...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My Favourites</h1>
      {favouriteIds.length === 0 ? (
        <div className="text-center p-8 border-2 border-dashed rounded-lg">
          <p className="text-gray-500">You haven&apos;t added any favourites yet.</p>
          <p className="text-gray-500 mt-2">Click the ⭐ on any regulation to save it here.</p>
        </div>
      ) : (
        <ul className="list-disc pl-6">
          {favouriteIds.map(id => <li key={id}>{id} (placeholder)</li>)}
        </ul>
      )}
    </div>
  );
}
