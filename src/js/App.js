import { RcPickerRect } from "../Recover/RcPickerRect.js";

export function App() {
  return (
    <div>
      <header>
        <h1>✚&nbsp;Recover</h1>
        <p>Various React UI components</p>
      </header>
      <main>
          <span>Work in progress</span>
        <section>
          <h1>RcRectPicker</h1>
          <div id="RcPickerRect">
            <RcPickerRect />
          </div>
          <p>
            <strong>RcRectPicker</strong> is a rectangular map component. User can pick a location on the rectangle. X and Y values are saved in the component state. The values are always in 0-1 range regardless of the size of the rectangle.
          </p>
        </section>
      </main>
    </div>
  );
}
