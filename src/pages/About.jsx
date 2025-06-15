import { useSelector } from "react-redux"
import { useInjectReducer } from "../hooks/useInjectReducer"
import about from "../stores/about"

export default function About() {
  useInjectReducer('about', about)
  const {helight} = useSelector(state => state?.about ?? {helight: null})
  const {helight: helightGlobal} = useSelector(state => state.global)
  return (
    <>
      <p>this is the about page</p>
      <p>{helightGlobal}</p>
      <b>helight:</b> <i>{helight}</i> 
    </>
  )
}