export default {
  namespaced: true,
  state: {
    events: [
      {
        id: 0,
        name: 'Event 0',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['robinsons'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 1,
        name: 'Event 1',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['robinsons', 'reaves'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 2,
        name: 'Event 2',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['reaves'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 3,
        name: 'Event 3',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['robinsons'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 4,
        name: 'Event 4',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['reaves', 'robinsons'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 5,
        name: 'Event 5',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['robinsons'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 6,
        name: 'Event 6',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['reaves', 'robinsons'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 7,
        name: 'Event 7',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['reaves'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 8,
        name: 'Event 8',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['robinsons', 'reaves'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 9,
        name: 'Event 9',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['reaves'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 10,
        name: 'Event 10',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['reaves'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
      {
        id: 11,
        name: 'Event 11',
        location: 'Lorem Ipsum',
        time: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a',
        bring: 'Lorem ipsum dolor sit amet',
        users: ['reaves', 'robinsons'],
        img: 'https://i0.wp.com/www.skillings.com/wp-content/uploads/2017/02/placeholder-square.jpg',
      },
    ],
  },
  getters: {
    getPageOfEvents: state => (currentPage, eventsPerPage) => {
      // pages are 0-indexed
      const firstEvent = currentPage * eventsPerPage;
      const lastEvent = firstEvent + eventsPerPage;
      // slice truncates any out-of-bounds indices, so that's not a concern here
      return state.events.slice(firstEvent, lastEvent);
    },
    getUsersEvents: state => username => state.events.filter(e => e.users.includes(username)),
    numOfEvents: state => state.events.length,
    getEventById: state => id => state.events.find(event => event.id === id),
  },
};
