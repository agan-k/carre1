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
          direction: 'asc',
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

    const lineup = item.data.lineup.map((lineupItem, index) => {
      const name = lineupItem.name || null;
      const instrument = lineupItem.instrument || null;
      const hasName = Boolean(name !== null);
      const hasInstrument = Boolean(instrument !== null);
      const instrumentsArr = 
      hasInstrument ? instrument.split(' ') : null;
      return (
        <Flex key={lineupItem.name + index} flexWrap={'wrap'}>
          {hasName ? <Text fontWeight={'bold'}>{name}&nbsp;-&nbsp;</Text> : ''}
          {hasInstrument ? 
            instrumentsArr.map((instrument, index) => 
              <Text key={instrument + index} fontStyle={'italic'}>
                &nbsp;{instrument.toLowerCase()}
              </Text>
            )
            : ''
          }
        </Flex>
      );
    });

    const googleMap = item.data?.google_maps;
    const hasVenue = Boolean(venue?.length !== 0);
    const hasTime = Boolean(time !== null);
    const hasDescription = Boolean(description?.length !== 0);
    const hasLineup = Boolean(lineup?.length !== 0);
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
        {hasLineup ? 
          <Box my={4}>{lineup}</Box> : ''}
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
