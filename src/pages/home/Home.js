import {useOutletContext} from "react-router-dom";
import {statementFrench, statementEnglish} from "~src/assets/content/statement";

export default function Home() {
  const [language] = useOutletContext();
  const statement = language === 'french' ?
    statementFrench : statementEnglish;
  return(
    <>
      <h1>Dominique Carre home</h1>
      <p>{statement}</p>
    </>
  );
};
