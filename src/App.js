import { gql, useQuery } from "@apollo/client";

const query = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const [loading, data] = useQuery(query);  
  console.log({loading,data});
  return <h1>App</h1>;
}

export default App;
