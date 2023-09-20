import React, { useState } from "react";
import {stops} from "../components/json/stops";
import {routes} from "../components/json/routes";

let stopsInfo = [],
    routesInfo = [];

for(let i = 0; i < stops.length; i++) {stopsInfo[i] = stops[i].name;}

for(let i = 0; i < routes.length; i++) {routesInfo[i] = `${routes[i].from} - ${routes[i].to}`;}

export default function SearchPage() {
    const [filteredList, setFilteredList] = new useState(routesInfo);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...routesInfo];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    return (
        <div className="App">
            <div className="search-header">
                <div className="search-text">Search:</div>
                <input id="search-box" onChange={filterBySearch} />
            </div>
            <div id="item-list">
                <ol>
                    {filteredList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}