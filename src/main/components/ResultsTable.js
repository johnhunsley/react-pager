import React, { Component } from 'react';

class ResultsTable extends Component {

    render () {

        const colNames = this.props.colNames;
        const items = this.props.items;

        const head = colNames.map((colName) =>
           <td>{colName.label}</td>
        );

        const data = items.map((item) =>
            <tr>
                <td>{item.name}</td>
                <td>{item.interestRate}</td>
                <td>{item.value}</td>
            </tr>
        );

        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
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