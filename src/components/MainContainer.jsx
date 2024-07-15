import useMovies from "../hooks/useMovies"
import { BackgroundVideo, Title } from "./index"

const MainContainer = () => {

  useMovies();
 
  return (
    <div className="">
      <Title />
      <BackgroundVideo />

    </div>
  )
}
export default MainContainer