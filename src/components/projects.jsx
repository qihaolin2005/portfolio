import React, { useRef, useEffect, useState } from "react";
import Card from "./card/card.jsx"


function Projects() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    const tensoractSubImages = ["/react.png", "/javascript.png", "/typescript.svg"]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(ref.current);
                    }
                });
            },
            { threshold: 0.5 } // 20% visible triggers animation
        );

        observer.observe(ref.current);
    }, []);

    return (

        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(40px)",
                transition: "all 0.8s ease-out",
                padding: "100px 0",
                textAlign: "center",
            }}
        >
            <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Projects</h1>

            <p style={{ fontSize: "1.2rem", color: "#ddd", maxWidth: "600px", margin: "0 auto" }}>
                This section fades + slides up when you scroll down to it.
            </p>

            <Card subImages={tensoractSubImages}/>

        </div>
    );
}

export default Projects;
