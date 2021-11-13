import MainBody from "./components/MainBody";
import NavigationBar from "./components/NavigationBar";
import "./websitestyles.css";

function App(): JSX.Element {
  return (
    <>
      <NavigationBar />
      <MainBody />
    </>
  );
}

export default App;
