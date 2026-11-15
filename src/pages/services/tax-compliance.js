export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/financial-services",
      permanent: true,
    },
  };
}

export default function TaxComplianceRedirect() {
  return null;
}
