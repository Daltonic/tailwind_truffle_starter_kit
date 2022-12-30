import Header from "./components/header"
import Hero from "./components/hero"
import Players from "./components/players"
import { Transactions } from "./components/transactions"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header></Header>
        <Hero></Hero>
      </div>
      <Players />
      <Transactions />
    </div>
  )
}

export default App
