import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch("54.219.136.176/teams")
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Team TodoToday</h1>
        </header>
        <main>
          <div className="team-list">
            {teamData.map((member) => (
              <div key={member.id} className="team-member">
                <img
                  className="profImage"
                  src={`https://api.multiavatar.com/${encodeURIComponent(
                    member.name
                  )}.png`}
                  alt=""
                />
                <h2>{member.name}</h2>
                <p>
                  <strong>Email:</strong> {member.email}
                </p>
                <p>
                  <strong>Role:</strong> {member.role}
                </p>
                <p>
                  <strong>Hobby:</strong> {member.hobby}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
