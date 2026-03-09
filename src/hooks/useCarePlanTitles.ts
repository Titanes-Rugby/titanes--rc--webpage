import { useParams } from 'react-router-dom';
import { useQueryClient, useQuery } from '@tanstack/react-query';

import { type RouteContext } from '@/routers/utils';

import { useGetServiceApiV1ServicesServiceIdGet } from '@api-hooks/services/useGetServiceApiV1ServicesServiceIdGet';
import { useGetArticleApiV1ArticlesArticleIdGet } from '@api/hooks/articles/useGetArticleApiV1ArticlesArticleIdGet';

import { carePlanTemplateLoader } from '@/features/care-plan/loaders/carePlanTemplate';

import { useTitleFromHandler } from './useTitleFromHandler';

const fetchCarePlan = async (queryClient: any, carePlanId?: string, preview?: string) => {
  if (!carePlanId) return null;

  const params = { carePlanId, preview };
  // Create a mock request with current URL so the loader can extract wizard data
  const request = { url: window.location.href };
  const response = await carePlanTemplateLoader({ params, request } as any, { queryClient } as RouteContext);
  const carePlanInfo: any = response?.data || response;

  return { title: carePlanInfo?.name ?? carePlanInfo?.title, description: carePlanInfo?.subtitle };
};

export const useCarePlanTitles = () => {
  const queryClient = useQueryClient();
  const { carePlanId, serviceId, articleId, preview } = useParams<{ carePlanId: string; serviceId: string; articleId: string; preview: string }>();
  const { data: serviceInfo } = useGetServiceApiV1ServicesServiceIdGet(serviceId!, { query: { enabled: !!serviceId } });
  const { data: articleInfo } = useGetArticleApiV1ArticlesArticleIdGet(articleId!, { query: { enabled: !!articleId } });
  const { title, description } = useTitleFromHandler();

  const { data: carePlanInfo } = useQuery({
    queryKey: ['carePlan', carePlanId, preview],
    queryFn: () => fetchCarePlan(queryClient, carePlanId, preview),
    enabled: !!carePlanId,
    staleTime: 1000 * 60 * 5,
  });

  // Article in global context (no care plan) - show article title with conditions
  if (articleInfo && !carePlanId) {
    const conditionsText = articleInfo?.conditions?.map((c: any) => c.name).join(' | ') || null;
    return { title: articleInfo?.title, description: conditionsText };
  }

  // Care plan context (with or without article) - always show care plan name
  // Article title will be shown in ArticlePage component below the tabs
  if (carePlanInfo) {
    return carePlanInfo;
  }

  // Service pages
  if (serviceInfo) {
    return { title: serviceInfo?.organization_name, description: null };
  }

  return { title, description };
};
