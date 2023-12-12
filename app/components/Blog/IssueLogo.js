export default function IssueLogo(props) {
  return (
    <div className="z-50 absolute md:top-4 top-2 md:left-4 left-2 text-left">
      <p className="tracking-wide md:leading-10 leading-6 text-[1.5rem] md:text-[2.5rem] uppercase text-white">
        <span className="text-vs-red">V</span>S
      </p>
      {/* <p className="tracking-wide font-merriweather-sans text-white text-xs">
        {props.issue} | {props.issueDate}
      </p> */}
    </div>
  );
}
