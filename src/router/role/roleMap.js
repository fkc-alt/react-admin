const roleMap = {
  RoleTypeEnum_Owner: 5, 
  RoleTypeEnum_Admin: 6, 
  RoleTypeEnum_OP: 7, 
  RoleTypeEnum_CSR: 8,
  RoleTypeEnum_GROUPSHOP_OWNER: 15,
  RoleTypeEnum_CPSER_INVENTMENT: 22, 
  RoleTypeEnum_CPSER_INVITATION: 23, 
  RoleTypeEnum_CPSER_PARTNERSHIP: 24,
  RoleTypeEnum_CPSER_COMMON: 25, 
  RoleTypeEnum_CPSER_POINT: 26, 
  EXP_SHOP: 100, 
};

const ROLE_CONST = {
  [roleMap.RoleTypeEnum_Owner]: '店主',
  [roleMap.RoleTypeEnum_Admin]: '超级管理员',
  [roleMap.RoleTypeEnum_OP]: '运营人员',
  [roleMap.RoleTypeEnum_CSR]: '客服人员',
  [roleMap.RoleTypeEnum_GROUPSHOP_OWNER]: '群小店店长',
};

const Owner = roleMap.RoleTypeEnum_Owner;
const Admin = roleMap.RoleTypeEnum_Admin;
const OP = roleMap.RoleTypeEnum_OP;
const CSR = roleMap.RoleTypeEnum_CSR;
const GROUPSHOP_OWNER = roleMap.RoleTypeEnum_GROUPSHOP_OWNER;
const CPSER_INVENTMENT = roleMap.RoleTypeEnum_CPSER_INVENTMENT;
const CPSER_INVITATION = roleMap.RoleTypeEnum_CPSER_INVITATION;
const CPSER_PARTNERSHIP = roleMap.RoleTypeEnum_CPSER_PARTNERSHIP;
const CPSER_COMMON = roleMap.RoleTypeEnum_CPSER_COMMON;
const CPSER_POINT = roleMap.RoleTypeEnum_CPSER_POINT;
const { EXP_SHOP } = roleMap;

export {
  roleMap,
  Owner,
  Admin,
  OP,
  CSR,
  CPSER_INVENTMENT,
  CPSER_INVITATION,
  CPSER_PARTNERSHIP,
  CPSER_COMMON,
  CPSER_POINT,
  GROUPSHOP_OWNER,
  ROLE_CONST,
  EXP_SHOP,
};