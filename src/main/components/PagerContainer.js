import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultsTable from './ResultsTable';
import PageControls from './PageControls'
import {getAccountsByName} from './ResourceClient'

class PagerContainer extends Component {

    state = {
        filterText: 'hi there. :-)',
        colNames: [
            {
                label: 'Account Name',
                value: 'something1'
            },
            {
                label: 'Interest Rate',
                value: 'something2'
            },
            {
                label: 'Balance',
                value: 'something3'
            }
        ],
        items: [

        ]
    }

    handleSearch = event => {
        event.preventDefault();
        let filter = event.target.value;
        this.setState({filterText: filter})
        getAccountsByName(filter, 0, 10, response => {
            console.log(response._embedded);
            this.setState({items: response._embedded.savingsAccounts})
        })
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