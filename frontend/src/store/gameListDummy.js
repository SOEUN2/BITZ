import { createContext, useReducer } from "react";

const gameListDummy = [
  {
    id: 0,
    date: new Date().getDate(),
    start_time: "1100",
    end_time: "1300",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    is_parking: true,
    is_shower: true,
    is_airconditional: true,
    is_water: false,
    is_basketball: false,
    is_scoreboard: false,
  },
  {
    id: 1,
    date: new Date().getDate(),
    start_time: "1100",
    end_time: "1400",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    is_parking: true,
    is_shower: false,
    is_airconditional: true,
    is_water: false,
    is_basketball: false,
    is_scoreboard: false,
  },
  {
    id: 2,
    date: new Date().getDate(),
    start_time: "1300",
    end_time: "1500",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    is_parking: true,
    is_shower: true,
    is_airconditional: true,
    is_water: false,
    is_basketball: false,
    is_scoreboard: false,
  },
  {
    id: 3,
    date: new Date().getDate(),
    start_time: "1300",
    end_time: "1600",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    is_parking: true,
    is_shower: true,
    is_airconditional: true,
    is_water: false,
    is_basketball: false,
    is_scoreboard: false,
  },
  {
    id: 4,
    date: new Date().getDate(),
    start_time: "1600",
    end_time: "1900",
    name: "역삼 싸피 체육관",
    City: "서울특별시",
    Area: "강남구",
    court_width: 15,
    court_length: 28,
    min_people: 12,
    max_people: 18,
    is_parking: true,
    is_shower: true,
    is_airconditional: true,
    is_water: false,
    is_basketball: false,
    is_scoreboard: false,
  },
]
export default gameListDummy