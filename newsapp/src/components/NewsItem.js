import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display: 'flex',justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger">
                {source}
                <span class="visually-hidden">unread messages</span>
            </span>
          </div>
            
          <img
            src={
              !imageUrl
                ? "https://economictimes.indiatimes.com/thumb/msid-103553912,width-1070,height-580,imgsize-65986,overlay-etmarkets/photo.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-success"
            >
              Read More-
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
