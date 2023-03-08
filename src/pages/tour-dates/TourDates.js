import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {asDate} from "@prismicio/helpers";
export default function TourDates() {
  const [shows] = useAllPrismicDocumentsByType('shows');
  const showCards = shows?.map((item) => {
    const hasVenue = Boolean(item.data?.venue.length !== 0);
    const hasTime = Boolean(item.data?.timestamp !== null);
    const hasDescription = Boolean(item.data?.description !== 0);
    return (
      <div key={item.id}>
        {hasVenue ? <h3>{item.data?.venue[0].text}</h3> : ''}
        {hasTime ? <p>{asDate(item.data.timestamp).toLocaleString()}</p> : ''}
        {hasDescription ? 
          <PrismicRichText field={item.data?.description} /> : ''}
        <hr></hr>
      </div>
    );
  });
  return showCards;
};
