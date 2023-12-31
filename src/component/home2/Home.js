import React, { useEffect, useState } from "react";
import "../../asset/css/panel.css";
import { Resize, ResizeHorizon, ResizeVertical } from "react-resize-layout";
import Box from "@material-ui/core/Box";
import $ from "jquery";
import Loading from "../generalObject/Loading";
import ChartDSBT from "./ChartDSBT";
import DotBay from "./nhapdulieu";
import Main3D from "../Main3D";
import Map_Item from "./Map_Item";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

//Redux
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/types";
import { tuyenSelector } from "../../redux/selectors";

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

export default function Home() {
  const [height, setHeight] = useState(0);
  const sizeResize = useSelector((state) => state.sizeResize);
  const [ListTuyen, setListTuyen] = useState([]);
  const dispatch = useDispatch();
  const tuyenSelected = useSelector(tuyenSelector);
  const classes = useStyles();
  const urlt = process.env.REACT_APP_API_URL + "getalltuyens";

  const navigate = useNavigate();

  const func = () => {
    setHeight($("#TrangChuContainer2").height());
  };

  useEffect(() => {
    $(document).ready(function () {
      setTimeout(func, 50);
    });
  }, []);

  const onChangeSelectTuyen = (event) => {
    const target = event.target;
    const value = target.value;
    dispatch({ type: actions.tuyenSelect, data: value });
  };

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

  return (
    <Box
      id={"TrangChuContainer2"}
      style={{ height: "100%", position: "relative" }}
    >
      {height ? (
        <>
          <Box
            style={{
              paddingTop: 10,
              boxShadow:
                "rgb(0 0 0 / 15%) 0px 15px 25px, rgb(0 0 0 / 5%) 0px 5px 10px",
            }}
          >
            <FormControl
              variant={"outlined"}
              style={{
                alignSelf: "center",
                minwidth: "43%",
                width: "43%",
                marginLeft: 18,
                paddingBottom: 5,
              }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Chọn Tuyến
              </InputLabel>
              <Select
                width="100%"
                className={classes.select}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={"Chọn Tuyến"}
                value={tuyenSelected}
                style={{ height: 30 }}
                onChange={onChangeSelectTuyen}
                displayEmpty
                //disabled
              >
                <MenuItem value={""}>Trống</MenuItem>
                {ListTuyen ? (
                  ListTuyen.map((item, index) => (
                    <MenuItem key={index} value={item.ma_tuyen}>
                      {item.ten_tuyen}
                    </MenuItem>
                  ))
                ) : (
                  <Loading />
                )}
              </Select>
            </FormControl>
          </Box>
          <Resize handleWidth="10px" handleColor="#f1f1f1">
            <ResizeHorizon width={sizeResize.width1} className="video">
              <Resize handleWidth="10px" handleColor="#f1f1f1">
                <ResizeVertical height={sizeResize.height1} id="dotbay">
                  <button
                    className="btnRedict"
                    onDoubleClick={() => navigate("/app/dsbt")}
                  >
                    <ChartDSBT tuyen={tuyenSelected} />
                  </button>
                </ResizeVertical>
                <ResizeVertical height={sizeResize.height2} id="map">
                  <button
                    className="btnRedict"
                    onDoubleClick={() => navigate("/app/m3d")}
                  >
                    {/* <DataFetching tuyen={Tuyen} /> */}
                    <div>
                      <div
                        id="3d_title"
                        style={{
                          position: "absolute",
                          marginTop: "220px",
                          marginLeft: "20px",
                          zIndex: "2",
                        }}
                      >
                        <p style={{ color: "white" }}>
                          <b>Hành lang tuyến T87 Mai Động-Thanh Nhàn</b>
                        </p>
                      </div>
                      <div
                        id="3d_content"
                        style={{ width: "100%", height: "16.75rem" }}
                      >
                        <Main3D />
                      </div>
                    </div>
                  </button>
                </ResizeVertical>
              </Resize>
            </ResizeHorizon>
            <ResizeHorizon minWidth="200px" width={sizeResize.width2}>
              <Resize handleWidth="10px" handleColor="#f1f1f1">
                <ResizeVertical height={sizeResize.height1} id="dotbay">
                  <button
                    className="btnRedict"
                    onDoubleClick={() => navigate("/app/thietbi")}
                  >
                    <Map_Item tuyen={tuyenSelected} />
                  </button>
                </ResizeVertical>
                <ResizeVertical height={sizeResize.height2} id="map">
                  <button
                    className="btnRedict"
                    onDoubleClick={() => navigate("/app/nhapdulieu")}
                  >
                    <DotBay tuyen={tuyenSelected} />
                  </button>
                </ResizeVertical>
              </Resize>
            </ResizeHorizon>
          </Resize>
        </>
      ) : (
        <Loading />
      )}
    </Box>
  );
}
