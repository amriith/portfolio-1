import "../styles/styles.css"

export const Appbar = () => {
    return (
        <div className="flex justify-center pt-3 container teal borderYtoX">
            <a href="/home">HOME</a>
            <a href="/work-in-progress">PROJECTS</a>
            <a href="/work-in-progress">GAMES</a>
            <a href="https://github.com/amriith">GITHUB</a>
            <a href="/work-in-progress">SAY HELLO</a>
        </div>
    );
};