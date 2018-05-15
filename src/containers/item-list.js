import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectItem} from '../actions/index';

class ItemList extends Component{

  renderList(){
    return this.props.items.map((item) => {
      return(
        <div
        key = {item.title}
        onClick = { () => this.props.selectItem(item) }
        className = "list-group-item" >
        {item.title}
        </div>
      );
    })
  }


  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm" >
          {this.renderList()}
          </div>
      </div>
      </div>

    );
  }
}

function mapStateToProps(state){
  return{
    items: state.items
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectItem: selectItem}, dispatch)

}


export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
