import React , { Component } from 'react';
class StockTable extends Component {
    state = {}
    componentDidMount() {
        // fetch("https://nepse-data-api.herokuapp.com/data/todaysprice",
        // {
        //     mode: 'cors',
        //     headers: {
        //         'Access-Control-Allow-Headers': ''
        //     }
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
    }
    render() {
        return <h1>Hello</h1>;
    }
}

export default StockTable;