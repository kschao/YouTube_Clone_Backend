import React, { Component } from 'react';


class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    };
    handleChange = (event) => this.setState({ searchTerm:event.target.value });
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Input placeholder="Search YouTube Videos" onchange={this.handleChange} />
                <Button type ="submit">Search </Button>
            </Form>
        );
    }
}
export default SearchBar; 