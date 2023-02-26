import {useOutletContext} from "react-router-dom";
import {
  pageCategoriesEnglish as english,
  pageCategoriesFrench as french
} from "../constants";

export default function PresskitContact() {
  const [language, data] = useOutletContext();
  const content = data || [];
  const categoryName = language === 'english' ?
    english.PRESSKIT_CONTACT : french.PRESSKIT_CONTACT;

  const currentCategory = 
    content?.find(item => item.category === categoryName);
  const {press} = currentCategory || [];
  const {booking} = currentCategory || {};
  const {contact, rider, photos, contactOther} = booking || {};
  const quotes = press?.map(item => 
    <div key={item.id}>
      <p>{item.quote}</p>
      <p> - {item.source}</p>
    </div>
  );

  const PhotosLink = () => {
    return <a href={photos?.file}>Download {photos?.name}</a>;
  };
  const Rider = () => {
    return (
      <div>
        <a href={rider?.file}>Download {rider?.name}</a>
      </div>
    );
  };
  const Contact = () => {
    return (
      <div>
        <span>{contact?.phone}</span>
        <span> - {contact?.email}</span>
        <h3>Contact</h3>
        <span>{contactOther?.desc}</span><span> - {contactOther?.email}</span>
      </div>
    );
  };

  return (
    <>
      <h3>Press</h3>
      {quotes}
      <h3>Downloads</h3>
      <PhotosLink />
      <Rider />
      <h3>Booking</h3>
      <Contact />
    </>
  );
};
