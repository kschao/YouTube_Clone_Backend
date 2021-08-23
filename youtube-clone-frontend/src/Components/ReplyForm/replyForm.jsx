import React, {Component} from 'react';
import axios from 'axios'

class ReplyForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                    reply_text: '',
                    comment: '',
            }
    }

    addReply = async () => {
        const reply = {
            reply_text: this.state.reply_text,
            comment: this.props.commentid,
        }
        try{
            console.log("add reply request is called")  // test
            console.log(this.props.commentid)  // test
            console.log(this.props)  // test
            await axios.post('http://127.0.0.1:8000/comments/reply/', reply);
            this.props.getReplies(this.props.comment);
            this.setState({
                
            });
        }
        catch (err) {
            console.log(err)
        }
        
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.addReply();
    }

    render() {
        return(
            <React.Fragment>
                <br />
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                    <input type="text" name="reply_text" onChange={this.handleChange}
                    value={this.state.reply_text} placeholder="Reply here"/>    
                    </div>  
                    <div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
                <br />
            </React.Fragment>
        )
    }
}

export default ReplyForm;