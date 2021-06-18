import React from "react";
import Summary from "./Summary";
import DataForDate from "./DataForDate";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import blueCovid from "./blueCovid.jpeg";
import canadaMap from "./canadaMap.png";
import moment from "moment";

/*
  Use the following API to display the number of covid cases by day for the last week
  https://opencovid.ca/api/
*/


  export default function App() {
    //Create an array of 7 items with 0-6 as indices to make the api call for the last week, then map through the array, subtracting each index (as days) from today, then transform it to moment day format.
    const days = [...Array(7).keys()].map((i) =>
      moment().subtract(i, "days").format("YYYY-MM-DD")
    );
  

  return (
    <div className="App-main">
      <img src={blueCovid} alt="logo" />
      <div className="p-4 h-screen">
        <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
          <h1 className="App-title">
            This Week's Covid Cases
            <div className="App-picture">
              <img src={canadaMap} alt="logo" />
            </div>
          </h1>

          <Summary />
          {/*passing the dates down as props to the component DataForDate for api call */}
          <DataForDate date={days} />
        </div>
      </div>
    </div>
  );
}

