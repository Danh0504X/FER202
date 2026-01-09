const x = 5; 
console.log(`The value of x is: ${x}`);


// hàm in đơn giản 
function Chao(name, tuoi) {
    return `Xin chao ${name}, ban ${tuoi} tuổi`;

}

console.log(Chao("Danh", 20));


// hàm tính bình phương của 1 số 

const binhphuong = a => a*a; 

// viết hàm in 1 đối tượng student gồm các thuộc itsnh name,age,grade 


const student = {
    id: 1001,
    ten: "danh",
    tuoi: 19,
    lop: 10
};

const instudent = (ten,tuoi,lop) => console.log(`You are ${ten}, ${tuoi} year olds, your grade is ${lop}`);

instudent(student.ten,student.tuoi,student.lop);

// khai báo 1 list student vào prinstudent list đó  
const liststudent = [
    {id:1 ,ten: "danh", tuoi: 19, lop: 10},
    {id:2 ,ten: "an", tuoi: 20, lop: 11},
    {id:3 ,ten: "binh", tuoi: 18, lop: 12},
    {id:4 ,ten: "cuong", tuoi: 21, lop: 12},
    {id:5 ,ten: "dung", tuoi: 22, lop: 11}
];

liststudent.map(s => instudent(s.id, s.ten, s.tuoi, s.lop));

// dùng reset operator để lấy phần còn lại của mảng students 
const[StudentA, StudentB, ...restStudent] = liststudent;

console.log("Student A:",StudentA);
console.log("Student B:",StudentB);
console.log("Rest Student:",restStudent);


// thêm mới 1 students vào resetStudents sử dụng tspread operator
const newStudent = {ten: "em", tuoi: 23, lop: 12};

const updatedStudents = [...restStudent, newStudent];
console.log("Updated Students:", updatedStudents);


