export default function IssueLogo(props) {
  return (
    <div className="z-50 absolute top-6 right-6 text-right">
      <p className="leading-10 text-[1.5rem] md:text-[2.5rem] uppercase text-white">
        <span className="text-vs-red">Virac</span> Special
      </p>
      <p className="tracking-wide font-merriweather-sans text-white text-xs">
        {props.issue} | {props.issueDate}
      </p>
    </div>
  );
}
