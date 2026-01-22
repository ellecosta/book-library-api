export type Role = "admin" | "user";

export interface UserType {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export interface RequestUser {
    role: Role;
}
