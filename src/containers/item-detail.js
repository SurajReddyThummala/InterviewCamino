import React, { Component } from 'react';
import {connect } from 'react-redux';
import Progress from 'react-progressbar';
import {PieChart, Pie, Sector, Cell,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import DonutChart from "react-svg-donut-chart"
import * as V from 'victory';
import {VictoryPie,VictoryLabel } from 'victory-pie';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import SolidGauge from 'highcharts-solid-gauge';

 class ItemDetail extends Component{
  

    render(){
      if(!this.props.item){
      return <div className ="Welcome"> Welcome to Camino Financial</div>
    }
    HighchartsMore(ReactHighcharts.Highcharts);
    SolidGauge(ReactHighcharts.Highcharts);
    
    window.Highcharts = ReactHighcharts.Highcharts;

    const a = this.props.item.CompletedOrders/this.props.item.orders*100;

const multiChartsConfig = (value, open, click, placement, str1, str2,str3) => {
  return {
    chart: {
        type: 'solidgauge',
        height: 360,
        width: 560,
        marginTop: 10,
        marginBottom: 0,
        backgroundColor: '#ebf3f5',
        style: { margin: 'auto' },
    },
    title: null,
    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          {
            backgroundColor: '#ebf3f5',
            outerRadius: '110%',
            innerRadius: '100%',
            borderWidth: 0
          },{
            backgroundColor: '#ebf3f5',
            outerRadius: '93%',
            innerRadius: '83%',
            borderWidth: 0
          },{
            backgroundColor: '#ebf3f5',
            outerRadius: '76%',
            innerRadius: '66%',
            borderWidth: 0
          }
        ]
    },
    tooltip:     {
        enabled: false
    },
    // the value axis
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: true,
          borderWidth: 0,
          y: -30,
          useHTML: true,
          formatter: () => {
            return (`
              <div style="text-align: center;font-size:15px;color: #777777;">
              <div style="color: #009fc5;font-size: 17px;"></div><div>${str1}</div><div>${str2}</div><div>${str3}</div>
              </div>
            `);
          }
        },
        linecap: 'round',
        rounded: true,
        stickyTracking: false
      }
    },
    credits:     {
        enabled: false
    },
    series: [
      {
        name: 'open',
        rounded: true,
        data: [{
          color: '#009fc5',
          radius: '110%',
          innerRadius: '100%',
          y: Math.round((open / value) * 100) 
        }]
      },
      {
        name: 'click',
        data: [{
          color: 'green',
          radius: '93%',
          innerRadius: '83%',
          y: Math.round((click / value) * 100) 
        }]
      },
      {
        name: 'placement',
        data: [{
          color: 'red',
          radius: '76%',
          innerRadius: '66%',
          y: Math.round((placement / value) * 100) 
        }]
      }
    ]
  };
}
 
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

  <ReactHighcharts config={
      multiChartsConfig(480,380,250,190,'Hoodie','FittedCap','Bracelet') }></ReactHighcharts>

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