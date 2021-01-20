import { Filter } from 'modules/filters/interface';
import { adaptActivities, adaptActivity, adaptActivityFilter } from './adapter';
import { fetchActivities, fetchActivity } from './api';
import { Activity, ActivityChoices } from './interface';

export const getActivities = async (): Promise<ActivityChoices> => {
  const rawActivities = await fetchActivities({ language: 'fr' });
  return adaptActivities(rawActivities.results);
};

export const getActivityFilter = async (): Promise<Filter> => {
  const rawActivities = await fetchActivities({ language: 'fr' });
  return adaptActivityFilter(rawActivities.results);
};

export const getActivity = async (id: number): Promise<Activity> => {
  const rawActivity = await fetchActivity({ language: 'fr' }, id);
  return adaptActivity(rawActivity);
};
