import {useOutletContext, useLocation, Link} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {Text, HeadingSmall} from '../../shared';
import {routes} from '../../router';
import {PageTitle, PageWrapper, Loading} from "../styled";
import {CalendarCardWrapper} from "./styled";
import {Box} from '../../shared';

export default function TourDates() {
  const [language] = useOutletContext();
  const [shows] = useAllPrismicDocumentsByType('shows');
  const hasData = Boolean(shows !== undefined);
  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];
  
  const calendarCards = shows?.map((item) => {
    const time = item.data.timestamp;
    const venue = item.data.venue;
    const description = item.data.description;
    const googleMap = item.data?.google_maps;
    const hasVenue = Boolean(venue?.length !== 0);
    const hasTime = Boolean(time !== null);
    const hasDescription = Boolean(description?.length !== 0);
    const hasGoogleMap = Boolean(googleMap?.hasOwnProperty('url'));

    return (
      <CalendarCardWrapper key={item.id}>
        {hasTime ? 
          <Text fontSize={5}>
            {new Date(Date.parse(time)).toDateString()}
          </Text> : ''}
        {hasVenue ? 
          <HeadingSmall fontSize={5} color={'primary'}>
            {venue[0].text}
          </HeadingSmall> : ''}
        {hasDescription ? 
          <PrismicRichText field={description} /> : ''}
        {hasGoogleMap ? 
          <Link to={googleMap.url} target='_blank'>Directions</Link> : ''}
      </CalendarCardWrapper>
    );
  });

  return (
    <>
      {!hasData ? 
        <Loading>loading...</Loading> : 
        <PageWrapper>
          <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
          <Box 
            display={['unset', 'unset', 'flex']}
            justifyContent={'space-around'}
          >
            {calendarCards}
          </Box>
        </PageWrapper>
      }
    </>
  );
};
