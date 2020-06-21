import React from "react";
import "./App.css";
import data from "./data.json";
import Item from "./components/item";
import FilterBar from "./components/filterbar";
import '../public/images/bg-header-desktop.svg'


let languages = ["html", "css", "javascript", "ruby", "python"];
let tools = ["sass", "react", "djando", "vue", "ror", "ruby"];
let level = ["junior", "senior", "midweight"];
let type = ["frontend", "backend", "fullstack"];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.addfilter = this.addfilter.bind(this);
    this.removefilter = this.removefilter.bind(this);
    this.clearfilter = this.clearfilter.bind(this);
  }
  refilter(name) {
    for (const d of data) {
      if (d.languages.includes(name.toUpperCase())) {
        this.state.data_filter.push(d)
      } else {
        if (d.tools.includes(name.toUpperCase())) {
          this.state.data_filter.push(d)
        } else {
          if (d.role === name.toUpperCase()) {
            this.state.data_filter.push(d)
          } else {
            if (d.level === name.toUpperCase()) {
              this.state.data_filter.push(d)
            }
          }
        }
      }
    }
    if (this.state.data === data) {
      this.setState({
        data: this.state.data_filter,
      });
      if (!this.state.history.includes(name)) {
        this.state.history.push(name)
      }
    } else {
      let preData = [...this.state.data, ...this.state.data_filter];
      let data = [...new Set(preData)];
      //   let data = []
      //   for (const i of this.state.data_filter) {
      //     for (const d of this.state.data) {
      //       if (i.id === d.id) {
      //         data.push(i)
      //       }
      //     }
      // }
      if (!this.state.history.includes(name)) {
        this.state.history.push(name)
      }
      this.setState({
        data: data,
      });
    }
  }
  filter(name) {
    this.setState({ data_filter: [] })
    for (const d of data) {
      if (d.languages.includes(name.toUpperCase())) {
        this.state.data_filter.push(d)
      } else {
        if (d.tools.includes(name.toUpperCase())) {
          this.state.data_filter.push(d)
        } else {
          if (d.role === name.toUpperCase()) {
            this.state.data_filter.push(d)
          } else {
            if (d.level === name.toUpperCase()) {
              this.state.data_filter.push(d)
            }
          }
        }
      }
      if (this.state.data === data) {
        this.setState({
          data: this.state.data_filter,
        });
        if (!this.state.history.includes(name)) {
          this.state.history.push(name)
        }
      } else {
        // let preData = [...this.state.data, ...data_filter];
        // let data = [...new Set(preData)];
        let data = []
        for (const i of this.state.data_filter) {
          for (const d of this.state.data) {
            if (i.id === d.id) {
              data.push(i)
            }
          }
        }
        if (!this.state.history.includes(name)) {
          this.state.history.push(name)
        }
        this.setState({
          data: data,
        });
      }
    }
  }
  handleFilter() {
    this.setState({ filter: true });
  }
  addfilter(e) {
    let name;
    if (languages.includes(e) === true || tools.includes(e) === true || level.includes(e) === true || type.includes(e) === true) {
      name = e
    } else {
      name = e.target.innerHTML.toLowerCase();
    }
    this.setState({ [name]: true });
    this.filter(name)
  }
  removefilter(e) {
    let name;
    if (e.target.nodeName === "svg") {
      name = e.target.parentNode.name.toLowerCase();
    } else {
      name = e.target.parentNode.parentNode.name.toLowerCase();
    }
    this.setState({ [name]: false });
    this.setState({ data: [] })
    this.state.history.splice(this.state.history.indexOf(name), this.state.history.indexOf(name) + 1)
    if (this.state.history.length > 0) {
      for (const name of this.state.history) {
        this.refilter(name)
      }
    } else {
      this.clearfilter()
    }
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