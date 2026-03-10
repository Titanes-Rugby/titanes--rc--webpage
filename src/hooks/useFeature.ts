import { Features, type FeatureName } from '@configs/features';

export const useFeature = (name: FeatureName): boolean => {
  return Features.isEnabled(name);
};
