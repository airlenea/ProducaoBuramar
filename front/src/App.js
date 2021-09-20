/*}
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; 
*/


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import TopBar from './ui/TopBar'
import FooterBar from './ui/FooterBar'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
/*}
import KarangosList from './routed/KarangosList2'
import KarangosForm from './routed/KarangosForm'
*/

const theme = createMuiTheme({
  palette: {
    type: 'yellow',
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.default,
    paddingBottom: '42px',  // evita que o footer cubra o conteúdo
    minHeight: '100vh' // 100% da altura da área de visualização
  },
  routed: {
    padding: '25px',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily
  }
}))

function Main() {
  const classes = useStyles()
  return (
    <Box className={classes.main}>
      <BrowserRouter> {/*  Inicia a região onde pode haver troca dinâmica de elementos */}
        <TopBar />
        <Box id="routed" className={classes.routed}>
          <Switch> {/* Determina qual elemento será exibido, de acordo com a rota */}
            
            <Route path="/home">
                <> </>
            </Route>

            <Route path="/orcamento">
                <> </>
            </Route>
            <Route path="/cadastro">
                <> </>
            </Route>
            <Route path="/caixa">
                <> </>
            </Route>
            <Route path="/pedidos">
                <> </>
            </Route>
            <Route path="/fichaTecnica">
                <> </>
            </Route>
            <Route path="/produtos">
                <> </>
            </Route>
          

            {/* :id é um parâmetro (espécie de variável de rota) */}
            {/*<Route path="/edit/:id">
              <KarangosForm />
          </Route>*/}
           

          </Switch>
        </Box>
        <FooterBar />
      </BrowserRouter>
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;

