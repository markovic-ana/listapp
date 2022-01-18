import { useState } from 'react'

function useLocalStorage(keys, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(keys)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(keys, JSON.stringify(valueToStore))
    } catch {
      return value
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
