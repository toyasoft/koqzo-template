import { NextPage } from "next";
import Layout from "src/components/templates/Layout";
import { initEnvironment } from "src/lib/relay";
import { fetchQuery } from "react-relay";
// import IndexPage_indexQuery from "src/queries/IndexPage";
import Main from "src/components/templates/Main";
import HtmlHead from "src/components/templates/HtmlHead";
import { useRouter } from "next/router";
import Loading from "src/components/templates/Loading";

const IndexPage: NextPage = (props) => {
  const router = useRouter();
  return (
    <Layout>
      <HtmlHead
        title="モノノベ"
        description=""
        url="https://www.mononobe.com"
      />
      <Main>
        {router.isFallback ? (
          <Loading />
        ) : (
          <>

          </>
        )}
      </Main>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const environment = initEnvironment({});
//   let queryProps = null;
//   try {
//     queryProps = await fetchQuery(environment, IndexPage_indexQuery, {
//       skip: 0,
//       newsCount: 4,
//       newsOrder: "created_at_DESC",
//       newsFilter: {
//         contentNameEquals: "news",
//       },
//       productCount: 3,
//       productOrder: "position_DESC",
//       productFilter: {
//         contentNameEquals: "product",
//       },
//       featureCount: 3,
//       featureOrder: "position_ASC",
//       featureFilter: {
//         contentNameEquals: "feature",
//       },
//       teamCount: 20,
//       teamOrder: "position_ASC",
//       teamFilter: {
//         contentNameEquals: "team",
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }

//   if (!queryProps) {
//     return {
//       notFound: true,
//     };
//   }

//   const initialRecords = environment.getStore().getSource().toJSON();
//   return {
//     props: {
//       ...JSON.parse(JSON.stringify(queryProps)),
//       initialRecords,
//     },
//     revalidate: 5,
//   };
// }

export default IndexPage;
