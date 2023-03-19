import { useEffect, useState } from "react";

function App() {
  const api = process.env === "production" ? "" : "http://localhost:5000";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${api}/api`)
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, [api]);

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
