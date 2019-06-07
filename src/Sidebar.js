import React from 'react';
import graphs from './data/db.json';
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

    populateLi = () => {
        let LIs = []
        for (var key in graphs) {
            if (graphs.hasOwnProperty(key)) {
                LIs.push(<li key={key}>{key}</li>)
            }
        }
        return LIs;
    }

    render() {
        
        // const filteredCharts = graphs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        return(
            <div className="sidebar">
                {/* <SearchInput className="sidebar__search-input" onChange={this.searchUpdated} /> */}    
                <ul className="sidebar__chartlist-container">
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