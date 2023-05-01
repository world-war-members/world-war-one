import { apiSlice } from "@/app/api/api";
import { Entity, EndpointOptions } from "@/app/api/apiTypes";
import { setQuestions } from "./questionSlice";
import { QuizModel } from "@/assets/model/quizLevelModel";

export const questionsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<
      Entity<QuizModel>,
      EndpointOptions<Entity<unknown>>
    >({
      query: ({ endpointName }) => ({
        url: endpointName,
        method: "GET",
      }),
      providesTags: ["QUESTIONS"],
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setQuestions(data));
        } catch (err) {
          //   dispatch(messageCreated("Error fetching!"));
        }
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionsApiSlice;
