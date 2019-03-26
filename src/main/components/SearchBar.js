import React from 'react';

const SearchBar = ({filterText, handleChange}) => (
    <div className="container">
       <form>
          <div className="input-group mb-3">
             <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Search</span>
             </div>
             <input className="form-control" type="text" id="filter" name="filter" value={filterText} onChange={handleChange} />
          </div>
       </form>
    </div>
)

export default SearchBar;