import {StatsLines} from "../Projects/StatsLines";

export type Commit = {
  id: string,
  project_id: string,
  created_at: Date,
  stats?: StatsLines
}
