import { RcPickerRect } from "../Recover/RcPickerRect.js";
import { RcPickerCircle } from "../Recover/RcPickerCircle.js";

export function App() {
  return (
    <div>
      <header>
        <h1>Recover</h1>
        <p>Various React UI components<br/><small>Work in progress</small></p>
      </header>
      <main>
          
        <section>
          <h1>RcPickerRect</h1>
          <div id="RcPickerRect">
            <RcPickerRect />
          </div>
          <p>
            <strong>RcPickerRect</strong> is a rectangular picker component. User can pick coordinates inside the rectangle. X and Y values are saved in the component state. The values are always in [0, 1] range regardless of the size of the rectangle.
          </p>
        </section>

        <section>
          <h1>RcPickerCircle</h1>
          <div id="RcPickerRect">
            <RcPickerCircle />
          </div>
          <p>
            <strong>RcPickerCircle</strong> is a circular picker component. User can pick an angle on circle. The angle is saved in the component state. The angle is represented in degrees in the range [0, 360).
          </p>
        </section>

      </main>
    </div>
  );
}
