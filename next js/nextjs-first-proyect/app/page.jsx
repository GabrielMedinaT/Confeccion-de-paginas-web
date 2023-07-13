import React from "react";

async function fetchUser() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function IndexPage() {
  const user = await fetchUser();

  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <div>
              <h4>{user.first_name}</h4>
              <h5>{user.id}</h5>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;
