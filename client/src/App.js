import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
