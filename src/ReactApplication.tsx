import { useState, useEffect, useCallback, ReactElement } from "react";
import axios from "axios";
import PremierLeague from "./types";
import ReactAppContainer from "./containers/ReactAppContainer";
import TableContainer from "./containers/TableContainer";
import PremierLeagueTable from "./components/PremierLeagueTable";
import Loading from "./components/Loading";

const ReactApplication = (): ReactElement => {
  const [teams, setTeams] = useState<PremierLeague.Teams>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    VITE_API_URL,
    VITE_X_RAPID_API_KEY,
    VITE_X_RAPID_API_HOST,
  }: ImportMetaEnv = import.meta.env;
  const config: Axios.AxiosXHRConfig<PremierLeague.Teams> = {
    url: VITE_API_URL,
    method: "GET",
    headers: {
      "x-rapidapi-key": VITE_X_RAPID_API_KEY,
      "x-rapidapi-host": VITE_X_RAPID_API_HOST,
    },
  };

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.request<PremierLeague.Teams>(config);
      setTeams(data);
    } catch (e: unknown) {
      console.error(e);
    }
  }, []);

  useEffect((): void => {
    setIsLoading(true);
    fetchData().then(() => setIsLoading(false));
  }, []);

  return (
    <ReactAppContainer>
      {isLoading || !teams.length ? (
        <Loading
          attributes={{
            className: "w-full mt-[250px] text-5xl text-center text-primary",
          }}
        />
      ) : (
        <TableContainer>
          <PremierLeagueTable teams={teams} />
        </TableContainer>
      )}
    </ReactAppContainer>
  );
};

export default ReactApplication;
