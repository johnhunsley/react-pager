import React, { Component } from 'react';
import SearchBar from './SearchBar'

class PagerContainer extends Component {

    state = {
        filterText: ''
    }

    render() {
        return (
            <div className="container">
                <SearchBar filterText={this.state.filterText}/>
            </div>

        )
    }

}

export default PagerContainer;