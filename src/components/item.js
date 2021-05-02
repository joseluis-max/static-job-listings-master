import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.addfilter(e);
    this.props.filter();
  }
  render() {
    const languages = this.props.item.languages.map((l) => (
      <button
          onClick={this.handleClick}
          key={l}
          className="btn btn-primary languages_tools_buttons mb-2 mr-2">
        {l}
      </button>
    ));
    const tools = this.props.item.tools.map((t) => (
      <button
          onClick={this.handleClick}
          key={t}
          className="btn btn-primary languages_tools_buttons mb-2 mr-2">
        {t}
      </button>
    ));
    const role = (
      <button
        onClick={this.handleClick}
        className="btn btn-primary languages_tools_buttons mb-2 mr-2"
      >
        {this.props.item.role}
      </button>
    );
    const level = (
      <button
        onClick={this.handleClick}
        className="btn btn-primary languages_tools_buttons mr-2 mb-2"
      >
        {this.props.item.level}
      </button>
    );
    return (
      <div
        className="container justify-content-between align-items-center"
        id="item"
      >
        <div id="item-body">
          <div className="mr-4 pt-4">
            <img src={this.props.item.logo} id="logos" alt="logo" />
          </div>
          <div className="mr-2" id="item-title">
            <span className="font-smaller" id="company">
              {this.props.item.company}
            </span>
            {this.props.item.new ? (
              <span
                className="badge badge-pill new_color ml-2"
                id="new_featured"
              >
                new
              </span>
            ) : null}
            {this.props.item.new ? (
              <span
                className="badge badge-pill featured_color ml-2"
                id="new_featured"
              >
                featured
              </span>
            ) : null}
            <h5 className="mt-2">{this.props.item.position}</h5>
            <span className="font-weight-normal text-muted">
              {this.props.item.postedAt}
            </span>
            <svg
              className="bi bi-dot"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-weight-normal text-muted">
              {this.props.item.contract}
            </span>
            <svg
              className="bi bi-dot"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-weight-normal text-muted">
              {this.props.item.location}
            </span>
          </div>
        </div>
        <hr id="line"></hr>
        <div className="" id="tools">
          {languages}
          {tools}
          {role}
          {level}
        </div>
      </div>
    );
  }
}
