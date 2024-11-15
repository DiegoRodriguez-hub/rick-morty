import { useRef } from 'react'

function Search() {
  const inputRef = useRef()
  return (
    <form>
      <input ref={inputRef} type='text' />
    </form>
  )
}

export default Search