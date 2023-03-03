import {useOutletContext} from "react-router-dom";
import {
  useSinglePrismicDocument, 
  useAllPrismicDocumentsByType, 
  PrismicRichText
} from "@prismicio/react";
import {hideEmail, validateEmail} from './utilities';
import PressQuotes from "./components";
import Contact from './components';
 
export default function PresskitContact() {
  const [language] = useOutletContext();
  const [bookingData] = useSinglePrismicDocument('booking');
  const [mediaData] = useSinglePrismicDocument('media');
  mediaData && console.log(mediaData);
 
  // const PhotosLink = () => {
  //   return <a href={photos?.file}>Download {photos?.name}</a>;
  // };
  // const Rider = () => {
  //   return (
  //     <div>
  //       <a href={rider?.file}>Download {rider?.name}</a>
  //     </div>
  //   );
  // };
  // const Contact = () => {
  //   return (
  //     <div>
  //       <span>{hasBookingName ? bookingName : ''}</span><br/>
  //       <span>{hasBookingPhone ? bookingPhone : ''}</span><br/>
  //       {hasBookingEmail ? 
  //         isValidBookingEmail && hideEmail(bookingEmail) : ''
  //       }
  //       {hasContactDescription ? 
  //         <PrismicRichText field={generalContactDescription} /> : ''
  //       }
  //       {hasGeneralEmail ? 
  //         isValidGeneralEmail && hideEmail(generalEmail) : ''
  //       }
  //     </div>
  //   );
  // };

  return (
    <>
      <h3>Press</h3>
      <PressQuotes />
      <h3>Downloads</h3>
      {/* <PhotosLink />
      <Rider /> */}
      <h3>Booking</h3>
      <Contact />
    </>
  );
};
