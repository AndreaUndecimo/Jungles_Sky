import "./App.css"
import Body from "./Components/Body/Body"
import Navbar from "./Components/Navbar/Navbar"
import SwipableHeader from "./Components/Swiper/SwipableHeader"

function App() {
  return (
    <div className="App">
      <Navbar />
      <SwipableHeader />
      <Body />
    </div>
  )
}

export default App
