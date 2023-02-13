export const MultiParagraphText = ({text}) => {
  const textFormat = text.split('\n').filter(item => item !== '');
  const paragraphs = textFormat.map((item, index) => 
    <p key={index}>{item}</p>);
  return paragraphs;
};

export const MultiLineText = ({text}) => {
  const textFormat = text.split('\n').filter(item => item !== '');
  const lines = textFormat.map((item, index) => 
    <ul key={index}>
      <li>{item}</li>
    </ul>
  );
  return lines;
};
