import { RcPickerRect } from "../Recover/RcPickerRect.js";
import { RcPickerCircle } from "../Recover/RcPickerCircle.js";

export function App() {
  function updateRcPickerCircle(angle) {
    document.getElementById("RcPickerCircleOutput").value = angle + "°";
  }

  function updateRcPickerRect(x, y) {
    document.getElementById("RcPickerRectOutputX").value = x;
    document.getElementById("RcPickerRectOutputY").value = y;
  }

  return (
    <div>
      <header>
        <h1>Recover</h1>
        <p>
          Various React UI components
          <br />
          <small>
            🢂{" "}
            <a href="https://github.com/thesigns/Recover">
              GitHub page of the project
            </a>
          </small>
        </p>
      </header>
      <main>
        <section>
          <h1>RcPickerRect</h1>
          <div id="RcPickerRect">
            <RcPickerRect onUpdate={updateRcPickerRect} />
          </div>
          <div>
            <p>
              <code>RcPickerRect</code> is a rectangular picker component. User
              can choose X and Y coordinates inside the rectangle. X and Y
              values are returned as a Number parameter through{" "}
              <code>props.onUpdate</code> property function. The values are in
              [0, 1] range regardless of the size of the rectangle.
            </p>
            <p>
              Result X: <input id="RcPickerRectOutputX"></input> Result Y:{" "}
              <input id="RcPickerRectOutputY"></input>
            </p>
          </div>
        </section>

        <section>
          <h1>RcPickerCircle</h1>
          <div id="RcPickerRect">
            <RcPickerCircle onUpdate={updateRcPickerCircle} />
          </div>
          <div>
            <p>
              <code>RcPickerCircle</code> is a circular picker component. User
              can choose an angle on the circle. The angle is returned as a
              Number parameter through <code>props.onUpdate</code> property
              function. The angle is represented in degrees in the range [0,
              360).
            </p>
            <p>
              Result: <input id="RcPickerCircleOutput"></input>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
