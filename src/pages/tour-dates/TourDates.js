import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {asDate} from "@prismicio/helpers";
export default function TourDates() {
  const [shows] = useAllPrismicDocumentsByType('shows');
  const showCards = shows?.map((item, index) => 
    //Prismic has no required fields (https://prismic.io/blog/required-fields)
    //so using index for key prop here:
    <div key={item.data.timestamp + index}>
      <PrismicRichText field={item.data?.venue} />
      <p>{asDate(item.data.timestamp).toLocaleString()}</p>
      <PrismicRichText field={item.data?.date} />
      <PrismicRichText field={item.data?.description} />
    </div>
  );
  return showCards;
};
