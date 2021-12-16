import classes from "./RcPickerCircle.module.css";
import React, { useState } from "react";

export function RcPickerCircle() {
  const [valueDeg, setValueDeg] = useState(0);

  function pick(e) {
    e.preventDefault();

    let circle = e.target;
    let circleCoords = circle.getBoundingClientRect();

    let innerCircle = circle.children[0];
    let innerCircleCoords = innerCircle.getBoundingClientRect();

    let cursor = circle.children[1];
    let cursorCoords = cursor.getBoundingClientRect();

    let x, y;
    let cursorPosX, cursorPosY;

    function update(mouseX, mouseY) {
      x = Math.min(
        Math.max((mouseX - circleCoords.x) / circleCoords.width, 0),
        1
      );
      y = Math.min(
        Math.max((mouseY - circleCoords.y) / circleCoords.height, 0),
        1
      );

      let centerX = 0.5;
      let centerY = 0.5;

      let deltaX = x - centerX;
      let deltaY = y - centerY;
      let thetaRad = -Math.atan2(deltaX, deltaY);

      if (thetaRad < 0) {
        thetaRad = 2 * Math.PI + thetaRad;
      }

      let thetaDeg = thetaRad * (180 / Math.PI);
      thetaDeg = (thetaDeg + 180) % 360;
      thetaDeg = Math.round(thetaDeg);

      let radius =
        (circleCoords.width -
          (circleCoords.width - innerCircleCoords.width) / 2) /
        2;
      thetaRad += Math.PI / 2;
      cursorPosX =
        Math.cos(thetaRad) * radius +
        circleCoords.width / 2 -
        cursorCoords.width / 2;
      cursorPosY =
        Math.sin(thetaRad) * radius +
        circleCoords.width / 2 -
        cursorCoords.width / 2;

      cursor.style.left = cursorPosX + "px";
      cursor.style.top = cursorPosY + "px";

      setValueDeg(thetaDeg);
      console.log(thetaDeg);
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
    <section className={classes.RcPickerCircle} onMouseDown={pick}>
      <div></div>
      <div className={classes.cursor}>
        <div></div>
      </div>
    </section>
  );
}
