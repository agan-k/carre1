import {useOutletContext} from "react-router-dom";
import {
  useSinglePrismicDocument, 
  PrismicRichText
} from "@prismicio/react";
import {hideEmail, validateEmail} from '../utilities';

export const Contact = () => {
  const [language] = useOutletContext();
  const [bookingData] = useSinglePrismicDocument('booking');
  
  const bookingName = bookingData?.data.booking_name;
  const bookingEmail = bookingData?.data.booking_email;
  const bookingPhone = bookingData?.data.booking_phone;
  const generalEmail = bookingData?.data.general_email;

  const generalContactFrench = bookingData?.data.general_contact_french;
  const generalContactEnglish = bookingData?.data.general_contact_english;
  const generalContactDescription = language === 'french' ?
    generalContactFrench : generalContactEnglish;
  
  const hasContactDescription = 
  Boolean(generalContactDescription?.length !== 0);
  const hasGeneralEmail = Boolean(generalEmail !== null);
  const hasBookingPhone = Boolean(bookingPhone !== null);
  const hasBookingEmail = Boolean(bookingEmail !== null);
  const hasBookingName = Boolean(bookingName !== null);

  const isValidGeneralEmail = validateEmail(generalEmail);
  const isValidBookingEmail = validateEmail(bookingEmail);

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
