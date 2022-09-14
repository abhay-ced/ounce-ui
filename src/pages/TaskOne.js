import React, { useState } from "react";
import {
  Card,
  FlexLayout,
  TextField,
  TextStyles,
  Button,
} from "@cedcommerce/ounce-ui";
import "./taskOne.css";

const TaskOne = () => {
  const [nameInput, setNameInput] = useState("");
  const [password, setPassword] = useState("");
  const [typePassword, setTypePassword] = useState(false);

  const handleUsername = (e) => {
    if (/[^0-9a-zA-Z]/.test(e)) {
      return false;
    } else {
      setNameInput(e);
    }
  };

  const handlePassword = (e) => {
    const onlyNumber = "0 1 2 3 4 5 6 7 8 9";
    if (onlyNumber.includes(e)) {
      console.log("yup working all fine");
    }
    setPassword(e);
    setTypePassword(false);
  };
  return (
    <div className="task-one-wrapper">
      <Card>
        <TextStyles
          alignment="center"
          fontweight="bold"
          textcolor="dark"
          type="Heading"
          utility="none"
          displayTypes="LG-3.8"
        >
          Basic Form Functionality.
        </TextStyles>
        <FlexLayout direction="vertical">
          <div className="form-input">
            <TextField
              autocomplete={"false"}
              onFocus={false}
              name={"Username"}
              onChange={(e) => {
                handleUsername(e);
              }}
              value={nameInput}
              type="text"
              placeHolder="Name.."
            />
          </div>
          <div className="form-input">
            <TextField
              name={"Password"}
              onChange={(e) => {
                handlePassword(e);
              }}
              onblur={() => {
                setTypePassword(true);
                console.log("blurrr", typePassword);
              }}
              value={password}
              type={typePassword ? "Password" : "number"}
              placeHolder="Password.."
            />
          </div>
          <Button onClick={(e) => console.log({ nameInput, password })}>
            Login
          </Button>
        </FlexLayout>
      </Card>
    </div>
  );
};

export default TaskOne;

// var regEx = /^[0-9a-zA-Z]+$/;
// if (e?.match(/^[0-9a-zA-Z]+$/)) {
//   setNameInput(e);
// } else {
//   return false;
// }
