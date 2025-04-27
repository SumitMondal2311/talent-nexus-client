enum UserRole {
    Job_Seeker,
    Recruiter,
    Recruiter_Head,
}

export interface UserInfo {
    id: string;
    isAuthByGoogle: boolean;
    fullName: string;
    role: UserRole;
    email: string;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
}
