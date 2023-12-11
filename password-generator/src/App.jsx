import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  // useCallback Hook
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  };

  // useEffect Hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md h-80 mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-cyan-800 ">
        <h1 className="text-white text-xl text-center my-8">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="outline-none w-full h-10 py-2 px-4"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 hover:bg-blue-950"
          >
            Copy
          </button>
        </div>

        <div className="text-lg gap-x-2 py-2">
          <div className="flex items-center gap-x-1 py-2">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="px-1">Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1 py-2">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label className="px-1">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 py-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="px-1">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
