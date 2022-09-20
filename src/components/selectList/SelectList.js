import React, { useEffect, useState } from "react";
import { Select, Card } from "@cedcommerce/ounce-ui";

const SelectList = ({ data }) => {
  // console.log("data", data);
  const [selectOptions, setSelectOptions] = useState([]);
  const [optVal, setOptVal] = useState("");
  useEffect(() => {
    let opt = [];
    if (data) {
      for (const i of data) {
        opt.push({ label: i?.country, value: i?.country });
      }
      setSelectOptions(opt);
    }
  }, [data]); //keeping the data prop as dependency so it runs everytime data changes
  return (
    <div className="">
      <Card>
        <Select
          dropDownheight={250}
          name="Select Country"
          onChange={(e) => setOptVal(e)}
          placeholder="Select Countries"
          popoverContainer="element"
          thickness="thin"
          options={[
            {
              group: selectOptions,
              label: selectOptions.country,
              value: selectOptions.country,
            },
          ]}
          value={optVal}
        />
      </Card>
    </div>
  );
};

export default SelectList;
