import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./model/JsonPlaceholder/User";

// https://www.robinwieruch.de/react-hooks-fetch-data
// 90% Cleaner React With Hooks - Ryan Florence - React Conf 2018
// https://www.youtube.com/watch?v=wXLf18DsV-I

// Fun with React Hooks - Michael Jackson and Ryan Florence
// https://www.youtube.com/watch?v=1jWS7cCuUXw

export default function UserList() {
  const [users, setUsers] = useState<User[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const result = await axios.get(url);
      console.log(result);
      setUsers(result.data);
    };

    fetchData();
  }, []);

  if (users) {
    let userList = users.map(user => <li key={user.id}>{user.name}</li>);
    return <ul>{userList}</ul>;
  } else {
    return <div>Loading users ...</div>;
  }
}
