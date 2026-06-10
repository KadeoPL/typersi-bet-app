import { z } from "zod";
import { registerSchema } from "../schema/user";

export type UserRegisterSchema = z.infer<typeof registerSchema>;

export type User = {
  id: number;
  username: string;
  role: "admin" | "player";
  total_points: number;
  exact_bets: number;
  must_change_password: boolean;
  outcome_accuracy: number;
  score_accuracy: number;
  finished_bets_count: number;
  avatar_url: string;
};

export type UserRoleEditType = {
  id: number;
  username: string;
  role: "admin" | "player";
};
