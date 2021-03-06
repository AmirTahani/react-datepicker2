import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { persianNumber } from '../utils/persian';
import { leftArrow, rightArrow } from '../utils/assets';

export default class MonthsViewHeading extends Component {
  static propTypes = {
    year: PropTypes.object.isRequired,
    onNextYear: PropTypes.func.isRequired,
    onPrevYear: PropTypes.func.isRequired,
    isGregorian: PropTypes.bool
  };

  static contextTypes = {
    styles: PropTypes.object,
    type: PropTypes.number,
    setCalendarMode: PropTypes.func.isRequired
  };

  handleYearClick(event) {
    const { setCalendarMode } = this.context;
    event.preventDefault();
    setCalendarMode('yearSelector');
  }

  render() {
    const { year, styles, type, isGregorian } = this.props;

    const yearFormat = isGregorian ? 'YYYY' : 'jYYYY';

    return (
      <div className={styles.heading}>
        <button className={styles.title} onClick={this.handleYearClick.bind(this)}>
          {isGregorian ? year.format(yearFormat) : persianNumber(year.format(yearFormat))}
        </button>
        <button
          type="button"
          title={isGregorian ? 'before year' : 'سال قبل'}
          style={styles.navButton}
          className={styles.prev}
          onClick={this.props.onPrevYear}
          dangerouslySetInnerHTML={rightArrow}
        />
        <button
          type="button"
          title={isGregorian ? 'next year' : 'سال بعد'}
          style={styles.navButton}
          className={styles.next}
          onClick={this.props.onNextYear}
          dangerouslySetInnerHTML={leftArrow}
        />
      </div>
    );
  }
}
