// import type { Component } from 'solid-js';
import { createSignal, createEffect } from "solid-js";

// const App: Component = () => {
//   return (
//     <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
//   );
// };

interface SliderProps {
  label: string;
  value: () => number;
  setValue: (value: number) => void;
  min?: number;
  max?: number;
  unit: string;
};

function Slider({ label, value, setValue, min = 0, max = 100, unit}: SliderProps) {
  return (
    <label className="">
      <p className="slider-label">{label}:</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value()}
        onInput={(e) => setValue(Number(e.target.value))}
      />
      <div className="flex justify-between">
        <p>{value()}</p>
        <p>{unit}</p>
      </div>
    </label>
  );
}

export const App = () => {
  const [backgroundHue, setBackgroundHue] = createSignal(0);
  const [borderRadius, setBorderRadius] = createSignal(0);

  return (
     <>
        <div className="max-w-lg mx-auto">
          <div className="flex gap-8">
            <Slider
               label="Background Hue"
               value={backgroundHue}
               setValue={setBackgroundHue}
               min={0} max={360}
               unit="º"
            />
            <Slider
               label="Border Radius"
               value={borderRadius}
               setValue={setBorderRadius}
               min={0} max={50}
               unit="px"
            />
          </div>
          <div
            className="flex justify-center items-center py-8 max-w-sm mt-8"
            style={{
              "background-color": `hsl(${backgroundHue()}, 30%, 80%)`,
              "border-radius": `${borderRadius()}px`,
            }}
          >
            Hello World!!!
          </div>
        </div>
     </>
   );
}



export default App;
