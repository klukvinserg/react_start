import React from 'react';

export default function NewsItem({news, readChange}) {


    console.log(news)
    
    return (

<div className={news.read ? 'card read' : 'card'}>
  <img src="https://lh3.googleusercontent.com/proxy/NvRRIew6uTozltlkqwx_gFadjiegAppMH4zdMf_SChZoDy0IKZFHJ3hLaf3vq9SOXaLCEl1YqvKXy5YgjGPp1Lqu8b5DDb6OJCMAiVU1ivdTaTdfLaKTSQ0ImP0Nz7bKxtgtA2ME" alt="Denim Jeans"/>
    <h1>{news.title}</h1>
    <div className="rowButton">
    <p className="btn"><button>Close</button></p>
    <input id={'is-readed' + news.id} type="checkbox" onChange={() => readChange(news.id)}></input>
    <label htmlFor={'is-readed' + news.id}>Прочитано</label>
    </div>
</div>



    
    )
}