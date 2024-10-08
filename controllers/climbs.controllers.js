const {
  selectClimbsBySessionId,
  selectClimbsByUserId,
  postNewClimbModel,
  patchClimbsModel,
  deleteClimbByIdModel,
} = require("../models/climbs.models");

exports.getClimbsBySessionId = (req, res, next) => {
  const { session_id } = req.params;
  return selectClimbsBySessionId(session_id, next)
    .then((climbs) => {
      if(climbs) {
        res.status(200).send({ climbs });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.getClimbsByUserId = (req, res, next) => {
  const { user_id } = req.params;
  return selectClimbsByUserId(user_id, next)
    .then((climbs) => {
      if(climbs) {
        res.status(200).send({ climbs });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.postNewClimbController = (req, res, next) => {
  const { session_id, grade_id, type_id, climb_outcome_id } = req.body;
  return postNewClimbModel(session_id, grade_id, type_id, climb_outcome_id, next)
    .then((newClimb) => {
      if(newClimb) {
        res.status(201).send({ newClimb });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.patchClimbsController = (req, res, next) => {
  const { climb_id } = req.params;
  const updates = req.body;
  return patchClimbsModel(climb_id, updates, next)
    .then((updatedClimb) => {
      if(updatedClimb) {
        res.status(200).send({ updatedClimb });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteClimbByIdController = (req, res, next) => {
  const { climb_id } = req.params;
  return deleteClimbByIdModel(climb_id, next)
    .then((result) => {
      if(result) {
        res.status(204).send();
      }
    })
    .catch((err) => {
      next(err);
    });
};
