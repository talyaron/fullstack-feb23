const imgSrc =
  "https://www.bennetts.co.uk/-/media/bikesocial/2019-november-images/harley-davidson-xr1200---used-buyers-guide/harley-davidson-xr1200-used-buyers-guide-(2).ashx?h=493&w=740&la=en&hash=75C5717EF708D4498D96D991116EF1F54F2CD0EC";
const imgAlt = "img";

for (let iaiai = 0; iaiai < 5; iaiai++) {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = imgAlt;
  document.body.appendChild(img);
}


