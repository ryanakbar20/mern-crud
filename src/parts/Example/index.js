import React from "react";
import Breadcrumb from "../../elements/Breadcrumb";

export default class Example extends React.Component {
  render() {
    const listBreadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Breadcrumb data={listBreadcrumb} />
          </div>
        </div>
      </div>
    );
  }
}
