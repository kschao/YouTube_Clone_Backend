import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            errors: {
                comments: ''
            }
        }
    }



    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <TextArea type ="text" name="comments" placeholder="150 characters" value={this.state.comments} onChange={this.handleChange} />
                    <br></br>
                    <Button color='orange' type="submit">Cancel</Button>
                    <Button positive type="submit">Comment</Button>
                </Form>
            </div>
        );
    }
}


export default CommentForm;