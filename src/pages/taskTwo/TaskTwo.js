import React, { useEffect, useState } from "react";
import { Modal, Button } from "@cedcommerce/ounce-ui";
import { shortData, stringData } from "./stringData";
import ShowButtons from "./ShowButtons";
import "./taskTwo.css";

const TaskTwo = () => {
  const [objData, setObjData] = useState();
  // const [apiData, setApiData] = useState(null);
  // const fetchingString = async () => {
  //   const fetchData = fetch(
  //     "https://www.google.com/basepages/producttype/taxonomy.en-US.txt"
  //   )
  //     .then((resp) => resp.text())
  //     .then((data) => setApiData(data));
  // };

  // useEffect(() => {
  //   fetchingString();
  // }, []);

  // console.log("line 18", apiData);

  let obj = {};
  const arrayOfAllLines = stringData
    .split("\n")
    .map((arr) => arr.split(">").map((ele) => ele.trim()));
  const a2 = shortData
    .split("\n")
    .map((array) => array.split(">").map((arr2) => arr2.trim()));
  // console.log(a2);

  // function stringToObject(obj) {
  //   for (let element of arrayOfAllLines) {
  //     convertToObject(obj, element);
  //   }

  //   function convertToObject(obj, element, i = 0) {
  //     if (i > element[i].length - 1) {
  //     }
  //   }
  // }
  function stringToObject(obj) {
    for (let element of arrayOfAllLines) {
      convertToObject(obj, element);
    }

    function convertToObject(obj, arr, index = 0) {
      if (index > arr.length - 1) {
        return;
      }
      if (arr[index] in obj) {
        convertToObject(obj[arr[index]], arr, index + 1);
      } else {
        obj[arr[index]] = {};
        convertToObject(obj[arr[index]], arr, index + 1);
      }
    }
  }

  stringToObject(obj);
  console.log(Object.keys(obj).length);

  return (
    <div>
      <h1 className="main-heading"> Texonomy Application</h1>
      <ShowButtons obj={obj} />
      {/* {entries &&
        entries.map((item, index) => {
          return (
            <div key={index} style={{ margin: "12px" }}>
              <Button>{item}</Button>
            </div>
          );
        })} */}
    </div>
  );
};

export default TaskTwo;