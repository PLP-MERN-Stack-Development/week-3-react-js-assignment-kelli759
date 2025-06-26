export default function Footer({ links = [], copyright }) {
  return (
    <footer className="bg-gray-100 px-6 py-4 text-sm text-gray-600 mt-8">
      <div className="flex flex-wrap justify-between items-center">
        <ul className="flex gap-4">
          {links.map((link) => (
            <li key={link.path}>
              <a href={link.path} className="hover:text-blue-600">{link.label}</a>
            </li>
          ))}
        </ul>
        <p className="text-xs mt-2 sm:mt-0">{copyright}</p>
      </div>
    </footer>
  );
}

const { toggleTheme, dark } = useTheme();

<button
  onClick={toggleTheme}
  className="px-3 py-1 rounded border bg-gray-200 dark:bg-gray-700"
>
  {dark ? 'Light Mode' : 'Dark Mode'}
</button>
