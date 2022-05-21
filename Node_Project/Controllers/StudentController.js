const Student = require('./../Models/StudentSchema');

exports.getAllStudent = (request, response) => {
  Student.find({}) //.populate({path:"student"})
    .then(data => {
      response.status(200).json(data);
    })
    .catch(error => {
      next(error);
    });
};

exports.getStudent = (request, response) => {
  Student.findOne({ _id: request.params.id }) //.populate({path:"student"})
    .then(data => {
      if (data == null) next(new Error('Student id not Found'));
      response.status(200).json(data);
    })
    .catch(error => {
      next(error);
    });
};

exports.createStudent = (request, response, next) => {
  let object = new Student({
    _id: request.body._id,
    name: request.body.name,
    age: request.body.age,
    department: request.body.department,
  });
  object
    .save()
    .then(data => {
      response.status(201).json({ message: 'added', data });
    })
    .catch(error => next(error));
};

exports.updateStudent = (request, response, next) => {
  Student.findByIdAndUpdate(request.params.id, {
    $set: {
      name: request.body.name,
      department: request.body.department,
      age: request.body.age
    },
  })
    .then(data => {
      if (data == null) throw new Error('Student is not Found!');
      response.status(200).json({ message: 'updated', data });
    })
    .catch(error => next(error));
};

exports.deleteStudent = (request, response, next) => {
  Student.findByIdAndDelete(request.params.id)
    .then(data => {
      if (data == null) throw new Error('Student is not Found!');
      response.status(200).json({ message: 'deleted' });
    })
    .catch(error => next(error));
};
