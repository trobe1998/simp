import {useState, useEffect, createContext} from 'react'

export function useLocalStorage<T>(key: string, fallBackValue: T) {
  const [value, setValue] = useState(fallBackValue)
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallBackValue);

  
  
  }, [fallBackValue, key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])
  

  return [value, setValue] as const
  
}

// type userType = {
//   _id: string,
//   fullName: string,
//   email: string,
//   password: string,
//   status: number
// }
// const getLocalValue = (key:string, initValue:userType)=>{
//   // if server side rendering
//   if(typeof window === 'undefined') return initValue;
// // value already set
//   const localValue = JSON.parse(localStorage.getItem(key))
//   if (localValue) return localValue
// // retun a function
//   if (initValue instanceof Function) return initValue()

//   return initValue
// }
// const useLocalStorage = (key:string, initValue: userType) => {
//     const [value, setValue] = useState(()=>{ return getLocalValue(key, initValue)})

//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(value))
  
//     }, [key, value])
    
//   return [value, setValue]
// }

// export default useLocalStorage