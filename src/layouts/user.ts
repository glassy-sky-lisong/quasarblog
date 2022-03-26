export interface UserProp {
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  authorities: { authority: string }[];
  avatar: string;
  birthday: string;
  email: string;
  gender: number;
  id: number;
  password: string;
  role: string;
  roleId: number;
  roleLabel: string;
  sign: number;
  username: string;
}
