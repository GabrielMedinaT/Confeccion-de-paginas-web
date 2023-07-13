import React from "react";

async function fetchUser() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function IndexPage() {
  const user = await fetchUser();

  return (
    <div className="container">
      <h1 className="title">Index Page</h1>
      <ul className="user-list">
        {user.map((user) => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <h5 className="user-name">{user.first_name}</h5>
              <p className="user-email">{user.email}</p>
              <img src={user.avatar} alt="" className="user-avatar" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;
