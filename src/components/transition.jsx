import {useEffect, useRef, useState} from "react";

function Transition({component}) {

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      {threshold: 0.5} // 20% visible triggers animation
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
      {component}
    </div>
  )

}

export default Transition;