import React from "react";
import Summary from "./Summary";
import DataForDate from "./DataForDate";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import blueCovid from "./blueCovid.jpeg";
import canadaMap from "./canadaMap.png";

/*
  Use the following API to display the number of covid cases by day for the last week
  https://opencovid.ca/api/
*/

export default function App() {
  //array of days for the last week used to make api call

  const days = [
    "2021-06-10",
    "2021-06-11",
    "2021-06-12",
    "2021-06-13",
    "2021-06-14",
    "2021-06-15",
    "2021-06-16",
    "2021-06-17"
  ];

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

