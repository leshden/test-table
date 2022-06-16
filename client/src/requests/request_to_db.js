import moment from 'moment';

export function getData(callback) {
  fetch('http://localhost:3001')
    .then(response => {
      return response.json();
    })
    .then(data => {
      const updateData = data.map(item => {
        return {...item,
        date:  moment(item.date).format("DD-MM-YYYY")
        }
      })
      callback(updateData);
    });
}
