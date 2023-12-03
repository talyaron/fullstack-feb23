import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Game Classes & Skills</span>
        <span className="headerTitleLg">MMO's</span>
      </div>
      <img
        className="headerImg"
        src="https://i.ytimg.com/vi/WtmlT7_GaTk/maxresdefault.jpg"
        alt="Hero Img"
      />
    </div>
  );
}