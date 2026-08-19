function Toast({
  message,
  type = "success",
  onClose,
}) {
  if (!message) return null;

  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div
      className={`fixed right-4 top-4 z-50 rounded-lg px-5 py-3 text-white shadow-lg ${styles[type]}`}
    >
      <div className="flex items-center gap-4">
        <span>{message}</span>

        <button
          type="button"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Toast;