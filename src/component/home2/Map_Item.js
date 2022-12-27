import React, { useEffect, useState, useContext, useCallback } from "react";
//import "./../asset/css/panel.css";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
  Polyline,
} from "react-google-maps";
import { store } from "../../index";
import { Provider, useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import $ from "jquery";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import axios from "axios";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import WarningOutlinedIcon from "@material-ui/icons/WarningOutlined";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import Loading from "../generalObject/Loading";
//import { optionltb } from "../util/optionloaitb";
//import { ChangerUrl } from "../util/ChangeUrl";
import { Pagination } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    borderRadius: 0,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    objectFit: "cover",
    width: "200px",
    height: 100,
    marginTop: "20px",
    marginLeft: "10px",
  },
  pagination: {
    display: "inline-flex;",
    width: "93%",
    alignItems: "center",
    justify: "center",
    alignContent: "center",
    justifyContent: "center",
    "& > *": {
      justifyContent: "center",
      display: "flex",
    },
  },
  leftpanel: {
    width: "30%",
    //height: "100px",
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 100,
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
  },
  listItem: { marginTop: 10, maxHeight: "60vh", overflowY: "scroll" },
  rightpanel: {
    width: "30%",
    //height: "100px",
    position: "absolute",
    top: 44,
    right: 10,
    zIndex: 100,
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
  },
}));

const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const link =
  "https://maps.googleapis.com/maps/api/js?key=" +
  API_KEY +
  "&v=3.exp&libraries=geometry,drawing,places";

const ThietBi2 = (props) => {
  // State
  const [center, setCenter] = useState({ lat: 21.0286436, lng: 105.855725 });
  const [zoomsize, setZoomsize] = useState(15);
  const [pathPoint, SetPathPoint] = useState([]);
  const [LinePoint, SetLinePoint] = useState([]);
  const [showInfoIndex, SetshowInfoIndex] = useState(-1);
  const screen1 = useFullScreenHandle();
  const [stateBtn, setStateBtn] = useState(false);
  const { tuyen } = props;
  ///
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [ListTuyen, setListTuyen] = useState([]);
  //const [Tuyen, setTuyen] = useState("T87");
  const [Loai, setLoai] = useState("");
  const [ListVTT, setListVTT] = useState([]);
  const [ListSVTT, setListSVTT] = useState([]);
  const [VTT, setVTT] = useState("");
  const [DataDetail, setDataDetail] = useState({});
  const [ExpandState, setExpandState] = useState(true);
  const [DetailState, setDetailState] = useState(false);
  const urltb = `${
    process.env.REACT_APP_API_URL
  }getallthietbituyens?page=${page}${tuyen ? "&ma_tuyen=" + tuyen : ""}${
    Loai ? "&loai_thiet_bi=" + Loai : ""
  }${VTT ? "&ma_vi_tri=" + VTT : ""}`;
  const urlt = process.env.REACT_APP_API_URL + "getalltuyens";
  const urlvt = `${process.env.REACT_APP_API_URL}getallvitribytuyens?${
    tuyen ? "&ma_tuyen=" + tuyen : ""
  }`;

  ///
  /*
  useEffect(() => {
    async function getDatatb() {
      try {
        let res = await axios({
          url: urltb,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          // console.log(res.status);
        }
        return res.data;
      } catch (err) {
        console.error(err);
      }
    }

    getDatatb().then((res) => {
      setFetchedData(res);
      if (res && res?.data?.length != 0) {
        setDataDetail(res?.data[0]);
        setDetailState(true);
      }
    });
  }, []);
  */
  useEffect(() => {
    async function getDatatb() {
      try {
        let res = await axios({
          url: urltb,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          // console.log(res.status);
        }
        return res.data;
      } catch (err) {
        console.error(err);
      }
    }

    getDatatb().then((res) => {
      setFetchedData(res);
      if (res && res?.data?.length != 0) {
        setDataDetail(res?.data[0]);
        //setDetailState(true);
      }
    });
  }, [page, tuyen, Loai, VTT]);

  useEffect(() => {
    if (VTT && ListVTT) {
      let obj = ListVTT.find((x) => x.ma_vi_tri === VTT);
      setListSVTT([obj]);
    } else {
      setListSVTT(ListVTT);
    }
  }, [VTT]);

  useEffect(() => {
    async function getDatatuyen() {
      try {
        let res = await axios({
          url: urlt,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          //  console.log(res.status);
        }
        return res.data;
      } catch (err) {
        console.error(err);
      }
    }

    getDatatuyen().then((res) => {
      setListTuyen(res);
      //setTuyen(res[0].ma_tuyen);
      //setTuyen("T87");
    });
  }, []);

  useEffect(() => {
    async function getDatavtt() {
      try {
        let res = await axios({
          url: urlvt,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          //  console.log(res.status);
        }
        return res.data;
      } catch (err) {
        console.error(err);
      }
    }

    getDatavtt().then((res) => {
      setListVTT(res);
      if (VTT && ListVTT) {
        let obj = ListVTT.find((x) => x.ma_vi_tri === VTT);
        setListSVTT([obj]);
      } else {
        setListSVTT(res);
      }
    });
  }, []);

  useEffect(() => {
    async function getDatavtt() {
      try {
        let res = await axios({
          url: urlvt,
          method: "get",
          timeout: 8000,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          //  console.log(res.status);
        }
        return res.data;
      } catch (err) {
        console.error(err);
      }
    }

    getDatavtt().then((res) => {
      setListVTT(res);

      if (VTT && ListVTT) {
        let obj = ListVTT.find((x) => x.ma_vi_tri === VTT);
        setListSVTT([obj]);
      } else {
        setListSVTT(res);
      }
      if (res && res.length != 0) {
        if (res[0]?.toa_do) {
          let ToaDo = res[0]?.toa_do?.split(",");
          setCenter({ lat: ToaDo[0], lng: ToaDo[1] });
        }
      }
    });
  }, [tuyen]);

  const onChange = (event, setFunction) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setFunction(value);
  };

  const onChangeSelectTuyen = (event) => {
    //onChange(event, setTuyen);
    setPage(1);
    setListVTT([]);
    setListSVTT([]);
    setVTT("");
  };

  const onChangeSelectLTB = (event) => {
    onChange(event, setLoai);
    setPage(1);
  };

  const onChangeSelectVTT = (event) => {
    onChange(event, setVTT);
    setPage(1);
  };

  const Show = (data) => {
    setDataDetail(data);
    setDetailState(true);
  };

  const handleChangePage = (e, p) => {
    setPage(p);
  };

  ///

  const reportChange = useCallback(
    (state, handle) => {
      if (handle === screen1) {
        setStateBtn(state);
      }
    },
    [screen1]
  );

  useEffect(() => {
    setTimeout(() => {
      let elm = document.querySelectorAll(
        "#map_container_tb > div > div > div.map > div:nth-child(2) > table > tr > td:nth-child(2) > button"
      )[0];
      if (elm) {
        elm.click();
      }
    }, 50);
  });

  function heightmap() {
    if ($("#map")) {
      setTimeout(function () {
        $("#map").css(
          "height",
          $("#map_and_log").height() - $("#dotbay").height() - 10
        );
      }, 50);
    }
  }

  useEffect(() => {
    var elm = document.getElementById("titlet-eye");
    if (typeof elm.removeEventListener === "function") {
      return () => {
        elm.removeEventListener("click", heightmap);
      };
    }
    elm.addEventListener("click", heightmap);
    document.getElementById("titlet-eye").addEventListener("click", heightmap);
    return () => {
      document
        .getElementById("titlet-eye")
        .removeEventListener("click", heightmap);
    };
  }, []);

  const onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();
  };

  let pathCoordinates = [];

  const calc_center = (Point) => {
    if (Point && Point.length > 0) {
      var mid = Math.round((Point.length - 1) / 2);
      let ToaDo = Point[mid]?.toa_do?.split(",");
      if (isNaN(ToaDo[0])) {
        setCenter({ lat: 21, lng: 105 });
        setZoomsize(15);
      } else if (ToaDo[0]) {
        setCenter({
          lat: ToaDo[0],
          lng: ToaDo[1],
        });
        setZoomsize(15);
      }
    }
  };

  const calc_center_and_draw = (Point) => {
    if (Point) {
      for (var i = 0; i < Point.length; i++) {
        let ToaDo = Point[i]?.toa_do?.split(",");
        if (!isNaN(parseFloat(ToaDo[0])) && !isNaN(parseFloat(ToaDo[1]))) {
          pathCoordinates.push({
            lat: parseFloat(ToaDo[0]),
            lng: parseFloat(ToaDo[1]),
          });
        }
      }
      SetPathPoint(pathCoordinates);

      calc_center(Point);
    }
    ///////////////////////
  };

  useEffect(() => {
    calc_center_and_draw(ListSVTT);
  }, [/*ListVTT*/ ListSVTT]);

  const CloseInfoWindow = () => {};

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => {
      /*let iconMarker = new window.google.maps.MarkerImage(
        "https://lh3.googleusercontent.com/pw/AM-JKLUs1eX_HbHDXCbEZIr6Zb1lRJPWjhiJk8pFAn82uOebQq77t0n41BzrLrJ8y79pxoYApFx6FznLaHG_fim_tqElBo4gmxIXatokQGC1Y7z3sC00uSoaU6qekd0bkhKGsa30h8Ze9pKx016_4v07kEtg=w1179-h943-no",
        null,
        null,
        null,
        new window.google.maps.Size(32, 32)
      );*/
      return (
        <GoogleMap
          defaultZoom={zoomsize}
          defaultCenter={{
            lat: parseFloat(center.lat),
            lng: parseFloat(center.lng),
          }}
          options={{
            fullscreenControl: false,
          }}
        >
          {ListSVTT &&
            ListSVTT.map((item, index) => {
              let iconMarker = new window.google.maps.MarkerImage(
                `${process.env.REACT_APP_URL}icon/vector.png`,
                //"https://lh3.googleusercontent.com/RXM0n51Ci_TZkl4SZ7-WrQEAMziRVfttr8ALWeVdI_2pZig0plSwt5IH8BtIaifKACKjXBiPNSNjVjhFfJwY6AIsQzh90hXWmKBUB3p91Ux-E0HMMVcbQg8qwRLMN_JArK0HNVzh7JcAvRgCyFcwqocr21dRpGeSdTorEISfrcBB6Ruskc_IwxSKY8JjoXqGVF9ueAGPGAC-E5RH-uQAPVfB5PMWx9mpLjI5lNBAAq8B4ddwC1mhriyfhLHSsYbNjwUHDFxmX1pkv3DYEw3hvizv0Ask0Yixu2UpyF2_YTzFx-2-IdGG0b7tMRVj0wjqTCMzz8Tpu8WAJc5gpoGVj08QYt-2TYJff6X1H9_XtAZEozRKgVDvGcdpsgSSS9JuBvipccylQIjlyJkA4fnf1itOGY1WUkzaPOz8m_hx_GWBx5s9dRkSiNu08VKtoPuhsAlhwDwV_RdfUKVr006vtuuOgZKOwzOjXlXhPd8xrwHwYW9ZcglTZdA3WHHQQUyxsU3cYLL5W02pKBUl9J8Znx8iSTLmPuIwjFIqx_IeEMt6BthHHaUVVnnXcqpeYrJYIiW5GiD4aT8_zjMzkyUCefuH6_ranu5UYJX079twCku580goJy7z0AzFdcpb2PSk9OmHkU82ADQVJqGuiScDdcNjbfUiBF7DOpdskl53E3GZmRzI9eFq8YySRgKK8cHH3TMkwWlU3WBJYsItZlSyZdw=s34-no?",
                null /* size is determined at runtime */,
                null /* origin is 0,0 */,
                null /* anchor is bottom center of the scaled image */,
                new window.google.maps.Size(40, 40)
              );
              let ToaDo = item?.toa_do?.split(",");
              const lat = parseFloat(ToaDo[0]),
                lng = parseFloat(ToaDo[1]);
              if (!isNaN(lat)) {
                return (
                  <Marker
                    key={index}
                    icon={iconMarker}
                    draggable={false}
                    //onDragEnd={onMarkerDragEnd}
                    position={{ lat: lat, lng: lng }}
                    onClick={() => {
                      console.log(ListVTT[index]);
                      //SetshowInfoIndex(index);
                    }}
                  ></Marker>
                );
              }
            })}
          {pathPoint && (
            <Polyline
              path={pathPoint}
              options={{
                strokeColor: "#ff2527",
                strokeOpacity: 0.75,
                strokeWeight: 2,
              }}
            />
          )}
        </GoogleMap>
      );
    })
  );

  return (
    <Box
      id={"map_container_tb"}
      style={{ height: "100%", width: "100%", transform: "translateY(0)" }}
    >
      <Provider store={store}>
        <FullScreen className="scr1" handle={screen1} onChange={reportChange}>
          <MapWithAMarker
            googleMapURL={link}
            loadingElement={<div className="map" />}
            containerElement={<div className="map" />}
            mapElement={<div className="map" />}
          />
          {!stateBtn ? (
            <button className="btnMap" onClick={screen1.enter}>
              <FullscreenIcon style={{ width: 35, height: 35 }} />
            </button>
          ) : (
            <button className="btnMap" onClick={screen1.exit}>
              <FullscreenExitIcon style={{ width: 35, height: 35 }} />
            </button>
          )}
        </FullScreen>
      </Provider>
    </Box>
  );
};

export default ThietBi2;
