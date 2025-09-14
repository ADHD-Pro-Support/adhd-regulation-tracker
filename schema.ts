// This is a placeholder for our database schema description.
// We will build this out in more detail later.

export type Regulation = {
  id: number;
  title: string;
  jurisdiction: string;
  source_url: string;
  effective_date: string | null;
  status: 'draft' | 'active' | 'archived';
};
