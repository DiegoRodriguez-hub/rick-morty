import { useRef } from 'react'

function Search() {
  const inputRef = useRef()
  const onSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type='text' />
      <button>Search</button>
    </form>
  )
}

export default Search