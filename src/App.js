import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./theme";
import Students from "./components/students/Students";
import AddStudent from "./components/students/AddStudent";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Switch>
            <Route exact path="/" component={Students} />
            <Route exact path="/students/create" component={AddStudent} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
