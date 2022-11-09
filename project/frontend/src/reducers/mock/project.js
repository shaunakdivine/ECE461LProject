export const MOCK_PROJECTS = [
  {
    id: 0,
    name: 'Project 1',
    description: 'Some cool descriptions',
    joined: false,
    hardwares: [
      {
        id: 0,
        name: 'HWSet1',
        checkedIn: 0,
        capacity: 100
      },
      {
        id: 1,
        name: 'HWSet2',
        checkedIn: 0,
        capacity: 100
      },
      {
        id: 2,
        name: 'HWSet3',
        checkedIn: 0,
        capacity: 100
      }
    ]
  },
  {
    id: 1,
    name: 'Project 2',
    description: 'Some cool descriptions',
    joined: true,
    hardwares: [
      {
        id: 0,
        name: 'HWSet1',
        checkedIn: 52,
        capacity: 100
      },
      {
        id: 1,
        name: 'HWSet2',
        checkedIn: 78,
        capacity: 100
      },
      {
        id: 2,
        name: 'HWSet3',
        checkedIn: 69,
        capacity: 100
      }
    ]
  },
  {
    id: 2,
    name: 'Project 3',
    description: 'Some cool descriptions',
    joined: true,
    hardwares: [
      {
        id: 0,
        name: 'HWSet1',
        checkedIn: 10,
        capacity: 100
      },
      {
        id: 1,
        name: 'HWSet2',
        checkedIn: 20,
        capacity: 100
      },
      {
        id: 2,
        name: 'HWSet3',
        checkedIn: 97,
        capacity: 100
      }
    ]
  }
];