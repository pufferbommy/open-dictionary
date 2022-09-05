import { useEffect, useRef, useState } from 'react'
import RadioGroup from './components/RadioGroup'

const dictionaries = [
  {
    name: 'Cambridge',
    link: 'https://dictionary.cambridge.org/dictionary/learner-english/',
  },
  {
    name: 'Dictionary',
    link: 'https://www.dictionary.com/browse/',
  },
  {
    name: 'Longdo',
    link: 'https://dict.longdo.com/search/',
  },
]

const App = () => {
  const [currentDictIdx, setCurrentDictIdx] = useState(
    Number(localStorage.getItem('currentDictIdx')) || 0,
  )

  const handleClickRadioGroup = (idx) => setCurrentDictIdx(idx)

  const { link } = dictionaries[currentDictIdx]
  const searchRef = useRef(null)

  const handleSearch = (e) => {
    e.preventDefault()
    const { value } = searchRef.current
    window.open(`${link}${value.trim()}`)
  }

  useEffect(() => {
    localStorage.setItem('currentDictIdx', currentDictIdx.toString())
  }, [currentDictIdx])

  return (
    <div className="min-w-[300px] p-4">
      <div>
        {dictionaries.map(({ name, link }, idx) => (
          <RadioGroup
            key={name}
            handleClickRadioGroup={handleClickRadioGroup}
            defaultChecked={idx === currentDictIdx}
            idx={idx}
            name={name}
          />
        ))}
      </div>
      <form onSubmit={handleSearch} className="text-end">
        <input
          ref={searchRef}
          type="text"
          placeholder="Type here"
          className="input w-full my-4 input-bordered"
          autoFocus
          required
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  )
}

export default App
