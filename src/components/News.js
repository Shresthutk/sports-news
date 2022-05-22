import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url = `https://gnews.io/api/v4/top-headlines?token=2ad2e3ce71552ef8745444020b6cb20a&lang=en&country=in`;
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
                  image={element.image && element.image}
                  time={element.publishedAt && element.publishedAt}
                  title={element.title && element.title}
                />
              </div>
            );
          })}
        </div>
        <div className="container is-flex is-flex-direction-row is-justify-content-space-between ">
        
        </div>
      </>
    );
  }
}

export default News;
