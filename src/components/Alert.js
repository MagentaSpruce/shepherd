import { useEffect } from 'react';

function Alert({ type, msg, showAlert }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      showAlert();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p
      className={`alert alert-${type}
  sm:text-lg`}
    >
      {msg}
    </p>
  );
}

export default Alert;
