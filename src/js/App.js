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
          🡺{" "}
            <a href="https://github.com/thesigns/Recover">
              GitHub page of the project
            </a>
          </small>
        </p>
      </header>
      <main>
        <section className="component">
          <h1>RcPickerRect</h1>
          <div className="componentExample">
            <RcPickerRect onUpdate={updateRcPickerRect} />
          </div>
          <div className="componentDescription">
            <p>
              <code>RcPickerRect</code> is a rectangular picker component. User
              can choose X and Y coordinates inside the rectangle. X and Y
              values are returned as a Number parameter through{" "}
              <code>props.onUpdate</code> property function. The values are in
              [0, 1] range regardless of the size of the rectangle.F
            </p>
            <p>
              <span>
                X: <input id="RcPickerRectOutputX"></input>
              </span>
              <span>
                Y: <input id="RcPickerRectOutputY"></input>
              </span>
            </p>
          </div>
        </section>

        <section className="component">
          <h1>RcPickerCircle</h1>
          <div className="componentExample">
            <RcPickerCircle onUpdate={updateRcPickerCircle} />
          </div>
          <div className="componentDescription">
            <p>
              <code>RcPickerCircle</code> is a circular picker component. User
              can choose an angle on the circle. The angle is returned as a
              Number parameter through <code>props.onUpdate</code> property
              function. The angle is represented in degrees in the range [0,
              360).
            </p>
            <p>
              Angle: <input id="RcPickerCircleOutput"></input>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
