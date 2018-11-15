import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default props => {
//   const showLinks = () => {}
//   if (props.loggedIn === true) {
//     return (
// <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
//   <div className="container">
//     {/* <a href="/" className="navbar-brand">
//     Workout Tracker
//   </a> */}
//     <React.Fragment>
//       <NavLink className="navbar-brand" to="/displayworkout" exact>
//         Workout Tracker
//       </NavLink>
//     </React.Fragment>
//     <ul>
//       <li>
//         <React.Fragment>
//           <NavLink
//             onClick={props.logOut}
//             className="navbar-brand"
//             to="/displayworkout"
//             exact
//           >
//             Logout
//           </NavLink>
//         </React.Fragment>
//       </li>
//     </ul>
//   </div>
// </nav>
//     );
//   } else {
//     return (
//       <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
//         <div className="container">
//           {/* <a href="/" className="navbar-brand">
//           Workout Tracker
//         </a> */}
//           <React.Fragment>
//             <NavLink className="navbar-brand" to="/displayworkout" exact>
//               Workout Tracker
//             </NavLink>
//           </React.Fragment>
//         </div>
//       </nav>
//     );
//   }
// };

// const Navbar = props => {
//   const showLinks = () => {
//     if (props.loggedIn === true) {
//       return (
//         <ul>
//           <li>
//             <React.Fragment>
//               <NavLink
//                 onClick={props.logOut}
//                 className="navbar-brand"
//                 to="/displayworkout"
//                 exact
//               >
//                 Logout
//               </NavLink>
//             </React.Fragment>
//           </li>
//         </ul>
//       );
//     }
//   };
//   return (
//     <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-0 py-1 border-bottom">
//       {showLinks()}
//       <div className="container">
//         <React.Fragment>
//           <NavLink className="navbar-brand" to="/displayworkout" exact>
//             <FontAwesomeIcon icon="dumbbell" />
//             Workout Tracker
//           </NavLink>
//         </React.Fragment>
//       </div>
//     </nav>
//   );
// };
const Navbar = props => {
  const showLinks = () => {
    if (props.loggedIn === "True") {
      return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-0 py-1 border-bottom">
          <div className="container">
            <React.Fragment>
              <NavLink className="navbar-brand" to="/displayworkout" exact>
                <FontAwesomeIcon icon="dumbbell" />
                Workout Tracker
              </NavLink>
              <ul>
                <li>
                  <React.Fragment>
                    <NavLink
                      onClick={props.logOut}
                      className="navbar-brand"
                      to="/displayworkout"
                      exact
                    >
                      Logout
                    </NavLink>
                  </React.Fragment>
                </li>
              </ul>
            </React.Fragment>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-0 py-1 border-bottom">
          <div className="container">
            <React.Fragment>
              <NavLink className="navbar-brand" to="/displayworkout" exact>
                <FontAwesomeIcon icon="dumbbell" />
                Workout Tracker
              </NavLink>
            </React.Fragment>
          </div>
        </nav>
      );
    }
  };
  return showLinks();
};

export default Navbar;
