import React from "react";
import "./App.css";
import data from "./data.json";
import Item from "./components/item";
import FilterBar from "./components/filterbar";
import '../public/images/bg-header-desktop.svg'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: {},
      data: data,
      data_filter: [],
      filter: false,
      javascript: false,
      react: false,
      css: false,
      html: false,
      python: false,
      junior: false,
      frontend: false,
      fullstack: false,
      midweight: false,
      sass: false,
      ruby: false,
      ror: false,
      backend: false,
      vue: false,
      django: false,
      senior: false,
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.addfilter = this.addfilter.bind(this);
    this.removefilter = this.removefilter.bind(this);
    this.clearfilter = this.clearfilter.bind(this);
  }
  filter(name, n) {
    let data_filter = [];
    let languages = [];
    let tools = [];
    let level = [];
    let role = [];
    switch (n) {
      case 1:
        data.map((d) => {
          if (d.role.toLowerCase() === name) {
            role.push(d);
          }
          return (data_filter = role);
        });
        break;
      case 2:
        data.map((d) => {
          if (d.level.toLowerCase() === name) {
            level.push(d);
          }
          return (data_filter = level);
        });
        break;
      case 3:
        data.map((d) => {
          d.tools.map((t) => {
            if (t.toLowerCase() === name) {
              tools.push(d);
            }
            return tools;
          });

          return (data_filter = tools);
        });
        break;
      case 4:
        data.map((d) => {
          d.languages.map((l) => {
            if (l.toLowerCase() === name) {
              languages.push(d);
            }
            return languages;
          });

          return (data_filter = languages);
        });
        break;

      default:
        break;
    }

      this.setState({
        data: data_filter,
      });
  }
  handleFilter() {
    this.setState({ filter: true });
  }
  addfilter(e) {
    const name = e.target.innerHTML.toLowerCase();
    this.setState({ [name]: true });
    if(this.state[name]){
      console.log(' filtro ya agregado')
    }else{
      if ( 
      name === "html" ||
      name === "css" ||
      name === "javascript" ||
      name === "ruby" ||
      name === "python"
    ) {
      this.filter(name, 4);
    } else if (
      name === "sass" ||
      name === "react" ||
      name === "djando" ||
      name === "vue" ||
      name === "ror" ||
      name === "ruby"
    ) {
      this.filter(name, 3);
    } else if (name === "junior" || name === "senior" || name === "midweight") {
      this.filter(name, 2);
    } else if (
      name === "frontend" ||
      name === "backend" ||
      name === "fullstack"
    ) {
      this.filter(name, 1);
    }
    }
  }
  removefilter(e) {
    let name;
    if (e.target.nodeName === "svg") {
      name = e.target.parentNode.name.toLowerCase();
    } else {
      name = e.target.parentNode.parentNode.name.toLowerCase();
    }

    this.clearfilter();
    this.setState({ [name]: false, data: data });
  }
  clearfilter() {
    this.setState({
      history: [],
      data: data,
      data_filter: [],
      filter: false,
      javascript: false,
      react: false,
      css: false,
      html: false,
      python: false,
      junior: false,
      frontend: false,
      fullstack: false,
      midweight: false,
      sass: false,
      ruby: false,
      ror: false,
      backend: false,
      vue: false,
      django: false,
      senior: false,
    });
  }
  render() {
    const d = this.state.data.map((d) => {
      return (
        <Item
          filter={this.handleFilter}
          addfilter={this.addfilter}
          key={d.id}
          item={d}
        />
      );
    });
    return (
      <div className="container-fluid p-0">
        <header className="container-fluid" id="header">
          {this.state.filter ? (
            <FilterBar
              data={this.state}
              removefilter={this.removefilter}
              clearfilter={this.clearfilter}
            />
          ) : null}
        </header>
        <div className="container-fluid pt-5" id="main">
          {d}
        </div>
      </div>
    );
  }
}

export default App;
