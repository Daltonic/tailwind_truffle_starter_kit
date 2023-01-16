import Alert from "./components/alert"
import CreateNFT from "./components/createNFT"
import Footer from "./components/footer"
import Header from "./components/header"
import Hero from "./components/hero"
import Loading from "./components/loading"
import Players from "./components/players"
import ShowNFT from "./components/showNFT"
import { Transactions } from "./components/transactions"
import UpdateNFT from "./components/updateNFT"

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-hero">
        <Header></Header>
        <Hero></Hero>
      </div>
      <Players />
      <Transactions />
      <Footer />
      <CreateNFT />
      <ShowNFT />
      <UpdateNFT />
      <Loading />
      <Alert />
    </div>
  )
}

export default App
