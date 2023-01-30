import React, { Component } from "react";

export default class NewsItem extends Component {
  constructor() {
    super();
  }
  render() {
    let { title, description, imageURL, newsURL, newsAuthor, newsDate } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!newsAuthor ? "Unkown" : newsAuthor} on{" "}
                {new Date(newsDate).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsURL}
              target="__blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
