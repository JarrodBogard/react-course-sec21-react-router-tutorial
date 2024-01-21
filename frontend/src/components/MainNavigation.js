import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;

// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import classes from "./MainNavigation.module.css";

// function MainNavigation() {
//   return (
//     <header className={classes.header}>
//       <nav>
//         <ul className={classes.list}>
//           <li>
//             {/* <Link to="/">Home</Link> */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? classes.active : undefined
//               }
//               end
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/events"
//               className={({ isActive }) =>
//                 isActive ? classes.active : undefined
//               }
//             >
//               Events
//             </NavLink>
//             {/* <Link to="/events">Events</Link> */}
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default MainNavigation;
