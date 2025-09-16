-- Create favourites table + RLS policies
CREATE TABLE IF NOT EXISTS public.favourites (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, item_id)
);
CREATE INDEX IF NOT EXISTS idx_favourites_user_id ON public.favourites(user_id);
ALTER TABLE public.favourites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow users to select their own favourites" ON public.favourites FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Allow users to insert their own favourites" ON public.favourites FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Allow users to delete their own favourites" ON public.favourites FOR DELETE USING (auth.uid() = user_id);
