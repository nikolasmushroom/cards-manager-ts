export interface AuthMeInterface {
    avatar: string;
    id: string;
    email: string;
    isEmailVerified: boolean;
    name: string;
    created: string;
    updated: string;
}
export interface EditProfileArgs {
    avatar: string;
    name: string;
}
export interface MeResponse {
    avatar: string;
    id: string;
    email: string;
    isEmailVerified: boolean;
    name: string;
    created: string;
    updated: string;
}
export interface CreateNewAccount {
    password: string;
    email: string;
}
export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}
export interface RecoveryPasswordArgs {
    email: string;
    html?: string;
    subject?: string;
}
export interface ResetPasswordArgs {
    password: string;
    token: string;
}
