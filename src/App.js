import { gql, useQuery } from "@apollo/client";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";

const QUERY = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const {loading, data} = useQuery(QUERY);
  console.log(data);
  return (
    <>
    <Header />
    <HomePage />    
    </>
  );
}

export default App;
