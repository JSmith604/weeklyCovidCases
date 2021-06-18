import React, { useState, useEffect } from "react";
import Row from "./Row";
import axios from "axios";

const DataForDate = ({ date }) => {
  //initializing data to an empty array, to update the state data with the response from api call later on
  let [data, setData] = useState([]);

  useEffect(() => {
    date.length && //check to make sure date array is not empty, if not empty look through the array with a for each loop
      date.forEach((d) => {
        //d is iterator
        axios
          .get(`https://api.opencovid.ca/timeseries?date=${d}`)
          .then((res) => {
            //creating the structure by which the response would be added to the state data
            //date: d was added to reference a particular date for case numbers
            const dateData = { date: d, active: res.data.active };
            //updating the state data every time an axios call is made
            //prev state provides access to the previous data to combine with new data to update the state
            setData((prevState) => [...prevState, dateData]);
          });
      });
  }, [date]);

  const provinceRow = (provinceData) => {
    return (
      <div>
        <Row
          key={provinceData.province}
          label={provinceData.province}
        >{`${provinceData.active_cases} (${provinceData.active_cases_change})`}</Row>
      </div>
    );
  };

  return (
    data && (
      <div>
        {/*sorting the data by date in ascending order */}
        {data
          .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)))
          .map((d, i) => {
            return (
              <div className="my-2" key={i}>
                <h2> {d.date}</h2>
                {d.active.map((provinceData) => provinceRow(provinceData))}
              </div>
            );
          })}
      </div>
    )
  );
};

export default DataForDate;
