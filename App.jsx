import classes from "./App.module.css";
import Navbar from "./components/NavBar/Navbar";
import Cards from "./components/Card/Cards";
import Swipper from "./components/Swipper/Swipper";
import SignInBar from "./components/SignIn/SignInBar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <div className={classes.wrapper}>
        <Swipper />
        <Cards />
        <SignInBar />
        <Footer />
      </div>
    </>
  );
}

export default App;