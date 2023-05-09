import "@/styles/pages/main-footer.css"

const MainFooter = () => {

    const year = new Date().getFullYear();

    return(
        <footer className="main-container main-footer">
            <p>&copy;DIYEmma {year}</p>
        </footer>
    );
};

export default MainFooter;