const TRAINING_DATA_ADULT = {
  "Pattern Recognition": TRAINING_PR,
  "Numerical Reasoning": TRAINING_NR,
  "Logical Reasoning": TRAINING_LR,
  "Spatial Reasoning": TRAINING_SR,
  "Mathematical Puzzles": TRAINING_MP
};

function getTrainingDataForAge(age) {
  if (age <= 7) return TRAINING_DATA_5_7;
  if (age <= 11) return TRAINING_DATA_8_11;
  if (age <= 15) return TRAINING_DATA_12_15;
  return TRAINING_DATA_ADULT;
}

const TRAINING_PROGRESS_KEY = "iq_training_progress";
const UNLOCK_THRESHOLD = 12;
