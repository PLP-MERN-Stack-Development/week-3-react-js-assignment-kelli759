export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <h1 className="KelTech">My App</h1>
    </nav>
  );
}

import { Link } from 'react-router-dom';

export default function Navbar({ title = "Clinic App", links = [] }) {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">{title}</h1>
      <ul className="flex gap-4 text-sm text-gray-700">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="hover:text-blue-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
