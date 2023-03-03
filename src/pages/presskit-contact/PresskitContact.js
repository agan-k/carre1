import {useOutletContext} from "react-router-dom";
import {
  useSinglePrismicDocument, 
  useAllPrismicDocumentsByType, 
  PrismicRichText
} from "@prismicio/react";
import {hideEmail, validateEmail} from './utilities';
import PressQuotes from "./components";
 
export default function PresskitContact() {
  const [language] = useOutletContext();
  const [bookingData] = useSinglePrismicDocument('booking');

  // bookingData && console.log('bookingData: ', bookingData);
  // pressData && console.log('pressData: ', pressData);

  const generalEmail = bookingData?.data.general_email;
  const hasGeneralEmail = Boolean(generalEmail !== null);
  const generalContactFrench = bookingData?.data.general_contact_french;
  const generalContactEnglish = bookingData?.data.general_contact_english;
  const generalContactDescription = language === 'french' ?
    generalContactFrench : generalContactEnglish;

  const hasContactDescription = 
    Boolean(generalContactDescription?.length !== 0);
  
  const bookingName = bookingData?.data.booking_name;
  const hasBookingName = Boolean(bookingName !== null);
  const bookingEmail = bookingData?.data.booking_email;
  const hasBookingEmail = Boolean(bookingEmail !== null);
  const bookingPhone = bookingData?.data.booking_phone;
  const hasBookingPhone = Boolean(bookingPhone !== null);

  const isValidGeneralEmail = validateEmail(generalEmail);
  const isValidBookingEmail = validateEmail(bookingEmail);

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
  const Contact = () => {
    return (
      <div>
        <span>{hasBookingName ? bookingName : ''}</span><br/>
        <span>{hasBookingPhone ? bookingPhone : ''}</span><br/>
        {hasBookingEmail ? 
          isValidBookingEmail && hideEmail(bookingEmail) : ''
        }
        {hasContactDescription ? 
          <PrismicRichText field={generalContactDescription} /> : ''
        }
        {hasGeneralEmail ? 
          isValidGeneralEmail && hideEmail(generalEmail) : ''
        }
      </div>
    );
  };

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
