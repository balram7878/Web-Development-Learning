export default function Header() {
  return (
    <div id="header">
      <div id="logo">
        <img src="https://th.bing.com/th/id/OIP.dWgFUP3CMFIWrZAU0ri48gHaFG?rs=1&pid=ImgDetMain" />
      </div>
      <div id="menu">
        <h4>MEN</h4>
        <h4>WOMEN</h4>
        <h4>KIDS</h4>
        <h4>HOME & LIVING</h4>
        <h4>BEAUTY</h4>
        <h4 style={{ position: "relative", bottom: "4px" }}>
          STUDIO<sup style={{ color: "red" }}>NEW</sup>
        </h4>
      </div>
      <div id="search-bar">
        <input placeholder="Search for Products, Brands and more"></input>
      </div>
      <div id="account">
        <h3>Profile</h3>
        <h3>Wishlist</h3>
        <h3>Bag</h3>
        <div>
            
        </div>
      </div>
    </div>
  );
}
