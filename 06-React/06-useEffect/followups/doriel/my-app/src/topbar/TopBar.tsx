import './topbar.css'

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-github"></i>
            <i className="topIcon fa-solid fa-envelope"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">Home</li>
                <li className="topListItem">About</li>
                <li className="topListItem">Contact</li>
                <li className="topListItem">Post</li>
                <li className="topListItem">Logout</li>
            </ul>
        </div>
        <div className="topRight">
            <img className="topImg" src="https://w7.pngwing.com/pngs/225/784/png-transparent-computer-icons-avatar-man-suit-man-logo-necktie-glasses.png" alt="" />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
