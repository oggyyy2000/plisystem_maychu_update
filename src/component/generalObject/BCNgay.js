import React from "react";
import "../../asset/css/generalObject/BC1.css";
import { getTextDisplay } from "../../util/GetTenTuyen";
import { useSelector } from "react-redux";

const BCNGay = (props) => {
  const post = props.data ? props.data : "";
  var date = post ? new Date(post.ngay_kiem_tra) : "";
  /////
  const Tempvalue = useSelector((state) => state.tempvalue);
  const obj1 = props.obj1 ? props.obj1 : "";
  const obj2 = props.obj2 ? props.obj2 : "";
  const obj3 = props.obj3 ? props.obj3 : "";
  const obj4 = props.obj4 ? props.obj4 : "";
  ////
  var newdate =
    typeof date.getMonth === "function"
      ? (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
        "/" +
        (date.getMonth() > 8
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1)) +
        "/" +
        date.getFullYear()
      : "";
  return (
    <>
      <div style={{ color: "black", width: "fit-content", display: "inline" }}>
        <div className="book">
          <div className="page">
            <div className="subpage">
              <h5
                style={{
                  margin: "0in",
                  textAlign: "right",
                  lineHeight: "120%",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textDecoration: "underline",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  BM 07- 03
                </span>
              </h5>
              <table
                style={{
                  border: "none",
                  width: "487.35pt",
                  borderCollapse: "collapse",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        width: "147.15pt",
                        padding: "0in 5.4pt",
                        height: "68.05pt",
                        verticalAlign: "top",
                      }}
                    >
                      <p
                        style={{
                          marginTop: "12.0pt",
                          marginRight: "0in",
                          marginBottom: "24.0pt",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          margin: "0in",
                          lineHeight: "normal",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "normal",
                            color: "black",
                          }}
                        >
                          TỔNG CÔNG TY
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: "12.0pt",
                          marginRight: "0in",
                          marginBottom: "24.0pt",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          margin: "0in",
                          lineHeight: "normal",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontWeight: "normal",
                            color: "black",
                          }}
                        >
                          ĐIỆN LỰC TP HÀ NỘI
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: "12.0pt",
                          marginRight: "0in",
                          marginBottom: "24.0pt",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          margin: "0in",
                          lineHeight: "normal",
                        }}
                      >
                        <span style={{ fontSize: "17px", color: "black" }}>
                          CÔNG TY LƯỚI ĐIỆN
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: "12.0pt",
                          marginRight: "0in",
                          marginBottom: "24.0pt",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          margin: "0in",
                          lineHeight: "normal",
                        }}
                      >
                        <span style={{ fontSize: "17px", color: "black" }}>
                          CAO THẾ HÀ NỘI
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: "12.0pt",
                          marginRight: "0in",
                          marginBottom: "24.0pt",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          margin: "0in",
                          lineHeight: "normal",
                        }}
                      >
                        <span style={{ fontSize: "16px", color: "black" }}>
                          ĐỘI ĐƯỜNG DÂY
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "340.2pt",
                        padding: "0in 5.4pt",
                        height: "68.05pt",
                        verticalAlign: "top",
                      }}
                    >
                      <p
                        style={{
                          marginTop: "2.0pt",
                          marginRight: "0in",
                          marginBottom: "0in",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          lineHeight: "normal",
                        }}
                      >
                        <span style={{ fontSize: "17px", color: "black" }}>
                          CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: "2.0pt",
                          marginRight: "0in",
                          marginBottom: "0in",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          lineHeight: "normal",
                        }}
                      >
                        <span style={{ fontSize: "17px", color: "black" }}>
                          Độc lập - Tự do - Hạnh phúc
                        </span>
                      </p>
                      <p
                        style={{
                          marginTop: "2.0pt",
                          marginRight: "0in",
                          marginBottom: "0in",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          lineHeight: "normal",
                        }}
                      >
                        &nbsp;
                      </p>
                      <table style={{ float: "left" }}>
                        <tbody>
                          <tr>
                            <td>
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <br />
                            </td>
                            <td>
                              <br />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      &nbsp;<span style={{ fontSize: "17px" }}>&nbsp;</span>
                      <p>
                        <br />
                      </p>
                      <p
                        style={{
                          marginTop: "2.0pt",
                          marginRight: "0in",
                          marginBottom: "0in",
                          marginLeft: "0in",
                          textAlign: "center",
                          textIndent: "0in",
                          background: "transparent",
                          fontSize: "18px",
                          fontFamily: '"Times New Roman",serif',
                          fontWeight: "bold",
                          lineHeight: "normal",
                        }}
                      >
                        <em>
                          <span
                            style={{ fontSize: "17px", fontWeight: "normal" }}
                          >
                            &nbsp;
                          </span>
                        </em>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p
                style={{
                  margin: "0in",
                  textAlign: "center",
                  lineHeight: "120%",
                  fontSize: "19px",
                  fontFamily: '".VnTimeH",sans-serif',
                  fontWeight: "bold",
                  marginTop: "8.0pt",
                  marginRight: "0in",
                  marginBottom: "8.0pt",
                  marginLeft: "0in",
                }}
              >
                <span
                  style={{
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  PHIẾU KIỂM TRA NGÀY ĐƯỜNG DÂY CAO THẾ
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Phiếu số:&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .............................................................
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  &nbsp;&nbsp;
                </span>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Ngày kiểm tra:&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {newdate}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  Tên tuyến đường dây:{" "}
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {getTextDisplay(post.ma_tuyen)}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Phương thức kiểm tra
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  :
                  .............................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Đoạn đường dây kiểm tra:
                </span>
                <span style={{ fontSize: "17px", lineHeight: "120%" }}>
                  &nbsp;
                </span>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Từ VT&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {post.bat_dau_doan}&nbsp;
                </span>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  đến VT&nbsp;
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {post.ket_thuc_doan}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "3.0pt",
                  marginRight: "0in",
                  marginBottom: "3.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontSize: "17px",
                      lineHeight: "120%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    Danh sách nhóm kiểm tra:
                  </span>
                </strong>
              </p>
              <table
                style={{
                  width: "480.3pt",
                  borderCollapse: "collapse",
                  border: "none",
                  color: "black",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        width: "33.75pt",
                        border: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              fontSize: "17px",
                              fontFamily: '"Times New Roman",serif',
                            }}
                          >
                            TT
                          </span>
                        </strong>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "198.45pt",
                        border: "solid windowtext 1.0pt",
                        borderLeft: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              fontSize: "17px",
                              fontFamily: '"Times New Roman",serif',
                            }}
                          >
                            Họ và tên
                          </span>
                        </strong>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "92.15pt",
                        border: "solid windowtext 1.0pt",
                        borderLeft: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              fontSize: "17px",
                              fontFamily: '"Times New Roman",serif',
                            }}
                          >
                            Chức danh
                          </span>
                        </strong>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "81.2pt",
                        border: "solid windowtext 1.0pt",
                        borderLeft: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              fontSize: "17px",
                              fontFamily: '"Times New Roman",serif',
                            }}
                          >
                            Bậc thợ
                          </span>
                        </strong>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "74.75pt",
                        border: "solid windowtext 1.0pt",
                        borderLeft: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              fontSize: "17px",
                              fontFamily: '"Times New Roman",serif',
                            }}
                          >
                            Bậc AT
                          </span>
                        </strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        width: "33.75pt",
                        border: "solid windowtext 1.0pt",
                        borderTop: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          1
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "198.45pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj1.name}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "92.15pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj1.chucdanh}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "81.2pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj1.battho}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "74.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj1.batat}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        width: "33.75pt",
                        border: "solid windowtext 1.0pt",
                        borderTop: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          2
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "198.45pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj2.name}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "92.15pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj2.chucdanh}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "81.2pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj2.battho}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "74.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj2.batat}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        width: "33.75pt",
                        border: "solid windowtext 1.0pt",
                        borderTop: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          3
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "198.45pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj3.name}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "92.15pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj3.chucdanh}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "81.2pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj3.battho}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "74.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj3.batat}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        width: "33.75pt",
                        border: "solid windowtext 1.0pt",
                        borderTop: "none",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          4
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "198.45pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj4.name}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "92.15pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj4.chucdanh}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "81.2pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj4.battho}
                        </span>
                      </p>
                    </td>
                    <td
                      style={{
                        width: "74.75pt",
                        borderTop: "none",
                        borderLeft: "none",
                        borderBottom: "solid windowtext 1.0pt",
                        borderRight: "solid windowtext 1.0pt",
                        padding: "0in 5.4pt 0in 5.4pt",
                        height: "19.85pt",
                      }}
                    >
                      <p
                        style={{
                          margin: "0in",
                          fontSize: "19px",
                          fontFamily: '".VnTime",sans-serif',
                          textAlign: "center",
                          lineHeight: "120%",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "17px",
                            lineHeight: "120%",
                            fontFamily: '"Times New Roman",serif',
                          }}
                        >
                          {obj4.batat}
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "8.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <strong>
                  <span
                    style={{
                      fontFamily: '"Times New Roman",serif',
                      color: "black",
                    }}
                  >
                    1 .&nbsp;
                  </span>
                </strong>
                <strong>
                  <span style={{ fontFamily: '"Times New Roman",serif' }}>
                    Nội dung kiểm tra:
                  </span>
                </strong>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "115%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "115%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  -&nbsp;
                </span>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Hành lang tuyến:&nbsp;
                </span>
                <em>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "115%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    (ghi các tồn tại trong hành lang tuyến, ngoài hành lang
                    tuyến có khả năng gây sự cố.v.v. và các nội dung cần xử lý).
                  </span>
                </em>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {Tempvalue === "1"
                    ? "Vật thể lạ mắc vào đường dây"
                    : "Bình Thường"}
                  {/*...............................................................................................................................................................*/}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "115%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "115%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  -&nbsp;
                </span>
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  Cột :
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "115%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  &nbsp;
                </span>
                <em>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "115%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    (ghi các vị trí cột nghiêng, biến dạng, nứt, mất thanh
                    giằng, biển báo.....và các nội dung cần xử lý)
                  </span>
                </em>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {Tempvalue === "9" || Tempvalue === "10"
                    ? "Bất thường ở cột: "
                    : "Bình thường"}
                  {Tempvalue === "9" ? "Cột điện bị bám vật lạ" : ""}
                  {Tempvalue === "10" ? "Cột điện bị han rỉ" : ""}
                  {/*...............................................................................................................................................................*/}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "115%",
                }}
              >
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  - Móng cột:&nbsp;
                </span>
                <em>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "115%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    (ghi các vị trí lún, nứt, xói lở và có tình trạng bất
                    thường, các khu vực xung quanh móng cột......các nội dung
                    cần xử lý )
                  </span>
                </em>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {Tempvalue === "11" || Tempvalue === "12"
                    ? "Bất thường ở móng: "
                    : "Bình thường"}
                  {Tempvalue === "11" ? "Móng cột bị nứt bê tông" : ""}
                  {Tempvalue === "12" ? "Sạt lở đất xung quanh móng cột" : ""}
                  {/* ............................................................................................................................................................... */}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span style={{ fontFamily: '"Times New Roman",serif' }}>
                  - Các kết cấu xà và giá đỡ
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  :&nbsp;
                </span>
                <em>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "120%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    ( ghi các vị trí cần xử lý - nội dung cần xử lý )
                  </span>
                </em>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  ...............................................................................................................................................................
                </span>
              </p>
            </div>
          </div>
          <div className="page">
            <div className="subpage">
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "115%",
                }}
              >
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  - Sứ cách điện :&nbsp;
                </span>
                <em>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "115%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    (ghi các tồn tại như vỡ, nứt, phóng điện, bụi bẩn, phụ kiện
                    chuỗi sứ, các hiện tượng bất thường khác và nội dung cần xử
                    lý )
                  </span>
                </em>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {Tempvalue === "5" ||
                  Tempvalue === "6" ||
                  Tempvalue === "7" ||
                  Tempvalue === "8"
                    ? "Bất thường ở sứ cách điện: "
                    : "Vỡ bát"}
                  {Tempvalue === "5"
                    ? "Cách điện thủy tinh bị mất (vỡ) bát"
                    : ""}
                  {Tempvalue === "6" ? "Cách điện silicon bị rách tán" : ""}
                  {Tempvalue === "7" ? "Cách điện bị bám vật lạ" : ""}
                  {Tempvalue === "8" ? "Tuột hãm dây trên chuỗi cách điện" : ""}
                  {/*.....................................................................................................................................................*/}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "115%",
                }}
              >
                <span
                  style={{
                    lineHeight: "115%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  - Dây dẫn:
                </span>
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "115%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  &nbsp;
                </span>
                <em>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "115%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    (ghi các vị trí dây bị tổn thương, đứt sợi, vặn xoắn, quấn
                    táp, vật lạ bám vào đường dây, độ võng, các hiện tượng bất
                    thường của mối nối và các nội dung cần xử lý)
                  </span>
                </em>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {Tempvalue === "2" || Tempvalue === "3"
                    ? "Bất thường ở đường dây: "
                    : "Bình thường"}
                  {Tempvalue === "2" ? "Dây dẫn bị tưa (đứt sợi)" : ""}
                  {Tempvalue === "3" ? "Quá nhiệt mối nối" : ""}
                  {/*.....................................................................................................................................................*/}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  - Các kết cấu tiếp địa, tình trạng tiếp địa:&nbsp;
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  - Dây néo, móng néo :
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  - Các thiết bị chống sét :
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  - Tạ bù – Tạ chống rung:
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  {Tempvalue === "4" ? "Trôi tạ chống rung" : "Bình thường"}
                  {/*.....................................................................................................................................................*/}
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "120%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    2- Các tồn tại đã xử lý ngay trong kiểm tra :
                  </span>
                </strong>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "120%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    3- Các kiến nghị sau kiểm tra :&nbsp;
                  </span>
                </strong>
                <em>
                  <span
                    style={{
                      fontSize: "16px",
                      lineHeight: "120%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    (phần này do Tổ trưởng vận hành ghi)
                  </span>
                </em>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  marginTop: "2.0pt",
                  marginRight: "0in",
                  marginBottom: "2.0pt",
                  marginLeft: "0in",
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "17px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  .....................................................................................................................................................
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    lineHeight: "120%",
                    fontFamily: '"Times New Roman",serif',
                  }}
                >
                  &nbsp;
                </span>
              </p>
              <p
                style={{
                  margin: "0in",
                  fontSize: "19px",
                  fontFamily: '".VnTime",sans-serif',
                  textAlign: "justify",
                  lineHeight: "120%",
                }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: "120%",
                      fontFamily: '"Times New Roman",serif',
                    }}
                  >
                    Đội đường dây &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tổ
                    QLVH &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nhóm kiểm tra
                  </span>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BCNGay;
