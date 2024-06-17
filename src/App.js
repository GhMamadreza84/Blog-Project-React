import { gql, useQuery } from "@apollo/client";
import Header from "./components/layout/Header";
import HomePage from "./components/home/HomePage";
import Layout from "./components/layout";


function App() {

  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}

export default App;
