import { Sequelize } from "sequelize";
import { setupPersonalInfo } from "../models/PersonalInfo";
import { setupUser } from "../models/User";
import { setupAddress } from "../models/Addres";
import { setupAddressExtraInfo } from "../models/AddresExtraInfo";
import { setupGovermentInfo } from "../models/GovermentInfo";
import { setupProfile } from "../models/Profile";
import { setupAcademicInfo } from "../models/AcademicInfo";
import { setupFormalEducation } from "../models/FormalEducationInfo";
import { setupScholarshipInfo } from "../models/ScholarshipInfo";
import { setupBankInfo } from "../models/BankAccountInfo";
import { setupSkills } from "../models/Skills";

export let sequelize = new Sequelize(
  "postgres://postgres:titi2134@localhost:5432/Form"
);

export const startDB = async (url: string): Promise<Sequelize> => {
  //sequelize = new Sequelize(url);
  setupPersonalInfo(sequelize);
  setupUser(sequelize);
  setupAddress(sequelize);
  setupAddressExtraInfo(sequelize);
  setupGovermentInfo(sequelize);
  setupProfile(sequelize);
  setupAcademicInfo(sequelize);
  setupFormalEducation(sequelize);
  setupScholarshipInfo(sequelize);
  setupBankInfo(sequelize);
  setupSkills(sequelize);
  sequelize.authenticate();
  return sequelize;
};
