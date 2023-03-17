import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {asDate} from "@prismicio/helpers";
import {Box} from '../../shared';
import {CalendarCardWrapper} from "./styled";

export default function TourDates() {
  const [shows] = useAllPrismicDocumentsByType('shows');
  const calendarCards = shows?.map((item) => {
    const venue = item.data.venue;
    const hasVenue = Boolean(venue.length !== 0);
    const hasTime = Boolean(item.data.timestamp !== null);
    const hasDescription = Boolean(item.data.description !== 0);
    return (
      <CalendarCardWrapper key={item.id}>
        {hasTime ? <p>{asDate(item.data.timestamp).toLocaleString()}</p> : ''}
        {hasVenue ? <h3>{venue[0].text}</h3> : ''}
        {hasDescription ? 
          <PrismicRichText field={item.data?.description} /> : ''}
      </CalendarCardWrapper>
    );
  });

  return (
    <Box p={4}>
      <h1>Tour Dates</h1>
      {calendarCards}
    </Box>
  );
};
