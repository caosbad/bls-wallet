import { QueryClient } from "../../deps/index.ts";

import * as env from "../env.ts";
import AppEvent from "./AppEvent.ts";

export default function createQueryClient(
  emit: (evt: AppEvent) => void,
): QueryClient {
  const client = new QueryClient({
    hostname: env.PG.HOST,
    port: env.PG.PORT,
    user: env.PG.USER,
    password: env.PG.PASSWORD,
    database: env.PG.DB_NAME,
    tls: {
      enforce: false,
    },
  });

  if (env.LOG_QUERIES) {
    const originalQuery = client.query.bind(client);

    client.query = async (sql, params) => {
      emit({
        type: "db-query",
        data: { sql, params: params ?? [] },
      });

      return await originalQuery(sql, params);
    };
  }

  return client;
}