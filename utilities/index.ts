import { GenkitError } from "@genkit-ai/core";
import { StatusName } from "@genkit-ai/core/lib/statusTypes";

import { PLUGIN_NAME } from "./../constants";

export const throwError = (status: StatusName, message: string) => {
  throw new GenkitError({
    source: PLUGIN_NAME,
    status,
    message,
  });
};
