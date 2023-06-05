

export enum Gender {
  Male = "male",
  Female = "female",
  Decline = "decline",
  Other = "other",
}

export interface IPersonalInfo {
  id?: number;
  name: string;
  last_name: string;
  second_last_name: string;
  gender?: Gender;
  gender_other?: string;
  date_of_birth: string;
  city_of_birth: string;
  state_of_birth: string;
  country_of_birth: string;
  user_id: number;
}


export interface IAddress{
  id ?: number;
  street: string;
  in_between_street_a : string;
  in_between_street_b : string;
  city:string;
  state:string;
  country:string;
  zip:string;
  proof_of_address:string;
  user_id:number;
}

export interface IAddressExtraInfo{
  id ?: number;
  type_of_residency : string;
  people:string;
  address_id:number;
}

export interface IGovermentInfo{
  id ?: number;
  CURP: string;
  identification_number:string;
  user_id:number;
}

export interface IProfile{
  id ?: number;
  phone:string;
  country_code:string;
  email:string;
  alt_email: string;
  reference:string;
  other_reference:string;
  user_id:number;
}

export interface IAcademicInfo{
  id ?: number;
  software_devel_comments:string;
  degree_level:string;
  informal_education:string;
  other_education:string;
  user_id:number;
}

export interface IFormalEducationInfo{
  id ?: number;
  university_name:string;
  state:string;
  country:string;
  career_name:string;
  classes_completed:boolean;
  proof_classes_completed:string;
  degree_completed:boolean;
  proof_degree_completed:string;
  license_completed:boolean;
  proof_license_completed:string;
  user_id:number;
}

export interface IScholarshipInfo{
  id ?: number;
  level:string;
  kind:string;
  period:number;
  user_id:number;
}


export interface IBankAccountInfo{
  id ?: number;
  acc_number:number;
  clabe:number;
  bank:string;
  user_id:number;
}

export interface ISkills{
  id ?: number;
  preferred_programming_language:string;
  experience:string;
  disability:string;
  user_id:number;
}

export interface IUser{
  id ?: number;
  username:string;
  firstName:string;
  lastName:string;
  email:string;
  phone:string;
  user_id?:number;
}

export interface IApiResponse{
  id ?: number;
  code:number;
  type:string;
  message:string;
  user_id:number;
}