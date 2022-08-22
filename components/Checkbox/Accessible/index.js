export default function Checkbox() {
  return (
    <div className="a-field">
      <div className="a-checkbox__wrapper">
        <input
          type="checkbox"
          className="a-checkbox"
          id="a-subscribe"
          name="a-subscribe"
          value="subscribe"
        />

        <div className="a-checkbox__box">
          <svg viewBox="0 0 490 490">
            <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/>
          </svg>
        </div>

        <label htmlFor="a-subscribe">Subscribe to our newsletter</label>
      </div>
    </div>
  );
}
