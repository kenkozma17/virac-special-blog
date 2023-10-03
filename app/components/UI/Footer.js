import Wrapper from "./Wrapper";
export default function Footer(props) {
  return (
    <footer className={`${props.className} bg-vs-green text-white`}>
      <Wrapper className="md:py-10 py-6">
        <div>
          <p className="md:text-[1.3rem]">Virac Special Publications</p>
          <p className="font-merriweather-sans text-sm">
            Virac, Catanduanes, Philippines
          </p>
          <p className="font-merriweather-sans text-sm">+63 956 042 5505</p>

          <div className="mt-8">
            <p className="font-merriweather-sans text-xs">
              Copyright © Virac Special 2023.
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
