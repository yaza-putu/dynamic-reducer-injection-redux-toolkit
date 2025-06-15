import { useEffect } from "react"
import { store } from "../redux"

export const useInjectReducer = (key, reducer) => {
  useEffect(() => {
    store.injectReducer(key, reducer)

    return () => {
      store.removeReducer(key)
    }
  }, [key, reducer])
}