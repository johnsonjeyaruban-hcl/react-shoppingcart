import React from "react";
import Tabs from "./Tabs";

class TabList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <>
            <Tabs>
              <span data-testid="navigation-tabs">Home</span>
              <div data-testid="tab-content">
              <span data-testid="app-title">Home Page</span>
              </div>
              <span data-testid="navigation-tabs">News</span>
              <div data-testid="tab-content">
              <span data-testid="app-title">News Page</span>
              </div>
              <span data-testid="navigation-tabs">Contact</span>
              <div data-testid="tab-content">
              <span data-testid="app-title">Contact Page</span>
              </div>
              <span data-testid="navigation-tabs">About</span>
              <div data-testid="tab-content">
              <span data-testid="app-title">About Page</span>
              </div>
            </Tabs>
          </>
        );
      }
}

export default TabList;