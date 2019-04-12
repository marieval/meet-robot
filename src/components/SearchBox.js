import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa3">
            <input
                className="pa2 ba b--light-blue br2 bg-washed-blue"
                type="search"
                placeholder="Search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;