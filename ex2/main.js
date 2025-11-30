//Bài 1

// let products = [
//   {
//     id: 1,
//     name: "Milk",
//     count: 100,
//   },
//   {
//     id: 2,
//     name: "Orange",
//     count: 100,
//   },
//   {
//     id: 3,
//     name: "Butter",
//     count: 100,
//   },
// ];
// // thêm đối tượng vào mảng products
// const newProduct = {
//   id: 4,
//   name: "Beer",
//   count: 100,
// };
// products.push(newProduct);
// console.log(products);
// // Xóa đối tượng có id là 2
// for (let i in products) {
//   if (products[i].id === 2) {
//     delete products[i];
//   }
//   //truy vấn đề đối tượng có id là 3 và cập nhật lại thuộc tính count
//   else if (products[i].id === 3) {
//     products[i].count = 0;
//   }
// }

// //Kiểm tra "Butter" có trong mảng hay không
// let search = prompt("Nhập từ khóa tìm kiếm");
// let stamp = null;
// for (let i in products) {
//   if (search === products[i].name) {
//     stamp = products[i];
//     break;
//   }
// }
// if (stamp) {
//   console.log(`id: ${stamp.id}, count: ${stamp.count}`);
// } else {
//   console.log("Không có dữ liệu tìm kiếm");
// }
// console.log(products);

//Bài 2:Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành. Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
// R – In ra toàn bộ các khóa học theo mẫu trên
// U – Hỏi người dùng vị trí update khóa học. Nếu tồn tại cho người dùng nhập vào tên muốn update và trạng thái mới. Update xong in lại như trên
// D – Hỏi người dùng vị trị của khóa học muốn xóa. Tiến hành xóa và in ra như trên
// E – Biến chương trình thành vòng lặp vĩnh cửu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”

const arrCourse = [
  {
    name: "HTML",
    complete: false,
  },
  {
    name: "CSS",
    complete: false,
  },
  {
    name: "Base of JavaScript",
    complete: false,
  },
];
while (true) {
  let choice = prompt("Nhập C/R/U/D/E").toUpperCase().trim();
  switch (choice) {
    //Chức năng C
    case "C":
      let newCourseName = prompt("Nhập tên khóa học mới");
      //tạo đối tượng mới từ thông tin ng nhập và thêm vào ds khóa học
      const newCourse = {
        name: newCourseName,
        complete: false,
      };
      //thêm khóa học mới vào ds khóa học
      arrCourse.push(newCourse);
      //hiện thị ds khóa học
      displayCourse();
      break;
    //Chức năng R
    case "R":
      displayCourse();
      break;
    //Chức năng U
    case "U":
      let indexUpdate = Number(prompt("Nhập vị trí muốn update"));
      //validate
      while (!Number.isInteger(indexUpdate) || indexUpdate < 0) {
        alert("Dữ liệu nhập không đúng mời nhập lại");
        indexUpdate = Number(prompt("Nhập lại vị trí"));
      }
      if (indexUpdate <= arrCourse.length) {
        let nameUpdate = prompt("Nhập tên muốn update:");
        let status = prompt("Trạng thái của khóa học:");
        for (let i = 0; i < arrCourse.length; i++) {
          if (indexUpdate - 1 === i) {
            arrCourse[i].name = nameUpdate;
            arrCourse[i].complete = status;
          }
        }
        displayCourse();
      } else {
        alert("Hiện tại chỉ có " + arrCourse.length + " khóa học");
      }

      break;
    //Chức năng D
    case "D":
      let indexDelete = Number(prompt("Nhập vị trí muốn xóa"));
      //validate
      while (!Number.isInteger(indexDelete) || indexDelete <= 0) {
        alert("Dữ liệu nhập không đúng mời nhập lại");
        indexDelete = Number(prompt("Nhập lại vị trí"));
      }
      if (indexDelete <= arrCourse.length) {
        for (let i = 0; i < arrCourse.length; i++) {
          if (indexDelete - 1 === i) {
            arrCourse.splice(i, 1);
          }
        }
        displayCourse();
      } else {
        alert("Hiện tại chỉ có " + arrCourse.length + " khóa học");
      }

      break;
    case "E":
      //Chức năng E
      if (choice.toUpperCase() === "E") {
        alert("Thanks for using the app!");
        break;
      }
    default:
      alert("Không có chức năng bạn chọn");
      break;
  }
  if (choice.toUpperCase() === "E") {
    break;
  }
}

//hàm hiển thị danh sách khóa học
function displayCourse() {
  console.log("=====Danh sách khóa học=====");
  for (let i = 0; i < arrCourse.length; i++) {
    console.log(`${i + 1}. ${arrCourse[i].name}
Complete: ${arrCourse[i].complete}`);
  }
}
