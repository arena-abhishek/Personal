import UserContextProvider from "./context/UserContextProvider";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <UserContextProvider>
    <h1>React with chai and share is important</h1>
  </UserContextProvider>;
}

export default App;
