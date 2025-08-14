import instance from "./axios";

export function getPlaceholder(data) {
  return instance({
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "get",
    data,
  });
}
