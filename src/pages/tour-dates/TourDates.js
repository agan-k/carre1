import {useOutletContext, useLocation, Link} from "react-router-dom";
import {useAllPrismicDocumentsByType, PrismicRichText} from "@prismicio/react";
import {Text, HeadingSmall, Box, Flex} from '../../shared';
import {routes} from '../../router';
import {PageTitle, PageWrapper, Loading} from "../styled";
import {CalendarCardWrapper} from "./styled";

export default function TourDates() {
  const [language] = useOutletContext();
  const [shows, {state}] = useAllPrismicDocumentsByType('shows', 
    {
      orderings: [
        {
          field: 'my.shows.timestamp',
          direction: 'desc',
        },
      ],
    }
  );
  const loading = Boolean(state === 'idle' && 'loading');
  const error = Boolean(state === 'failed');

  const location = useLocation();
  const currentPage = routes.find(item =>  location.pathname === item.path);
  const pageTitleInActiveLanguage = 
      currentPage.element.props.name[`${language}`];
  
  const calendarCards = shows?.map((item) => {
    const time = item.data.timestamp;
    const venue = item.data.venue;
    const description = item.data.description;

    const lineup = item.data?.lineup?.map((item) =>
      <Flex key={item.name}>
        <Text fontWeight={'bold'}>{item.name}&nbsp;</Text>
        <Text fontStyle={'italic'}> - {item.instrument}</Text>
      </Flex>
    );

    const googleMap = item.data?.google_maps;
    const hasVenue = Boolean(venue?.length !== 0);
    const hasTime = Boolean(time !== null);
    const hasDescription = Boolean(description?.length !== 0);
    const hasLineup = Boolean(lineup?.length !== 0);
    const hasGoogleMap = Boolean(googleMap?.hasOwnProperty('url'));
    console.log('here: ', lineup);
    console.log(shows);
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
        {hasLineup ? 
          lineup : ''}
        {hasGoogleMap ? 
          <Link to={googleMap.url} target='_blank'>Directions</Link> : ''}
      </CalendarCardWrapper>
    );
  });

  return (
    <>
      {loading ? 
        <Loading>loading...</Loading> : 
        error ? 
          <Loading>Ups, something broke! &#129300;</Loading> : 
          <PageWrapper>
            <PageTitle>{pageTitleInActiveLanguage}</PageTitle>
            <Box 
              display={['unset', 'unset', 'flex']}
              flexWrap={'wrap'}
              flex={'1 0 50%'}
            >
              {calendarCards}
            </Box>
          </PageWrapper>
      }
    </>
  );
};
