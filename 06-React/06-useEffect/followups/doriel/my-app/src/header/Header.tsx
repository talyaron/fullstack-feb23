import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Motorcycle & Parts</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/245492.jpg"
        alt=""
      />
    </div>
  );
}