import Header from "./components/Header"
import Notifications from "./components/Notifications"
import { Fetch } from "./components/Fetch/Fetch"
import "./styles/reset.css"

export default function App() {

  return (
    <>
      <Fetch/>
      <Header/>
      <Notifications/>
    </>
  )
}