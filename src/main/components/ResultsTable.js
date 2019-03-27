import React, { Component } from 'react';

class ResultsTable extends Component {

    render () {

        const colNames = this.props.colNames;
        const items = this.props.items;

        const head = colNames.map((colName) =>
           <td><b>{colName.label}</b></td>
        );

        let data = '';

        if(items) {
            data = items.map((item) =>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.interestRate}</td>
                    <td>{item.value}</td>
                </tr>
            );
        } else {
            data = 'No Items';
        }

        return (
            <div className="container">
                <table className="table table-striped">
                    <thead className="bg-light">
                        <tr>
                            {head}
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ResultsTable;