import React from 'react';
import graphs from './data/db.json';
import './Sidebar.css';
import './css/hamburgers.css';
import ListItem from './ListItem';
// import SearchInput, {createFilter} from 'react-search-input';
import {GoogleCharts} from 'google-charts';

// const KEYS_TO_FILTER = [this.props.keyProp]

class Sidebar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            // searchTerm: '',
            selectedLI : 0
        }
        // this.searchUpdated = this.searchUpdated.bind(this);
    }

    // componentDidMount() {
    //     
    // }

    onClick = (e) => {
        // find index from parent LI
        let index = e.target.parentElement.getAttribute('keyprop');
        
        // set state to current index
        this.setState({selectedLI : index});
        
        // graphRows to be inserted later into data
        let graphRows = []
        graphs[index].forEach(element => {
            let dataArray = [];
            dataArray.push(new Date(element["Date"].toString()));
            dataArray.push(element['Net Asset Value']);
            dataArray.push(element['Repurchase Price']);
            dataArray.push(element['Sale Price']);
            graphRows.push(dataArray);
        });
        
        // function reverseArray(arr) {
        //     var newArray = [];
        //     for (var i = arr.length - 1; i >= 0; i--) {
        //       newArray.push(arr[i]);
        //     }
        //     return newArray;
        // }
        
        // let graphRowsReversed = reverseArray(graphRows);

        //Load the charts library with a callback
        GoogleCharts.load(drawChart);
        
        function drawChart() {
        
            // Standard google charts functionality is available as GoogleCharts.api after load
            const data = new GoogleCharts.api.visualization.DataTable();
            data.addColumn('date', 'Time');
            data.addColumn('number', 'Net Asset Value');
            data.addColumn('number', 'Repurchase Price');
            data.addColumn('number', 'Sale Price');

            // data.addRows([
            //     [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
            //     [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
            //     [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
            //     [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            //     [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
            //     [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            //     [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
            //     [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            //     [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            //     [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            //     [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
            //     [66, 70], [67, 72], [68, 75], [69, 80]
            // ]);

            
            data.addRows(graphRows);
            // data.addRows(graphRowsReversed);

            var options = {
                hAxis: {
                    title: 'Date'
                },
                vAxis: {
                    title: 'Value'
                },
                explorer: { axis: 'horizontal' }
            };
            const line_chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('chart-div'));
            line_chart.draw(data, options);
        }
    }

    populateLi = () => {
        const activeStyle = { color: 'rgb(177, 18, 18)' };
        let LIs = []
        for (var keyItem in graphs) {
            if (graphs.hasOwnProperty(keyItem)) {
                LIs.push(<ListItem style={this.state.selectedLI === keyItem ? activeStyle : {}} key={keyItem} keyProp={keyItem} onClick={this.onClick}>{graphs[keyItem][0]["Scheme Name"]}</ListItem>)
            }
        }
        return LIs;
    }

    render() {
        const LIs = this.populateLi();
        // console.log(LIs);
        // const filteredListItems = LIs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER));
        return(
            <div className="sidebar__wrapper">
                <div className="sidebar">
                    {/* <SearchInput className="sidebar__search-input" onChange={this.searchUpdated} />     */}
                    <ul className="sidebar__chartlist">
                        {LIs}
                    </ul>
                </div>
                {/* <button className="hamburger hamburger--arrowturn is-active" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button> */}
            </div>
        );
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
}

export default Sidebar;