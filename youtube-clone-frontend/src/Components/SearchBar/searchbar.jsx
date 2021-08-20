import React, { Component } from 'react';
import { Input, Form, Button } from 'semantic-ui-react'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    handleChange = (event) => this.setState({ searchTerm:event.target.value });
    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        this.props.onFormSubmit(searchTerm);
  
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input placeholder="Search YouTube Videos" onChange={this.handleChange} value={this.state.searchTerm}/>
                <Button type="submit">Search </Button>
            </Form>
        );
    }
}
export default SearchBar; 