
import './App.css'
import Content from './uiComponents/Content'
import Main from './uiComponents/Main'
import Nav from './uiComponents/Nav'

//from mui
import ShoeList from './uiComponents/ShoeList'
import JustDoIt from './uiComponents/JustDoIt'
import AnimateShoe from './uiComponents/AnimateShoe'
import { Container } from '@mui/material'

function App() {
  return (
    <>
        
      <div style = {{
        width: "100vw",
        minwidth: "100%",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.05)",
        position: "relative"
    }}>
      <Nav/>
    </div>

    <div style={{
      position: "relative"
  }}>
      <div style = {{
      width: "100%",
      minwidth: "100vw",
      maxWidth: "100vw",
      marginBottom: "70px",
      padding: "0 0 0 180px"
    }}>
        <Main/>
        <Content/>
      </div>

      <div style = {{
      width: "100vw",
      minwidth: "100%",
      boxShadow: "-2px 0px 5px 1px rgba(0,0,0,0.05)"
    }}>
        <ShoeList/>
      </div>

      <JustDoIt/>
      </div>
    </>
  )
}

export default App
