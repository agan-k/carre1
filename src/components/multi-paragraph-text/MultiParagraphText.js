export default function MultiParagraphText({text}) {
  const textFormat = text.split('\n').filter(item => item !== '');
  
  const paragraphs = textFormat.map((item, index) => 
    <p key={index}>{item}</p>);

  return paragraphs;
}
