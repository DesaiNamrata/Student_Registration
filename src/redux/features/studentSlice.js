import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [
      {
        id: 1,
        firstName: "Rajveer",
        lastName: "Patil",
        email: "rajveer@gmail.com",
        phone: "9825778998",
        address: "Pune",
      },
      {
        id: 2,
        firstName: "Geeta",
        lastName: "Das",
        email: "geeta@gmail.com",
        phone: "9421287755",
        address: "Mumbai",
      },
      {
        id: 3,
        firstName: "Kabir",
        lastName: "khan",
        email: "kabir@gmail.com",
        phone: "9823940568",
        address: "Nagpur",
      },
      {
        id: 4,
        firstName: "Tanya",
        lastName: "Trivedi",
        email: "tanya@gmail.com",
        phone: "7387371594",
        address: "Nashik",
      },
      {
        id: 5,
        firstName: "Vimal",
        lastName: "Joshi",
        email: "vimal@gmail.com",
        phone: "9049224243",
        address: "Kolhapur",
      },
      {
        id: 6,
        firstName: "Namrata",
        lastName: "Desai",
        email: "namrata@gmail.com",
        phone: "7387371594",
        address: "Gadhinglaj",
      },
      {
        id: 7,
        firstName: "Megha",
        lastName: "Patil",
        email: "megha.patil@gmail.com",
        phone: "9421287755",
        address: "Kandalgav",
      },
      {
        id: 8,
        firstName: "Kiran",
        lastName: "Kamble",
        email: "kiran.kamble@gmail.com",
        phone: "9049224245",
        address: "Panhala",
      },
      {
        id: 9,
        firstName: "Vaishnavi",
        lastName: "Chavan",
        email: "vaishnavi.chavan@gmail.com",
        phone: "9087563489",
        address: "Kolhapur",
      },
      {
        id: 10,
        firstName: "Rohit",
        lastName: "Mane",
        email: "rohit.mane@gmail.com",
        phone: "7689456709",
        address: "Kolhapur",
      },
      
    ],
    student: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
    },
  },
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((el) => el.id == action.payload);
    },
    addStudent: (state, action) => {
      state.students = [action.payload, ...state.students];
    },   
  },
});

export const {
  getStudent,
  addStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
