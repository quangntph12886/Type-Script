import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const person = {
  name:'alo',
  age:100,
  status: true,
  children:[
    {
      name:'blo'
    },
    {
      name:'clo'
    }
  ]
}

const ShowAge = props => <p>tuoi cua ban la : {props.age}</p>
ReactDOM.render(
  <div>
    <p>ten : {person.name}</p>
    <p>tuoi : {person.age}</p>
    <p>{person.status ? 'da ket hon' : 'chua ket hon'}</p>
    <ul>
      {person.children.map(child => <li>
        {child.name}
      </li>)}
    </ul>
    <div>component : < ShowAge age= {person.age} /></div>
  </div>, document.querySelector("#root")
)
