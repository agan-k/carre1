import {PressQuotes, Contact, MediaDownload} from "./components";
import {Box} from "../../shared";
 
export default function PresskitContact() {

  return (
    <>
      <h1>PressKit/Contact</h1>
      <Box p={3} m={1}>
        <h3>Press</h3>
        <PressQuotes />
      </Box>
      <Box p={3} m={1}>
        <h3>Booking</h3>
        <Contact />
      </Box>
      <Box p={3} m={1}>
        <h3>Downloads</h3>
        <MediaDownload />
      </Box>
    </>
  );
}
