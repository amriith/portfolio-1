import "../styles/styles.css"

export const Appbar = () => {
    return (
        <div className="flex justify-center pt-3 container hover:text-teal-400 borderYtoX">
            <a href="/home">HOME</a>
            <a href="/work-in-progress">PROJECTS</a>
            <a href="/work-in-progress">GAMES</a>
            <a href="/work-in-progress">SAY HELLO</a>
        </div>
    );
};