import L from "leaflet";
import logo from "../../../assets/img/halle77.png";

export const customMarkerUserPos = new L.Icon({
  iconUrl:
    "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|de6e4a&chf=a,s,ee00FFFF%22",
  iconSize: [20, 25],
  iconAnchor: [10, 25],
  popupAnchor: [2, -40],
});

export const customMarkerHalle77Pos = new L.Icon({
  iconUrl: logo,
  iconSize: [60, 50],
  iconAnchor: [45, 60],
  popupAnchor: [2, -40],
});
