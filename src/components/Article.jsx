import React from 'react'
import '../styles/Article.css'

export default function Article({title, text}) {
  return (
    <section>
        <h2>{title}</h2>
        <p>{text}</p>
    </section>
  )
}
