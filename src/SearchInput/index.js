import React from "react";

export default function SearchInput({ placeholder, className }) {
  return (
    <form>
      <input className={className}placeholder={placeholder}></input>
    </form>
  );
}
