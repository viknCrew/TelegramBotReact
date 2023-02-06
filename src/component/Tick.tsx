export default function Tick(props: { size: number }) {
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        margin: "auto",
        display: "inline-block",
      }}
      className=""
    >
      <style>
        {`
          .circular-chart {
          display: inline-block;
          margin: 10px auto;
          max-width: 80%;
          max-height: 250px;
        }
          .circle {
          fill: none;
          stroke-width: 3.8;
          stroke-linecap: round;
          animation: progress 1s ease-out ${true ? "forwards" : "infinite"};
          // transform-origin: center;
        }
          @keyframes progress {
          0% {
            stroke-dasharray: 0, 100;
        }
        }
          .tick {
          fill: none;
          stroke-width: 3.8px;
          stroke-linecap: round;
          /* Stroke-dasharray property */
          stroke-dasharray: 50px;
          stroke-dashoffset: 50px;
          animation: move 0.3s ease-out forwards;
          -webkit-animation-delay: 0.3s;
          -moz-animation-delay: 0.3s;
          -o-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
          @keyframes move {
          100% {
            stroke-dashoffset: 0;
        }
        }
      `}
      </style>
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle"
          // stroke="green"
          stroke="var(--tg-theme-button-color)"
          strokeDasharray="92, 100"
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
          transform="rotate(75, 18, 18)"
        />
        <path
          className="tick"
          // stroke="green"
          stroke="var(--tg-theme-button-color)"
          id="svg_2"
          d="m80.5,196.4375l60.5,10.5625l111,-112"
          transform="translate(4, -5)"
          fill=""
        />
        <path
          className="tick"
          // stroke="green"
          stroke="var(--tg-theme-button-color)"
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
