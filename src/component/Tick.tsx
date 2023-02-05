export default function Tick(props: { size: number }) {
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        margin: "auto",
        display: "inline-block",
      }}
      className=" mx-8 ">

      <svg viewBox="0 0 36 36" className="circular-chart mr-3 ">
        <path
          className="circle"
          strokeDasharray="92, 100"
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
          transform="rotate(75, 18, 18)"
        />
        <path
          className="tick"
          id="svg_2"
          d="m80.5,196.4375l60.5,10.5625l111,-112"
          transform="translate(4, -5)"
        />
        <path
          className="tick"
          id="svg_3"
          d="m3.063615,19.054611l10.56037,10.568181l17.248714,-17.373705"
          transform="translate(4, -5)"
        />
      </svg>
      <svg
        className="checkmark"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      ></svg>
    </div>
  );
}
