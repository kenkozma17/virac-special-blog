"use client";

export default function TwoColumn(props) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      {props.children}
    </div>
  );
}
