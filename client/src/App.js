import { useEffect, useState } from "react";

function App() {
  const api = process.env === "production" ? "" : "http://localhost:5000";

  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api}/api`);
      const data = await response.json();
      console.log(data);
      setBackendData(data);
    };
    fetchData();
  }, [api]);

  return (
    <div>
      <h1>Frontend</h1>
      <h2>Backend Data</h2>
      <ul>
        {backendData.users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
