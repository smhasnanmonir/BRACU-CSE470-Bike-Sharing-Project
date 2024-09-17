"use client";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ReuseableFetch = (video_url) => {
  const url = video_url;
  const { data, error, isLoading } = useSWR(url, fetcher);
  return { data, error, isLoading };
};

export default ReuseableFetch;
