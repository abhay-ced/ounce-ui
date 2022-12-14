import React from "react";
import ShowUI from "./ShowUI";
import { shortData, stringData } from "../../pages/taskTwo/stringData";

const TaskTwoClone = () => {
  // step 1. make the array of the given string values.
  const shortDataArray = stringData
    .split("\n")
    .map((item) => item.split(">").map((item) => item.trim()));

  console.log(shortDataArray);

  // Step 2. Make the one reccursive object of the all arrays.
  let obj = {};
  function stringToObject(obj) {
    for (let element of shortDataArray) {
      convertToObject(obj, element);
    }

    function convertToObject(obj, element, i = 0) {
      if (i > element.length - 1) {
        return;
      }
      if (element[i] in obj) {
        convertToObject(obj[element[i]], element, i + 1);
      } else {
        obj[element[i]] = {};
        convertToObject(obj[element[i]], element, i + 1);
      }
    }
  }
  // step 3 call that recurcive object.
  stringToObject(obj);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>TaskTwoClone</h1>
      {/* step 4 Pass that super object to the another component as props */}
      <ShowUI obj={obj} />
    </div>
  );
};

export default TaskTwoClone;
