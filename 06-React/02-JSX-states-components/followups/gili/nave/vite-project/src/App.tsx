
import "./App.scss";
import UserProfile from "./components/UserProfile/UserProfile";
import Article from "./components/Articles/Article";
import Hero from "./components/Heros/Hero";
import Header from "./components/Headers/Header";
function App() {
  
  
  return (
    <div>
           <Header/>
           <Hero/>
    
     <Article />
     <Article/>
     <Article/>
     <UserProfile/>
     
    </div>
  );
}

export default App;



