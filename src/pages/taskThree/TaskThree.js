import React, { useEffect, useState } from "react";
import SelectList from "../../components/selectList/SelectList";
import "./taskThree.css";

const TaskThree = () => {
  const [countriesData, setCountriesData] = useState("");
  const countriesAPI = "https://countriesnow.space/api/v0.1/countries";

  const fetchEndpoint = async () => {
    const getData = await fetch(countriesAPI)
      .then((res) => res.json())
      .then((data) => setCountriesData(data.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchEndpoint();
  }, []);
  return (
    <div className="task-three-wrapper">
      <SelectList data={countriesData} />
    </div>
  );
};

export default TaskThree;
