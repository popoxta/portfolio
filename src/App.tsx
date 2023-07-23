import TitleCard from "./components/pages/TitleCard.tsx";
import About from "./components/pages/About.tsx";
import Menu from "./components/Menu.tsx";
import Projects from "./components/pages/Projects.tsx";

export default function App() {
    return (
        <>
            <Menu/>
            <TitleCard/>
            <About/>
            <Projects/>
        </>
    )
}
