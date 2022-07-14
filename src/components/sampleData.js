const data = [
  {
    id: 1000,
    title: "Course Idea 1",
    background: "#af3d33",
  },
  {
    id: 1001,
    title: "Course Idea 2",
    background: "#ff6d33",
  },
  {
    id: 1002,
    title: "Course Idea 3",
    background: "#ffad33",
  },
  {
    id: 1003,
    title: "Course Idea 4",
    background: "#81ad33",
  },
  {
    id: 1004,
    title: "Course Idea 5",
    background: "#3fa3a3",
  },
  {
    id: 1005,
    title: "Course Idea 6",
    background: "#ffada3",
  },
  {
    id: 1006,
    title: "Course Idea 7",
    background: "#af1ffa",
  },
  {
    id: 1007,
    title: "Course Idea 8",
    background: "#ffad33",
  },
];

const boards = [
  {
    id: 1000,
    title: "Garden",
    background: "#af3d33",
  },
  {
    id: 1001,
    title: "Bedroom",
    background: "#ff6d33",
  },
  {
    id: 1002,
    title: "Kitchen",
    background: "#ffad33",
  },
];

const lists = [
  {
    id: 100,
    title: "House idea",
    board: 1000,
    cards: [
      {
        id: 1,
        text: "Paint bedrooms this summer",
      },
    ],
  },
  {
    id: 101,
    title: "House idea",
    board: 1000,
    cards: [
      {
        id: 2,
        text: "Paint bedrooms this summer",
      },
    ],
  },
  {
    id: 102,
    title: "House idea",
    board: 1001,
    cards: [
      {
        id: 3,
        text: "Paint bedrooms this summer",
      },
    ],
  },
];

exports.data = data;
exports.lists = lists;
exports.boards = boards;
