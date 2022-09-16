import React, { useState } from "react";
import { Button, TextStyles, Select } from "@cedcommerce/ounce-ui";

const ShowUI = ({ obj }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const entries = Object.keys(obj);
  const [options, setOptions] = useState([]);

  console.log(options);
  return (
    <div>
      {entries &&
        entries.map((item, ind) => {
          return (
            <div
              key={ind}
              style={{ margin: "24px" }}
              onClick={(e) => {
                e.stopPropagation();
                setOptions(item);
                setShow(!show);
                setId(ind);
              }}
            >
              {Object.keys(obj[item]).length !== 0 ? (
                <Button>{item}</Button>
              ) : (
                // <Select options={item} />
                // <Button>{item}</Button>
                <TextStyles
                  alignment="left"
                  fontweight="normal"
                  textcolor="dark"
                  type="simpleText"
                  utility="none"
                >
                  {item}
                </TextStyles>
              )}
              {show && ind === id && <ShowUI obj={obj[item]} />}
            </div>
          );
        })}
    </div>
  );
};

export default ShowUI;
