import React from 'react';
import NewsList from "./news/NewsList"

export default function App() {

  const [news, setNews] = React.useState(
    [
      {id: 1, countReaded: 100, title: 'title1', visible: false, read: false},
      {id: 2, countReaded: 200, title: 'title2', visible: true, read: true},
      {id: 3, countReaded: 1200, title: 'title3', visible: false, read: false},
      {id: 4, countReaded: 1100, title: 'title4', visible: true, read: true}
    ]
  );




  let readChange = (id) => {
    console.log(id);

    setNews(news.map(item => {
      if(item.id === id) {
        item.read = !item.read
      }
      return item
    }));

    console.log(news)
  }

  return (
    <div className="container">
      <h2>lesson react</h2>
      <NewsList news={news} changeRead={readChange}/>
    </div>
  );
}


