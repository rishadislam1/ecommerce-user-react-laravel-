import { Link } from "react-router-dom";
import { useGetMenuQuery } from "../../redux/features/navMenu/navMenuApi";

const MegaMenu = () => {
  const { data: meghaMenuItems } = useGetMenuQuery();

  const megaMenu = (val) => {
    const d = document.getElementById(`tog${val}`);
    const accor = document.getElementById(`acco${val}`);
    if (d.classList.contains("mh-0")) {
      d.classList.add("mh-100");
      d.classList.remove("mh-0");
      accor.classList.add("active");
      accor.classList.remove("no");
    } else if (d.classList.contains("mh-100")) {
      d.classList.add("mh-0");
      d.classList.remove("mh-100");
      accor.classList.add("no");
      accor.classList.remove("active");
    }
  };
  return (
    <div className="accordionMenuDiv">
      {meghaMenuItems?.map((menu) => (
        <div key={menu.id}>
          <div className="accordionMenuDivInside">
            <button
              id={`acco${menu.id}`}
              className={`accordion`}
              onClick={() => megaMenu(menu.id)}
            >
              <img
                className="accordionMenuIcon"
                src={menu.category_image}
                alt=""
              />
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              {menu.category_name}
            </button>
            <div id={`tog${menu.id}`} className={`panel mh-0 `}>
              <ul>
                {menu?.subcategory_name?.map((sub) => (
                  <>
                    <li>
                      <Link className="accordionItem" to={`/productsubcategory/${menu.category_name}/${sub.subcategory}`}>
                        {sub.subcategory}
                      </Link>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
