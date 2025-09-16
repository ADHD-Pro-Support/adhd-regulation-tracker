import { supabase } from './client';

export const listFavourites = async (): Promise<string[]> => {
  const { data, error } = await supabase.rpc('list_favourites');
  if (error) throw error;
  return (data || []).map((fav: { item_id: string }) => fav.item_id);
};

export const addFavourite = async (itemId: string): Promise<void> => {
  const { error } = await supabase.rpc('add_favourite', { item_id_to_add: itemId });
  if (error) throw error;
};

export const removeFavourite = async (itemId: string): Promise<void> => {
  const { error } = await supabase.rpc('remove_favourite', { item_id_to_remove: itemId });
  if (error) throw error;
};
