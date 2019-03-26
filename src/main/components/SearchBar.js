import React, { Component } from 'react';

class SearchBar extends Component {

    render() {
        const filterText = this.props.filterText;

        return (
             <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Search</span>
                    </div>
                    <input className="form-control" type="text" value={filterText} />
                </div>
             </form>
        )

    }

}

export default SearchBar;