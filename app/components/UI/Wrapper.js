export default function Wrapper(props) {
  let width = props.isSmall ? "max-w-[1000px]" : "max-w-[1240px]";
  return (
    <section className={`${props.className} ${width} mx-auto md:px-10 px-6`}>
      {props.children}
    </section>
  );
}
