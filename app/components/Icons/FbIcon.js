export default function FbIcon(props) {
  return (
    <svg
      className={`${props.className} group cursor-pointer`}
      width="16"
      height="29"
      viewBox="0 0 16 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5171 15.7536L15.2952 10.685H10.4314V7.39585C10.4314 6.00945 11.1106 4.65719 13.2891 4.65719H15.5V0.342222C15.5 0.342222 13.4939 0 11.5754 0C7.57025 0 4.95239 2.42794 4.95239 6.82256V10.6859H0.5V15.7545H4.95239V28.0079H10.4314V15.7545L14.5171 15.7536Z"
        className="group-hover:fill-vs-red 
         fill-black transition-colors duration-300"
      />
    </svg>
  );
}
