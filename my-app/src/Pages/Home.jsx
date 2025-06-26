export default function Home() {
  return <h2 className="p-4 text-lg">Home Page</h2>;
}

import UserList from '../components/UserList';

export default function Home() {
  return (
    <div className="p-6">
      <UserList />
    </div>
  );
}
