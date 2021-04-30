import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const[searchText, setSearch] = useState('');

    const onInputChange = event =>  {
        setSearch(event.target.value)
     };
 
    const onSearch = event => {
         event.preventDefault();
         onSearchSubmit(searchText);
     };
 
     return (
        <div className="ui segment search-bar">
            <form onSubmit={onSearch} className="ui form">
                <div className="field">
                    <input placeholder="Search for a Video" type="text" value={searchText} onChange={onInputChange} />
                </div>
            </form>
        </div>
    );

};

{ /* CLASS COMPONENT
    class SearchBar extends React.Component {
    state = { searchtext: '' };
    onInputChange = event =>  {
       this.setState({ searchtext: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchtext);
    }; 

    render(){
        return (
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input placeholder="Search for a Video" type="text" value={this.state.searchtext} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    };
}; */}

export default SearchBar;