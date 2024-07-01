let studentObj1 = {
    id: 1,
    name: 'orry',
    grades: 80,
}
let studentObj2 = {
    id: 2,
    name: 'ajay devgan',
    grades: 90,
}
let studentObj3 = {
    id: 3,
    name: 'sakti kapoor',
    grades: 85,
}



let studentsArr = []
// console.log(studentsArr[0]);

function addStudent(newStudent){
    studentsArr.push(newStudent);
}

function toDelete(deleteStd){
    let newId = deleteStd.id;
    // console.log(newId);
    for(let i = 0; i < studentsArr.length; i++){
        if(newId === studentsArr[i].id){
            // delete(studentsArr[i]);
            studentsArr.splice(i, i)
        }
    }


    return studentsArr;
}

console.log(studentsArr)
addStudent(studentObj1);
addStudent(studentObj2)
addStudent(studentObj3)
console.log(studentsArr)
toDelete(studentObj3);
console.log(studentsArr);
