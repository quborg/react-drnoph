import { render } from "react-dom";
import "./index.css";
import * as React from "react";
import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";
import { SampleBase } from "./sample-base";

import data from "./dataSource.json";
export class Templates extends SampleBase {
  constructor() {
    super(...arguments);
    this.temp = "empList"; // colorsData
    // define the JSON of data
    this.employeesData = data[this.temp];
    // maps the appropriate column to fields property
    this.fields = { text: "Name", value: "Eimg" };
  }
  //set the value to header template
  headerTemplate(data) {
    return (
      <div className="header">
        {" "}
        <span>Photo</span> <span className="columnHeader">Employee Info</span>
      </div>
    );
  }
  //set the value to item template
  itemTemplate(data) {
    return (
      <div>
        <img
          className="empImage"
          src={
            "https://ej2.syncfusion.com/react/demos/src/combo-box/Employees/" +
            data.Eimg +
            ".png"
          }
          alt="employee"
        />
        <div className="ms-ename"> {data.Name} </div>
        <div className="ms-job"> {data.Job} </div>
      </div>
    );
  }
  //set the value to value template
  valueTemplate(data) {
    return (
      <div>
        <img
          className="valueTemp"
          src={
            "https://ej2.syncfusion.com/react/demos/src/combo-box/Employees/" +
            data.Eimg +
            ".png"
          }
          alt="employee"
        />
        <div className="nameTemp"> {data.Name} </div>
      </div>
    );
  }
  render() {
    console.log(this.temp, data[this.temp], this.employeesData)
    return (
      <div id="multitemp" className="control-pane">
        <div className="control-section">
          <div id="multitemplate" className="control-styles">
            <h4>Template example</h4>
            <MultiSelectComponent
              id="multiTemplate"
              dataSource={this.employeesData}
              fields={this.fields}
              mode="Box"
              placeholder="Select employee"
              itemTemplate={this.itemTemplate}
              valueTemplate={this.valueTemplate}
              headerTemplate={this.headerTemplate}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<Templates />, document.getElementById("sample"));
