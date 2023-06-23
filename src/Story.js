import React from 'react'

export default function Story({story}) {
    let title = story.title;
    if (title.length > 80) {
        title = title.slice(0, 77) + '...'
    }

    let months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    let date = story.published_date;
    date = date.split(' ')[0].split('-');
    date = date[2] + ' ' + months[+date[1]] + ' ' + date[0];
  return (
    <a className='story' href={story.link}>
      <div className="textBlock">
        <div className="bgBlur"></div>

        <h1>{title}</h1>
        <span>{story.author} <strong>•</strong> {date}</span>
      </div>
      <img src={story.media} alt="" />
    </a>
  )
}