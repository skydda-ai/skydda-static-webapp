import { api } from '@/services/api';

export const alertsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createLead: builder.mutation({
      query: (body) => ({
        url: `auth/api/v1/onboard/lead`,
        method: 'POST',
        body
      })
    })
  }),
  overrideExisting: false
});

export const { useCreateLeadMutation } = alertsApi;
