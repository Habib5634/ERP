export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/about",
      permanent: true,
    },
  };
}

export default function EggTradingRedirect() {
  return null;
}
