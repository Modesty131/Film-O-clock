export default function WatchlistModal({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow w-80">
        <h2 className="text-lg font-bold mb-2">Create Watchlist</h2>
        <input type="text" placeholder="Watchlist Name" className="border w-full p-2 mb-2" />
        <button onClick={onSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button onClick={onClose} className="ml-2">Cancel</button>
      </div>
    </div>
  );
}
