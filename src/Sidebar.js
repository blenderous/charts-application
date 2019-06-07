import React from 'react';
import graphs from './data/db.json';
import './Sidebar.css';
import ListItem from './ListItem';
// import SearchInput, {createFilter} from 'react-search-input';

// const KEYS_TO_FILTERS = ['chart']

class Sidebar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    onClick = (e) => {
        let index = e.target.parentElement.getAttribute('keyprop');
        console.log(graphs[index]);
    }

    populateLi = () => {
        let LIs = []
        for (var keyItem in graphs) {
            if (graphs.hasOwnProperty(keyItem)) {
                LIs.push(<ListItem key={keyItem} keyProp={keyItem} onClick={this.onClick} text={graphs[keyItem][0]["Scheme Name"]}/>)
            }
        }
        return LIs;
    }

    render() {
        
        // const filteredCharts = graphs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        return(
            <div className="sidebar">
                {/* <SearchInput className="sidebar__search-input" onChange={this.searchUpdated} /> */}    
                <ul className="sidebar__chartlist">
                    {this.populateLi()}
                </ul>
            </div>
        );
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
}

export default Sidebar;