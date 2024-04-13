export function ErrorMessage({ errorMessage }) {
  return (
    <p className="error">
      <span>⛔️</span> {errorMessage}
    </p>
  );
}
