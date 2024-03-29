import React from "react";

class FilterReset extends React.Component {
  constructor(props) {
    super(props);
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(e) {
    this.props.removefilter(e);
  }
  render() {
    return (
      <button
        className=""
        onClick={this.handleclick}
        name={this.props.name}
        id="buttonReset"
      >
        <svg
          className="change-color bi bi-x-square-fill"
          width="2em"
          height="2em "
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm9.854 4.854a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  }
}
class FilterButton extends React.Component {
  render() {
    return (
      <span className="p-2" id="filterButton">
        {this.props.name}
      </span>
    );
  }
}

class Filter extends React.Component {
  render() {
    return (
      <div className="mr-3 mb-2">
        <FilterButton name={this.props.name} />
        <FilterReset
          name={this.props.name}
          removefilter={this.props.removefilter}
        />
      </div>
    );
  }
}

export default class FilterBar extends React.Component {
  render() {
    return (
      <div
        className="container d-flex justify-content-end flex-wrap"
        id="filterbar"
      >
        {this.props.data.JavaScript ? (
          <Filter name="JavaScript" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.CSS ? (
          <Filter name="CSS" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.HTML ? (
          <Filter name="HTML" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.React ? (
          <Filter name="React" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Python ? (
          <Filter name="Python" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Junior ? (
          <Filter name="Junior" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Frontend ? (
          <Filter name="Frontend" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.FullStack ? (
          <Filter name="Fullstack" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Midweight ? (
          <Filter name="Midweight" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Sass ? (
          <Filter name="Sass" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Ruby ? (
          <Filter name="Ruby" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.RoR ? (
          <Filter name="RoR" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Backend ? (
          <Filter name="backend" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Vue ? (
          <Filter name="Vue" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Django ? (
          <Filter name="Django" removefilter={this.props.removefilter} />
        ) : null}
        {this.props.data.Senior ? (
          <Filter name="Senior" removefilter={this.props.removefilter} />
        ) : null}
        <div>
          <button className="" onClick={this.props.clearfilter} id="clear">
            clear
          </button>
        </div>
      </div>
    );
  }
}
