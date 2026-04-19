const Globe = () => {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 200" className="w-64 h-64">
        {/* Globe outline */}
        <circle cx="100" cy="100" r="80" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-spin" style={{ animationDuration: '20s' }} />
        {/* Equator */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5" />
        {/* Data points */}
        <circle cx="100" cy="20" r="4" fill="#10b981" />
        <circle cx="180" cy="100" r="4" fill="#10b981" />
        <circle cx="100" cy="180" r="4" fill="#10b981" />
        <circle cx="20" cy="100" r="4" fill="#10b981" />
        <circle cx="160" cy="40" r="4" fill="#10b981" />
        <circle cx="40" cy="160" r="4" fill="#10b981" />
        <circle cx="140" cy="160" r="4" fill="#10b981" />
        <circle cx="60" cy="40" r="4" fill="#10b981" />
        {/* Connections */}
        <line x1="100" y1="20" x2="180" y2="100" stroke="#3b82f6" strokeWidth="1" />
        <line x1="180" y1="100" x2="100" y2="180" stroke="#3b82f6" strokeWidth="1" />
        <line x1="100" y1="180" x2="20" y2="100" stroke="#3b82f6" strokeWidth="1" />
        <line x1="20" y1="100" x2="100" y2="20" stroke="#3b82f6" strokeWidth="1" />
        <line x1="160" y1="40" x2="40" y2="160" stroke="#3b82f6" strokeWidth="1" />
        <line x1="140" y1="160" x2="60" y2="40" stroke="#3b82f6" strokeWidth="1" />
      </svg>
      <button className="mt-4 bg-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-white font-semibold">
        Book a Consultancy
      </button>
    </div>
  );
};

export default Globe;