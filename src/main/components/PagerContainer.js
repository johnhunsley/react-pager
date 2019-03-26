import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultsTable from './ResultsTable';
import PageControls from './PageControls'

class PagerContainer extends Component {

    state = {
        filterText: 'hi there. :-)',
        colNames: [
            {
                label: 'Col1',
                value: 'something1'
            },
            {
                label: 'Col2',
                value: 'something2'
            },
            {
                label: 'Col3',
                value: 'something3'
            }
        ],
        items: [
            {
                something1: 'steak1',
                something2: 'steak2',
                something3: 'steak3'
            },
            {
                something1: 'cheese1',
                something2: 'cheese2',
                something3: 'cheese3'
            }
        ]
    }

    handleSearch = event => {
        event.preventDefault();
        this.setState({filterText: event.target.value})
    }

    render() {
        return (
            <div className="container">
                <SearchBar filterText={this.state.filterText} handleChange={this.handleSearch}/>
                <ResultsTable colNames={this.state.colNames} items={this.state.items}/>
                <PageControls />
            </div>

        )
    }

}

export default PagerContainer;