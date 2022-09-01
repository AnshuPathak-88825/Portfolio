import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Experience from "./Component/Experience/Experience.jsx";
import Footer  from "./Component/Footer/footer.jsx";
import Header from "./Component/Header/Header.jsx";
import Nav from "./Component/Nav/Nav.jsx";
import Service from "./Component/Services/service.jsx";
const App=()=>{
    return (
        <>
        <Header/>
        <Nav/>

        <About/>
        <Contact/>
        <Experience/>
        <Service/>
        </>
    )
}
export default App;