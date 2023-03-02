import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {asDate} from "@prismicio/helpers";
export default function TourDates() {
  const [shows] = useAllPrismicDocumentsByType('shows');
  const showCards = shows?.map((item) =>
    <div key={item.data.id}>
      {
        item.data?.venue.length !== 0 ? (
          <h3>{item.data?.venue[0].text}</h3>
        ) : ''
      }
      {
        item.data?.timestamp !== null ? (
          <p>{asDate(item.data.timestamp).toLocaleString()}</p>
        ) : ''
      }
      {
        item.data?.description !== 0 ? (
          <PrismicRichText field={item.data?.description} />
        ) : ''
      }
      <hr></hr>
    </div>
  );
  return showCards;
};
