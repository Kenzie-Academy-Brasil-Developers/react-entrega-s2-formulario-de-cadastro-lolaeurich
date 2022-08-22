import "./App.css"

import Router from "./Routers"


//coloquei o AuthProvider antes do BrowserRoute pq é de escopo global, mas tmbm não entendi direito.
function App() {
  return (
        <div className="App">
          <Router />
        </div>
  );
}

export default App