import React from 'react'

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  
  }

  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {

    return (
      <div>
        <h2>{course.name}</h2>
        {course.parts.map(part =>
            <Part key = {part.id} part = {part} />
        )}
            <Total parts={course.parts} />  
      </div>
    )
  
  }
  
  const Total = ({ parts }) => {
    return (
      <p>
        total of {parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)} exercises 
      </p>
    )
  
  }
  
  const Course = ({courses}) => {
    console.log(courses)
  
    return (
      <div>
        <Header title = 'Web development curriculum' />
        {courses.map(course => 
          <Content key = {course.id}  course = {course} />
          )
        }
      </div>
    )
  }

  export default Course