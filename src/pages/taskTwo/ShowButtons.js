import { Button } from "@cedcommerce/ounce-ui";
import React, { useState } from "react";

const ShowButtons = ({ obj }) => {
  const [show, setShow] = useState({});
  const [show2, setShow2] = useState(false);
  const [id, setId] = useState(0);
  const entries = Object.keys(obj);

  return (
    <div>
      {entries.map((item, ind) => {
        return (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShow({ ind });
              setShow2(!show2);
              setId(ind);
              console.log(item);
            }}
            key={ind}
            style={{ margin: "12px", marginLeft: "50px", width: "20vw" }}
          >
            {Object.keys(obj[item]).length !== 0 ? (
              <Button>{item}</Button>
            ) : (
              <p>{item}</p>
            )}
            {/* {show.ind === ind && id === ind && <ShowButtons obj={obj[item]} />} */}
            {show2 && id === ind && <ShowButtons obj={obj[item]} />}
          </div>
        );
      })}
    </div>
  );
};

export default ShowButtons;
