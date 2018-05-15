import React ,{ Component } from "react";
import ItemList from "../containers/item-list";
import ItemDetail from "../containers/item-detail";

export default class App extends Component {
  render() {
    return (
      <div className ="test" >
        <ItemList />
        <ItemDetail />
      </div>
    );
  }
}