import React, { Component } from 'react';
import {connect } from 'react-redux';
import Progress from 'react-progressbar';
import {PieChart, Pie, Sector, Cell,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import DonutChart from "react-svg-donut-chart"
import * as V from 'victory';
import {VictoryPie,VictoryLabel } from 'victory-pie';

 class ItemDetail extends Component{
    render(){
      if(!this.props.item){
      return <div className ="Welcome"> Welcome to Camino Financial</div>
    }
    const a = this.props.item.CompletedOrders/this.props.item.orders*100;
 
const dataPie = [

    {value: 80, stroke: "#22594e", strokeWidth: 6},
    {value: 60, stroke: "red"},
    {value: 30, stroke: "magenta"}

  ]


    const data = [
      {name: this.props.item.axis, Hoodie: this.props.item.h, FittedCap: this.props.item.f, Bracelet: this.props.item.b},
      {name: this.props.item.axis1, Hoodie:  this.props.item.h2, FittedCap: this.props.item.f2, Bracelet: this.props.item.b2},
      {name: this.props.item.axis2, Hoodie:  this.props.item.h3, FittedCap: this.props.item.f3, Bracelet: this.props.item.b3},
      
      ];
                   

   return (
        <div className="container">
        <Progress completed={a} / >
        <div className="site-section" id="main">
         <p>Orders</p>
         {this.props.item.orders}
         </div>
          <div className="site-section float-sm-right " id="sidebar2"  >
           <p>Completed Orders</p>
           {this.props.item.CompletedOrders}
            </div>
             <div className ="totalsales" >
             Total Sales:
             <p> {this.props.item.totalsales}</p>
             </div>
           <AreaChart width={650} height={400} data={data}
            margin={{top: 10, right: 0, left: 110, bottom: 0}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey='Hoodie' stackId="1" stroke='#8884d8' fill='#8884d8' />
        <Area type='monotone' dataKey='FittedCap' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
        <Area type='monotone' dataKey='Bracelet' stackId="1" stroke='#ffc658' fill='#ffc658' />
      </AreaChart>

<DonutChart data={dataPie} className = "donut"  spacing = {1} />

     <div className = "sales"> Sales 
     <p>{this.props.item.sales}</p>
     </div>
     <ul>
    <p><li> Hoodie:</li>
     <li> {this.props.item.Hoodieitem} 
    </li></p>

     <p><li> FittedCap:</li>
     <li> {this.props.item.Capitem} 
    </li></p>

     <p><li> Bracelet:</li>
     <li> {this.props.item.Bracelet} 
    </li></p>
   
     </ul>

    </div>

    );
  }
}

function mapStateToProps(state){
  return{
    item: state.ActiveItem
  };
}

export default connect(mapStateToProps)(ItemDetail);