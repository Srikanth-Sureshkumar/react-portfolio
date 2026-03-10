<<<<<<< HEAD
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    });

    function animateCursor() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
};

=======
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener("mousemove", (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + "px";
      cursor.style.top = my + "px";
    });

    function animateCursor() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
    </>
  );
};

>>>>>>> 965e877afdd97daefc2103ce5439d32a01c51e4c
export default Cursor;