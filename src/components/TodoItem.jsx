import React from 'react'

export  function TodoItem(prop) {
  const [ task, id ] = prop;
  return (
    <div >
      {task} {id}
    </div>
  )
}
