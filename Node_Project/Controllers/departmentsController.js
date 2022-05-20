const { validationResult } = require('express-validator');
const { param } = require('../Routers/DepartmentRouter');
const Department = require('./../Models/DepartmentSchema');

exports.getAlldepartments = (request, response) => {
  Department.find({})
    .then(data => {
      response.status(200).json(data);
    })
    .catch(error => {
      next(error);
    });
};
exports.getDepartment = (request, response, next) => {
  Department.findOne({ _id: request.params.id })
    .then(data => {
      if (data == null) next(new Error('Department is not found' + _id));
      response.status(200).json(data);
    })
    .catch(error => {
      next(error + 'z' + ':' + request.params.id);
    });
};
exports.createDepartment = (request, response, next) => {
  let errors = validationResult(request);
  if (!errors.isEmpty()) {
    let error = new Error();
    error.status = 422;
    error.message = errors
      .array()
      .reduce((current, object) => current + object.msg + ' ', '');
    throw error;
  }
  let object = new Department({
    _id: request.body._id,
    name: request.body.name,
    location: request.body.location,
  });
  object
    .save()
    .then(data => {
      // response.status(201).json({message:"added",data})
      response.status(201).json(data);
    })
    .catch(error => next(error));
};

exports.updateDepartment = (request, response, next) => {
  Department.findByIdAndUpdate(request.params.id, {
    $set: {
      name: request.body.name,
      location: request.body.location,
    },
  })
    .then(data => {
      if (data == null) throw new Error('Department Is not Found!');
      // response.status(200).json({message:"updated",data})
      response.status(200).json(data);
    })
    .catch(error => next(error));
};

exports.deleteDepartment = async (request, response, next) => {
  try {
    let data = await Department.findByIdAndDelete(request.params.id);
    if (data == null) throw new Error('Department Is not Found!');
    response.status(200).json({ message: 'deleted' });
  } catch (error) {
    next(error);
  }
};
