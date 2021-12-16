import classes from "./RcPickerRect.module.css";
import React, { useState } from "react";

export function RcPickerRect() {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);

  function pick(e) {
    e.preventDefault();

    let rect = e.target;
    let rectCoords = rect.getBoundingClientRect();

    let cursor = rect.children[1];
    let cursorCoords = cursor.getBoundingClientRect();

    let x, y;
    let cursorPosX, cursorPosY;

    function update(mouseX, mouseY) {
      x = Math.min(Math.max((mouseX - rectCoords.x) / rectCoords.width, 0), 1);
      y = Math.min(Math.max((mouseY - rectCoords.y) / rectCoords.height, 0), 1);
      cursorPosX = x * rectCoords.width - cursorCoords.width / 2;
      cursorPosY = y * rectCoords.height - cursorCoords.height / 2;
      cursor.style.left = cursorPosX + "px";
      cursor.style.top = cursorPosY + "px";

      setValueX(x);
      setValueY(y);
      console.log(x, y);
    }

    function handleCursorMove(e) {
      update(e.clientX, e.clientY);
    }

    function handleCursorEnd(e) {
      document.removeEventListener("mousemove", handleCursorMove);
      document.removeEventListener("mouseup", handleCursorEnd);
      update(e.clientX, e.clientY);
    }

    document.addEventListener("mousemove", handleCursorMove);
    document.addEventListener("mouseup", handleCursorEnd);
    update(e.clientX, e.clientY);
  }

  return (
    <section className={classes.RcPickerRect} onMouseDown={pick}>
      <div></div>
      <div className={classes.cursor}>
        <div></div>
      </div>
    </section>
  );
}
