import Sidebar from "../components/main/Sidebar";
import Content from "../components/main/Content";

function Main() {
    return(
        <main className="flex h-screen">
            <Sidebar />
            <Content />
        </main>
    );
}

export default Main;