import type { Component } from 'solid-js'

import './card.scss'

export interface Props {
  title: string
  body: string
  href: string
}

const Card: Component<Props> = (props) => {
  return (
    <li class="link-card">
      <a href={props.href}>
        <h2>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p>{props.body}</p>
      </a>
    </li>
  )
}

export default Card
