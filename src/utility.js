const obj = {};
const folder = document.querySelector(".folder");

createFolderStructure(obj, folder);

function createFolderStructure(obj, parent) {
  const entries = Object.keys(obj);

  for (let e of entries) {
    const ul = document.createElement("ul");
    if (Object.keys(obj[e]).length === 0) {
      ul.textContent = e;
    } else {
      const button = document.createElement("button");
      button.textContent = e;
      ul.appendChild(button);
    }
    if (e) {
      const li = document.createElement("li");
      createFolderStructure(obj[e], li);
      ul.addEventListener("click", (e) => toggleList(e, li));
      ul.appendChild(li);
    }
    parent.appendChild(ul);
  }

  function toggleList(e, li) {
    e.stopPropagation();
    li.classList.toggle("toggle");
  }
}

// function convertToObject(obj, arr, index = 0) {
//   if (index > arr.length - 1) {
//     return;
//   }
//   if (arr[index] in obj) {
//     convertToObject(obj[arr[index]], arr, index + 1);
//   } else {
//     obj[arr[index]] = {};
//     convertToObject(obj[arr[index]], arr, index + 1);
//   }
// }

// stringToObject(obj)
// function stringToObject(obj) {

//     for (let element of matrix) {
//         convertToObject(obj,element)
//     }

//     function convertToObject(obj,arr,index = 0) {
//         if(index > arr.length - 1) {
//             return
//         }
//         if(arr[index] in obj) {
//             convertToObject(obj[arr[index]],arr,index+1)
//         } else {
//             obj[arr[index]] = {}
//             convertToObject(obj[arr[index]],arr,index+1)
//         }
//     }

// }
