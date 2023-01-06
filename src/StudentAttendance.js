import { useState, useEffect } from 'react';

function StudentAttendance() {
  // State variables for the list of students, current roll number, and current student name
  const [students, setStudents] = useState([]);
  const [rollNumber, setRollNumber] = useState('');
  const [studentName, setStudentName] = useState('');

  // Side effect to add a new student to the list when the roll number and student name are entered
  useEffect(() => {
    if (rollNumber && studentName) {
      setStudents([...students, { rollNumber, studentName, checkInTime: new Date() }]);
      setRollNumber('');
      setStudentName('');
    }

    
  }, [rollNumber, studentName, students]);

  return (
    <div>
      <h1>Student Attendance</h1>
      {/* Form to input roll number and student name */}
      <form>
        <label>
          Roll Number:
          <input value={rollNumber} onChange={e => setRollNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Student Name:
          <input value={studentName} onChange={e => setStudentName(e.target.value)} />
        </label>
        <br />
        <button type="submit">Check In</button>
      </form>
      {/* Display the list of students */}
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Student Name</th>
            <th>Check-In Time</th>
            <th>Check-Out Time</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.rollNumber}</td>
              <td>{student.studentName}</td>
              <td>{student.checkInTime.toString()}</td>
              <td>{student.checkOutTime ? student.checkOutTime.toString() : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentAttendance;
