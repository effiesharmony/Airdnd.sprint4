import DatePicker from "react-datepicker";
import { useState } from "react";

export function DateModal({ filterBy, handleDateChange }) {
  const [dateRange, setDateRange] = useState([
    filterBy.availableDates.start,
    filterBy.availableDates.end,
  ]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="date-modal" onClick={(e) => e.stopPropagation()}>
      <div className="date-picker-modal">
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            setDateRange(dates);
            handleDateChange(dates);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline          
          dateFormat="dd/MM/yyyy"
          monthsShown={2}
          calendarStartDay={0}
        />
      </div>
    </div>
  );
}
