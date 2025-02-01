
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
      super();
    this.state = {
        likes: 0,
        dislikes: 0,
        total: 0,
        handleLike: () => {
            this.setState((prevState) => ({
                likes: prevState.likes + 1,
                total: prevState.total + 1
            }));
        },
        handleDislike: () => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                total: prevState.total + 1
            }));
        }
    }

  }
  render() {
    return (
        <div className='content-rating'>
            <p>
                REACT IS FUN I WILL BE A LEAD FULL STACK DEVELOPER BY GOD GRACE
            </p>
            <div className='rating-buttons'>
                <button className="like-button" onClick={this.state.handleLike}>
                    Like ({this.state.likes})
                </button>
                <button className="like-button" onClick={this.state.handleDislike}>
                    Disike ({this.state.dislikes})
                </button>
                <p>
                    total : ({this.state.total})
                </p>
            </div>
        </div>
    );
  }
}

export default ContentRating;
