export type Role = "admin" | "user";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}