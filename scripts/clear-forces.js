// As in https://github.com/schteppe/cannon.js/issues/215
function clearForces(body){
  // Position
  body.position.setZero();
  body.previousPosition.setZero();
  body.interpolatedPosition.setZero();
  body.initPosition.setZero();

  // orientation
  body.quaternion.set(0,0,0,1);
  body.initQuaternion.set(0,0,0,1);
  body.previousQuaternion.set(0,0,0,1);
  body.interpolatedQuaternion.set(0,0,0,1);

  // Velocity
  body.velocity.setZero();
  body.initVelocity.setZero();
  body.angularVelocity.setZero();
  body.initAngularVelocity.setZero();

  // Force
  body.force.setZero();
  body.torque.setZero();

  // Sleep state reset
  body.sleepState = 0;
  body.timeLastSleepy = 0;
  body._wakeUpAfterNarrowphase = false;
}