const roleMap = {
    RoleTypeEnum_Owner: 5, // 店主
    RoleTypeEnum_Admin: 6, // 超级管理员
    RoleTypeEnum_OP: 7, // 运营人员
    RoleTypeEnum_CSR: 8, // 客服人员
    RoleTypeEnum_GROUPSHOP_OWNER: 15, // 群小店店长
    RoleTypeEnum_CPSER_INVENTMENT: 22, // 分销权限的招商推广计划
    RoleTypeEnum_CPSER_INVITATION: 23, // 分销权限的邀请推广计划
    RoleTypeEnum_CPSER_PARTNERSHIP: 24, // 分销权限的合伙人推广计划
    RoleTypeEnum_CPSER_COMMON: 25, // 分销权限的通用推广计划
    RoleTypeEnum_CPSER_POINT: 26, // 分销权限的定向推广计划
    EXP_SHOP: 100, // 商家号店铺
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