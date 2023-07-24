import TitleCard from "./components/pages/TitleCard.tsx";
import About from "./components/pages/About.tsx";
import Menu from "./components/Menu.tsx";
import Projects from "./components/pages/Projects.tsx";
import Contact from "./components/pages/Contact.tsx";

export default function App() {
    return (
        <>
            <Menu/>
            <TitleCard/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    )
}
