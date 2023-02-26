import {MultiLineText} from "../../shared";
import albums from "../../assets/content/albums";
export default function Music() {
  return(
    <>
      {albums.map(item => 
        <div key={item.title}>
          <img src={item.img ? item.img : ''} width="100" />
          <MultiLineText text={item.personel} />
          {item.video ? 
            <iframe 
              width="300" 
              height="200" 
              src={item.video} 
              title="YouTube video player"
            /> : null
          }
        </div>
      )}
    </>
  );
};
