import { Box } from "@mui/material"
import { ThemeProvider } from '@mui/material/styles';
import "./App.css"
import { LayerCard } from "./components/LayerCard"
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
       <LayerCard />
      </Box>
    </ThemeProvider>
  )
}

export default App
