import { useEffect, useRef } from "react";
import PropTypes from "prop-types";  // Import PropTypes

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current.classList.add("visible");
      }
    }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []); // Added dependency array

  return <div ref={ref} className="reveal">{children}</div>;
};

// Define PropTypes for children
RevealOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RevealOnScroll;
