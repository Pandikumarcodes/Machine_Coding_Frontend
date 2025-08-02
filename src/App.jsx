import { useState } from "react";

function UserForm() {
  const [form, setForm] = useState({ name: "", age: "" });
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // 👉 Track which user we're editing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.age) {
      alert("fill the form");
      return;
    }
    if (editIndex === null) {
      setUsers((prev) => [...prev, { ...form }]);
    } else {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = { ...form };
      console.log((updatedUsers[editIndex] = { ...form }));
      setUsers(updatedUsers);
      setEditIndex(null);
    }
    setForm({ name: "", age: "" });
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    const DeleteUser = users?.filter((__, ind) => {
      return id !== ind;
    });
    console.log(DeleteUser);
    return setUsers(DeleteUser);
  };
  return (
    <div>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <button onClick={handleSubmit}>
        {editIndex === null ? "Add User" : "Update User"}
      </button>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} yrs)
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserForm;
