import { useState, useEffect, useCallback, useMemo } from 'react';

import { useListCarebindersApiV1SavedResourcesCarebindersGet } from '@api-hooks/savedResources/useListCarebindersApiV1SavedResourcesCarebindersGet';

type ResourceType = 'services' | 'articles';

export interface CarePlan {
  id: string;
  label: string;
  services?: string[];
  articles?: string[];
}

export interface CarePlanGroup {
  id: string;
  label: string;
  plans: CarePlan[];
  services?: string[];
  articles?: string[];
}

export const useCareBinderList = (resourceType: ResourceType, resourceId?: string | number) => {
  const { data, isLoading } = useListCarebindersApiV1SavedResourcesCarebindersGet();
  const normalizedResourceId = resourceId === undefined || resourceId === null ? undefined : String(resourceId);

  const carePlanGroups = useMemo(
    () =>
      (data?.data ?? []).map(
        (careBinder) =>
          ({
            id: careBinder.care_recipient.id,
            [resourceType]: careBinder[resourceType] as string[],
            label: `All ${careBinder.care_recipient.first_name ?? 'Mom'}'s Care Plans`,
            plans: careBinder.care_plans.map(
              (carePlan) =>
                ({
                  id: carePlan.id,
                  label: carePlan.name.replace('Care Plan:', ''),
                  [resourceType]: carePlan[resourceType] as string[],
                }) as CarePlan,
            ),
          }) as CarePlanGroup,
      ),
    [data?.data, resourceType],
  );

  const [selectedPlanIds, setSelectedPlanIds] = useState<Set<string>>(new Set());
  const [initialSelectedPlanIds, setInitialSelectedPlanIds] = useState<Set<string>>(new Set());

  const handleParentChange = useCallback(
    (group: CarePlanGroup, isChecked: boolean) => {
      setSelectedPlanIds((prev) => {
        const next = new Set(prev);
        const groupPlanIds = group.plans.map((p) => p.id);

        if (isChecked) {
          groupPlanIds.forEach((id) => next.add(id));
        } else {
          groupPlanIds.forEach((id) => next.delete(id));
        }
        return next;
      });
    },
    [],
  );

  const handleChildChange = useCallback(
    (planId: string, isChecked: boolean) => {
      setSelectedPlanIds((prev) => {
        const next = new Set(prev);
        if (isChecked) {
          next.add(planId);
        } else {
          next.delete(planId);
        }
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    const nextInitialSelectedIds = new Set<string>();

    if (normalizedResourceId) {
      carePlanGroups.forEach((careBinder) => {
        if ((careBinder?.[resourceType] ?? []).includes(normalizedResourceId)) {
          careBinder.plans.forEach((plan) => nextInitialSelectedIds.add(plan.id));
        }

        careBinder.plans.forEach((carePlan) => {
          if ((carePlan?.[resourceType] ?? []).includes(normalizedResourceId)) {
            nextInitialSelectedIds.add(carePlan.id);
          }
        });
      });
    }

    setSelectedPlanIds(nextInitialSelectedIds);
    setInitialSelectedPlanIds(new Set(nextInitialSelectedIds));
  }, [carePlanGroups, resourceType, normalizedResourceId]);

  return { selectedPlanIds, initialSelectedPlanIds, carePlanGroups, isLoading, resourceId: normalizedResourceId, handleParentChange, handleChildChange };
};

export function useCarePlanSelectorAction(
  carePlanGroups: CarePlanGroup[],
  initialSelectedPlanIds: Set<string>,
  resourceType: ResourceType,
  fn: (entity: 'care-binder' | 'care-plan', id: string, action: 'added' | 'removed') => Promise<void>,
  onFinish: () => Promise<void>,
  resourceId?: string,
) {
  return async (selectedPlanIds: Set<string>) => {
    const carePlansId2Remove = initialSelectedPlanIds.difference(selectedPlanIds);
    const carePlansId2Save = selectedPlanIds.difference(initialSelectedPlanIds);
    const isAnyToAction = carePlansId2Remove.size > 0 || carePlansId2Save.size > 0;

    if (!isAnyToAction) {
      return;
    }

    const promises = carePlanGroups.reduce<Promise<unknown>[]>((acc, group) => {
      const groupPlanIds = group.plans.map((p) => p.id);

      const selectedInChildren = groupPlanIds.filter((id) => carePlansId2Save.has(id)).length;
      const isAllSelected = selectedInChildren === group.plans.length;

      const childs = group.plans.reduce<Promise<unknown>[]>((childAcc, plan) => {
        const hasSavedResource = resourceId ? (plan?.[resourceType] ?? []).includes(resourceId) : false;
        const isSelected = selectedPlanIds.has(plan.id);

        if ((carePlansId2Save.has(plan.id) || isSelected) && !hasSavedResource) {
          return [fn('care-plan', plan.id, 'added'), ...childAcc];
        }

        if (carePlansId2Remove.has(plan.id) && hasSavedResource) {
          return [fn('care-plan', plan.id, 'removed'), ...childAcc];
        }

        return childAcc;
      }, []);

      const hasSavedResource = resourceId ? (group?.[resourceType] ?? []).includes(resourceId) : false;

      if (!hasSavedResource && isAllSelected) {
        return [fn('care-binder', group.id, 'added'), ...childs, ...acc];
      }

      if (hasSavedResource && !isAllSelected) {
        return [fn('care-binder', group.id, 'removed'), ...childs, ...acc];
      }

      return [...childs, ...acc];
    }, []);

    await Promise.all(promises);
    await onFinish();
  };
}
