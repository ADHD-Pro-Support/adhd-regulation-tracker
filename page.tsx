// We will connect this to Supabase in our next step.
// For now, it will show a simple message.

export default async function RegulationsPage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: '0 auto' }}>
      <h1>Regulations</h1>
      <p style={{ marginBottom: 16 }}>
        Read-only list (public). Add/update is admin-only and will come later.
      </p>
      <p>No regulations yet. (Database connection pending setup).</p>
    </main>
  );
}
