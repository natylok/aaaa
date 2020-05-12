import { Component, Fragment } from "preact/compat";
import { render } from "preact/compat";
// import { render, Component, Fragment } from "preact";

class Children extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ border: "20px solid blue" }}>Navigation</div>
        <div style={{ border: "20px solid black" }}>Content</div>
      </Fragment>
    );
  }
}

class Parent extends Component {
  state = { panelPosition: "bottom" };

  tooglePanelPosition = () => {
    this.setState(state => ({
      panelPosition: state.panelPosition === "top" ? "bottom" : "top"
    }));
  };

  render() {
    const { panelPosition } = this.state;

    return (
      <div>
        <button onClick={this.tooglePanelPosition}>
          Toggle panel position
        </button>
        {panelPosition === "top" && (
          <div style={{ border: "20px solid red" }}>top panel</div>
        )}
        {this.props.children}
        {panelPosition === "bottom" && (
          <div style={{ border: "20px solid red" }}>bottom panel</div>
        )}
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <Parent>
        <Children />
      </Parent>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}
