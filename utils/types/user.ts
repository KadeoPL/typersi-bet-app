import { z } from "zod";
import { registerSchema } from "../schema/user";

export type UserRegisterSchema = z.infer<typeof registerSchema>;
