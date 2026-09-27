

import { useState } from "react";
function Student() {
 const [student, setStudent] = useState(0);
 return (
 <div>
 <h1>Number of students</h1>
 <h2>{student}</h2>
 <button onClick={() =>{
    if(student>0){
        setStudent(student - 1)
    }
 }}>
 Decrease
 </button>
 <button onClick={() => setStudent(student + 1)
 }>
 Increase
 </button>
 <button onClick={() => setStudent(student * 0)
 }>
 Reset
 </button>
 </div>);
}
export default Student;