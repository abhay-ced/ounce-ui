import React, { useState, useEffect } from "react";
import { Select, Card, Tag } from "@cedcommerce/ounce-ui";
import { shortData, stringData } from "../../pages/taskTwo/stringData";
import "./taskFive.css";

const TaskFive = () => {
  const [lvl1Data, setLvl1Data] = useState([]);
  const [lvl2Data, setLvl2Data] = useState([]);
  const [lvl3Data, setLvl3Data] = useState([]);
  const [lvl4Data, setLvl4Data] = useState([]);
  const [lvl5Data, setLvl5Data] = useState([]);
  const [lvl6Data, setLvl6Data] = useState([]);
  const [lvl1Val, setLvl1Val] = useState("");
  const [lvl2Val, setLvl2Val] = useState("");
  const [lvl3Val, setLvl3Val] = useState("");
  const [lvl4Val, setLvl4Val] = useState("");
  const [lvl5Val, setLvl5Val] = useState("");
  const [lvl6Val, setLvl6Val] = useState("");
  const [allData, setAllData] = useState([]);

  const shortArr = stringData.trim().split("\n");
  useEffect(() => {
    let level = [];
    for (let el of shortArr) {
      if (!el.includes(">")) {
        level.push({
          label: el,
          value: el,
        });
      }
      setAllData(shortArr);
      setLvl1Data(level);
    }
  }, []);

  const handleMultipleLevel = (lbl, catlLevel) => {
    const check = [];
    for (const elem of allData) {
      //   if (elem.includes(lbl) && elem.includes(">")) { // old approach
      if (elem.includes(lbl)) {
        const arr = elem.trim().split(">");
        const found = check.some(
          (el) => el?.label?.trim() === arr[catlLevel]?.trim()
        );
        if (!found) {
          check.push({
            label: arr[catlLevel],
            value: arr[catlLevel],
          });
        }
      }
    }

    if (catlLevel === 1) {
      setLvl1Val(lbl);
      setLvl2Data(check);
      setLvl3Data("");
      setLvl4Data("");
      setLvl5Data("");
      setLvl6Data("");
    }
    if (catlLevel === 2) {
      setLvl2Val(lbl);
      setLvl3Data(check);
      setLvl4Data("");
      setLvl5Data("");
      setLvl6Data("");
    }
    if (catlLevel === 3) {
      setLvl3Val(lbl);
      setLvl4Data(check);
      setLvl5Data("");
      setLvl6Data("");
    }
    if (catlLevel === 4) {
      setLvl4Val(lbl);
      setLvl5Data(check);
      setLvl6Data("");
    }
    if (catlLevel === 5) {
      setLvl5Val(lbl);
      setLvl6Data(check);
    }
    if (catlLevel === 6) {
      setLvl6Val(lbl);
    }
  };

  //function to handle the tags

  const handleTag = (id) => {
    if (id === 1) {
      setLvl1Val("");
      setLvl2Data();
      setLvl2Val("");
      setLvl3Data("");
      setLvl3Val("");
      setLvl4Data("");
      setLvl4Val("");
      setLvl5Data("");
      setLvl5Val("");
      setLvl6Data("");
      setLvl6Val("");
    } else if (id === 2) {
      setLvl2Val("");
      setLvl3Data("");
      setLvl3Val("");
      setLvl4Data("");
      setLvl4Val("");
      setLvl5Data("");
      setLvl5Val("");
      setLvl6Data("");
      setLvl6Val("");
    } else if (id === 3) {
      setLvl3Val("");
      setLvl4Data("");
      setLvl4Val("");
      setLvl5Data("");
      setLvl5Val("");
      setLvl6Data("");
      setLvl6Val("");
    } else if (id === 4) {
      setLvl4Val("");
      setLvl5Data("");
      setLvl5Val("");
      setLvl6Data("");
      setLvl6Val("");
    } else if (id === 5) {
      setLvl5Val("");
      setLvl6Data("");
      setLvl6Val("");
    } else if (id === 6) {
      setLvl6Val("");
    }
  };

  //select options
  const optionsLbl1 = [
    {
      group: lvl1Data,
      label: "Select Category",
      value: "1",
    },
  ];
  const optionsLbl2 = [
    {
      group: lvl2Data,
      label: "Select  Sub Category",
      value: "2",
    },
  ];
  const optionsLbl3 = [
    {
      group: lvl3Data,
      label: "Select your low level category",
      value: "3",
    },
  ];
  const optionsLbl4 = [
    {
      group: lvl4Data,
      label: "Select your low level category",
      value: "4",
    },
  ];
  const optionsLbl5 = [
    {
      group: lvl5Data,
      label: "Select your low level category",
      value: "5",
    },
  ];
  const optionsLbl6 = [
    {
      group: lvl6Data,
      label: "Select your low level category",
      value: "5",
    },
  ];

  return (
    <div className="dropdown-wrapper">
      <Card title={"Taxonomy Dropdown with Badges"}>
        <div className="tag-wrapper">
          {lvl1Val && <Tag destroy={() => handleTag(1)}>{lvl1Val} </Tag>}
          {lvl2Val && <Tag destroy={() => handleTag(2)}>{lvl2Val} </Tag>}
          {lvl3Val && <Tag destroy={() => handleTag(3)}>{lvl3Val} </Tag>}
          {lvl4Val && <Tag destroy={() => handleTag(4)}>{lvl4Val} </Tag>}
          {lvl5Val && <Tag destroy={() => handleTag(5)}>{lvl5Val} </Tag>}
          {lvl6Val && <Tag destroy={() => handleTag(6)}>{lvl6Val} </Tag>}
        </div>

        <Select
          searchEable
          dropDownheight={600}
          name="Select top level"
          onChange={(e) => handleMultipleLevel(e, 1)}
          options={optionsLbl1}
          required
          value={lvl1Val}
        />

        {lvl2Data?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleMultipleLevel(e, 2)}
            options={optionsLbl2}
            required
            value={lvl2Val}
          />
        )}

        {lvl3Data?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleMultipleLevel(e, 3)}
            options={optionsLbl3}
            required
            value={lvl3Val}
          />
        )}
        {lvl4Data?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleMultipleLevel(e, 4)}
            options={optionsLbl4}
            required
            value={lvl4Val}
          />
        )}
        {lvl5Data?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleMultipleLevel(e, 5)}
            options={optionsLbl5}
            required
            value={lvl5Val}
          />
        )}
        {lvl6Data?.length > 1 && (
          <Select
            dropDownheight={600}
            name="Select mid level"
            onChange={(e) => handleMultipleLevel(e, 6)}
            options={optionsLbl6}
            required
            value={lvl6Val}
          />
        )}
      </Card>{" "}
    </div>
  );
};

export default TaskFive;
