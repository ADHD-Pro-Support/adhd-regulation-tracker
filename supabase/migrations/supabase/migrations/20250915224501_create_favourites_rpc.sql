CREATE OR REPLACE FUNCTION list_favourites()
RETURNS TABLE(item_id TEXT)
LANGUAGE sql SECURITY DEFINER AS $$
  SELECT item_id FROM public.favourites WHERE user_id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION add_favourite(item_id_to_add TEXT)
RETURNS void
LANGUAGE sql SECURITY DEFINER AS $$
  INSERT INTO public.favourites (user_id, item_id)
  VALUES (auth.uid(), item_id_to_add) ON CONFLICT DO NOTHING;
$$;

CREATE OR REPLACE FUNCTION remove_favourite(item_id_to_remove TEXT)
RETURNS void
LANGUAGE sql SECURITY DEFINER AS $$
  DELETE FROM public.favourites
  WHERE user_id = auth.uid() AND item_id = item_id_to_remove;
$$;
