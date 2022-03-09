import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=84aa1329f4514b1d9bbad9084312f3fc&page=1&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalresults: parsedData.totalResults,
      loading:false
    });
  }

  previousbtn = async () => {
   
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=84aa1329f4514b1d9bbad9084312f3fc&page=${
      this.state.page - 1
    }&${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
      loading:false
    });
  };

  nextbtn = async () => {
   
    
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=84aa1329f4514b1d9bbad9084312f3fc&page=${
        this.state.page + 1
      }&${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
        loading:false
      });
    
  };

  render() {
    return (
      <>
        <div className="custom-margin">
         {this.state.loading && <Spinner/>}
          {this.state.articles && this.state.articles.map((element) => {
            return (
              <div key={element.url}>
                <Newsitem
                  author={element.author && element.author}
                  urltoimage={element.urlToImage && element.urlToImage}
                  time={element.publishedAt && element.publishedAt}
                  title={element.title && element.title}
                />
              </div>
            );
          })}
        </div>
        <div className="container is-flex is-flex-direction-row is-justify-content-space-between ">
          <button
            disabled={this.state.page <= 1}
            className="button is-dark"
            onClick={this.previousbtn}
          >
            &larr; Previous
          </button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalresults/20)} className="button is-dark" onClick={this.nextbtn}>
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
