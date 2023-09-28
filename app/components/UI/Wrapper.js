export default function Wrapper(props) {
  return (
    <section
      className={`${props.className} max-w-[1240px] mx-auto md:px-10 px-6`}
    >
      {props.children}
    </section>
  );
}
