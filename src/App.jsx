
import Header from "./components/Header";
import Details from "./components/Details";
import Button from "./components/Button";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
function App() {
  return (
    <div id="cards">
      <div id="parent">
   <Header />
   <Profile />
   <Details 
   name="Zainab Sarfraz"
   goal="Become a MERN stack developer"
   country="Pakistan"
   email="hoor94945@gmail.com"
   />
   <Skills 
   skill1="HTML"
   skill2="CSS"
   skill3="JavaScript"

   />
   <br></br>
   <Button />
   <Footer
   name="Zainab" />
   </div>
<div id="parent">
   <Header />
   <Profile />
   <Details 
   name="Ahmed Ali"
   goal="Become a Backend developer"
   country="Pakistan"
   email="ali445@gmail.com"
   />
   <Skills 
   skill1="Node.js"
   skill2="Express.js"
   skill3="MongoDB"

   />
   <br></br>
   <Button />
   <Footer
   name="Ali" />
   </div>
   

    </div>

  );
}

export default App;