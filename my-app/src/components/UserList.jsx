import React, { useState, useEffect } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredUsers);
    setPage(1);
  }, [search, users]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">User Directory</h2>

      <input
        type="text"
        placeholder="Search by name..."
        className="w-full mb-4 p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <ul className="space-y-2">
            {paginated.map(user => (
              <li key={user.id} className="p-3 border rounded bg-gray-50">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
              onClick={() => setPage(prev => prev - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
              onClick={() => setPage(prev => prev + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
