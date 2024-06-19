import React from "react";

// Creating footer of the webpage
function Footer() {
    return (
        <footer className="bg-dark py-4 footer--pin">
            <div className="container text-center">
                <p className="m-0 text-center text-white">
                    Registered PSV®️ {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer