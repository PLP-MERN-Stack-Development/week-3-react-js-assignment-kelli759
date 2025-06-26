import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        title="Clinic"
        links={[
          { path: '/', label: 'Home' },
          { path: '/appointments', label: 'Appointments' },
          { path: '/login', label: 'Login' },
        ]}
      />

      <main className="flex-grow p-6">{children}</main>

      <Footer
        links={[
          { path: '#', label: 'Privacy' },
          { path: '#', label: 'Terms' },
        ]}
        copyright="© 2025 Clinic. All rights reserved."
      />
    </div>
  );
}
