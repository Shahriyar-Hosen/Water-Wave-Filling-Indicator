"use client";

import React, { ChangeEvent, useState } from "react";
import "./page.css";

const Home = () => {
  const [completion, setCompletion] = useState<number>(50);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    setCompletion(value);
  };

  const indicatorStyle: React.CSSProperties = {
    ["--completion" as string]: `${completion}%`,
  };

  return (
    <main className="main">
      <div className="indicator" style={indicatorStyle}>
        <output name="result" htmlFor="completion">
          {completion}
        </output>
      </div>
      <input
        id="completion"
        type="range"
        min="0"
        max="100"
        value={completion}
        onChange={handleChange}
      />
    </main>
  );
};

export default Home;
