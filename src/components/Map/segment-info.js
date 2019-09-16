import React, { PureComponent } from 'react';

const formatDate = date => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  let hour = date.getHours();
  let minute = date.getMinutes();
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  return `${hour}:${minute} ${day}. ${monthNames[monthIndex]} ${year}`;
}

export default class SegmentInfo extends PureComponent {
  render() {
    const { info } = this.props;
    return (
      <div>
        <div>
          {info.name} |{' '}
          <a
            target="_new"
            href={`https://www.strava.com/segments/${info._id}`}
          >
            View on Strava
          </a>
        </div>
        <p>{`Star count ${info.star_count}`}</p>
        <p>{`Efforts ${info.efforts}`}</p>
        <p>{`Info updated ${formatDate(new Date(info.time_info_added))}`}</p>
      </div>
    );
  }
}