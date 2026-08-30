export default function GmButton(props) {
  return (
    <button type="button" className="circle-btn" onClick={props.onClick}>
      {props.caption}
    </button>
  );
}
