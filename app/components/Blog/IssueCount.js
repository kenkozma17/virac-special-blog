export default function IssueCount(props) {
  return (
    <span
      className={`${props.className} font-merriweather-sans
      text-sm font-bold tracking-wide uppercase bg-black inline
    text-white px-2 py-1`}
    >
      {props.children}
    </span>
  );
}
