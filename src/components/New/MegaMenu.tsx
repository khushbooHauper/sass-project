import "../../scss/styles/megamenu.scss";
import { Link } from "react-router-dom";
import {
  BeautyGiftMakeupSet,
  BedLinenFurnishing,
  Boys_Clothing,
  Fashion_Accessories,
  Footwear,
  Gadgets,
  Girls_Clothing,
  HomeDécor,
  Indian_FusionWear,
  Innerwear_Sleepwear,
  KFootwear,
  SkincareBathBody,
  Sports_Active_Wear,
  Topwear,
  WFootwear,
  Western_Wear,
  bottomwear,
  indian_festive,
} from "../../data/MegaMenuData";

const MegaMenu = () => {
  return (
    <div className="mega-menu">
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">
          <Link to="/men">Men</Link>
        </h4>
        {Topwear.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
              <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}

        {indian_festive.map((i) => (
          <ul className="mega-menu-links" key={i.title}>
            <li>
              <Link to={`/${i.category}/${i.title}`}>{i.title}</Link>
            </li>
          </ul>
        ))}
        {bottomwear.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
              <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Footwear</h4>
        {Footwear.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
              <Link to={`/${f.category}/${f.title}`}>{f.title}</Link>
            </li>
          </ul>
        ))}
      </div>

      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">
          <Link to="/women">Women</Link>
        </h4>
        {Indian_FusionWear.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
              <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}
        {Western_Wear.map((bw) => (
          <ul className="mega-menu-links" key={bw.title}>
            <li>
              <Link to={`/${bw.category}/${bw.title}`}>{bw.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Footwear</h4>
        {WFootwear.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
              <Link to={`/${f.category}/${f.title}`}>{f.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">
          <Link to="/kids">Kids</Link>
        </h4>
        <h4 className="mega-menu-heading">Boys Clothing</h4>
        {Boys_Clothing.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
              <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Girls Clothing</h4>
        {Girls_Clothing.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
              <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Footwear</h4>
        {KFootwear.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
              <Link to={`/${f.category}/${f.title}`}>{f.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">
          <Link to="/home&furnishing">Home & Furnishing</Link>
        </h4>
        {BedLinenFurnishing.map((t) => (
          <ul className="mega-menu-links" key={t.title}>
            <li>
              <Link to={`/${t.category}/${t.title}`}>{t.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Home Décor</h4>
        {HomeDécor.map((f) => (
          <ul className="mega-menu-links" key={f.title}>
            <li>
              <Link to={`/${f.category}/${f.title}`}>{f.title}</Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="mega-menu-column">
        <h4 className="mega-menu-heading">
          <Link to="/beauty">Beauty</Link>
        </h4>
        <h4 className="mega-menu-heading">Skincare, Bath & Body</h4>
        {SkincareBathBody.map((b) => (
          <ul className="mega-menu-links" key={b.title}>
            <li>
              <Link to={`/${b.category}/${b.title}`}>{b.title}</Link>
            </li>
          </ul>
        ))}
        <h4 className="mega-menu-heading">Beauty Gift</h4>
        {BeautyGiftMakeupSet.map((st) => (
          <ul className="mega-menu-links" key={st.title}>
            <li>
              <Link to={`/${st.category}/${st.title}`}>{st.title}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
