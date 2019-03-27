import React, { Component } from 'react';


class PageControls extends Component {

    render() {

        return(
            <div className="container">
                <button className="btn btn-sm btn-outline-info">Prev</button>
                    &nbsp;<span>1 2 3 4 5</span>&nbsp;
                <button className="btn btn-sm btn-outline-info">Next</button>
            </div>
        )
    }

}

export default PageControls;