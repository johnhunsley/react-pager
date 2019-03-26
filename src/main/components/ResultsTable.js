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
                <td>{item.something1}</td>
                <td>{item.something2}</td>
                <td>{item.something3}</td>
            </tr>
        );

        return (
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
        )
    }
}

export default ResultsTable;