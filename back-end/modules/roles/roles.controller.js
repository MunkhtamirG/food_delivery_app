const rolesServices = require("./roles.services");

const createRole = async (req, res) => {
  try {
    const role = await rolesServices.createRole(req);
    res.json({
      data: role,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteRole = async (req, res) => {
  try {
    const role = await rolesServices.deleteRole(req);
    res.json({
      success: true,
      data: role,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const updateRole = async (req, res) => {
  const role = await rolesServices.updateRole(req);
  res.json({
    data: role,
  });
};

const getAllRoles = async (req, res) => {
  const roles = await rolesServices.getAllRoles(req);
  res.json({
    data: roles,
  });
};

const getRoleById = async (req, res) => {
  try {
    const role = await rolesServices.getRoleById(req);
    res.json({
      success: true,
      data: role,
    });
  } catch (err) {
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = {
  createRole,
  deleteRole,
  updateRole,
  getAllRoles,
  getRoleById,
};
