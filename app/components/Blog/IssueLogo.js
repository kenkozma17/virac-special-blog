export default function IssueLogo(props) {
  return (
    <div className="z-50 absolute md:top-6 top-2 md:right-6 right-2 text-right">
      <p className="md:leading-10 leading-6 text-[1.5rem] md:text-[2.5rem] uppercase text-white">
        <span className="text-vs-red">Virac</span> Special
      </p>
      <p className="tracking-wide font-merriweather-sans text-white text-xs">
        {props.issue} | {props.issueDate}
      </p>
    </div>
  );
}
