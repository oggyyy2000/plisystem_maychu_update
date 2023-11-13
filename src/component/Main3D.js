// import React from "react";

// export default function Main3D() {
//   return (
//     <>
//       <iframe
//         src="http://epsmarttech.com.vn:3132/examples/${tuyenSelected}/${tuyenSelected}.html"
//         style={{ width: "100%", height: "100%" }}
//       />
//     </>
//   );
// }

import React from "react";
//Redux
import { useSelector } from "react-redux";
import { tuyenSelector } from "../redux/selectors";

export default function Main3D() {
  const tuyenSelected = useSelector(tuyenSelector);
  const src3Dmap = `http://epsmarttech.com.vn:3132/examples/${tuyenSelected}/${tuyenSelected}.html`;

  if (tuyenSelected !== "T87") {
    return (
      <>
        <div style={{ top: 10, height: "30px" }}>
          <p>Không có dữ liệu bạn cần tìm, vui lòng trở lại sau!</p>
        </div>
      </>
    );
  }

  return (
    <>
      <iframe src={src3Dmap} style={{ width: "100%", height: "100%" }} />
    </>
  );
}
