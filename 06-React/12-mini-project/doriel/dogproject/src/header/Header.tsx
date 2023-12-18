import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Fluffy Animal td</span>
        <span className="headerTitleLg">Dog</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ytimg.com/vi/Qj_FCM7THDI/maxresdefault.jpg"
        alt="Hero Img"
      />
    </div>
  );
}
