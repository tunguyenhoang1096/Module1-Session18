// Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại. Sau đó truy xuất các thuộc tính của đối tượng trên

// let person = {
//   name: "Nguyen Van A",
//   age: 30,
//   address: "Ha Noi",
//   phone: "0904277xxx",
// };
// console.log(`Ten: ${person.name}
// Tuoi: ${person.age}
// Dia chi: ${person.address}
// So dien thoai: ${person.phone}`);

// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây, sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự (value tự điền). Sau đó tạo mảng “students” để chứa chúng. Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”

//khởi tạo đối tượng student
let student = {
  id: 1,
  name: "Nguyen Van A",
  gender: "Nam",
  age: 20,
  mark: 8,
};
//khởi tạo đối tưởng newStudent
let newStudent = {
  id: 2,
  name: "Nguyen Van B",
  gender: "Nam",
  age: 21,
  mark: 7,
};
// thêm mảng rỗng students để chứa chúng
const students = [];
// thêm đối tượng vào mảng
students.push(student);
students.push(newStudent);
console.log(students);
console.log("ID: ", students[1].id);
console.log("Tên: ", students[1].name);
console.log("Giới tính: ", students[1].gender);
console.log("Tuổi: ", students[1].age);
console.log("Điểm: ", students[1].mark);

// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm cao nhất và in ra toàn bộ thông tin của học sinh đó
let max = students[0].mark;
for (index in students) {
  if (max < students[index].mark) {
    max = students[index].mark;
  }
}
console.log(max);
