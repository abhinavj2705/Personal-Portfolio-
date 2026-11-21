export function GridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 hidden bg-cover bg-center opacity-25 dark:block"
        style={{ backgroundImage: "url('/Dark%20theme%20background.png')" }}
      />
      <div className="grid-overlay absolute inset-0" />
    </div>
  );
}
