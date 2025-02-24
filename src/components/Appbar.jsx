import "../styles/styles.css"

export const Appbar = () => {
    return (
        <div className="flex justify-center pt-3 container teal borderYtoX">
            <a href="/">HOME</a>
            <a href="https://github.com/amriith">PROJECTS</a>
            <a href="#">GAMES</a>
            <a href="#">ABOUT</a>
            <a href="#">SAY HELLO</a>
        </div>
    );
};