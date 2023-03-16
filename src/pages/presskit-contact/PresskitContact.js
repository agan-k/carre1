import {PressQuotes, Contact, MediaDownload} from "./components";
import {Box} from "../../shared";
 
export default function PresskitContact() {

  return (
    <Box p={4}>
      <h1>PressKit/Contact</h1>
      <Box>
        <h3>Press</h3>
        <PressQuotes />
      </Box>
      <Box>
        <h3>Booking</h3>
        <Contact />
      </Box>
      <Box>
        <h3>Downloads</h3>
        <MediaDownload />
      </Box>
    </Box>
  );
}
