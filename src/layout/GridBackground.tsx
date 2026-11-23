export function GridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div className="dark-backdrop absolute inset-0 hidden dark:block" />
      <div className="grid-overlay absolute inset-0" />
    </div>
  );
}
