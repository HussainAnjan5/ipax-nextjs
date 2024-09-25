// Rename the file to page.tsx
import React from 'react';

interface User {
  id: number;
  name: string;
}

const Page = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json(); // TypeScript typing here

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Page;
