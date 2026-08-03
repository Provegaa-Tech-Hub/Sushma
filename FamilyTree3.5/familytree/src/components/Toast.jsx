import { useEffect } from "react";


function Toast({
  message,
  type = "success",
  duration = 3000,
  show,
  onClose,
}) {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  if (!show) return null;

  const icons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
  };

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-left">
        <span className="toast-icon">
          {icons[type]}
        </span>

        <span className="toast-message">
          {message}
        </span>
      </div>

      <button
        className="toast-close"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
}

export default Toast;