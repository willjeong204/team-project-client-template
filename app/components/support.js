import React from 'react';
export default class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h2>Support</h2>
        <div className="padding">s
          <label htmlFor="titletext">Title:</label>
          <input className="form-control" type="text" rows="1" id="titletext" placeholder="Enter a title"/>
        </div>
        <div className="padding">
          <label htmlFor="desctext">Description:</label>
          <textarea className="form-control" type="text" rows="6" id="desctext" placeholder="Describe your problem in detail"></textarea>
        </div>
        <div className="right-align padding">
          <button className="btn btn-default">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
