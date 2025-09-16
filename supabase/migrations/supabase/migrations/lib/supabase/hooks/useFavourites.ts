'use client';
import useSWR from 'swr';
import { addFavourite, listFavourites, removeFavourite } from '@/lib/supabase/favourites';
import { useUser } from '@supabase/auth-helpers-react';

export const useFavourites = () => {
  const user = useUser();
  const { data, error, mutate } = useSWR(user ? 'favourites' : null, listFavourites);

  const toggleFavourite = async (itemId: string) => {
    if (!data) return;
    const isFav = data.includes(itemId);
    const optimistic = isFav ? data.filter(id => id !== itemId) : [...data, itemId];
    await mutate(optimistic, false);
    try {
      if (isFav) await removeFavourite(itemId);
      else await addFavourite(itemId);
      await mutate();
    } catch {
      await mutate(); // revert by revalidation
    }
  };

  return {
    favouriteIds: data ?? [],
    isLoading: !error && !data,
    isError: error,
    toggleFavourite,
  };
};
