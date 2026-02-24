import { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
};

function StudentManager() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setStudents(
          data.map((u: any) => ({
            id: u.id,
            name: u.name,
          })),
        ),
      );
  }, []);
  const addStudent = () => {
    if (!name) return;

    const newStudent = {
      id: Date.now(),
      name,
    };

    setStudents((prev) => [...prev, newStudent]);
    setName("");
  };
  const deleteStudent = (id: number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };
  const startEdit = (student: Student) => {
    setEditId(student.id);
    setEditName(student.name);
  };

  const saveEdit = () => {
    if (!editName.trim()) return;

    setStudents((prev) =>
      prev.map((student) =>
        student.id === editId ? { ...student, name: editName } : student,
      ),
    );

    setEditId(null);
    setEditName("");
  };

  return (
    <div>
      <h1>Student Manager</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter student name"
      />
      <button onClick={addStudent}>Add</button>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {editId === student.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {student.name}
                <button onClick={() => startEdit(student)}>Edit</button>
              </>
            )}

            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentManager;
